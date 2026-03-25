import React, { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "../store/slices/userInfoSlice";


interface UserProfileProps {
  onNavigate: (section: string) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onNavigate }) => {
  const user = useSelector((state: any) => state.userInfo);
 // console.log("UserProfile组件获取的用户数据：", user);
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // TODO: add logout logic if needed
  // useEffect(() => {
  //   if (user) {
  //     getUserStats(user.uid).then((stats) => {
  //       if (stats) setWordsRecited(stats.wordsRecited);
  //     }).catch(() => {});
  //   }
  // }, [user]);

  if (!user.isLoggedIn) {
    return (
      <div className="user-profile-badge">
        <button className="sign-in-btn" onClick={() => onNavigate("auth")}>
          登录/注册
        </button>
      </div>
    );
  }

  const initials = user.username
    ? user.username.charAt(0).toUpperCase()
    : "null";

  // 处理点击和悬浮事件
  const handleLogout = () => {
    dispatch(resetUser());
    setDropdownOpen(false);
  };

  const handleInfo = () => {
    // 可根据需要跳转或弹窗
    setDropdownOpen(false);
    onNavigate("profile");
  };

  return (
    <div className="user-profile-badge" style={{ position: "relative" }}>
      <div
        className="user-avatar"
        style={{ cursor: "pointer" }}
        onClick={() => setDropdownOpen((v) => !v)}
      >
        {initials}
        {dropdownOpen && (
          <div
            className="user-dropdown"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              //light blue background
              backgroundColor: "#f0f8ff",
              border: "1px solid #ddd",
              borderRadius: 4,
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              zIndex: 10,
              minWidth: 80,
            }}
          >
            <div
              /*               style={{ padding: '8px 16px', cursor: 'pointer' }} */
              onClick={() => {
                handleInfo();
                setDropdownOpen(false);
              }}
            >
              信息
            </div>
            <div
              style={{ padding: "8px 16px", cursor: "pointer", color: "red" }}
              onClick={() => {
                handleLogout();
                setDropdownOpen(false);
              }}
            >
              退出
            </div>
          </div>
        )}
      </div>
      <span className="user-display-name">
        {user.username || user.email || "用户"}
      </span>
    </div>
  );
};

export default UserProfile;
