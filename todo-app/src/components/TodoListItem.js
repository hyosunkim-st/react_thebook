import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,  
} from 'react-icons/md';
import cn from 'classnames';
import styled from 'styled-components';
 
const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
    const { id, text, checked } = todo;


  const TodoListItemVirtualized = styled.div`   
   
      & + & {
        border-top: 1px solid #dee2e6;
      }
      &:nth-child(even) {
        background: #f8f9fa;
      }
    `;


  const TodoListItemStyle = styled.div` 
      padding: 1rem;
      display: flex;
      align-items: center; // 세로 중앙 정렬
      &:nth-child(even) {
        background: #f8f9fa;
      }

      .checkbox {
        cursor: pointer;
        flex: 1; // 차지할 수 있는 영역 모두 차지
        display: flex;
        align-items: center; // 세로 중앙 정렬
        svg {
          // 아이콘
          font-size: 1.5rem;
        }
        .text {
          margin-left: 0.5rem;
          flex: 1; // 차지할 수 있는 영역 모두 차지
        }
        // 체크되었을 때 보여 줄 스타일
        &.checked {
          svg {
            color: #22b8cf;
          }
          .text {
            color: #adb5bd;
            text-decoration: line-through;
          }
        }
      }
      `;
  const removeStyle = styled.div` 
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: #ff6b6b;
        cursor: pointer;
        &:hover {
          color: #ff8787;
        }
     
      // 엘리먼트 사이사이에 테두리를 넣어 줌
      & + & {
        border-top: 1px solid #dee2e6;
      }
    `;
    
    return (
      <TodoListItemVirtualized>
      <TodoListItemStyle>
      <removeStyle>
      <div className="TodoListItem-virtualized" style={style}>
        <div className="TodoListItem">
          <div
            className={cn('checkbox', { checked })}
            onClick={() => onToggle(id)}
          >
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
          </div>
          <div className="remove" onClick={() => onRemove(id)}>
            <MdRemoveCircleOutline />
          </div>
        </div>
      </div>
      </removeStyle>
      </TodoListItemStyle>
      </TodoListItemVirtualized>
    );
  };

  export default React.memo(     //컴포넌트의 props가 바뀌지 않았다면 리렌더링을 방지해서 성능 최적화_todo, onRemove, onToggle이 바뀌지 않으면 리렌더링을 하지 않는다. 
    TodoListItem,
    (prevProps, nextProps) => prevProps.todo === nextProps.todo,
  );