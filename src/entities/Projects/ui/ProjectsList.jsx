import React from 'react';
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {

  const projects = [
    {id:1,
      name: "Новые",
      items: [
        { id: 1, content: "First task" },
        { id: 2, content: "First task" },
        { id: 3, content: "Third task" },
      ]
    },
    {id:2,
      name: "В процессе",
      items: [
        { id: 1, content: "First task" },
        { id: 2, content: "Second task" },
      ]
    },
    {id:3,
      name: "Успешно законченные",
      items: [
        { id: 1, content: "First task" },
        { id: 2, content: "Second task" },
        { id: 3, content: "Third task" },
      ]
    },
    { id:4,
      name: "Проваленные",
      items: [
        { id: 1, content: "First task" },
      ]
    }
  ];


  return (
    <div className='flex justify-start flex-col w-full'>
        {
          projects.map((el, i) => {
            return <>
              <h2 className='mt-5 ml-2 text-md font-semibold text-gray-300 dark:text-gray-300'>{el.name}</h2>
                <div className='p-2 flex gap-2 overflow-x-scroll'>
                  {el.items.map((item, index) => {
                    return <ProjectCard title={item.content}/>
                  })}
                </div>
            </>
          })
        }
    </div>
  );
};

export default ProjectsList;
