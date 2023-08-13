import React, { useEffect, useState } from 'react'
import ApiUtil from '../api/ApiUtil';
import TrendingCards from '../Cards/TrendingCards';
import TrendCarusel from '../components/TrendCarusel';
import styles from "./HomePage.module.css"


export const HomePage =()=>{
const [trendindMovie, setTrendindMovie] = useState(null);
const [all, setAll] = useState(null);
const [trendingSerial, setTrendingSerial] = useState(null);
const [trendigPerson, setTrendingPerson] = useState(null);

useEffect(() => {
  async function alltrends() {
   const data = await ApiUtil.getAll();
   setAll(data)
  }
  async function movieTrends() {
    const data = await ApiUtil.getTrendingMovie();
    setTrendindMovie(data)
   }
   async function serialTrends() {
    const data = await ApiUtil.getTrendinTv();
    setTrendingSerial(data)
   }
   async function trendingPersons() {
    const data = await ApiUtil.getTrandingPerson();
    setTrendingPerson(data)
   }
  alltrends();
  movieTrends();
  serialTrends();
  trendingPersons();
}, [])

  return(
    <div>
    <div className={styles.category}>All Trends</div>
    <TrendCarusel>
      {all?.results.map((allTrend)=>(
        <TrendingCards key={allTrend.id} trend={allTrend}/>
      )) }
    </TrendCarusel>
    <div className={styles.category}>Trending Films</div>
    <TrendCarusel>
      {trendindMovie?.results.map((filmsTrend)=>(
        <TrendingCards key={filmsTrend.id} trend={filmsTrend}/>
      )) }
    </TrendCarusel>
    <div className={styles.category}>Trending Serials</div>
    <TrendCarusel 
    >
      {trendingSerial?.results.map((serialTrend)=>(
        <TrendingCards key={serialTrend.id} trend={serialTrend}/>
      )) }
    </TrendCarusel>
    <div className={styles.category}>Trending Persons</div>
    <TrendCarusel>
      {trendigPerson?.results.map((personTrend)=>(
        <TrendingCards key={personTrend.id} trend={personTrend}/>
      )) }
    </TrendCarusel>

    </div>
  )
}