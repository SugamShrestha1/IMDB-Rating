import React,{useEffect , useState} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {

    const [movieDetail,setMovieDetail]=useState();
    const{ id }=useParams();

    useEffect(()=>{
       getData();
       window.scrollTo(0,0);
    },[]);

  

const getData = async () => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
    setMovieDetail(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

  return (
    <div className="w-full relative flex flex-col items-center">
    <div className="w-4/5">
        <img className="w-full h-500 object-cover object-left" src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.backdrop_path : ""}`} />
    </div>
    <div className="flex items-center w-3/4 relative bottom-56">
        <div className="mr-30px">
            <div className="">
                <img className="w-300px rounded-10px shadow-shadow" src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.poster_path : ""}`} />
            </div>
        </div>
        <div className="flex text-white flex-col h-450px justify-between ">
            <div className="shadow-sm text-black mb-2">
                <div className="font-semibold text-3rem">{movieDetail ? movieDetail.original_title : ""}</div>
                <div className="movie__tagline">{movieDetail ? movieDetail.tagline : ""}</div>
                <div className="movie__rating">
                    {movieDetail ? movieDetail.vote_average: ""} <i class="fas fa-star" />
                    <span className="ml-4">{movieDetail ? "(" + movieDetail.vote_count + ") votes" : ""}</span>
                </div>  
                <div className="movie__runtime">{movieDetail ? movieDetail.runtime + "mins" : ""}</div>
                <div className="movie__releaseDate">{movieDetail ? "Release date: " + movieDetail.release_date : ""}</div>
                <div className="my-5 mx-0">
                    {
                       movieDetail && movieDetail.genres
                        ? 
                        movieDetail.genres.map(genre => (
                            <><span className="p-2 border-solid border-gray-300 border-2 rounded-20px mr-4" id={genre.id}>{genre.name}</span></>
                        )) 
                        : 
                        ""
                    }
                </div>
            </div>
            <div className="my-8 mx-0 grow-0.8">
                <div className="flex relative items-center text-1.5rem mb-5 font-semibold ">Synopsis</div>
                <div className='ml-auto'>{movieDetail ? movieDetail.overview : ""}</div>
            </div>
            
        </div>
    </div>
    <div className="flex relative bottom-120px justify-between w-3/4">
        <div className="text-2.2rem ">Useful Links</div>
        {
           movieDetail &&movieDetail.homepage && <a href={movieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="bg-red-500 bg-yellow-400 flex justify-center items-center py-3.5 px-8 rounded-20px cursor-pointer w-150px text-black font-bold">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
        }
        {
            movieDetail && movieDetail.imdb_id && <a href={"https://www.imdb.com/title/" +movieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="bg-yellow-400 flex justify-center items-center py-3.5 px-8 rounded-20px cursor-pointer w-150px text-black font-bold">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
        }
    </div>
    <div className="text-2.2rem">Production companies</div>
    <div className="w-4/5 flex justify-center items-end mb-16">
        {
           movieDetail && movieDetail.production_companies && movieDetail.production_companies.map(company => (
                <>
                    {
                        company.logo_path 
                        && 
                        <span className="flex flex-col items-center justify-center">
                            <img className="w-200px m-8" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                            <span>{company.name}</span>
                        </span>
                    }
                </>
            ))
        }
    </div>
</div>
  )
}

export default MovieDetail