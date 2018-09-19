import React from "react";
import { TodoDetail } from "../../Containers";

const TodoDetailView = props => {
  const id = props.match.params.id;

  return (
    <div>
      <TodoDetail todoId={id} />
    </div>
  );
};

export default TodoDetailView;
