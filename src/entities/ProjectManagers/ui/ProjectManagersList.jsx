import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProjectManagerCard from "./ProjectManagerCard";
import {getManagers} from "../../Users/api/UsersSliceFunctions";

export default function ProjectManagersList({lessons}) {
  const [currentPage, setCurrentPage] = useState(0);
  const number_pag = 10

  const dispatch = useDispatch()
  const {managers, count} = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getManagers({limit: number_pag, offset: currentPage}))
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
            {managers?.map(user => {
              return <div key={user.id} className="text-center text-gray-500 dark:text-gray-400">
                <ProjectManagerCard user={user}/>
              </div>
            })}
          </div>        }
      </div>
      {
        count > 10 && <div className='flex fixed gap-4 left-9 bottom-4 w-full justify-center items-center'>
          <button className='text-gray-400 text-4xl disabled:text-gray-700' style={currentPage ? {cursor: 'pointer'} : null} disabled={currentPage === 0 ? true : false} onClick={decrement}>
            &#8592;
          </button>
          {
            countArr.map(i => {
              return <span onClick={() => handlePaginate(i)} style={currentPage === i*10 ? {color: "lightgray", fontSize: '20px', padding: '3px 14px', border: '1px solid silver'} : null} className='text-gray-300 px-3 py-1 rounded-full cursor-pointer text-center border border-gray-700'>{i+1}</span>
            })
          }
          <button className='text-gray-400 text-4xl disabled:text-gray-700'  style={currentPage < count-10 ? {cursor: 'pointer'} : null} disabled={currentPage > count - 10 ? true : false} onClick={increment}>
            &#8594;
          </button>
        </div>
      }

    </div>
  );
}
