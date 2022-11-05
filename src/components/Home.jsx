import React from 'react'
import Card from './Card'
import Data1 from '../assets/data/CONTENTLISTINGPAGE-PAGE1.json'
const Home = () => {
  // const {page:{content-items}}=Data1
  const data1 = Data1?.page?.['content-items']?.content

  console.log(data1)

  return (
    <div className=" flex gap-[30px] flex-wrap overflow-y-scroll pb-[30px]">

      {
        data1?.map( (item ,index) => <Card key={index} data={item} /> )
      }
    </div>
  )
}

export default Home