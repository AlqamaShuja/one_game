import React, { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import avatar from '../../assets/avatar.png';
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Slices/auth.slice";
import { useNavigate } from "react-router-dom";





function Header({ active, open }) {
    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
        navigate("/")
    }

    

    const items = [
        {
            label: (
            <a onClick={handleSignOut}>
                Sign out &nbsp;&nbsp;&nbsp;
            </a>
            ),
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: 'Profile  ',
            key: '3',
            disabled: true,
        },
    ];

    return (
      <div className="relative h-[90px] flex items-center w-full">
        <div className="w-full flex items-center justify-between border-b-2 border-[#dee0ff36] pb-2 pt-2">
          <div className="flex  justify-between items-center">
            <div className="text-[20px] text-white">
              {active === 1 ? <p>Dashboard</p> : <p></p>}
              {active === 2 ? <p>Liquidity Pool</p> : <p></p>}
              {active === 5 ? <p>Settings</p> : <p></p>}
            </div>
          </div>
          <div className=" flex items-center text-white">
              <button onClick={open}
                  className="cursor-pointer rounded-md py-2 px-3 h-[40px] flex items-center justify-center bg-gradient-to-br from-[#4A3AFF] to-[#CC00FF] hover:from-[#3f31df] hover:to-[#ae3eca]"
              >Add New Game</button>
              <div className="flex">
                  <div className="ml-6">
                  <AiOutlineBell size={25} color="#CC00FF" />
                  </div>
              </div>
              <div className="flex items-center">
                  <div className="rounded-full bg-white w-[42px] h-[42px] ml-5 flex flex-col items-center justify-center">
                      <img src={avatar} alt="" />
                  </div>
                  <div className="ml-2">
                      <Dropdown menu = {{ items }}>
                          <a onClick={(e) => e.preventDefault()}>
                              <Space>
                                  <DownOutlined />
                              </Space>
                          </a>
                      </Dropdown>
                  </div>
              </div>
              </div>
        </div>
      </div>
    );
}




export default Header;
