import React, { useState } from "react";
import UserList from "./components/user/UserList.component";
import Adduser from "./components/user/user-component";
function App() {
  const [userList, setuserList] = useState([]);

  const addUserHeandler = ({ name, age }) => {
    setuserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: name, age: age, id: Math.random().toString() },
      ];
    });
  };
  console.log(userList);

  return (
    <div>
      <Adduser onAddUser={addUserHeandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
