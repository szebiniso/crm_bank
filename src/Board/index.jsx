import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4";
import FormModal from "../widgets/Modals/ui/FormModal";

const itemsFromBackend = [
    { id: uuid(), content: "First task" },
    { id: uuid(), content: "Second task" },
    { id: uuid(), content: "Third task" },
    { id: uuid(), content: "Fourth task" },
];

const itemsFromBackend2 = [
    { id: uuid(), content: "Fourth tasks" },
];

const itemsFromBackend3 = [
    { id: uuid(), content: "Fourth tasks" },
    { id: uuid(), content: "Fifth task" }
];

const columnsFromBackend = {
    [uuid()]: {
        name: "Requested",
        items: itemsFromBackend
    },
    [uuid()]: {
        name: "To do",
        items: itemsFromBackend2
    },
    [uuid()]: {
        name: "In Progress",
        items: itemsFromBackend3
    },
    [uuid()]: {
        name: "Done",
        items: []
    },
    [uuid()]: {
        name: "sdd",
        items: []
    }
};

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};

function Board() {

    const [showModal, setShowModal] = useState(false);

    const [columns, setColumns] = useState(columnsFromBackend);

    return (
      <>
        <div className='flex justify-start flex-col w-full'>
            <DragDropContext
                onDragEnd={result => onDragEnd(result, columns, setColumns)}
            >
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <div
                            className='flex flex-col w-full'
                            key={columnId}
                        >
                            <h2 className='mt-4 ml-3 text-lg font-semibold text-gray-300 dark:text-gray-300'>{column.name}</h2>
                            <div className='m-1 w-full overflow-auto'>
                                <Droppable droppableId={columnId} key={columnId} direction="horizontal">
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                className='p-2 w-92 min-h-[140px] flex gap-2 overflow-x-scroll'
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                // style={{
                                                //     background: snapshot.isDraggingOver
                                                //         ? "lightblue"
                                                //         : "lightgrey"
                                                // }}
                                            >
                                                {column.items.map((item, index) => {
                                                    return (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <a
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={{
                                                                            userSelect: "none",
                                                                            // padding: 16,
                                                                            // margin: "0 0 8px 0",
                                                                            // backgroundColor: snapshot.isDragging
                                                                            //     ? "#263B4A"
                                                                            //     : "#456C86",
                                                                            // color: "white",
                                                                            ...provided.draggableProps.style
                                                                        }}
                                                                        onClick={() => setShowModal(true)}
                                                                        // href="#"
                                                                        className="block p-6 h-[120px] flex flex-col justify-center bg-gray-500 rounded-lg shadow hover:bg-gray-400 dark:bg-gray-800 dark:border-gray-500 dark:hover:bg-gray-700"
                                                                    >
                                                                        <h5 className="mb-0 text-xl font-bold tracking-tight text-black dark:text-white">
                                                                            {item.content}
                                                                        </h5>
                                                                        <p className=" mb-2 font-normal text-black-400 dark:text-gray-400">
                                                                            cvbnm,
                                                                        </p>
                                                                        <div>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
          Frontend
        </span>
                                                                            <span className="bg-pink-100 texZt-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
          Backend
        </span>
                                                                            <span className="bg-emerald-100 texZt-emerald-300 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-emerald-900 dark:text-emerald-300">
          UX/UI
        </span>
                                                                        </div>
                                                                    </a>
                                                                    // <div
                                                                    //     ref={provided.innerRef}
                                                                    //     {...provided.draggableProps}
                                                                    //     {...provided.dragHandleProps}
                                                                    //     style={{
                                                                    //         userSelect: "none",
                                                                    //         padding: 16,
                                                                    //         margin: "0 0 8px 0",
                                                                    //         height: "90px",
                                                                    //         backgroundColor: snapshot.isDragging
                                                                    //             ? "#263B4A"
                                                                    //             : "#456C86",
                                                                    //         color: "white",
                                                                    //         ...provided.draggableProps.style
                                                                    //     }}
                                                                    // >
                                                                    //     {item.content}
                                                                    // </div>
                                                                );
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
          <FormModal setShowModal={() => setShowModal(false)} showModal={showModal} title='Task description'>
              Task description
          </FormModal>
      </>
    );
}

export default Board;
