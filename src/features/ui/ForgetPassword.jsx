import React from 'react';

const ForgetPassword = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Запомнить
                </label>
            </div>

            <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Забыли пароль?
                </a>
            </div>
        </div>
    );
};

export default ForgetPassword;