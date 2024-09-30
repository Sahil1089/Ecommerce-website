import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    isAuthenticated:false,
    user:null
}

const Authslice = createSlice({
    name:'auth',
    initialState,
    reducers : {
        setUser:(state,action)=>{

        }
    }


});
export const {setUser}=Authslice.actions;
export default Authslice.reducer;