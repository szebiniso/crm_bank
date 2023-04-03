import React from "react";

// interface ModalProps {
//   showModal: boolean;
//   setShowModal: () => void;
//   children: ReactNode;
//   title: string;
// }

export default function FormModal({
      showModal,
      setShowModal,
      children,
      title,
      full_height
    }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden bg-black/40 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div style={full_height ? {height: '93vh'} : {}} className="relative w--full text-left overflow-x-hidden px-14 py-10 bg-gray-700 rounded-lg shadow dark:bg-gray-800 sm:px-14 sm:py-10">
                {title && <div className="text-center pb-4 mb-4 rounded-t sm:mb-5 dark:border-gray-600">
                  <h3 className="text-2xl font-semibold text-gray-300 dark:text-white">
                    {title}
                  </h3>
                </div>}
                  <button
                    onClick={setShowModal}
                    type="button"
                    className="absolute top-3.5 right-3.5 text-base text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                {children}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
