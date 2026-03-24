import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  User,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { auth, googleProvider, db } from "./firebase";

const createUserDoc = async (user: User, displayName?: string) => {
  const userRef = doc(db, "users", user.uid);
  const snapshot = await getDoc(userRef);
  if (!snapshot.exists()) {
    await setDoc(userRef, {
      displayName: displayName || user.displayName || "Anonymous",
      email: user.email || "",
      wordsRecited: 0,
      createdAt: serverTimestamp(),
      lastActive: serverTimestamp(),
    });
  } else {
    await setDoc(userRef, { lastActive: serverTimestamp() }, { merge: true });
  }
};

import axios from "axios";
/**
 * 注册新用户，包含前端校验和后端 API 调用
 * @param email 邮箱
 * @param password 密码
 * @param displayName 用户名
 * @param server 服务器（可选）
 * @param telephoneNum 电话（可选）
 * @param confirmEmail 确认邮箱（可选，前端传入）
 * @param confirmPassword 确认密码（可选，前端传入）
 * @returns 注册成功的用户对象
 * @throws Error 校验或注册失败时抛出
 */
export const registerWithEmail = async (
  email: string,
  password: string,
  confirmPassword: string | undefined,
  displayName: string,
  server?: string,
  telephoneNum?: string,
  inviteCode?: string,
) => {
  // 前端校验
  console.log("what we got from frontend:", {
    email,
    password, // 不打印密码
    confirmPassword: confirmPassword, // 不打印确认密码
    displayName,
    server,
    telephoneNum,
    inviteCode,
  });
  if (
    !displayName ||
    !email ||
    !password ||
    !confirmPassword ||
    !server ||
    !telephoneNum ||
    !inviteCode
  ) {
    throw new Error("所有字段均为必填");
  }
  if (displayName.length > 12) {
    throw new Error("用户名不能超过12个字符");
  }

  if (confirmPassword !== undefined && password !== confirmPassword) {
    throw new Error("两次输入的密码不一致");
  }

  console.log("前端校验通过，开始调用后端注册接口");

  // 先调用后端注册接口
  const envUrl =
    import.meta.env.VITE_API_URL ||
    "https://Enjoywords-env.eba-hwqp5zra.ap-southeast-1.elasticbeanstalk.com";
  const registerUrl = `${envUrl}/register`;
  try {
    const response = await axios.post(registerUrl, {
      userName: displayName,
      email: email,
      password: password,
      server: server,
      /*  telephoneNum,
      verifyCode, */
    });
    console.log("后端注册接口调用成功，响应数据：", response.data);
    // 你可以根据 response.data 做进一步处理
    // 注册成功后再用 firebase 创建账号
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName });
    await createUserDoc(result.user, displayName);
    return result.user;
  } catch (error: any) {
    // axios 错误处理
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "注册失败");
    }
    throw new Error(error.message || "注册失败");
  }
};

export const loginWithEmail = async (email: string, password: string) => {
  //check if there is @in email if there is , this is email login, otherwise it is account login
  //username login
  //if it is account loigin we directly use the account login api
//backend will handle if it is email or account login;
  const envUrl =
    import.meta.env.VITE_API_URL ||
    "http://Enjoywords-env.eba-hwqp5zra.ap-southeast-1.elasticbeanstalk.com";
  const loginUrl = `${envUrl}/login`;
  try {
    const response = await axios.post(loginUrl, {
      account: email,
      password: password,
    });
    console.log("后端登录接口调用成功，响应数据：", response.data);

  const convertLevel = parseFloat(response.data.user.level);
      const convertCoins = parseInt(response.data.user.coins);
      const convertSeason = parseInt(response.data.user.season);
          const userdata = {
        account: response.data.user.account,
        password: response.data.user.password,
        portpath: response.data.user.portpath,
        username: response.data.user.username,
        job: response.data.user.job,

        //level from data base is decimal(20,3)
        level: convertLevel, //this can only be used for login now;
        server: response.data.user.server,
        coins: convertCoins,
        season: convertSeason,
      };


    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "登录失败");
    }
    throw new Error(error.message || "登录失败");
  }
  // 你可以根据 response.data 做进一步处理

  // const result = await signInWithEmailAndPassword(auth, email, password);
  //await createUserDoc(result.user);

  //   console.log("Firebase 登录成功，用户信息：", result.user);
  //  console.log("Firebase 登录成功，用户信息：", );
};

export const loginWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  await createUserDoc(result.user);
  return result.user;
};

export const logout = async () => {
  await signOut(auth);
};

export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
