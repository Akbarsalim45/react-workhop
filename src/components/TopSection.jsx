import React,{useState,useRef,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { searchMovie,getData } from '../redux/homeSlice'

const TopSection = ({setLoadMore,searchOpen,setSearchOpen}) => {

  const [input,setInput] = useState('')
  const dispatch = useDispatch()

  const inputEl = useRef()

  const closeSearch = () =>{
    setSearchOpen(false)
    setInput("")
    dispatch(getData())
    setLoadMore(true)
  }

  useEffect(() => {
    if(searchOpen) inputEl.current.focus()
  }, [searchOpen])
  
  const handleSearch = () => {
    if(input){
      dispatch(searchMovie(input))
      return
    }
    setSearchOpen(true)
  }

  const handleKeyPress = (e)=>{
    if(e.key =="Enter" && input){
      handleSearch()
    }
  }


  return (
    <div 
      className="h-[100px] text-white px-[30px] bg-black 
        flex justify-between items-center 
         sticky top-0 overflow-hidden z-10
        bg-[url('public/images/nav_bar.png')]
        " >
        <div className="left flex gap-[10px] items-center" onKeyDown={handleKeyPress}>
           { !searchOpen ?
            <>
            <img src={'../images/Back.png'} alt="back button" className='w-[20px] h-[20px]' />
              <h4 className="text-xl  text-gray-400">Romantic Comedy</h4>
            </>:
            <>
              <img src={'../images/Back.png'} onClick={closeSearch} alt="back button" className='w-[20px] h-[20px]' />
              <input placeholder="search movies" 
                  ref={inputEl}
                  type="text"
                  className="ml-[10px] px-2 py-2 w-[215px] lg:w-[450px] rounded focus:outline-none text-black"
                  onChange={e => setInput(e.target.value)}  
                  value={input || ""}
              />
            </>
            }
        </div>
        <img src={'../images/search.png'} onClick={handleSearch} alt="search icon" className='w-[30px] h-[30px]' />
    </div>
  )
}

export default TopSection