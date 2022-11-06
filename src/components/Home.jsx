import React,{useEffect, useState,Suspense} from 'react'
import Card from './Card'
import {useSelector ,useDispatch} from "react-redux"
import Data1 from '../assets/data/CONTENTLISTINGPAGE-PAGE1.json'
const Data2 = React.lazy(()=> import("../assets/data/CONTENTLISTINGPAGE-PAGE2.json") )
const Data3 = React.lazy(()=> import("../assets/data/CONTENTLISTINGPAGE-PAGE3.json") )
import { getData,addData,loadJson } from '../redux/homeSlice'

import InfiniteScroll from 'react-infinite-scroll-component';


const Home = ({loadMore,setLoadMore,searchOpen}) => {
  // const {page:{content-items}}=Data1
const dispatch = useDispatch()
const {displayData,totalData,totalNo} = useSelector(state => state.home)


const initialData = Data1?.page?.['content-items']?.content

  useEffect(()=>{
    dispatch(getData())
  },[])

  console.log(Data2)
  console.log(displayData?.length)

  const fetchMoreData =()=>{
    let itemPerPage = 20
    if(searchOpen) return
    if(Number(totalNo) == displayData?.length){
      setLoadMore(false)
      return
    }
    if(totalData?.length - displayData?.length < 4){
      let page = totalData?.length / itemPerPage
      console.log("loadJson")
      dispatch( loadJson(page+1))
    }

    dispatch(addData())

  }
  return (
    <Suspense fallback="loading">
      <div id="scrollableDiv" className='h-[100%] overflow-y-scroll scrollbar-hide ' >
      <InfiniteScroll
        dataLength={displayData?.length}
        next={fetchMoreData}
        hasMore={loadMore}
        scrollThreshold={0.8}
        className=" flex gap-x-[30px] gap-y-[90px] flex-wrap  pb-[30px] text-center "
      >
        {
          displayData?.length ? displayData?.map( (item ,index) => <Card key={index} data={item} /> )
          : <h6 className="text-white text-lg ">No Movie found</h6>
        }
      </InfiniteScroll>
      </div>
    </Suspense>
  )
}

export default Home