import PropTypes from 'prop-types'

Filters.propTypes = {
    typeIn: PropTypes.string,
    setTypeIn: PropTypes.function,
    region: PropTypes.string,
    setRegion: PropTypes.function,
    lightMode: PropTypes.bool
}
DropDownFilter.propTypes = {
    region: PropTypes.string,
    setRegion: PropTypes.function,
    lightMode: PropTypes.bool
}

function DropDownFilter({region, setRegion, lightMode})
{
    function handleRegionSet(e){
        setRegion(e.target.value);
    }
    return(
       <select tabIndex={0} value={region} onChange={handleRegionSet} className={lightMode ? 
        "cursor-pointer w-[55%] mb-[2rem] lg:mg-[0px] lg:w-[17%] bg-white outline-none text-slate-800 focus:outline-0 focus:ring-2 shadow-md rounded-[5px] py-[0.7rem] lg:py-[0.8rem] px-[1%] font-semibold" 
         : "cursor-pointer w-[55%] mb-[2rem] lg:mg-[0px] lg:w-[17%] bg-darkHeaderBg focus:outline-0 focus:ring-2 text-white outline-none shadow-md rounded-[5px] py-[0.7rem] lg:py-[0.8rem] px-[1%] font-semibold"}>
        <option value=''>Filter by Region</option>
        <option value='africa'>Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
       </select>
    );
}

export default function Filters({typeIn, setTypeIn, region, setRegion, lightMode})
{
    return(
       <div className="flex flex-col lg:flex-row justify-between w-[90%] space-y-[2rem] lg:space-y-[0px] mx-auto py-[3%]">
          <input className={lightMode ? 
          "focus:outline-2 focus:outline-dashed focus:outline-slate-500 bg-white text-black h-[3.2rem] bg-none lg:bg-[url(/search.svg)] bg-no-repeat bg-[0.7rem_0.6rem]  rounded-[5px] w-full lg:w-[35%] shadow-md pl-[5%]"
        : 'bg-darkHeaderBg focus:outline-2 focus:outline-dashed focus:outline-slate-200 text-white h-[3.2rem] bg-none lg:bg-[url(/search.svg)] bg-no-repeat bg-[0.7rem_0.6rem]  rounded-[5px] w-full lg:w-[35%] shadow-md pl-[5%]'} 
          placeholder='Search for any country...' value={typeIn} onChange={(e)=>setTypeIn(e.target.value)}></input>

          <DropDownFilter region={region} setRegion={setRegion} lightMode={lightMode} key='dropDown' />
       </div>
    );
}