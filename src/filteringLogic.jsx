import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'


function Loading({ lightMode }){
    return(
       <div className={lightMode ? "text-3xl lg:text-7xl w-[100%] sm:w-[200%] md:w-[200%] lg:w-[450%] text-slate-700 text-center" : "text-3xl lg:text-7xl w-[100%] sm:w-[200%] md:w-[200%] lg:w-[450%] text-slate-200 text-center"}>Loading...</div>
    );
}

function NoResultsFound({ lightMode }){
    return(
       <div className={lightMode ? "text-3xl lg:text-7xl w-[100%] sm:w-[200%] md:w-[200%] lg:w-[450%] text-slate-700 text-center" : "text-3xl lg:text-7xl w-[100%] sm:w-[200%] md:w-[200%] lg:w-[450%] text-slate-200 text-center"}>No Results found!</div>
    );
}



function DefaultClickableThumbNail({ setExtraData, data, index, setShowMain, lightMode }) {

    function handleKeyboard(e)
    {
        if(e.key === 'Enter' || e.key === ' ')
        {
            e.target.click()
        }
    }

    let popu = data[index]['population']
    let popu2 = [];
    let count = 0;
        while(popu)
        {
            const rem = popu % 10;
            if(count === 3)
            {
                popu2.unshift(',')
                count = 0;
            }
            //else
            {
                popu = Math.floor(popu/10)
                popu2.unshift(rem)
            }
            count++;
        }

    function handleSwitchingMain() {
        setShowMain(false)
        setExtraData(data[index])
        const scrollUp = document.querySelector('#scrollUp');
        scrollUp.click();
    }
    return (
        <section tabIndex={0} onKeyUp={handleKeyboard} onClick={handleSwitchingMain} key={data[index]['name']} className='cursor-pointer grid grid-cols-1 grid-rows-2 rounded-[7px] shadow-md h-[23rem]'>
            <div className="rounded-tl-[7px] rounded-tr-[7px] shadow-sm z-10">
                <img alt="country's flag" className="h-full w-full rounded-tl-[7px] rounded-tr-[7px]" src={data[index]['flags']['png']}></img>
            </div>
            <div className={lightMode ? "flex flex-col space-y-[0.3rem] p-[1rem] leading-[120%] text-slate-800 bg-white rounded-bl-[7px] rounded-br-[7px]"
                 : "flex flex-col space-y-[0.3rem] p-[1rem] leading-[120%] text-white bg-darkHeaderBg rounded-bl-[7px] rounded-br-[7px]"}>
                <h2 className="text-[1.2rem] font-bold mb-[0.85rem]">{data[index]['name']}</h2>
                <div className="font-semibold">Population:<span className="inline-block ml-[0.2rem] font-light">{popu2}</span></div>
                <div className="font-semibold">Region:<span className="inline-block ml-[0.2rem] font-light">{data[index]['region']}</span></div>
                <div className="font-semibold">Capital:<span className="inline-block ml-[0.2rem] font-light">{data[index]['capital']}</span></div>
            </div>
        </section>
    );
}



function SearchedClickableThumbNail({ setExtraData, data, setShowMain, lightMode}) {

    function handleKeyboard(e)
    {
        if(e.key === 'Enter' || e.key === ' ')
        {
            e.target.click()
        }
    }
    let popu = data['population']
    let popu2 = [];
    let count = 0;
        while(popu)
        {
            const rem = popu % 10;
            if(count === 3)
            {
                popu2.unshift(',')
                count = 0;
            }
            //else
            {
                popu = Math.floor(popu/10)
                popu2.unshift(rem)
            }
            count++;
        }

    function handleSwitchingMain() {
        setShowMain(false);
        setExtraData(data);
        const scrollUp = document.querySelector('#scrollUp');
        scrollUp.click();
    }

    return (
        <section tabIndex={0} onKeyUp={handleKeyboard} onClick={handleSwitchingMain} className='cursor-pointer grid grid-cols-1 grid-rows-2 rounded-[7px] shadow-md h-[23rem]'>
            <div className="rounded-tl-[7px] rounded-tr-[7px] shadow-sm z-10">
                <img alt="country's flag" className="h-full w-full rounded-tl-[7px] rounded-tr-[7px]" src={data['flags']['png']}></img>
            </div>
            <div className={lightMode ? "flex flex-col space-y-[0.3rem] p-[1rem] leading-[120%] text-slate-800 bg-white rounded-bl-[7px] rounded-br-[7px]"
                 : "flex flex-col space-y-[0.3rem] p-[1rem] leading-[120%] text-white bg-darkHeaderBg rounded-bl-[7px] rounded-br-[7px]"}>
                <h2 className="text-[1.2rem] font-bold mb-[0.85rem]">{data['name']}</h2>
                <div className="font-semibold">Population:<span className="inline-block ml-[0.2rem] font-light">{popu2}</span></div>
                <div className="font-semibold">Region:<span className="inline-block ml-[0.2rem] font-light">{data['region']}</span></div>
                <div className="font-semibold">Capital:<span className="inline-block ml-[0.2rem] font-light">{data['capital']}</span></div>
            </div>
        </section>
    );
}


