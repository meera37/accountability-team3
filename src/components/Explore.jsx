import React from 'react'

function Explore({tab}) {
  return (
    <div aria-hidden={ tab !='explore'} className={`p-4 pt-0 space-y-6 ${tab=='explore'? 'block':'hidden' }`}>
       <h1 className="text-center text-3xl my-5">
        Explore
       </h1>
    </div>
  )
}

export default Explore