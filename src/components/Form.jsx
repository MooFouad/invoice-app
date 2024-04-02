import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addInvoice } from '../redux/slices/invoiceSlice'

const Form = ({setShowForm}) => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [amount, setAmount] = useState('')
    const [status, setStatus] = useState('')

    const dispatch = useDispatch()



    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addInvoice({
            id, 
            name,
            date,
            amount,
            status,
        }))
        setShowForm(false)
    }


    return (
        <form
        className='min-h-[100vh] absolute left-0 top-0 md:w-[60vw] max-md:w-[80vw] flex justify-center items-center bg-slate-900 rounded-2xl flex-col gap-6 text-black'
        >
            <div className="w-[90%] flex justify-center items-center gap-4">
                <label htmlFor="id">Id</label>
                <input 
                type="text"
                value={id}
                onChange={(e)=>setId(e.target.value)}
                id='id'
                placeholder='enter your id' />
            </div>
            <div className="w-[90%] flex justify-center items-center gap-4">
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                id='name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder='enter your name' />
            </div>
            <div className="flex justify-center items-center gap-4 w-[90%]">
                <label htmlFor="date">Data</label>
                <input 
                type="date" 
                id='date'
                value={date}
                onChange={(e)=>setDate(e.target.value)}
                placeholder='enter the Date' />
            </div>
            <div className="flex justify-center items-center gap-4 w-[90%]">
                <label htmlFor="amount">Amount</label>
                <input 
                type="numer" 
                id='amount'
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                placeholder='enter the Date' />
            </div>
            <div className="flex justify-center items-center gap-4 w-[90%]">
                <label htmlFor="status">Status</label>
                <select
                onChange={(e)=>setStatus(e.target.value)}
                className='w-[90%]'>
                    <option value="" selected>
                        Choose status
                    </option>
                    <option
                    value="paid"  >paid</option>
                    <option 
                    value="unpaid" >unpaid</option>
                </select>
            </div>
            {/* btn container */}
            <div className="flex gap-8">
                <button 
                onClick={()=> setShowForm(false)}
                className='text-white bg-gray-500 rounded-full py-2 px-6 '>cancel</button>
            <button
            type='submit'
            onClick={handleSubmit}
            className='bold text-xl bg-blue-900 py-2 px-6 rounded-full'>Add</button>
            </div>
        </form>
    )
}

export default Form