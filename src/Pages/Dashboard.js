import React, { useState } from 'react'
import AddNewGame from '../Components/AddNewGame'
import DashboardTop from '../Components/DashboardTopGem'
import DashboardTable from '../Components/DashboardTopGem/DashboardTable'

const Dashboard = ({ addNewGame, close }) => {
    

    // if(addNewGame){
    //     return <AddNewGame close={close}/>
    // }

    return (
        // <div className='min-h-screen w-full bg-[#141627]'>
        <div className=" bg-[#141627] text-white h-[calc(100vh-90px)] overflow-auto">
        {addNewGame && <AddNewGame close={close}/>}
        <div className="max-w-[130vw] ">
            <DashboardTop />
            <div className="mt-5">
                <DashboardTable />
            </div>
        </div>
        </div>
    )
}

export default Dashboard