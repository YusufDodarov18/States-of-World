import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { border, Countrys as Country } from "../types";
import axios from "axios";
import {  countryNamesTG } from "../others/country-tg";
import { Button } from "../components/ui/button";
import Countrys from "../components/Countrys";
import { ChevronLeft } from "lucide-react";
import Header from "../components/Header";
import { countryCapitalsTG } from "../others/countryCapital";
import { countryArea } from "../others/countryarea";
import Loading from "./Loading";

export const CountryDetail=()=> {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Country>([]);
  const [result, setResult] = useState<Country>([]);
  const [filter,setFilter]=useState<Country>([])
  const [select,setSelect]=useState<string>("")
  const [name,setName]=useState<string>("")
  const [loading,setLoading]=useState<boolean>(true)
  const [bordersMap, setBordersMap] = useState<border>({});
  useEffect(()=>{
    const fineData=async()=>{
      setLoading(false)
      const data = await axios.get<Country>(`https://restcountries.com/v3.1/all?fields=name,capital,population,area,flags,region,borders,currencies,languages,tld`);
      const result = data.data.filter((el) => el.name.common == id);
      setData(data.data)
      setResult(result)
      const bordersMap: border = {};
        for (const el of result) {
         if (el.borders?.length) {
            const res = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${el.borders.join(',')}&fields=name`);
            bordersMap[el.name.common] = res.data.map((b: any) => b.name.common);
          }else {
          bordersMap[el.name.common] = [];
        }
      }
      setBordersMap(bordersMap);
    }
    fineData()
  },[id])

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
    <>
      <Header search={search} name={name} setName={setName} value={select} setValue={setSelect}/>
       <div className="my-10 mt-30 font-sans">
        <div className="flex justify-center md:justify-start px-1 md:px-24 mb-6">
          <Button asChild className="bg-orange-500 hover:bg-orange-400 flex items-center gap-1 cursor-pointer"><Link to={`/`}><ChevronLeft size={18} />Ба ақиб</Link></Button>
        </div>
      {result.map((el) => (
        <div key={el.name.common} className="flex flex-col md:flex-row gap-4 md:gap-10 border-b border-neutral-300 rounded-lg px-4 md:px-20 py-4 md:py-6 m-2 md:m-4 items-center w-full text-start">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl mb-3 md:mb-5">{countryNamesTG[el.name.common]||el.name.common}</h1>
            <img src={el.flags.png} alt={`${el.name.common} flag`} className="w-[260px] h-auto md:w-80 md:h-60 mx-auto md:mx-0" />
          </div>
          <div className="mt-2 md:mt-10 text-[15px] md:text-[17px] space-y-1 md:space-y-2">
            <p><strong>Пойтахт:</strong> {countryCapitalsTG[el.name.common] || el.capital}</p>
            <p><strong>Аҳолӣ:</strong> {el.population} нафар</p>
            <p><strong>Масоҳат:</strong> {el.area} km²</p>
            <p><strong>Минтақа:</strong> {countryArea[el.region]||el.region}</p>
          <strong>Ҳамсарҳадон: </strong>
            {bordersMap[el.name.common]?.length > 0
               ? bordersMap[el.name.common].map(border => countryNamesTG[border] || border) .join(", "): "Ҳамсарҳад Надорад"}
                    <p><strong>Асъорҳо:</strong> {el.currencies ? Object.values(el.currencies).map(curr => curr.name).join(', ') : "N/A"}</p>
                    <p><strong>Забон:</strong> {el.languages ? Object.values(el.languages).join(', ') : "N/A"}</p>
                    <p><strong>ТLD:</strong> {el.tld ? el.tld.join(', ') : "N/A"}</p>
                  </div>
                </div>
              ))}
        <div>
          <div className="mt-10 px-4 md:px-20">
            <h2 className="text-xl mb-4 font-semibold">Дигар давлатҳо</h2>
            {loading&&<Loading/>}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-10 place-items-center">
              {filter.length===0 && name.trim()!==""?(
          <div className="text-red-500 text-3xl"><h1>Пайдо нашуд: {name}</h1></div>
        ):filter.filter(el => el.name.common !== id).map((el, i) => (
     <Link key={i} to={`/${el.name.common}`}>
       <Countrys country={{  
         ...el, 
         countryTg: countryNamesTG[el.name.common] || el.name.common,
         tld: el.tld[0], 
         currencies: el.currencies ? Object.values(el.currencies).map(c => c.name).join(", ") : "N/A",
         languages: el.languages ? Object.values(el.languages).join(', ') : "N/A",
         capital: el.capital ? el.capital[0] : "N/A"
       }} />
     </Link>))} 
           </div>
        </div>
      </div>
    </div>
    </>
  );
}
