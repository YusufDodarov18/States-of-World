import type { CountryInners } from "../types";

export default function Countrys({ country }: { country: CountryInners }) {
  return (
    <div>
        <div className=" w-50 md:w-80 border rounded-xl shadow-md hover:shadow-xl transition-all duration-300  ">
          <div className="px-1 py-1">
            <img className=" w-80 h-48 object-cover border-b rounded-2xl" src={country.flags.png}  alt="not img" />
            </div>
          <div className="flex px-3 py-3 justify-start items-start flex-col">
            <p><span className="font-bold">Ном: </span>{country.countryTg}</p>
            <p><span className="font-bold">Аҳолӣ: </span>{country.population}</p>
            <p><span className="font-bold">Масоҳат: </span>{country.area}</p>
            </div>
          </div>
      </div>
  )
}
