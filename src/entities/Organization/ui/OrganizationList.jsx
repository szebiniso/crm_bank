import React, {useEffect, useState} from "react";
import OrganizationCard from "./OrganizationCard";
import {useDispatch, useSelector} from "react-redux";
import {getOrganizations} from "../api/OrganizationApi";

export default function OrganizationList() {
  const [currentPage, setCurrentPage] = useState(0);
  const number_pag = 12

  const dispatch = useDispatch()

  const {organizations, count} = useSelector(state => state.organization)

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

  for(let i = 0; i < Math.ceil(count/12); i++){
    countArr.push(i)
  }

  const handlePaginate = (i) => {
    if(i>1) setCurrentPage(0)
    else setCurrentPage(i*12)
  }

  return (
    <div className=' mb-10'>
      {/*{*/}
      {/*  loading ? <h1 className='text-gray-100'>Loading...</h1> : <>*/}
          <div>
            {
              <div className="org-cards-grid">
                {organizations?.map(organization => {
                  return <OrganizationCard organization={organization}/>
                })}
              </div>
            }
          </div>
          {count > 12 && <div className='flex fixed gap-4 left-9 bottom-6 w-full justify-center items-center'>
            <button className='text-gray-400 text-4xl disabled:text-gray-700' style={currentPage ? {cursor: 'pointer'} : null} disabled={currentPage === 0 ? true : false} onClick={decrement}>
              &#8592;
            </button>
            {
              countArr.map(i => {
                return <span onClick={() => handlePaginate(i)} style={currentPage === i*12 ? {color: "lightgray", fontSize: '20px', height: '45px', width: '45px', border: '1px solid silver'} : null} className='text-gray-300 p-2 rounded-full w-10 h-10 text-center border border-gray-700'>{i+1}</span>
              })
            }
            <button className='text-gray-400 text-4xl disabled:text-gray-700'  style={currentPage < count-12 ? {cursor: 'pointer'} : null} disabled={currentPage > count - 12 ? true : false} onClick={increment}>
              &#8594;
            </button>
          </div>
          }
      {/*  </>*/}
      {/*}*/}


    </div>
  );
}
