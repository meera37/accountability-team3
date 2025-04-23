import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import ExploreCard from "./ExploreCard";
import { fetchAllUserHistoryApi } from '../services/allApi';
import InfoModal from './InfoModal'; 

function Explore({tab}) {

  const [historyItems, setHistoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const currentUser = localStorage.getItem('curUser');
  const [modalShow, setModalShow] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleCloseModal = () => setModalShow(false);
  const handleOpenModal = (activity) => {
    setSelectedActivity(activity);
    setModalShow(true);
  };

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true); 

      try {
        const result = await fetchAllUserHistoryApi();
        const userDataArray = result?.data || [];
        const extractedActivities = [];

        userDataArray.forEach(user => {
          for (const key in user) {
            if (user.hasOwnProperty(key) && typeof user[key] === 'object' && user[key] !== null && user[key].hasOwnProperty('type')) {
              const activity = user[key];
              
              if (activity.type === 'public') {
                console.log("Public Activity:", { name: key, details: activity });
              }
              
              extractedActivities.push({ name: key, details: activity, userId: user.id });
            }
          }
        });
const filteredActivities = extractedActivities.filter(activity => activity.userId !== currentUser);
      
setHistoryItems(filteredActivities)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user history:", error);
        setError(error);
        setLoading(false);
      }
    };

    if (tab === 'explore') {
      fetchHistory();
    }  
      setLoading(false);
  }, [tab, currentUser]); 


  return (

    <>
      <div aria-hidden={ tab !='explore'} className={`p-4 pt-0 space-y-6 ${tab=='explore'? 'block':'hidden' }`}>
      <Container className="d-flex justify-content-center align-items-center flex-column">

        <h1 className='mt-5 mb-5 text-center'>Explore more activities</h1>

<Row>
  {historyItems
  .filter(activity=>activity.details.type === 'public')
  .map(item=>(
          <ExploreCard key={`${item.userId}-${item.name}`} activity={item} openModal={handleOpenModal}/>
  ))}
</Row>
{historyItems.length ===0 && !loading && !error && (
<p>
    No activities found.
  
</p>)}

      </Container>
      {/* <div className='text-danger text-center'><p> 🔃 Refresh Network Error </p></div> */}

    </div >
    <InfoModal show={modalShow} handleClose={handleCloseModal} activityDetails={selectedActivity} />
    </>
    
  )
}

export default Explore