import React, { useReducer, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import produce from 'immer';
 
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}
 
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 새로 추가
      // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false } }
      // return todos.concat(action.todo);
      return produce(todos, draft => {
        draft.push(action.todo);
      }
      );


    
    case 'REMOVE': // 제거
      // { type: 'REMOVE', id: 1 }
      // return todos.filter(todo => todo.id !== action.id);
      return produce(todos, draft => {
        const index = draft.findIndex(todo => todo.id === action.id);
        draft.splice(index, 1);
      }  
      );

     
    case 'TOGGLE': // 토글
      // { type: 'REMOVE', id: 1 }
      // return todos.map(todo =>
      //   todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      // );
      return produce(todos, draft => {
        const user = draft.findIndex(todo => todo.id === action.id);
        draft[user].checked = !draft[user].checked;
      }  
      );


        // setTodos(
        //         todos.map(todo =>
        //           todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        //         ),

        //setTodos(produce(todo, draft.map =>{draft.checked}));

    default:
      return todos;
  }
} 

const App = () => {   //useReducer: useState의 대체함수
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);    //useReducer를 사용할 때는 원래 두 번째 파라미터에 초기 상태를 넣어 주어야 함. 
  //지금은 그 대신 두 번째 파라미터에 undefined를 넣고, 세 번째 파라미터에 초기 상태를 만들어 주는 함수인 createBulkTodos를 넣어 줌. 이렇게 하면 컴포넌트가 맨 처음 렌더링될 때만 createBulkTodos 함수가 호출
 
  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);
 
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1; // nextId 1씩 더하기
  }, []);
 
  const onRemove = useCallback(id => {
    dispatch({ type: 'REMOVE', id });
  }, []);
 
  const onToggle = useCallback(id => {
    dispatch({ type: 'TOGGLE', id });
  }, []);
 
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};
 
export default App;

// import React, { useState, useRef, useCallback } from 'react';
// import TodoTemplate from './components/TodoTemplate';
// import TodoInsert from './components/TodoInsert';
// import TodoList from './components/TodoList';
//import produce from 'immer';

// function createBulkTodos() {
//   const array = [];
//   for (let i = 1; i <= 2500; i++) {
//     array.push({
//       id: i,
//       text: `할 일 ${i}`,
//       checked: false,
//     });
//   }
//   return array;
// }

// const App = () => {
//   const [todos, setTodos] = useState(createBulkTodos) [ //todos: 할 일 목록, setTodos: 할 일 목록을 조작하는 함수/ useState: 함수
//     {
//       id:1,
//       text: '리액트의 기초 알아보기',
//       checked: true,
//     },
//     {
//       id: 2,
//       text: '컴포넌트 스타일링 해보기',
//       checked: true,
//     },
//     {
//       id: 3,
//       text: '일정 관리 앱 만들어 보기',
//       checked: false,
//     },
//   ];
  
//   // 고윳값으로 사용될 id
//   // ref를 사용하여 변수 담기
//   // const nextId = useRef(4); //계속 증가해야해서_dom 접근
//   const nextId = useRef(2501);
 
//   const onInsert = useCallback(
//     text => {
//       const todo = {
//         id: nextId.current,
//         text,
//         checked: false,
//       };
      
//       setTodos(todos.concat(todo)); 
//       nextId.current += 1; // nextId 1씩 더하기
//     },
//     [todos],
//   );

//   // App 컴포넌트에 id를 파라미터로 받아 와서 같은 id를 가진 항목을 todos 배열에서 지우는 함수
//   const onRemove = useCallback(      
//     id => {
//       setTodos(todos.filter(todo => todo.id !== id));
//     },
//     [todos],
//   );  

//   const onToggle = useCallback(
//     id => {

//       setTodos(
//         todos.map(todo =>
//           todo.id === id ? { ...todo, checked: !todo.checked } : todo,
//         ),

        
        // setTodos(produce(draft.map =>{draft.checked}));

//       );
//     },
//     [todos],
//   );
 
//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert} />
//       <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
//     </TodoTemplate>
//   );
// };
 
// export default App;
