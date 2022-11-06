import Home from "./components/Home"
import TopSection from "./components/TopSection"
import {useState} from 'react'

function App() {

const [loadMore,setLoadMore] = useState(true)
const [searchOpen,setSearchOpen] = useState(false)

  return (
    <div className='px-[30px] bg-black min-h-screen scrollbar-hide'  >
        <TopSection  {...{loadMore,setLoadMore,searchOpen,setSearchOpen}}/>
        <Home {...{loadMore,setLoadMore,searchOpen,setSearchOpen}}/>  
    </div>
  )
}

export default App
