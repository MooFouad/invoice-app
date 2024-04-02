import { useState } from 'react'
import rightArrow from '../assets/icon-arrow-right.svg'
import ItemInfo from './ItemInfo'

const InvoiceItem = ({item}) => {

    const [itemInfo, setItemInfo] = useState(false)


    return (
        <>
        <div 
        className="flex justify-between items-center gap-4 w-full max-md:hidden mb-4 dark:bg-[#1c1929] rounded-2xl shadow p-6">
            {/* left */}
            <div className="flex gap-4 justify-center items-center max-md:flex-wrap">
                <h1 className='bold'>
                    <span className='text-gray-400'>#</span>
                    {item.id}
                </h1>
                <h2 className='text-gray-400'>Due {item.paymentDue}</h2>
                <h2 className='text-gray-400'>{item.clientName}</h2>
                
            </div>
            {/* right  */}
            <div className="flex justify-around items-center gap-4">
                <h1 className='bold'>${item.total}</h1>
                {
                    item.status === 'paid' ? ( 
                        <h2 className=' text-green-600 bold bg-green-200 px-4 py-1 rounded-2xl'>{item.status}</h2>)
                        :(
                        <h2 className=' text-orange-500 bold bg-orange-200 px-4 py-1 rounded-2xl'>{item.status}</h2>)
                    
                }
                <img
                className='cursor-pointer w-[20px]'
                src={rightArrow} 
                onClick={()=>setItemInfo(!itemInfo)} 
                alt="arrow-icon" />
            </div>
        </div>
        {/* mobile display */}
        <div className="flex flex-col justify-between items-center gap-4 md:hidden mb-4 dark:bg-[#1c1929] py-2 px-6 rounded-2xl shadow">
            
            <div className="flex gap-4 justify-between items-center w-full">
                <h1 className='bold'>
                    <span className='text-gray-400'>#</span>
                    {item.id}
                </h1>
                <h2 className='text-gray-400'>{item.clientName}</h2>
            </div>
            <div className="flex justify-between items-center w-full">
                <div className=" flex flex-col">
                    <h2 className='text-gray-400'>Due {item.paymentDue}</h2>
                    <h1 className='bold'>${item.total}</h1>
                </div>
                {
                    item.status === 'paid' ? ( 
                        <h2 className=' text-green-600 bold bg-green-200 px-4 py-1 rounded-2xl'>{item.status}</h2>)
                        :(
                        <h2 className=' text-orange-500 bold bg-orange-200 px-4 py-1 rounded-2xl'>{item.status}</h2>)
                    
                }
                
            </div>
            <img src={rightArrow} alt="arrow-icon"  className='w-6' onClick={()=>setItemInfo(!itemInfo)}/>
        </div>
        {
                itemInfo &&
                <ItemInfo item={item} setItemInfo={setItemInfo}/>
            }
        </>
    )
}

export default InvoiceItem