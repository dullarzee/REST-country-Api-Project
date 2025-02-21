import backArrow from '/arrow-left2.svg'
import PropTypes from 'prop-types'


function BorderCountry({ children, lightMode }) {
    
  return (
      <span className={lightMode ? "inline-block  ml-[1rem] w-[5rem] text-center py-[0.3rem] text-slate-600 bg-white shadow-ring2 rounded-2px"
          : "inline-block ml-[1rem] w-[5rem] text-center px-[1.5rem] py-[0.3rem] bg-darkHeaderBg shadow-ring2 rounded-2px text-slate-300"}>
          {children}
      </span>
  );
}

export default function ExtraInfo({ setShowMain, receivedData,lightMode }) {

    let popu = receivedData['population']
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

    const langs = [];
    const borders = [];
    function handleSwitchingMain2() {
        setShowMain(true);
    }
    return (
        //body of the extra info component
        <section className="w-[94%] mx-auto mb-[20%]">
            {/*button to switch to main page by setting "show main" to 'true'*/}
            <button onClick={handleSwitchingMain2} className={lightMode ? "hover:ring-2 hover:ring-indigo-300 cursor-pointer flex bg-white text-black my-[2rem] lg:my-[4rem] w-[7rem] h-[2.5rem] shadow-ring rounded-[5px] space-x-[0.8rem] items-center justify-center"
                : "hover:ring-2 hover:ring-indigo-300 flex cursor-pointer bg-slate-600 my-[2rem] lg:my-[4rem] w-[7rem] h-[2.5rem] text-white/90 shadow-ring rounded-[5px] space-x-[0.8rem] items-center justify-center"}>
                <img alt="" className="w-[15%] " src={backArrow}></img>
                <span>Back</span>
            </button>
            {/*actual extra info content*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1">
                {/*div containing image of country's flag*/}
                <div className="h-[13.5rem] lg:h-[25rem] mb-[3rem] lg:mb-[0px]">
                    <img alt="country's flag" className="w-[95%] h-full mx-auto lg:mx-[0px]" src={receivedData['flags']['png']}></img>
                </div>
                {/*div containing information on selected country*/}
                <div className="p-[1%] lg:p-[7%]">
                    <h1 className={lightMode ? "text-3xl font-bold mb-[1.3rem] text-black" : "text-3xl font-bold mb-[1.3rem] text-white"}>{receivedData['name']}</h1>
                    <article className={lightMode ? "grid grid-cols-1 lg:grid-cols-2 text-slate-800 space-y-[0.8rem] lg:space-y-[0px]" : "grid grid-cols-1 lg:grid-cols-2 text-white/80 space-y-[0.8rem] lg:space-y-[0px]"}>
                        <div className="space-y-[0.8rem]">
                            <div><strong>Native Name:</strong> {receivedData['nativeName']}</div>
                            <div><strong>Population:</strong> {popu2}</div>
                            <div><strong>Region:</strong> {receivedData['region']}</div>
                            <div><strong>Sub Region:</strong> {receivedData['subregion']}</div>
                            <div><strong>Capital:</strong> {receivedData['capital']}</div>

                        </div>

                        {
                            /*array mapping for languages of a country in extra info*/
                            receivedData['languages'].map(lang => {
                                if (receivedData['languages'].indexOf(lang) === (receivedData['languages'].length - 1)) {
                                    langs.push(`${lang['name']}`)
                                }
                                else {
                                    langs.push(`${lang['name']}, `)
                                }

                            })}

                        <div className="space-y-[0.8rem]">
                            <div><strong>Top Level Domain: </strong> {receivedData['topLevelDomain']}</div>
                            <div><strong>Currencies: </strong> {receivedData['currencies'][0]['name']}</div>
                            <div><strong>Languages: </strong>{langs}</div>

                        </div>
                    </article>
                    {receivedData['borders'] ?
                        <aside className="mt-[4rem] space-y-[0.5rem]">
                            <span className={lightMode ? "text-slate-500 inline-block font-bold" : "text-white/80 inline-block font-bold"}>Border Countries:</span>
                            {receivedData['borders'].map(it => {
                                borders.push(<BorderCountry lightMode={lightMode} key={it}>{it}</BorderCountry>)
                            })}
                            {borders}
                        </aside> :
                        ''
                    }
                </div>
            </div>
        </section>
    );
}


ExtraInfo.propTypes = {
    receivedData: PropTypes.object,
    setShowMain: PropTypes.func,
    lightMode: PropTypes.bool
}

BorderCountry.propTypes = {
    children: PropTypes,
    lightMode: PropTypes.bool
}