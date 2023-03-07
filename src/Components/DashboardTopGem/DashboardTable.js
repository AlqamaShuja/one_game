import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGamesByGsId_Thunk } from '../../Slices/game.slice'
import DropdownMenu from '../../utils/Dropdown'

const DashboardTable = () => {
    const games = useSelector(state => state.game.game);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGamesByGsId_Thunk());
    }, [])

    // console.log(games, "gamessssssssss");

  return (
    <div className='w-full flex flex-col items-center'>
        <table className="w-[88%]  text-white text-left">
            <thead className=''>
                <tr className='h-[54px]'>
                    <th>Name</th>
                    <th>Link</th>
                    <th>Played Hours</th>
                    <th>Earned $OGI</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {games?.map(data => (
                    <tr key={data.id} className='border-t-2 border-gray-400/40 h-[58px]'>
                        <td className='flex items-center h-[54px]'>
                            <img className='mr-2 rounded-md h-[44px]' width={44} height={44} src={`${process.env.REACT_APP_BACKEND_API_URL}/files/${data.game_icon}`} alt='' />
                            <span>{data.name}</span>
                        </td>
                        <td>{data.url}</td>
                        <td>Played Hours</td>
                        <td>Earned $OGI</td>
                        <td>
                            <DropdownMenu game={data} />
                            {/* <Dropdown onClick={handleClickOnDropDown} menu = {{ items }}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 17.5C16.8284 17.5 17.5 16.8284 17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16C14.5 16.8284 15.1716 17.5 16 17.5Z" fill="white"/>
                                            <path d="M16 9.5C16.8284 9.5 17.5 8.82843 17.5 8C17.5 7.17157 16.8284 6.5 16 6.5C15.1716 6.5 14.5 7.17157 14.5 8C14.5 8.82843 15.1716 9.5 16 9.5Z" fill="white"/>
                                            <path d="M16 25.5C16.8284 25.5 17.5 24.8284 17.5 24C17.5 23.1716 16.8284 22.5 16 22.5C15.1716 22.5 14.5 23.1716 14.5 24C14.5 24.8284 15.1716 25.5 16 25.5Z" fill="white"/>
                                        </svg>
                                    </Space>
                                </a>
                            </Dropdown> */}
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
    </div>
  )
}

export default DashboardTable