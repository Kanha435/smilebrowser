import React from 'react'
import '../css/SearchPage.css'
import { useStateValue } from '../StateProvider'
import useSmileSearch from '../useSmileSearch';
import pic from '../images/smileLogo.png'
import Search from './Search';
import { Link } from 'react-router-dom';

const  SearchPage =()=>{
  const [{val}] = useStateValue();
  const searchData = useSmileSearch(val);
  console.log(searchData.data?.items);


  return (
    <>
      <div className="search-header" id='header'>
          <img src={pic} alt="../images/smileLogo.jpg" />
          <Search hidden/>
      </div>
      <hr className='line-seperator' />

      {
        searchData.data?.items.map((item)=>
        <div className="searchpage-result">
          <div className="content-link">
            <div className="img-link">
              <a href={item.link}>
                {
                  item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src &&(
                    <img src={item.pagemap?.cse_image[0]?.src} alt="" />
                  )
                }
                
              </a>
              <p>{item?.displayLink}</p>
            </div>
            <a href={item.link}><h2>{item?.title}</h2></a>
            <p>{item?.snippet}</p>
          </div>
        </div>  
        )
      }
          
    </>
  )
}

export default SearchPage;