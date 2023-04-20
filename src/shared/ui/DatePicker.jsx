import React, {useState} from 'react';
import {CalendarDaysIcon, CheckCircleIcon, MinusSmallIcon, PaperAirplaneIcon} from "@heroicons/react/20/solid";
import {useDispatch} from "react-redux";
import {editIterationDate} from "../../entities/Iterations/api/IterationApi";

const DatePicker = ({iteration}) => {

  const [startDate, setStartDate] = useState(iteration.start_date);
  const [endDate, setEndDate] = useState(iteration.end_date);

  const [editDate, setEditDate] = useState(false);

  const handleEditDate = () => {
    setEditDate(!editDate)
  }

  const handleEditDateDispatch = () => {
    const data = {id: iteration.id, dates: {start_date: startDate, end_date: endDate}}
    dispatch(editIterationDate(data))
    setEditDate(!editDate)
  }

  const dispatch = useDispatch()


  return (
    <form className='flex justify-between items-center'>
      <p className='text-gray-400 mb-3 mt-1 flex items-center'>
        <span className='text-[#5ca9eb] font-bold pr-1'>Дата:</span>
        <div className="flex bg-transparent flex items-center">
          <input style={editDate ? {width: '105px'} : undefined}
            className="bg-transparent border-none w-20 p-0 pl-1 text-gray-300 rounded-md shadow-sm"
            type={editDate ? "date" : "text"}
            disabled={editDate? false : true}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <MinusSmallIcon className="h-6 w-2 text-gray-300" />
          <input style={editDate ? {width: '105px'} : undefined}
            className="bg-transparent p-0 pl-1 w-20 text-gray-300 border-none rounded-md shadow-sm"
            type={editDate ? "date" : "text"}
            disabled={editDate? false : true}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </p>
      {
        editDate ? <PaperAirplaneIcon onClick={handleEditDateDispatch} className="h-5 w-5 text-gray-300 mb-2" /> : <CalendarDaysIcon onClick={handleEditDate} className="h-5 w-5 text-gray-300 mb-2" />
      }
    </form>
  );
};

export default DatePicker;
