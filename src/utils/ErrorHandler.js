import React from 'react'

const ErrorHandler = (err) => {
    if(err?.name === 'AxiosError' && err.message === 'Network Error'){
        return 'Network Error';
    }
    else if(err?.response?.data?.error?.name === "ValidationError"){
        return "User validation failed";
    }
    else if(err?.response?.data?.error?.name === "SequelizeUniqueConstraintError"){
        if(err?.response?.data?.error?.fields?.website_UNIQUE){
            return "Website Already Registered";
        }
        else if(err?.response?.data?.error?.fields?.email){
            return "Email Already Registered";
        }
    }
    else if(err?.response?.data?.msg === "User Not Found!"){
        return "User Not Found!";
    }
    else if(err?.response?.data?.msg === "Credentials does not match"){
        return "Credentials does not match";
    }
    return err?.message;
}

export default ErrorHandler