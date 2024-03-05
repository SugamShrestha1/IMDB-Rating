import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Cards from '../components/Card';

const MovieList = () => {

  const [movieList,setMovieList]= useState([]);
  const {type} = useParams()

  useEffect(()=>{
  getData();
  }, [])

  useEffect(()=>{
    getData();
  },[type]);

  const getData = async () => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
        setMovieList(response.data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
  return (

    <div className="p-0 px-12 pb-12">
            <h2 className="text-1.75rem mt-20">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="flex flex-wrap justify-center">
                {
                    movieList.map(movie => ( 
                        <Cards movie={movie} /> 
                    ))
                }
            </div>
        </div>
    )
  
}

export default MovieList