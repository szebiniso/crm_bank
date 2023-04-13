import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProjectManagerCard from "./ProjectManagerCard";
import {getUsers} from "../../Users/api/UsersSliceFunctions";
import API from "../../../shared/utils/axiosConfig";

// const ProjectManagersList = () => {
//   const dispatch = useDispatch()
//   const {users} = useSelector(store => store.users)
//
//
//   useEffect(() => {
//     !users.length && dispatch(getUsers())
//   }, [])
//
//   console.log(users)
//
//   return (
//     <>
//       <div className="cards-grid overflow-y-scroll h-[73%]">
//         {users.map(user => {
//           return <div key={user.id} className="text-center text-gray-500 dark:text-gray-400">
//             <ProjectManagerCard user={user}/>
//           </div>
//         })}
//       </div>
//     </>
//   );
// };

export default function ProjectManagersList({lessons}) {
  const [array, setArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);
  const number_pag = 10
  useEffect(() => {
    setArray(lessons)
  }, []);

  useEffect(() => {
    API.get('users-list/', { params: { limit: number_pag, offset: currentPage } })
      .then((result) => {
        setArray(result.data.results)
        setCount(result.data.count)
      });
  }, [currentPage]);

  function decrement() {
    setCurrentPage(currentPage - number_pag);
  }
  function increment() {
    setCurrentPage(currentPage + number_pag);
  }

  const countArr = []

  for(let i = 0; i < Math.ceil(count/10); i++){
    countArr.push(i)
  }

  const handlePaginate = (i) => {
    if(i>1) setCurrentPage(0)
    else setCurrentPage(i*10)
  }

  return (
    <div className=' mb-10'>
      <div>
        {
          <div className="cards-grid">
            {array?.map(user => {
              return <div key={user.id} className="text-center text-gray-500 dark:text-gray-400">
                <ProjectManagerCard user={user}/>
              </div>
            })}
          </div>        }
      </div>
      {
        count > 10 && <div className='flex fixed gap-4 left-9 bottom-6 w-full justify-center items-center'>
          <button className='text-gray-700 text-4xl' style={currentPage ? {cursor: 'pointer'} : null} disabled={currentPage === 0 ? true : false} onClick={decrement}>
            &#8592;
          </button>
          {
            countArr.map(i => {
              return <span onClick={() => handlePaginate(i)} style={currentPage === i*10 ? {color: "lightgray", fontSize: '20px', height: '45px', width: '45px', border: '1px solid silver'} : null} className='text-gray-300 p-2 rounded-full cursor-pointer w-10 h-10 text-center border border-gray-700'>{i+1}</span>
            })
          }
          <button className='text-gray-700 text-4xl'  style={currentPage !== count-10 ? {cursor: 'pointer'} : null} disabled={currentPage+10 > count ? true : false} onClick={increment}>
            &#8594;
          </button>
        </div>
      }

    </div>
  );
}
