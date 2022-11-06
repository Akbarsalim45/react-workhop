import { createSlice } from '@reduxjs/toolkit'

import  Data1 from "../assets/data/CONTENTLISTINGPAGE-PAGE1.json"
import  Data2 from "../assets/data/CONTENTLISTINGPAGE-PAGE2.json"
import  Data3 from "../assets/data/CONTENTLISTINGPAGE-PAGE3.json"
const initialState = {
  totalNo:Data1?.page?.['total-content-items'],
  totalData:[...Data1?.page?.['content-items']?.content],
  displayData :[]
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getData:(state,action)=>{
      console.log({Data3})
        let data = state.totalData.slice(0,12)
        state.displayData = data
        console.log({action})
    },
    addData:(state,action) => {
      const lastIndex = state?.displayData?.length
      state.displayData=[...state.displayData,...state.totalData.slice(lastIndex,lastIndex+4)]
    },
    searchMovie:(state,action)=>{
      let res =[...Data1?.page?.['content-items']?.content,...Data2?.page?.['content-items']?.content,...Data3?.page?.['content-items']?.content]?.filter( item => item.name.toLowerCase().includes(action.payload.toLowerCase()))
      state.displayData = res
    },
    loadJson:(state,action)=>{
        if(action.payload == 2){
          state.totalData = [...state.totalData,...Data2?.page?.['content-items']?.content]
        }else if(action.payload ==3){
          state.totalData = [...state.totalData,...Data3?.page?.['content-items']?.content]
        }
    }
  }
})

// Action creators are generated for each case reducer function
export const {getData,addData,searchMovie,loadJson } = homeSlice.actions

export default homeSlice.reducer