import React from 'react'

export const MiniMap = () => {

const myHTML = 
  `<div style="width: 100%; background-color: #1b1f30; padding: 0%; border-bottom-left-radius:20px; border-Top-left-radius:20px;">
    <iframe title="" aria-label="Map" id="datawrapper-chart-CNbmF" src="https://datawrapper.dwcdn.net/CNbmF/4/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="250" data-external="1"></iframe>
    <script type="text/javascript">
        !function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
    </script>
  </div>`;

  return (
    <div style={{border:'0.5px solid grey', borderRadius:'20px'}} className='text-center lg:py-10'>
        <span className='text-xs text-white'>CANDIDATES BY GEOPOLITICAL ZONES</span>
        <div className='mx-3 flex flex-row justify-between mt-5'>
          <div dangerouslySetInnerHTML={{ __html: myHTML }} style={{width:'80%'}}/>
          <div style={{width:'20%', backgroundColor:'#1b1f30', borderTopRightRadius:'20px', borderBottomRightRadius:'20px', padding:'5%'}} className=''>
            <div className='flex flex-col justify-between p-0'>
              <div className='flex flex-row justify-between py-2 text-left'>
                <button className='p-2' style={{backgroundColor:'#18a1cd'}}></button>
                <span className='text-white text-xs'>APC</span>
              </div>
              <div className='flex flex-row justify-between py-2 text-left'>
                <button className='p-2' style={{backgroundColor:'#09bb9f'}}></button>
                <span className='text-white text-xs'>LP</span>
              </div>
              <div className='flex flex-row justify-between py-2 text-left'>
                <button className='p-2' style={{backgroundColor:'#c71e1d'}}></button>
                <span className='text-white text-xs'>PDP</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
