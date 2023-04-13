import React, {useState} from "react";
import FormModal from "../../../widgets/Modals/ui/FormModal";
import OrganizationDetails from "./OrganizationDetails";

const OrganizationCard = ({organization}) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false)
  }

  const {name, field} = organization

  return (
    <>
      <div onClick={() => setShowDetailsModal(true)} className="cursor-pointer h-28 w-full flex flex-col align-middle items-center mb-2">
          <div className="flex items-center relative bg-main-light-dark h-full w-full rounded-xl shadow-xl">
            <div className="flex items-center pl-4 gap-4">
              <img className="object-cover mx-auto w-16 h-16 rounded-full" src="https://media.istockphoto.com/id/1286680331/vector/adoption-and-community-care.jpg?s=612x612&w=0&k=20&c=ohbgHT14BhVVbVOc__N5MsBEfoM3EXwzLPxzIFeWHTI=" alt="Neil image"/>
              <div className="">
                <p className="text-ms font-bold text-gray-300 truncate dark:text-white">
                  {name}
                </p>
                <p className="text-md text-gray-200 truncate dark:text-gray-400">
                  {field}
                </p>
              </div>
          </div>
        </div>
      </div>
      <FormModal
        showModal={showDetailsModal}
        setShowModal={handleCloseDetailsModal}
      >
        <OrganizationDetails closeDetailsModal={handleCloseDetailsModal} organization={organization}/>
      </FormModal>
    </>
  );
};

export default OrganizationCard;
