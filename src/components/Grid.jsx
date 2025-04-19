import React,{ useState, useEffect } from 'react'

function Grid() {
  const [year , setYear] = useState('');

  useEffect(()=> {
    let year = new Date().getFullYear()
    setYear(year)
  },[])

   const handleClick = (e) => {
      console.log(e)
   }

    const col_fill = (key,value) => {
      // console.log(typeof(key))
       const dayElement = [];
       for(let i = 0 ; i < 31 ;i++){
         if(i < value){
            dayElement.push(
              <button style={{}} key={`${key}-${i}`} className=" markinput hover:bg-green-500 border-dark rounded-0 border-1"  onClick={(e)=>{handleClick(e)}} variant="light"></button>
          )
         }else{
          dayElement.push(
            <button key={`${key}-${i}`} className="border markinput bg-slate-500 border-dark rounded-0 border- invisible"  onClick={(e)=>{handleClick(e)}} variant="secondary" disabled></button>
          )
         }
       }

       let text = key =='July'? 'Ju':key[0]
       return <div key={`${key}`} className='d-flex flex-column'>
                <p className="mb-0 text-dark  text-center"><b>{text}</b></p>
                  {dayElement}
              </div>

    }

    const days = [31,28,31,30,31,30,31,30,31,30,31,30,31,]
    const months =['January','February','March','April','May','June','July','August','September','October','November','December'];
    const indices = new Array(31).fill(1);

    const handleChange = (val) => {
      setYear(val)
      if ((val % 400 == 0) || (val % 4 == 0 && (val % 100 != 0))){
        days[1] = 29;
      }else{
        days[1] = 28;
      }
      console.log(days)
    }

  return (
    <div  className="calendar-grid my-1">

        <div className="flex justify-center">
          <button className="rounded-3 bg-red-500 ms-2 px-3 py-2" onClick={()=>{handleChange(year-1)}}> - </button>
          <span className="fs-3">Year { year }</span>
          <button className="rounded-3 bg-green-400 px-3 py-2" onClick={()=>{handleChange(year+1)}}> + </button>
        </div>

        <div className="d-flex my-2">
            <div className="d-flex flex-column">
                <p className='m-0 h-[25px]'></p>
                {
                  indices.map( (num,idx) => <p key={`Day-${idx+1}`} className="mb-0 text-dark me-2 text-center h-[25px]">{idx+1}</p> )
                }
            </div>

            {
              months.map( (obj,idx) =>  col_fill(obj,days[idx])  )
            }
        </div>

    </div>
  )
}

export default Grid