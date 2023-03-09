import React from 'react';
import RegistrationForm from "../../../entities/Forms/ui/RegistrationForm";

const RegistrationTitleFormWidget = () => {
    return (
        <div className="flex-none w-2/6 flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Регистрация
                    </h2>
                </div>
                <RegistrationForm/>
                {/*<div className="mt-10 flex items-center justify-center gap-1">*/}
                {/*    <p>Уже есть аккаунт? </p>*/}
                {/*    <div className="text-sm">*/}
                {/*        <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">*/}
                {/*            Войти*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default RegistrationTitleFormWidget;