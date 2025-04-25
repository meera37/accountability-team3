import React,{useState} from 'react'
import SideBar from '../components/SideBar'
import { Col, Container, Row } from 'react-bootstrap'
import ActivityLister from '../components/ActivityLister'
import Explore from '../components/Explore'
import Notifications from '../components/Notifications'
import { useParams } from 'react-router-dom'

function DashBoard({setDp }) {
    const [tab,setTab] = useState('dashboard')
    const { username } = useParams()
    return (
        <>
            <Container fluid>
                <Row className="relative flex-wrap-reverse flex-md-row flex-md-wrap">
                    <Col className="bg-slate-100 fixed bottom-0 md:!sticky  z-5 shadow-2xl" sm={12} md={3} lg={2} >
                        <SideBar setTab={setTab} />
                    </Col>
                    <Col className='p-5' sm={12} md={9} lg={10}>
                        <ActivityLister  setDp={setDp}  userid={username} tab={tab}/>
                        <Explore tab={tab} />
                        <Notifications tab={tab} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DashBoard
