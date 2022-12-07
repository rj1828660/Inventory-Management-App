import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import productService from './productServices';

const initialState = {
  product :null,
  products:[],
  isError:false,
  isSuccess:false,
  isLoading:false,
  message:"",
}

//create New Product
const createProduct=createAsyncThunk(
    "products/create",
    async(formData,thunkAPI)=>{
        try{
           return await productService.createProduct(formData)
        }catch(error){
            const message=(error.response&&error.response.data&&error.response.data.message)||error.message||error.toString();
            console.log(message);
            return thunkAPI.rejectWithValue(message);
        }
    }
)
const ProductSlice = createSlice({
  name:"product",
  initialState,
  reducers: {
    CALC_STORE_VALUE(state,action){
        console.log("store value")
    },
    extrareducers:(builder)=>{
     builder.addCase(createProduct.pending,(state)=>{
        state.isLoading=true
     })
     .addCase(createProduct.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isSuccess=true;
        console.log(action.payload);
        state.products.push(action.payload);
        toast.success("products added sucessfully")

        
    })
    .addCase(createProduct.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true;
        state.message=action.payload
        
        toast.error(action.payload)

        
    })
    }
  }
});

export const {CALC_STORE_VALUE} = ProductSlice.actions

export default ProductSlice.reducer