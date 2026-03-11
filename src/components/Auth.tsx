import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Auth: React.FC<{ onClose?: () => void }> = ({ onClose: _onClose }) => {
  const auth = useAuth(); // keep hook usage intact
  void auth;

  const handleSocialLogin = (_platform: string) => {
    alert('即将开放，敬请期待！');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-icon">👋</div>
        <h2>登录 / 注册</h2>
        <div className="social-login-buttons">
          <button
            className="social-login-btn wechat-btn"
            onClick={() => handleSocialLogin('wechat')}
          >
            <span className="social-icon">💬</span>
            微信登录
          </button>
          <button
            className="social-login-btn qq-btn"
            onClick={() => handleSocialLogin('qq')}
          >
            <span className="social-icon">🐧</span>
            QQ登录
          </button>
          <button
            className="social-login-btn alipay-btn"
            onClick={() => handleSocialLogin('alipay')}
          >
            <span className="social-icon">💰</span>
            支付宝登录
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
