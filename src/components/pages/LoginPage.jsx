import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../../App.css';

export default function SignInPage() {
  const navigate = useNavigate();

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 리로드 방지
    // 여기에서 인증 로직을 추가할 수 있습니다.
    navigate('/home'); // 홈 페이지로 네비게이션
  };

  return (
    <div className="text-center m-5-auto">
      <h2>Sign in to us</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Username or email address</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>Password</label>
          <Link to="/forget-password">
            <label className="right-label">Forget password?</label>
          </Link>
          <br />
          <input type="password" name="password" required />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Login
          </button>
        </p>
      </form>
      <footer>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
