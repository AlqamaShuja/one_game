import React from 'react'
import { useNavigate } from 'react-router-dom'
import Gradient from '../Components/Gradient'

const Welcome = () => {
    const navigate = useNavigate();
  return (
    <div className='min-h-screen w-full bg-[#141627] flex flex-col justify-center items-center'>
        <div className="w-[534px] h-[430px] relative rounded-lg bg-[#41445F]/[0.31] flex flex-col items-center justify-center mt-12">
            <Gradient />
            <div className="w-full flex flex-col items-center justify-center mb-8">
                <h3 className='font-semibold text-white text-2xl'>D-APP</h3>
                <p className='mb-10 text-white mt-1'>Welocme to Dapp</p>
                <button type="button" onClick={()=>{navigate("/signin")}} className='z-10 border-2 border-[#616176] cursor-pointer rounded-md py-3 min-w-[180px] w-[60%] flex items-center justify-center bg-gradient-to-br hover:from-[#3f31df] hover:to-[#ae3eca]'>
                    <span className='mr-4'><Lock /></span>
                    <span className='text-white'>Login</span>
                </button>
                <button type="button" onClick={()=>{navigate("/register")}} className='z-10 mt-8 cursor-pointer rounded-md py-3 min-w-[180px] w-[60%] flex items-center justify-center bg-gradient-to-br from-[#4A3AFF] to-[#CC00FF] hover:from-[#3f31df] hover:to-[#ae3eca]'>
                    <span className='mr-4'><Lightning /></span>
                    <span className='text-white'>Signup</span>
                </button>
            </div>
        </div>
        <p className='mt-14 text-white text-sm'>Copyright &copy; 2023 - theonenetwork</p>
    </div>
  )
}


const Lock = () => {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 8.25H4.5C4.08579 8.25 3.75 8.58579 3.75 9V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V9C20.25 8.58579 19.9142 8.25 19.5 8.25Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.625 8.25V4.875C8.625 3.97989 8.98058 3.12145 9.61351 2.48851C10.2465 1.85558 11.1049 1.5 12 1.5C12.8951 1.5 13.7535 1.85558 14.3865 2.48851C15.0194 3.12145 15.375 3.97989 15.375 4.875V8.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 15.375C12.6213 15.375 13.125 14.8713 13.125 14.25C13.125 13.6287 12.6213 13.125 12 13.125C11.3787 13.125 10.875 13.6287 10.875 14.25C10.875 14.8713 11.3787 15.375 12 15.375Z" fill="white"/>
        </svg>
    );
}

const Lightning = () => {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 22.4993L10.5 14.9993L4.5 12.7493L15 1.49927L13.5 8.99927L19.5 11.2493L9 22.4993Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export default Welcome