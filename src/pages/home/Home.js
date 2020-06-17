import React, { useState, useEffect } from 'react';
import { getNowPlaying, getTopRated, getPopular, getUpcoming, getGenres } from '../../api/api'
import Jumbotron from '../../components/jumbotron/jumbotron'
import Slider from '../../components/slider/slider'
// import Loader from './loader'

import '../../App.css';

const Home = (props) => {
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [genres, setGenres] = useState([])

  useEffect(() => {
    getNowPlaying(1).then((value => setNowPlaying(value.results)))
    getTopRated(1).then((value => setTopRated(value.results)))
    getPopular(1).then((value => setPopular(value.results)))
    getUpcoming(1).then((value => setUpcoming(value.results)))
    getGenres().then((value => setGenres(value.genres)))
  }, [])

  return (
    <div>
      <Jumbotron content={popular[0]?? null} scrollTo="content" genres={genres}/>
      <div className="nav-margin" id="content">
        <Slider content={nowPlaying} title={"Now Playing"} sliderClass={""} arrows={true}/>
        <Slider content={popular} title={"Popular"} sliderClass={""} arrows={true}/>
        <Slider content={topRated} title={"Top Rated"} sliderClass={""} arrows={true}/>
        <Slider content={upcoming} title={"Upcoming"} sliderClass={""} arrows={true}/>
      </div>
    </div>
  )
}

export default Home;