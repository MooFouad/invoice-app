import { useDispatch } from "react-redux"
import { removeInvoice } from "../redux/slices/invoiceSlice"
import { useState } from "react"
import UpdateItem from "./UpdateItem"

const ItemInfo = ({item, setItemInfo}) => {

    const [showUpdate, setShowUpdate] = useState(false)

    const dispatch = useDispatch()
    const handleDelete = ()=>{
        dispatch(removeInvoice(item.id))
        setItemInfo(false)
        console.log(item)
    }
    return ( 
        <>
        <div className="flex justify-center flex-col  items-center min-h-[80%] min-w-[80%] absolute bg-[#0f0c2f] px-10 gap-8">
        {/* Invoices header & delete & update */}
        <div className="flex justify-between   items-center w-full">
        {/* title div */}
        <div className="flex justify-between items-start">
            <h1 className='md:text-4xl max-md:text-2xl bold'>Invoices</h1>
        </div>
        {/* remove & update btn */}
        <div className="flex justify-center items-center gap-4">
            <button 
            onClick={()=> setItemInfo(false)}
            className='bg-gray-500 py-2 px-4 rounded-full'>Close</button>
            <button 
            onClick={()=>setShowUpdate(true)}
            className='bg-green-500 py-2 px-4 rounded-full'>Edit</button>
            <button 
            onClick={handleDelete}
            className='bg-red-500 py-2 px-4 rounded-full'>Delete</button>  
        </div>
        </div>

        {/* item container */}
        <div className="flex w-full justify-center items-center flex-col gap-4">
            {/* id & name */}
            <div className="flex justify-between items-center w-full">
                <h1>
                    {item.id}
                </h1>
                <h1>{item.clientName}</h1>
            </div>
            {/* date, total, status */}
            <div className="flex justify-between items-center w-full">
                {/* date, total */}
                <div className="">
                <h2 className='text-gray-400'>Due {item.paymentDue}</h2>
                <h2 className='bold'>${item.total}</h2>
                </div>
                {/* status */}
                <div className="">
                {
                    item.status === 'paid' ? ( 
                        <h2 className=' text-green-600 bold bg-green-200 px-4 py-1 rounded-2xl'>{item.status}</h2>)
                        :(
                        <h2 className=' text-orange-500 bold bg-orange-200 px-4 py-1 rounded-2xl'>{item.status}</h2>)
                    
                }
                </div>
            </div>
        </div>
        
        </div>
        {/* edit section */}
        {
            showUpdate && <UpdateItem setShowUpdate={setShowUpdate} item={item} />
        }
    </>
    )
}

export default ItemInfo