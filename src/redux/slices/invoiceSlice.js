
import { createSlice } from '@reduxjs/toolkit';
import data from '../../assets/data/data.json'

const initialState ={
    invoiceData : data,

}


const invoiceSlice = createSlice({
    name : 'invoices',
    initialState : initialState,
    reducers:{
        addInvoice : (state, action) =>{
            const newItem = action.payload
            state.invoiceData.unshift(
                {
                    id : newItem.id, 
                    clientName : newItem.name,
                    paymentDue : newItem.date,
                    total : newItem.amount,
                    status : newItem.status,

                }
            )
        },
        removeInvoice : (state, action) =>{
            const id = action.payload
            state.invoiceData = state.invoiceData.filter((item) => item.id !== id);
        },
    },
})


export const {addInvoice, updateInvoice, removeInvoice} = invoiceSlice.actions
export default invoiceSlice