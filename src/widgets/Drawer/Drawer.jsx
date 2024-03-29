// import React from "react";
//
// const Drawer = ({ children, isOpen, setIsOpen }) => {
//   return (
//     <main
//       className={
//         " fixed z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
//         (isOpen
//           ? " transition-opacity opacity-100 duration-500 translate-y-0  "
//           : "hidden")
//       }
//     >
//       <section
//         className={
//           "left-[5%] absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
//           (isOpen ? " translate-(-x)-0 " : " translate-(-x)-full ")
//         }
//       >
//         <article className="relative max-w-lg flex flex-col space-y-6 h-full">
//           {children}
//         </article>
//       </section>
//       <section
//         className="w-screen h-full cursor-pointer "
//         onClick={setIsOpen}
//       ></section>
//     </main>
//   );
// };
//
// export default Drawer;
