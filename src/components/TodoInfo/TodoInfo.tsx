import React from 'react';
import { UserInfo } from '../UserInfo';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

interface Props {
  todo: Todo;
  user?: User;
}

export const TodoInfo: React.FC<Props> = ({ todo, user }) => {
  return (
    <article
      data-id={todo.id}
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo_title">{todo.title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
