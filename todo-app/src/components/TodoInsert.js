import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';
 
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
 
  const onChange = useCallback(e => {
    setValue(e.target.value); //event에서 target의 value를 받아서 input이 변경될 때마다 value를 새로 설정
  }, []);
 
  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue(''); // value 값 초기화
 
      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, value],
  );
 
const TodoInsertStyle = styled.div`

    display: flex;
    background: #495057;
    input {
      // 기본 스타일 초기화
      background: none;
      outline: none;
      border: none;
      padding: 0.5rem;
      font-size: 1.125rem;
      line-height: 1.5;
      color: white;
      &::placeholder {
        color: #dee2e6;
      }
      // 버튼을 제외한 영역을 모두 차지하기
      flex: 1;
    }
    button {
      // 기본 스타일 초기화
      background: none;
      outline: none;
      border: none;
      background: #868e96;
      color: white;
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: 0.1s background ease-in;
      &:hover {
        background: #adb5bd;
      }
    }
  `;


  return (
    <TodoInsertStyle>
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
    </TodoInsertStyle>
  );
};
 
export default TodoInsert;
