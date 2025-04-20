import React from 'react'

function Notifications({tab}) {
    return (
        <div aria-hidden={ tab !='notifications'} className={`p-4 pt-0 space-y-6 ${tab=='notifications'? 'block':'hidden' }`}>
           <h1 className="text-center text-3xl my-5">
                Notifications
           </h1>
        </div>
      )
}

export default Notifications