export default function FilterLogic({ setExtraData, typeIn, region, showMain, setShowMain, lightMode}) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/data.json');
                const allData = await response.json();
                setData(allData);
            }
            catch (error) {
                console.error('Error:', error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if(loading){
        return(
            <Loading />

        );
    }
    if (!loading && typeIn === '' && region === '') {
        return (
            <>
                <DefaultClickableThumbNail lightMode={lightMode} key="15" setExtraData={setExtraData} data={data} showMain={showMain} setShowMain={setShowMain} index={15} />
                <DefaultClickableThumbNail lightMode={lightMode} key="20" setExtraData={setExtraData} data={data} showMain={showMain} setShowMain={setShowMain} index={20} />
                <DefaultClickableThumbNail lightMode={lightMode} key="200" setExtraData={setExtraData} data={data} showMain={showMain} setShowMain={setShowMain} index={200}  />
                <DefaultClickableThumbNail lightMode={lightMode} key="14" setExtraData={setExtraData} data={data} showMain={showMain} setShowMain={setShowMain} index={14}  />
                <DefaultClickableThumbNail lightMode={lightMode} key="24" setExtraData={setExtraData} data={data} showMain={showMain} setShowMain={setShowMain} index={24}  />
                <DefaultClickableThumbNail lightMode={lightMode} key="16" setExtraData={setExtraData} data={data} showMain={showMain} setShowMain={setShowMain} index={16}  />
                <DefaultClickableThumbNail lightMode={lightMode} key="19" setExtraData={setExtraData} data={data} showMain={showMain} setShowMain={setShowMain} index={19}  />
                <DefaultClickableThumbNail lightMode={lightMode} key="194" setExtraData={setExtraData} data={data} showMain={showMain} setShowMain={setShowMain} index={194}  />
                <DefaultClickableThumbNail lightMode={lightMode} key="104" setExtraData={setExtraData} data={data} showMain={showMain} setShowMain={setShowMain} index={104}  />
                <DefaultClickableThumbNail lightMode={lightMode} key="65" setExtraData={setExtraData} data={data} showMain={showMain} setShowMain={setShowMain} index={65}  />
                <DefaultClickableThumbNail lightMode={lightMode} key="31" setExtraData={setExtraData} data={data} showMain={showMain} setShowMain={setShowMain} index={31}  />
                <DefaultClickableThumbNail lightMode={lightMode} key="12" setExtraData={setExtraData} data={data} showMain={showMain} setShowMain={setShowMain} index={12}  />
            </>
        );
    }
    else if (typeIn !== "" && region === "") {
        let matches = [];
        data.map(it => {
            if (it['name'].toUpperCase().startsWith(typeIn.toUpperCase())) {
                matches.push(<SearchedClickableThumbNail lightMode={lightMode} setExtraData={setExtraData} showMain={showMain} setShowMain={setShowMain} key={it['name']} data={it} />)
            }
            
        });
        if(matches.length === 0){
                matches.push(<NoResultsFound lightMode={lightMode}/>);
        }
        return (
            <>
                {matches}
            </>
        );
    }
    else if (typeIn === "" && region !== "") {
        let matches = [];
        data.map(it => {
            if (it['region'].toUpperCase().includes(region.toUpperCase())) {
                matches.push(<SearchedClickableThumbNail lightMode={lightMode} setExtraData={setExtraData} showMain={showMain} setShowMain={setShowMain} key={it['name']} data={it} />)
            }
        }); 
        if(matches.length === 0){
            matches.push(<NoResultsFound lightMode={lightMode}/>);
        }
        return (
            <>
                {matches}
            </>
        );
    }
    else if (typeIn !== "" && region !== "") {
        let matches = [];
        data.map(it => {
            if (it['name'].toUpperCase().startsWith(typeIn.toUpperCase()) &&
                it['region'].toUpperCase().includes(region.toUpperCase())) {
                matches.push(<SearchedClickableThumbNail lightMode={lightMode} setExtraData={setExtraData} showMain={showMain} setShowMain={setShowMain} key={it['name']} data={it} />);
            }
        })
        if(matches.length === 0){
            matches.push(<NoResultsFound key='NoResultsFound' lightMode={lightMode}/>);
        }
        return (
            <>
                {matches}
            </>
        );
    }
}

function BorderCountry({ children, lightMode }) {
    return (
        <span className={lightMode ? "inline-block  ml-[1rem] w-[5rem] text-center py-[0.3rem] text-slate-600 bg-white shadow-ring2 rounded-2px"
            : "inline-block ml-[1rem] w-[5rem] text-center px-[1.5rem] py-[0.3rem] bg-darkHeaderBg shadow-ring2 rounded-2px text-slate-300"}>
            {children}
        </span>
    );
}



DefaultClickableThumbNail.propTypes = {
    data: PropTypes.array,
    index: PropTypes.number,
    showMain: PropTypes.bool,
    setShowMain: PropTypes.func,
    setExtraData: PropTypes.func,
    lightMode: PropTypes.bool
}

SearchedClickableThumbNail.propTypes = {
    data: PropTypes.object,
    showMain: PropTypes.bool,
    setShowMain: PropTypes.func,
    setExtraData: PropTypes.func,
    lightMode: PropTypes.bool
}
FilterLogic.propTypes = {
    typeIn: PropTypes.string,
    region: PropTypes.string,
    showMain: PropTypes.bool,
    setShowMain: PropTypes.func,
    setExtraData: PropTypes.func,
    lightMode: PropTypes.bool
}


BorderCountry.propTypes = {
    children: PropTypes,
    lightMode: PropTypes.bool
}

NoResultsFound.propTypes = {
    lightMode:PropTypes.bool
}

Loading.propTypes = {
    lightMode:PropTypes.bool
}