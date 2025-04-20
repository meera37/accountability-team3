import React from 'react'
import { Container } from 'react-bootstrap'
import ExploreCard from "./ExploreCard";

function Explore({tab}) {
  return (

    <>
      <div aria-hidden={ tab !='explore'} className={`p-4 pt-0 space-y-6 ${tab=='explore'? 'block':'hidden' }`}>
      <Container className="d-flex justify-content-center align-items-center flex-column">

        <h1 className='mt-5 mb-5 text-center'>Explore more activitys</h1>

        <ExploreCard/>

      </Container>
    </div >
    </>
    
  )
}

export default Explore