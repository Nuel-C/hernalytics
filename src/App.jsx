import './App.css'
import Logo from './assets/logo.png'
import Instagram from './assets/instagram.jpg'
import Twitter from './assets/twitter.jpg'
import Whatsapp from './assets/watsapp.jpg'
import { DoughnutChart } from './components/DoughnutChart';
import { MiniMap } from './components/MiniMap';
import { useEffect, useState } from 'react'



function App() {

  const myHTML = 
  `<div style="width: 100%; background-color: #1b1f30; padding: 5%; border-bottom-left-radius:20px; border-Top-left-radius:20px;">
    <iframe title="" aria-label="Map" id="datawrapper-chart-CNbmF" src="https://datawrapper.dwcdn.net/CNbmF/4/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="650" data-external="1"></iframe>
    <script type="text/javascript">
        !function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
    </script>
  </div>`;
  const showChild = (e) => {
    e.target.nextElementSibling.classList.toggle('hidden')
  }
  let PresidentData = new Array()
  let MapData = new Array()
  let StateData = new Object()
  const [presidentData, setPresidentData] = useState([])
  const [mapData, setMapData] = useState([])
  const [stateData, setStateData] = useState({})



  
  
  useEffect(() => {
    return () => {
      const fetchPresidentData = () => {
        fetch('https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=president', {
          method: "GET",
          headers: {
              "Accept": "application/json"
          },
          redirect: 'follow'
        })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          data.map(info => PresidentData.push(info))
          setPresidentData(PresidentData)
          console.log(PresidentData)
        })
      }
      fetchPresidentData()
    
      const fetchStateData = () => {
        fetch('https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=state_result', {
          method: "GET",
          headers: {
              "Accept": "application/json"
          },
          redirect: 'follow'
        })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          StateData = data
          setStateData(StateData)
          console.log(StateData)
        })
      }
      fetchStateData()
    
      const fetchMapData = () => {
        fetch('https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=map', {
          method: "GET",
          headers: {
              "Accept": "application/json"
          },
          redirect: 'follow'
        })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          data.map(info => MapData.push(info))
          setMapData(MapData)
          console.log(MapData)
        })
      }
      fetchMapData()
    }
  }, [])
  
  


  return (
    <div >
      <div className="App lg:px-20 px-12 py-7">
        {/* Nav */}
      <div>
        {/* large screen nav */}
        <div className='hidden lg:flex flex-row lg:justify-evenly text-white text-center align-center items-center' style={{fontWeight:'600', fontSize:'12px'}}>
          <img src={Logo} style={{width:'183px', height:'32px'}}/>
          <span className='hidden lg:flex'>ABOUT US</span>
          <div>
              <div onClick={showChild}>
              OUR COMMUNITIES <i class="las la-caret-down px-2"></i>
              </div>
              <div className='p-3 hidden absolute bg-white text-black'>
                <div className='flex flex-row justify-between items-center space-x-5'>
                  <div className='flex flex-row justify-between items-center space-x-5'>
                    <div className='bg-green-200 p-3 rounded'>
                      <i class="las la-user la-2x text-green-700"></i>
                    </div>
                    <div className='text-start'>
                      <p className='font-bold text-xl'>General User</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                  </div>
                  <div className='flex flex-row justify-between items-center space-x-5'>
                    <div className='bg-green-200 p-3 rounded'>
                      <i class="las la-users la-2x text-green-700"></i>
                    </div>
                    <div className='text-start'>
                      <p className='font-bold text-xl'>Election Candidates</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-row justify-between items-center space-x-5'>
                  <div className='flex flex-row justify-between items-center space-x-5'>
                    <div className='bg-green-200 p-3 rounded'>
                      <i class="las la-users-cog la-2x text-green-700"></i>
                    </div>
                    <div className='text-start'>
                      <p className='font-bold text-xl'>Decide To Run (DTR)</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                  </div>
                  <div className='flex flex-row justify-between items-center space-x-5'>
                    <div className='bg-green-200 p-3 rounded'>
                      <i class="las la-user-astronaut la-2x text-green-700"></i>
                    </div>
                    <div className='text-start'>
                      <p className='font-bold text-xl'>Reporters</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          <div>
              <div onClick={showChild}>
              ELECTION DATA <i class="las la-caret-down px-2"></i>
              </div>
              <div className='p-3 hidden absolute bg-white text-black text-start'>
                <p>Election Day Live Updates</p>
                <br />
                <p>Post-Election Analysis</p>
              </div>
            </div>
          {/* <span className='hidden lg:flex'>OUR COMMUNITIES <i class="las la-caret-down px-2"></i></span> */}
          {/* <span className='hidden lg:flex'>ELECTION DATA <i class="las la-caret-down px-2"></i></span> */}
          <span className='hidden lg:flex'>E-BUDDY</span>
          <span className='hidden lg:flex'>VEO PLATFORM</span>
          <span className='hidden lg:flex'>LOGIN</span>
          <button className='hidden lg:flex text-black rounded' style={{fontWeight:'600', backgroundColor:'#E5B805', paddingTop:'12px', paddingBottom:'12px', paddingLeft:'32px', paddingRight:'32px'}}>SIGN UP</button>
        </div>

        {/* mobile nav / medium screen nav */}
        <div className='lg:hidden flex flex-row justify-between text-white text-center align-center items-center' style={{fontWeight:'600', fontSize:'12px'}}>
          <img src={Logo} style={{width:'183px', height:'32px'}}/>
          <i class="las la-bars"></i>
        </div>
      </div>

      {/* Body */}
      <div>
        <div className='lg:px-12 py-12 text-white flex flex-row space-x-5'>
          <span className='md:text-3xl text-lg' style={{fontWeight:'700'}}>Post Election Data</span>
          <div style={{fontWeight:'600'}} className='presidential md:text-sm text-xs'>PRESIDENTIAL / 2023</div>
        </div>

        <div className='lg:px-12 flex md:flex-row flex-col justify-between'>
          <div className=''>
            <span className='text-white' style={{fontSize:'24px', fontWeight:'500'}}>Presidential Race</span>
          </div>

          <div className='flex lg:flex-row flex-col justify-between space-x-5 text-white'>
            <div>
              <div className='border border-solid rounded p-2 mb-3 ml-5 flex flex-row justify-between' onClick={showChild} style={{borderColor: '#252B46'}}>
                Election Data <i class="las la-caret-down px-2 mt-1"></i>
              </div>
              <div style={{backgroundColor: "#1a1d2d"}} className='p-3 hidden absolute'>
                <p className='mb-3'>Pre-Election</p>
                <hr />
                <p className='mt-3 mb-3'>Election Day Live Updates</p>
                <hr />
                <p className='mt-3'>Post-Election Analysis</p>
              </div>
            </div>
            <div>
              <div className='border border-solid rounded p-2 mb-3 flex flex-row justify-between' onClick={showChild} style={{borderColor: '#252B46'}}>
              Presidential <i class="las la-caret-down px-2 mt-1"></i>
              </div>
              <div style={{backgroundColor: "#1a1d2d"}} className='p-3 hidden absolute'>
                <p className='mb-3'>Presidential</p>
                <hr />
                <p className='mt-3 mb-3'>Gubernatorial</p>
                <hr />
                <p className='mt-3 mb-3'>Senate</p>
                <hr />
                <p className='mt-3'>House of Representatives</p>
              </div>
            </div>
            <div>
              <div className='border border-solid rounded p-2 mb-3 flex flex-row justify-between' onClick={showChild} style={{borderColor: '#252B46'}}>
              2023 <i class="las la-caret-down px-2 mt-1"></i>
              </div>
              <div style={{backgroundColor: "#1a1d2d"}} className='p-3 hidden absolute'>
                <p className='mb-3'>2023</p>
                <hr />
                <p className='mt-3 mb-3'>2019</p>
                <hr />
                <p className='mt-3 mb-3'>2015</p>
                <hr />
                <p className='mt-3 mb-3'>2011</p>
                <hr />
                <p className='mt-3 mb-3'>2007</p>
                <hr />
                <p className='mt-3 mb-3'>2003</p>
                <hr />
                <p className='mt-3 mb-3'>1999</p>
                <hr />
                <p className='mt-3 mb-3'>1995</p>
                <hr />
                <p className='mt-3 mb-3'>1991</p>
                <hr />
                <p className='mt-3 mb-3'>1987</p>
                <hr />
                <p className='mt-3 mb-3'>1983</p>
                <hr />
                <p className='mt-3 mb-3'>1979</p>
                <hr />
                <p className='mt-3 mb-3'>1975</p>
                <hr />
                <p className='mt-3 mb-3'>1971</p>
                <hr />
                <p className='mt-3 mb-3'>1967</p>
                <hr />
                <p className='mt-3 mb-3'>1963</p>
                <hr />
                <p className='mt-3'>1959</p>
              </div>
            </div>
            {/* <span className='flex flex-row justify-between lg:ml-8 dropdown my-2'>Election Data <i class="las la-caret-down px-2"></i></span> */}
            {/* <span className='flex flex-row justify-between lg:ml-8 dropdown my-2'>Presidential <i class="las la-caret-down px-2"></i></span> */}
            {/* <span className='flex flex-row justify-between lg:ml-8 dropdown my-2'>2023 <i class="las la-caret-down px-2"></i></span> */}
          </div>
        </div>

        <div className='lg:mx-12 my-5' style={{width:'100%', borderBottom:'1px solid #242B47'}}></div>

        <div className='lg:mx-12 p-5 lg:p-12 my-5 text-left' style={{border:'0.5px solid grey', borderRadius:'20px', backgroundColor:'#1b1f30'}}>
          <p style={{color:'white', fontWeight:'600'}}>Presidential Result</p><br/>
          <table className='w-full text-white text-sm lg:text-sm'>
            <thead>
              <tr style={{borderBottom:'1px solid grey', borderTop:'1px solid grey'}}>
                <th className='w-1/3 lg:p-5 bg-slate-300 text-black'>Party</th>
                <th className='w-1/3 lg:p-5 bg-slate-300 text-black'>Candidate</th>
                <th className='w-1/3 lg:p-5 bg-slate-300 text-black'>Votes</th>
              </tr>
            </thead>
            <tbody>
            {
              presidentData.map(data =>
                <tr className='text-white w-full my-5' style={{borderBottom:'1px solid grey'}}>
                  <td className='w-1/3 lg:p-5'>{data.political_party_name}</td>
                  <td className='w-1/3 lg:p-5'>{data.full_name}</td>
                  <td className='w-1/3 lg:p-5'>{data.candidates_vote}</td>
                </tr>
              )
            }
            </tbody>
          </table>
        </div>

        <div className='lg:mx-12' style={{border:'0.5px solid grey', borderRadius:'20px', backgroundColor:'#1b1f30'}}>
          <div className='flex flex-row justify-between'>
            <div dangerouslySetInnerHTML={{ __html: myHTML }} style={{width:'80%'}}/>
            <div style={{width:'20%', backgroundColor:'#1b1f30', borderTopRightRadius:'20px', borderBottomRightRadius:'20px', padding:'5%'}} className='flex flex-col justify-between'>
              <div className='flex flex-col justify-between'>
                <button style={{backgroundColor:'white', borderTopLeftRadius:'5px', borderTopRightRadius:'5px'}} className='m-2 lg:w-10 w-5 lg:p-2'><i class="las la-plus"></i></button>
                <button style={{backgroundColor:'white', borderBottomLeftRadius:'5px', borderBottomRightRadius:'5px'}} className='m-2 lg:w-10 w-5 lg:p-2'><i class="las la-minus"></i></button>
              </div>
              <div className='flex flex-col justify-between p-0'>
                <div className='flex flex-row justify-between py-2 text-left'>
                  <button className='lg:p-5 p-2' style={{backgroundColor:'#18a1cd'}}></button>
                  <span className='text-white lg:text-lg text-xs'>APC</span>
                </div>
                <div className='flex flex-row justify-between py-2 text-left'>
                  <button className='lg:p-5 p-2' style={{backgroundColor:'#09bb9f'}}></button>
                  <span className='text-white lg:text-lg text-xs'>LP</span>
                </div>
                <div className='flex flex-row justify-between py-2 text-left'>
                  <button className='lg:p-5 p-2' style={{backgroundColor:'#c71e1d'}}></button>
                  <span className='text-white lg:text-lg text-xs'>PDP</span>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:mx-12 p-5 lg:p-12 my-5 text-left m-2' style={{borderRadius:'20px'}}>
            <p style={{color:'white', fontWeight:'600'}}>State Leading Party</p><br/>
            <table className='w-full text-white text-sm lg:text-sm'>
              <thead>
                <tr style={{borderBottom:'1px solid grey', borderTop:'1px solid grey'}}>
                  <th className='w-1/3 lg:p-5 bg-slate-300 text-black'>State</th>
                  <th className='w-1/3 lg:p-5 bg-slate-300 text-black'>Leading Party</th>
                  <th className='w-1/3 lg:p-5 bg-slate-300 text-black'>Votes</th>
                </tr>
              </thead>
              <tbody>
              {
                mapData.map(data =>
                  <tr className='text-white w-full my-5' style={{borderBottom:'1px solid grey'}}>
                    <td className='w-1/3 lg:p-5'>{data.name}</td>
                    <td className='w-1/3 lg:p-5'>{data.political_party_name}</td>
                    <td className='w-1/3 lg:p-5'>{data.candidate_votes}</td>
                  </tr>
                )
              }
              </tbody>
            </table>
          </div>
        </div>

        <div className='lg:mx-12 my-5 flex lg:flex-row flex-col space-y-5 lg:space-x-4' style={{backgroundColor:'#1b1f30', border:'1px solid grey', borderRadius:'20px', padding:'2%', marginTop:'5%'}}>
          <div style={{backgroundColor:'#1b1f30', border:'1px solid grey', borderRadius:'20px'}} className='lg:w-1/3 text-white text-center lg:mt-5'>
            <DoughnutChart/>
          </div>

          <div className='lg:w-1/3'>
            <MiniMap/>
          </div>

          <div style={{backgroundColor:'#1b1f30', border:'1px solid grey', borderRadius:'20px', padding:'2%'}} className='lg:w-1/3 flex flex-col text-white text-xs text-left'>
            <div style={{marginBottom:'15%'}}>
              <span>TOTAL ELECTED MEMBERS</span><br/>
              <span style={{fontWeight:'600', fontSize:'20px'}}>10,000</span>
            </div>
            <div style={{marginBottom:'15%'}}>
              <span>MALE <i class="las la-mars" style={{color:'yellow'}}></i></span><br/>
              <span style={{fontWeight:'600', fontSize:'20px'}}>9,000</span>
            </div>
            <div style={{marginBottom:'15%'}}>
              <span>FEMALE <i class="las la-venus" style={{color:'yellow'}}></i></span><br/>
              <span style={{fontWeight:'600', fontSize:'20px'}}>1,000</span>
            </div>
          </div>
        </div>

      </div>

        <div className='hidden lg:block lg:mx-12 p-5 lg:p-12 my-5 text-left' style={{border:'0.5px solid grey', borderRadius:'20px', backgroundColor:'#1b1f30'}}>
          <p style={{color:'white', fontWeight:'600'}}>State Results</p><br/>
          <table className='w-full text-white text-sm lg:text-sm'>
            <thead>
              <tr style={{borderBottom:'1px solid grey', borderTop:'1px solid grey'}}>
                <th className='lg:p-5 bg-slate-300 text-black'>State</th>
                <th className='lg:p-5 bg-slate-300 text-black'>Party 1</th>
                <th className='lg:p-5 bg-slate-300 text-black'>Votes</th>
                <th className='lg:p-5 bg-slate-300 text-black'>Party 2</th>
                <th className='lg:p-5 bg-slate-300 text-black'>Votes</th>
                <th className='lg:p-5 bg-slate-300 text-black'>Party 3</th>
                <th className='lg:p-5 bg-slate-300 text-black'>Votes</th>
              </tr>
            </thead>
            <tbody>
            {
              Object.keys(stateData).map(data=>
                <tr className='' style={{borderBottom:'1px solid grey'}}>
                  <td className='lg:p-5'>{data}</td>
                  {
                    stateData[data].map(info=>
                      <>
                        <td className='lg:p-5'>{info.political_party_name}</td>
                        <td className='lg:p-5'>{info.candidate_votes}</td>
                      </>
                    )
                  }
                </tr>
               )
            }
            </tbody>
          </table>
        </div>

      </div>

     

      <footer className='bg-gray-700 relative p-8 px-20'>
        <div className='flex lg:flex-row flex-col justufy-around lg:items-center items-start space-x-16'>
          <div className='flex flex-col justufy-between items-start text-white mb-10 relative lg:left-0 left-10'>
            <img src={Logo} alt="" className='mb-3' />
            <p className='mb-3'>Isale Eko Avenue, Dolphin Estate, Ikoyi, Lagos, <br /> Nigeria</p>
            <p>© 2022 Hernalytics</p>
          </div>
          <div className='flex flex-col justufy-between items-start text-white mb-10'>
            <p className='font-bold mb-3'>About</p>
            <p className='mb-3'>Our Story</p>
            <p className='mb-3'>Blog</p>
            <p>About Hernalytics</p>
          </div>
          <div className='flex flex-col justufy-between items-start text-white mb-10'>
            <p className='font-bold mb-3'>Support</p>
            <p className='mb-3'>FAQs</p>
            <p className='mb-3'>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div className='flex flex-col justufy-between items-start text-white mb-10'>
            <p className='font-bold mb-3'>Let's chat!</p>
            <p className='mb-3'>hernalytics@gmail.com</p>
            <p className='mb-3'>+234 801 234 5678</p>
            <div className='flex flex-row justufy-between items-center space-x-5'>
            <img src={Instagram} alt="" className='w-8 h-8 rounded-full'/>
            <img src={Twitter} alt="" className='w-8 h-8 rounded-full'/>
            <img src={Whatsapp} alt="" className='w-8 h-8 rounded-full'/>
            </div>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default App
