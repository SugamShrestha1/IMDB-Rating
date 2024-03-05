import React,{useEffect,useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom'
import axios from 'axios';
import MovieList from '../components/MovieList'

const Home = () => {
  const [popularMovies,setPopularMovies]=useState([]);
  useEffect(()=>{
    const fetchPopularMovies=async()=>{
      try{
        const response= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`);
        setPopularMovies(response.data.results);
        console.log(response.data.results)
      }
      catch(error){
        console.error('Error fetching popular movies',error);
      }
    };
    fetchPopularMovies();
  },[])
  return (
    <>
    <div className="poster pt-5">
        <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
        >
            {
                popularMovies.map(movie => (
                    <Link  to={`/movie/${movie.id}`}  className='text-white'>
                        <div className="h-600" >
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} className='block m-auto w-full'/>
                        </div>
                        <div className='absolute p-20 bottom-0 h-3/4 flex flex-col w-full justify-end items-start bg-gradient-to-b from-rgba(0, 0, 0, 0) to-rgba(0, 0, 0, 1) opacity-100 transition-opacity duration-300 hover:opacity-100' >
                            <div className='font-black text-4rem mb-4rem text-left'>{movie ? movie.original_title: ""}</div>
                            <div className='text-2rem mb-px'>
                                {movie ? movie.release_date : ""}
                                <span className='ml-12'>
                                    {movie ? movie.vote_average :""}
                                    <i className="fas fa-star" />{" "}
                                </span>
                            </div>
                            <div className='italic text-1rem mb-1 flex text-left w-2/4'>{movie ? movie.overview : ""}</div>
                            
                        </div>
                    </Link>
                    
                ))
            }
        </Carousel>
       
       <MovieList/> 
    </div>
    </>
  )
}

export default Home