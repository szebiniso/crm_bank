import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOrganizations} from "../../Organization/api/OrganizationApi";
import AdminCard from "./AdminCard";

const AdminContent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const number_pag = 10

  const dispatch = useDispatch()

  const {organizations, count, loading} = useSelector(state => state.organization)

  useEffect(() => {
    dispatch(getOrganizations({limit: number_pag, offset: currentPage}))
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
            {
              organizations?.map(organization => {
              return <div key={organization.id} className="text-center text-gray-500 dark:text-gray-400">
                <AdminCard organization={organization}/>
              </div>
            })}
          </div>
        }
      </div>
      {
        count > 10 && <div className='flex fixed gap-4 left-9 bottom-6 w-full justify-center items-center'>
          <button className='text-gray-400 text-4xl disabled:text-gray-700' style={currentPage ? {cursor: 'pointer'} : null} disabled={currentPage === 0 ? true : false} onClick={decrement}>
            &#8592;
          </button>
          {
            countArr.map(i => {
              return <span onClick={() => handlePaginate(i)} style={currentPage === i*10 ? {color: "lightgray", fontSize: '20px', height: '45px', width: '45px', border: '1px solid silver'} : null} className='text-gray-300 p-2 rounded-full w-10 h-10 text-center border border-gray-700'>{i+1}</span>
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

export default AdminContent;
