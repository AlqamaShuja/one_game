import React from 'react'
import { LiquidityData } from '../Data/LiquidataData';

const DashboardTop = () => {
  return (
    <div className="grid grid-cols-1  py-6 px-16 ">
          <div className="  row-span-1 rounded-[10px] bg-liquiditymaskgroup bg-cover">
            <div className="grid grid-cols-3 gap-6">
              {LiquidityData.map((item, i) => {
                return (
                  <React.Fragment key={i}>
                    <div className="flex my-4">
                        <div className="">
                            <img
                            src={item.image}
                            alt="imageBG"
                            className={`mt-4  h-[120px]`}
                            />
                        </div>
                        
                        <div className="mt-8">
                            <p className="font-semibold text-[35px] text-white">
                                {item.title}
                            </p>
                            <p className='text-gray-200'>in your wallet = {item.amount}</p>
                        </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
  )
}

export default DashboardTop