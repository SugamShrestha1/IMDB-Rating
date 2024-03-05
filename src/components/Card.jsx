import React,{useEffect,useState} from 'react';
import Skeleton ,{SkeletonTheme} from 'react-loading-skeleton';
import {Link} from 'react-router-dom';

const Card = ({movie}) => {
 const [isLoading,setIsLoading]= useState(true);

 useEffect(()=>{
    setTimeout(()=>{

        setIsLoading(false)

    },200)
 },[]);


  return (
    isLoading?
   <div className='inline-block transform transition-transform duration-200 relative rounded-10px overflow-hidden m-0.19rem cursor-pointer min-w-52 h-80 z-0 border border-solid border-gray-400 hover:scale-125  hover:z-1000 hover:shadow-custom'>
    <SkeletonTheme color='#83689B ' highlightColor='#544066 '>
        <Skeleton height={200} duration={2}/>

    </SkeletonTheme>
   </div>
   :

  

<Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>

<div className=" className='inline-block transform transition-transform duration-200 relative rounded-10px overflow-hidden m-0.19rem cursor-pointer min-w-52 h-80 z-0 border border-solid border-gray-400 hover:scale-125  hover:z-1000 hover:shadow-custom'">

    <img className="h-300px" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />

    <div className="absolute pt-0 px-4 pb-4 bottom-0 h-290px flex flex-col w-85 justify-end  opacity-0 transition-opacity duration-200 bg-gradient-to-b from-transparent to-black hover:opacity-100">
        <div className="font-black text-1rem">{movie?movie.original_title:""}</div>
        <div className="text-0.75rem mb-1">
            {movie?movie.release_date:""}
            <span className="float-right">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
        </div>
        <div className="italic text-0.75rem mb-1">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
    </div>
</div>
</Link>

  )
}

export default Card