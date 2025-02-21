import darkMoon from '/icon-moon-dark.svg'
import PropTypes from 'prop-types'



Header.propTypes = {
    setMode: PropTypes.func,
    lightMode: PropTypes.bool,
    showMain: PropTypes.bool
}

export default function Header({lightMode, setMode, showMain})
{
    function handleClick()
    {
        setMode(!lightMode);
    }

    return(
    <>
        <div className={lightMode ? "flex items-center justify-between px-[5%] h-[4.5rem] bg-white text-black" 
        : 'flex items-center justify-between px-[5%] h-[4.5rem] text-white bg-darkHeaderBg'} >
            <h1 className="text-base lg:text-2xl font-bold">Where in the world?</h1>
            <button onClick={handleClick} className="cursor-pointer flex items-end px-[0.4rem] py-[0.2rem] lg:px-[0.8rem] lg:py-[0.3rem] hover:ring-slate-500 hover:ring-2">
            <img alt='click to toggle theme'
            src={darkMoon} className="w-[1.2rem] lg:w-[1.4rem] "></img>
            <span className="block ml-[0.6rem] text-sm lg:text-base font-semibold">{lightMode ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
        </div>

        {showMain ?
        <div className={lightMode ? 
            "text-base lg:text-xl w-[90%] mt-[1.3rem] mx-auto text-slate-600" 
            : "text-base lg:text-xl w-[90%] mt-[1.3rem] mx-auto text-slate-200"}> <i>Select a Country</i> </div>
        : ""}
    </>
    );
}
