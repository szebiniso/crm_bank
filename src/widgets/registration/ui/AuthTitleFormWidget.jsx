import React from 'react';
import RegistrationForm from "../../../entities/Forms/ui/RegistrationForm";
import AuthForm from "../../../entities/Forms/ui/AuthForm";

const AuthTitleFormWidget = () => {
    return (
        <div className="flex min-h-full w-2/5 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Авторизация
                    </h2>
                </div>
                <AuthForm/>
            </div>
        </div>
    );
};

export default AuthTitleFormWidget;