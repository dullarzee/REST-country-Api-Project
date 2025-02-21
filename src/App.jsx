import { useState } from 'react'
import Header from './header'
import Filters from './filters'
import MainContent from './mainContent';
import ExtraInfo from './extraInfoContent'
import FilteringLogic from './filteringLogic'
import './tailwind/App.css'



function App() {
  const [lightMode, setMode] = useState(true);
  const [typeIn, setTypeIn] = useState('');
  const [region, setRegion] = useState('');
  const [showMain, setShowMain] = useState(true);
  const [extraData, setExtraData] = useState(null);

  const [addAOnce, setAddAOnce] = useState(true);


if(addAOnce)
{
    const a = document.createElement('a');
    a.style.display = 'none';
    a.id = 'scrollUp';
    a.href = '#';
    const body = document.querySelector('body');
    body.appendChild(a);
    setAddAOnce(false);
}
  
  if(lightMode){
    document.querySelector('body').style.backgroundColor = 'hsl(0, 0%, 98%)'
  }
  else{
    document.querySelector('body').style.backgroundColor = 'hsl(207, 26%, 17%)'
  }



  return (
    <div className="font-nunitoSans text-[14px] lg:text-base">
    <header>
      <Header lightMode={lightMode} setMode={setMode} showMain={showMain}/>
    </header>

    {showMain ?
       <>
          <Filters typeIn={typeIn} setTypeIn={setTypeIn} region={region} setRegion={setRegion} lightMode={lightMode}/>
          <MainContent>
            <FilteringLogic setExtraData={setExtraData} typeIn={typeIn} region={region} showMain={showMain} setShowMain={setShowMain} lightMode={lightMode}/>
          </ MainContent> 
      </>
    :   <ExtraInfo receivedData={extraData} setShowMain={setShowMain} lightMode={lightMode}/>
    }
      
    </div>
  );
}

export default App
