import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import UserCard from "../../Users/ui/UserCard";
import {getUsers} from "../../Users/api/UsersSliceFunctions";

const ProjectManagersList = () => {
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

export default ProjectManagersList;
