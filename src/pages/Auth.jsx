import React from "react";
import AuthTitleFormWidget from "../widgets/registration/ui/AuthTitleFormWidget";
import AuthBanner from "../widgets/registration/ui/AuthBanner";
import RegistrationTitleFormWidget from "../widgets/registration/ui/RegistrationTitleFormWidget";

const Auth = () => {
  let div = (
    <>
      <div className="flex basis-full h-screen">
        <AuthTitleFormWidget />
        <AuthBanner />
      </div>
    </>
  );
  return div;
};

export default Auth;
