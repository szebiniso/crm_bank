import React from 'react';
import authBackgroundImage from '../../../entities/Forms/images/authBackgroundImage.jpg'

const AuthBanner = () => {
    return (
        <div className='h-screen w-full'>
            <img className='h-screen w-full flex-3' src={authBackgroundImage} alt='#'/>
        </div>
    );
};

export default AuthBanner;