import React, {useEffect} from 'react';
import ProjectCard from "./ProjectCard";
import {useDispatch, useSelector} from "react-redux";
import {getProjects} from "../api/ProjectsSliceFunctions";
import ProjectCardd from "./ProjectCardd";

const ProjectsList = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProjects())
  }, []);


  const {projects} = useSelector(state => state.projects)

  const data = [
    {id:1,
      name: "Новые",
      items: projects.filter(i => i.status == 'Active')
    },
    {id:2,
      name: "В процессе",
      items: projects.filter(i => i.status == 'Active')
    },
    {id:3,
      name: "Успешно законченные",
      items: projects.filter(i => i.status == 'Completed')
    },
    { id:4,
      name: "Проваленные",
      items: projects.filter(i => i.status == 'Failed')
    }
  ];


  return (
    <div className='flex justify-start flex-col w-full'>
        {
          data.map((el, i) => {
            return <>
              <h2 className='mt-5 ml-2 text-md font-semibold text-gray-300 dark:text-gray-300'>{el.name}</h2>
                <div className='p-2 flex gap-2 overflow-x-scroll'>
                  {el.items.map((item, index) => {
                    return <ProjectCard title={item.name}/>
                  })}
                </div>
            </>
          })
        }
        <ProjectCardd/>
    </div>
  );
};

export default ProjectsList;
