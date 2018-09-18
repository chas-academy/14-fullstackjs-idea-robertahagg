import React from "react";
import { UserDetail } from "../../Containers";

const UserDetailView = props => {
  const id = props.match.params.id;

  return (
    <div>
      <UserDetail userId={id} />
    </div>
  );
};

export default UserDetailView;
