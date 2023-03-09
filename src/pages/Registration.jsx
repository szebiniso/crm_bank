import React from "react";
import RegistrationTitleFormWidget from "../widgets/registration/ui/RegistrationTitleFormWidget";
import AuthBanner from "../widgets/registration/ui/AuthBanner";
import AuthTitleFormWidget from "../widgets/registration/ui/AuthTitleFormWidget";

const Registration = () => {
  return (
    <div className="flex basis-full h-screen">
      <RegistrationTitleFormWidget />
      <AuthBanner />
    </div>
  );
};

export default Registration;
