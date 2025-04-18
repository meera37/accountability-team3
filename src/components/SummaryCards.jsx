import React from 'react'

function SummaryCards() {
  return (
    <>
        <div className='text-center grid grid-cols-1 sm:grid-cols-3 gap-4 p-4'>
        <div className="bg-blue-500 text-white p-4
 rounded-xl shadow-md">
        <p className="text-lg font-semibold">Total Activities</p>
        <h2 className="text-3xl font-bold">47</h2>
      </div>
      
      <div className="bg-green-500 text-white p-4
 rounded-xl shadow-md">
        <p className="text-lg font-semibold">Public Activities</p>
        <h2 className="text-3xl font-bold">7</h2>
      </div>

      <div className="bg-purple-500 text-white p-4 rounded-xl shadow-md">
        <p className="text-lg font-semibold">Private Activities</p>
        <h2 className="text-3xl font-bold">4</h2>
      </div>
        </div>

    </>
  )
}

export default SummaryCards