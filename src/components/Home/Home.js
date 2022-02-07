import React, { useEffect } from 'react';
import MovieLisiting from "../../components/MovieListing/MovieLisiting";
import {useDispatch} from 'react-redux';
import { fetchAsyncMovies ,fetchAsyncShows } from "../../features/movies/movieSlice";



const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Harry";
    const showText = "friends";
    useEffect(() => {
        
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));
        
    },[dispatch]);

    return (
        <div>
        <div className="banner-img"></div>
        <MovieLisiting />
        </div>
    );
};

export default Home;