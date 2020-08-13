import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

/**
 * 에러를 보여 줍니다.
 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

/**
 * 회원가입 또는 로그인 폼을 보여 줍니다.
 */

const textMap = {
    login: '로그인',
    register: '회원가입',
  };
  
  const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
    const text = textMap[type];
    return (
      <AuthFormBlock>
        <h3>{text}</h3>
        <form onSubmit={onSubmit}>
          <StyledInput
            autoComplete="username"
            name="username"
            placeholder="아이디"
            onChange={onChange}
            value={form.username}
          />
          <StyledInput
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={form.password}
          />
          {type === 'register' && (
            <StyledInput
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
            />
        )}
         {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};
  export default AuthForm;
  