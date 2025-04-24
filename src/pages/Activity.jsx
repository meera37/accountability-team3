
import React , { useState , useEffect }  from 'react';
import  Grid from '../components/Grid'
import { Container , Row , Col } from 'react-bootstrap';
import Options from '../components/Options'
import Mgrid from '../components/Mgrid';

function Activity({title}){
	

 return(
	 <>
	 	<h1 className="text-center mt-3 fw-bold mb-4"> { title || 'Activity' } </h1>
		<Container className="lg:mt-[30px] bg-amber-100 mb-5 rounded shadow">
			
			<Row className='justify-center items-start w-100'>
				<Col md={6}>
					<Grid />
					{/* <Mgrid/> */}
				</Col>
				<Col md={4}>
					<Options />
				</Col>
			</Row>
		</Container>
	 </>
 );
}

export default Activity;
