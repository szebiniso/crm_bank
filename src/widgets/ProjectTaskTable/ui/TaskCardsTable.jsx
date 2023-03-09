import React, { useState } from "react";

const DragDropTable = () => {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Сделать",
      items: [
        { id: 1, title: "Пойти в магазин" },
        { id: 2, title: "Пойти в магазин" },
        { id: 3, title: "Пойти в магазин" },
        { id: 4, title: "Пойти в магазин" },
      ],
    },
    {
      id: 2,
      title: "Сделать",
      items: [
        { id: 1, title: "Пойти в магазин" },
        { id: 2, title: "Пойти в магазин" },
        { id: 3, title: "Пойти в магазин" },
        { id: 4, title: "Пойти в магазин" },
      ],
    },
    {
      id: 3,
      title: "Сделать",
      items: [
        { id: 1, title: "Пойти в магазин" },
        { id: 2, title: "Пойти в магазин" },
        { id: 3, title: "Пойти в магазин" },
        { id: 4, title: "Пойти в магазин" },
      ],
    },
  ]);

  return (
    <div className="">
      {boards.map((board) => (
        <div>
          <div>{board.title}</div>
          {board.items.map((item) => (
            <div draggable="true">{item.title}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DragDropTable;
