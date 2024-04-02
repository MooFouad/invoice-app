
import { useSelector } from 'react-redux';
import InvoiceItem from './InvoiceItem';
import { useState } from 'react';
import Form from './Form';

const Invoices = () => {

    const [showForm, setShowForm] = useState(false)

    const invoices = useSelector((state)=> state.invoices.invoiceData)
    console.log(invoices)
    return (
        <div
        className="min-h-[100vh] flex justify-center items-center flex-col gap-8 py-8 ] dark:text-white  duration-300">
            {/* Invoices header & addbtn */}
            <div className="flex justify-between md:w-[70%] max-md:w-[90%] items-center gap-8">
                {/* title div */}
                <div className="flex flex-col justify-center items-start">
                    <h1 className='md:text-4xl max-md:text-2xl bold'>Invoices</h1>
                    <p className='text-gray-500 md:text-lg'>There is {invoices.length} total invoices</p>
                </div>
                {/* dropdown & add invoice btn */}
                <div className="flex justify-center items-center gap-4">
                    <div className="">drop</div>
                    {/* form */}
                    <div>
                        <button 
                        onClick={()=> setShowForm(!showForm)}
                        className="flex justify-center items-center gap-4 bg-blue-500 py-1 px-2 rounded-2xl max-md:text-sm">
                            <span className='bg-white text-blue-500 p-1 rounded-full w-8 h-8 bold'>+</span>
                            New Invoice
                        </button>
                        <div className="">
                            {
                                showForm && <Form setShowForm={setShowForm} />
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* invoices container */}
            <div className="flex flex-col md:w-[70%] max-md:w-[90%]">
                {invoices.map((item)=>(
                    <InvoiceItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Invoices