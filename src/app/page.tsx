



export default function Home() {
  return (
    < >
      <div className='nav-bar bg-slate-600 w-screen h-20 '>
        <div className='rounded-full bg-red-600  hover:animate-ping flex  h-20 w-20'></div>
      </div>


      <div className='bg-slate-800 flex '>
        <h1>SENCES</h1>
        <div className='grid grid-rows-4 grid-flow-col '>
          <div className='schene bg-slate-500 h-20  rounded-lg  col-span-6 m-5'>
            <input  placeholder='Paste YouTube link and press Enter...' className='w-full bg-transparent'  
        ></input>

            <div id="song">
              
              
            <iframe width="1108" height="623" src="https://www.youtube.com/watch?v=GzuMVf0Bzp4" title="biblically accurate angels type beat [sold]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

              
            </div>
            
            
          </div>
        </div>
  

      </div>

    </>
  )
}
