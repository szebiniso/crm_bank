import React, {useEffect} from "react";
import UserCard from "./UserCard";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../api/UsersSliceFunctions";

const UsersList = () => {
  const dispatch = useDispatch()
  const {users} = useSelector(store => store.users)


  useEffect(() => {
    !users.length && dispatch(getUsers())
  }, [])

  console.log(users)

  return (
    <>
      <div className="cards-grid">
        {users.map(user => {
          return <div key={user.id} className="text-center text-gray-500 dark:text-gray-400">
            <UserCard user={user}/>
          </div>
        })}
      </div>
    </>
  );
};

export default UsersList;
