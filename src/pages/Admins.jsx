import React, { useState} from "react";
import HeaderWithOptions from "../shared/ui/HeaderWithOptions";
import Header from "../shared/ui/Header";
import Container from "../shared/ui/Container";
import AdminContent from "../entities/Admin/ui/AdminContent";

const Admins = () => {

  return (
    <>
      <Container>
        <div className="mx-auto mb-8 w-full lg:mb-12">
          <Header title='Администраторы'/>
          <hr className="my-4 [height:1px] border-none bg-gray-700" />
          <HeaderWithOptions />
        </div>
        <AdminContent/>
      </Container>
    </>
  );
};

export default Admins;
