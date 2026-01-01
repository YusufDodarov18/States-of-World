import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { countryNamesTG } from '../others/country-tg'
import CountrysPage from '../components/Countrys'
import type { Countrys } from '../types'
import axios from "axios"
import { Link } from 'react-router-dom'
import Loading from './Loading'

function Home() {
  const [data,setData]=useState<Countrys>([])
  const [loading,setLoading]=useState<boolean>(true)
  const [name,setName]=useState<string>("")
  const [filter,setFilter]=useState<Countrys>([])
  const [select,setSelect]=useState<string>("")

  useEffect(()=>{
    const getData=async()=>{
      const data = await axios.get<Countrys>(`https://restcountries.com/v3.1/all?fields=name,capital,population,area,flags,region,subregion,currencies,languages,tld`);
      setData(data.data)
      setLoading(false)
      setFilter(data.data)
      setName("")
    }
    getData()
  },[])

useEffect(() => {
  let res=[...data]

  switch (select){
    case "bigarea":
      res.sort((el1,el2)=>el2.area-el1.area)
      break
    case "smailarea":
      res.sort((el1,el2)=>el1.area-el2.area)
      break
    case "bigpopulation":
      res.sort((el1,el2)=>el2.population-el1.population)
      break
    case "smailpopulation":
      res.sort((el1,el2)=>el1.population-el2.population)
       break
    case "as":
      res=res.filter(el=>el.region.toLowerCase()==="asia")
       break
    case "eu":
      res=res.filter(el=>el.region.toLowerCase()==="europe")
       break
    case "usa":
        res = res.filter(el => el.region.toLowerCase().includes("america"));
       break
        case "af":
      res = res.filter(el => el.region.toLowerCase() === "africa");
      break;
    case "aus":
      res = res.filter(el => el.region.toLowerCase() === "oceania");
      break;
    case "all":
      res=res.map(el=>el)
  }
  setFilter(res)

}, [ data,select]);


const search = () => {
  if (name.trim() !== "") {
    const res = data.filter(el => {
      const countryTg = countryNamesTG[el.name.common] || el.name.common;
      return countryTg.toLowerCase().includes(name.toLowerCase().trim());
    });
    setFilter(res);
  } else {
    setFilter(data); 
  }
}

useEffect(()=>{
  if(name.trim()===""){
   setFilter(data)
  }
},[name])

  return (
    <div>
      <Header search={search} name={name} setName={setName} value={select} setValue={setSelect}/>
      <div className='mt-30'>
        {loading&&<Loading/>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-10 place-items-center">
        {filter.length===0 && name.trim()!==""?(
          <div className="text-red-500 text-3xl"><h1>Пайдо нашуд: {name}</h1></div>
        ):filter.map((el,i) => {
          const countryTg=countryNamesTG[el.name.common]||el.name.common
          return <Link key={i} to={`/${el.name.common}`}>
             <CountrysPage country={{
                 ...el,
                 countryTg,
                 tld: el.tld[0],
                 currencies: el.currencies ? Object.values(el.currencies).map(c => c.name).join(", ") : "N/A",
                 languages: el.languages ? Object.values(el.languages).join(", ") : "N/A",
                 capital: el.capital ? el.capital[0] : "N/A"
                 }} />
              </Link>})}
      </div>
      </div>
    </div>
  )
}

export default Home
