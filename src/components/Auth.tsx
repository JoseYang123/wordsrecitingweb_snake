import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { registerWithEmail, loginWithEmail } from "../services/authService";
import { useDispatch } from "react-redux";
import { login as loginRedux } from "../userSlice";

const Auth: React.FC<{ onClose?: () => void }> = ({ onClose: _onClose }) => {

  const auth = useAuth(); // keep hook usage intact
  void auth;
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState<"login" | "register" | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [server, setServer] = useState("");
  const [telephoneNum, setTelephoneNum] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [verifyCodeInput, setVerifyCodeInput] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [verifyCodeSent, setVerifyCodeSent] = useState(false);
  const [verifyCodeTimer, setVerifyCodeTimer] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSocialLogin = (_platform: string) => {
    alert("即将开放，敬请期待！");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {

      const result = await loginWithEmail(email, password);
      console.log("登录成功，用户信息：in Auith.tsx", result);

      // 假设用户名和服务器可以通过 email 和 server 变量获得
      dispatch(
        loginRedux({
          username: email.split("@")[0],
          email,
          server,
        })
      );
      setShowModal(null);
      setEmail("");
      setPassword("");
      if (_onClose) _onClose();
    } catch (err: any) {
      setError(err.message || "登录失败");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (!displayName) {
      setError("请输入用户名");
      setLoading(false);
      return;
    }
    if (!server) {
      setError("请输入服务器");
      setLoading(false);
      return;
    }
    // 手机号和验证码可选，允许为空
    try {
      await registerWithEmail(
        email,
        password,
        confirmPassword || undefined,
        displayName,
        server,
        telephoneNum || undefined,
        inviteCode || undefined,
      );
      setShowModal(null);
      setEmail("");
      setPassword("");
      setDisplayName("");
      setServer("");
      setTelephoneNum("");
      setInviteCode("");
      if (_onClose) _onClose();
    } catch (err: any) {
      setError(err.message || "注册失败");
    } finally {
      setLoading(false);
    }
  };

  // 发送验证码
  const handleSendVerifyCode = async () => {
    if (!telephoneNum) {
      setError("请输入手机号");
      return;
    }
    setError("");
    setVerifyCodeSent(false);
    setLoading(true);
    try {
      // 假设有后端接口 /send-sms-code
      const envUrl =
        import.meta.env.VITE_API_URL ||
        "http://Enjoywords-env.eba-hwqp5zra.ap-southeast-1.elasticbeanstalk.com";
      const res = await fetch(`${envUrl}/send-sms-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ telephoneNum }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "验证码发送失败");
      setVerifyCodeSent(true);
      setVerifyCodeTimer(60);
      // 倒计时
      const timer = setInterval(() => {
        setVerifyCodeTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (err: any) {
      setError(err.message || "验证码发送失败");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        className="auth-container"
        style={showModal ? { filter: "blur(2px)", pointerEvents: "none" } : {}}
      >
        <div className="auth-card">
          {/*  <h2>登录 / 注册</h2> */}
          <div className="social-login-buttons">
            <button
              className="social-login-btn wechat-btn"
              onClick={() => handleSocialLogin("wechat")}
            >
              {" "}
              <span className="social-icon">💬</span> 微信登录{" "}
            </button>
            {/* <button
              className="social-login-btn qq-btn"
              onClick={() => handleSocialLogin("qq")}
            >
              {" "}
              <span className="social-icon">🐧</span> 账号登录{" "}
            </button> */}
            <button
              className="social-login-btn alipay-btn"
              onClick={() => setShowModal("login")}
            >
              <span className="social-icon"></span> 登录
            </button>
            <button
              className="social-login-btn alipay-btn"
              onClick={() => setShowModal("register")}
            >
              {" "}
              <span className="social-icon"></span> 注册{" "}
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="auth-modal-backdrop"
          style={{
            position: "fixed",
            zIndex: 1000,
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="auth-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              padding: 32,
              minWidth: 340,
              maxWidth: "90vw",
              position: "relative",
              animation: "fadeIn .2s",
              filter: "none",
              pointerEvents: "auto",
            }}
          >
            <button
              onClick={() => setShowModal(null)}
              style={{
                position: "absolute",
                right: 16,
                top: 16,
                background: "none",
                border: "none",
                fontSize: 22,
                cursor: "pointer",
                color: "#888",
              }}
              aria-label="关闭"
            >
              ×
            </button>
            <h3 style={{ textAlign: "center", marginBottom: 24 }}>
              {showModal === "login" ? "邮箱登录" : "邮箱注册"}
            </h3>
            {showModal === "register" ? (
              <form onSubmit={handleRegister}>
                <input
                  type="text"
                  placeholder="用户名"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  autoFocus
                  required
                  style={{
                    marginBottom: 12,
                    width: "100%",
                    padding: 8,
                    borderRadius: 6,
                    border: "1px solid #ddd",
                  }}
                />
                <select
                  value={server}
                  onChange={(e) => setServer(e.target.value)}
                  required
                  style={{
                    marginBottom: 12,
                    width: "100%",
                    padding: 8,
                    borderRadius: 6,
                    border: "1px solid #ddd",
                  }}
                >
                  <option value="" disabled>请选择服务器</option>
                  <option value="Earth">Earth</option>
                  <option value="Moon">Moon</option>
                </select>
                <input
                  type="tel"
                  placeholder="手机号（可选）"
                  value={telephoneNum}
                  onChange={(e) => setTelephoneNum(e.target.value)}
                  style={{
                    marginBottom: 12,
                    width: "100%",
                    padding: 8,
                    borderRadius: 6,
                    border: "1px solid #ddd",
                  }}
                />
                <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                  <input
                    type="text"
                    placeholder="邀请码"
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value)}
                    style={{
                      flex: 1,
                      padding: 8,
                      borderRadius: 6,
                      border: "1px solid #ddd",
                    }}
                  />
                
                </div>
                <input
                  type="email"
                  placeholder="邮箱"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    marginBottom: 12,
                    width: "100%",
                    padding: 8,
                    borderRadius: 6,
                    border: "1px solid #ddd",
                  }}
                />
                <input
                  type="password"
                  placeholder="密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    marginBottom: 12,
                    width: "100%",
                    padding: 8,
                    borderRadius: 6,
                    border: "1px solid #ddd",
                  }}
                />
                <input
                  type="password"
                  placeholder="确认密码"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  style={{
                    marginBottom: 12,
                    width: "100%",
                    padding: 8,
                    borderRadius: 6,
                    border: "1px solid #ddd",
                  }}
                />
                {error && (
                  <div
                    style={{
                      color: "red",
                      marginBottom: 12,
                      textAlign: "center",
                    }}
                  >
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: 10,
                    borderRadius: 6,
                    background: "#4f8cff",
                    color: "#fff",
                    fontWeight: 600,
                    border: "none",
                    fontSize: 16,
                    cursor: "pointer",
                    marginBottom: 8,
                  }}
                >
                  {loading ? "提交中..." : "注册"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="账号/邮箱"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                  required
                  style={{
                    marginBottom: 12,
                    width: "100%",
                    padding: 8,
                    borderRadius: 6,
                    border: "1px solid #ddd",
                  }}
                />
               {/*  <select
                  value={server}
                  onChange={(e) => setServer(e.target.value)}
                  required
                  style={{
                    marginBottom: 12,
                    width: "100%",
                    padding: 8,
                    borderRadius: 6,
                    border: "1px solid #ddd",
                  }}
                >
                  <option value="" disabled>请选择服务器</option>
                  <option value="Earth">Earth</option>
                  <option value="Moon">Moon</option>
                </select> */}
                <input
                  type="password"
                  placeholder="密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    marginBottom: 12,
                    width: "100%",
                    padding: 8,
                    borderRadius: 6,
                    border: "1px solid #ddd",
                  }}
                />
                {error && (
                  <div
                    style={{
                      color: "red",
                      marginBottom: 12,
                      textAlign: "center",
                    }}
                  >
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: 10,
                    borderRadius: 6,
                    background: "#4f8cff",
                    color: "#fff",
                    fontWeight: 600,
                    border: "none",
                    fontSize: 16,
                    cursor: "pointer",
                    marginBottom: 8,
                  }}
                >
                  {loading ? "提交中..." : "登录"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
