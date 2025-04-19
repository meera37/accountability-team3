import React, { useState , useEffect } from 'react'
import SummaryCards from './SummaryCards'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { fetchSingleUserApi } from '../services/allApi';

function ActivityLister({tab}) {

   useEffect(()=>{
    let curUser = localStorage.getItem('curUser')
    // console.log({curUser})
    fetchdata(curUser)
   },[])

   const fetchdata = async (curUser) => {
      const request = await fetchSingleUserApi(curUser)
      const data = request.data;
      console.log(data)
   }

   // console.log(`Current tab ${tab}`)
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  const [activityName, setActivityName] = useState('');
  const [activityDescription, setActivityDescription] = useState('');
  const [activityDuration, setActivityDuration] = useState('');
  const [activityType, setActivityType] = useState('public');
  const [publicActivities, setPublicActivities] = useState([]);
  const [privateActivities, setPrivateActivities] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [selectedActivityDescription, setSelectedActivityDescription] = useState('');

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false)
  const handleOpenDescriptionModal = (description) => {
    setSelectedActivityDescription(description);
    setShowDescriptionModal(true);
  };
  const handleCloseDescriptionModal = () => setShowDescriptionModal(false);

  const handleCreateActivity = () => {
    const newActivity = {
      name: activityName,
      description: activityDescription,
      duration: activityDuration,
      type: activityType,
      author: localStorage.getItem('curUser') ,
    };

    console.log(newActivity);
    // TODO Form validation
    


    setAllActivities([...allActivities, newActivity]);

    if (activityType === 'public') {
      setPublicActivities([...publicActivities, newActivity]);
    } else {
      setPrivateActivities([...privateActivities, newActivity]);
    }

    setActivityName('');
    setActivityDescription('');
    setActivityDuration('');
    setActivityType('public');

    handleClose();
  };



  const filteredAllActivities = allActivities.filter(activity =>
    activity.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredPublicActivities = publicActivities.filter(activity =>
    activity.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredPrivateActivities = privateActivities.filter(activity =>
    activity.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>

<div className="p-4 space-y-6">

      <SummaryCards />

<div className="flex justify-center items-center gap-3 flex-wrap">

  <div className="relative w-[300px] sm:w-[400px]">
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search Activities"
      className="w-full border border-gray-300 rounded-full px-4 pr-10 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {search && (
      <button
        onClick={() => setSearch('')}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
        aria-label="Clear search"
      >
        ×
      </button>
    )}
  </div>


  <button
    onClick={handleOpen}
    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition text-sm"
  >
    Add Activity
  </button>
</div>


<h2 className="text-lg font-semibold text-gray-800 text-center mt-5 mb-3">List of Activities</h2>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add New Activity</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>

              <Form.Group className="mb-3" controlId="activityName">
                <Form.Label>Name of Activity</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter activity name"
                  value={activityName}
                  onChange={(e) => setActivityName(e.target.value)}
                />
              </Form.Group>


              <Form.Group className="mb-3" controlId="activityDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description"
                  value={activityDescription}
                  onChange={(e) => setActivityDescription(e.target.value)}
                />
              </Form.Group>


              <Form.Group className="mb-3" controlId="activityDuration">
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  as="select"
                  value={activityDuration}
                  onChange={(e) => setActivityDuration(e.target.value)}
                >
                  <option value="">Select Duration</option>
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                  <option value="60">60</option>
                </Form.Control>
              </Form.Group>


              <Form.Group className="mb-3" controlId="activityType">
                <Form.Label>Type of Activity</Form.Label>
                <Form.Control
                  as="select"
                  value={activityType}
                  onChange={(e) => setActivityType(e.target.value)}
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleCreateActivity}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>

{/* Description Modal */}
      <Modal show={showDescriptionModal} onHide={handleCloseDescriptionModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Activity Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedActivityDescription}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDescriptionModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        <div className="bg-white rounded shadow p-4 mb-4">
        <h4 className="mb-2 font-semibold text-gray-800">All Activities</h4>
        {
         filteredAllActivities.length === 0 ? (
          <p>No activities yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600 text-sm font-semibold">Activity Name</th>
                  <th className="px-4 py-2 text-left text-gray-600 text-sm font-semibold">Creator</th>
                  <th className="px-4 py-2 text-center text-gray-600 text-sm font-semibold">Description</th>
                  <th className="px-4 py-2 text-center text-gray-600 text-sm font-semibold">Type</th>
                  <th className="px-4 py-2 text-center text-gray-600 text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredAllActivities.map((activity, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="px-4 py-2 text-gray-700 text-sm">{activity.name}</td>
                    <td className="px-4 py-2 text-gray-700 text-sm">by {activity.author}</td>
                    <td className="px-4 py-2 text-center">
                      <button  onClick={() => handleOpenDescriptionModal(activity.description)} className="text-blue-500 hover:underline text-sm">
                        Know more
                      </button>
                    </td>
                    <td className="px-4 py-2 text-center text-gray-700 text-sm">
                      {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="bg-white rounded shadow p-4 mb-4">
        <h4 className="mb-2 font-semibold text-gray-800">Public Activities</h4>
        {filteredPublicActivities.length === 0 ? (
          <p>No public activities yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600 text-sm font-semibold">Activity Name</th>
                  <th className="px-4 py-2 text-left text-gray-600 text-sm font-semibold">Creator</th>
                  <th className="px-4 py-2 text-center text-gray-600 text-sm font-semibold">Description</th>
                  <th className="px-4 py-2 text-center text-gray-600 text-sm font-semibold">Public</th>
                  <th className="px-4 py-2 text-center text-gray-600 text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPublicActivities.map((activity, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="px-4 py-2 text-gray-700 text-sm">{activity.name}</td>
                    <td className="px-4 py-2 text-gray-700 text-sm">by {activity.author}</td>
                    <td className="px-4 py-2 text-center">
                      <button onClick={() => handleOpenDescriptionModal(activity.description)} className="text-blue-500 hover:underline text-sm">
                       Know more
                      </button>
                    </td>
                    <td className="px-4 py-2 text-center text-gray-700 text-sm">Public</td>
                    <td className="px-4 py-2 text-center">
                      <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="bg-white rounded shadow p-4">
        <h4 className="mb-2 font-semibold text-gray-800">Private Activities</h4>
        {filteredPrivateActivities.length === 0 ? (
          <p>No private activities yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600 text-sm font-semibold">Activity Name</th>
                  <th className="px-4 py-2 text-left text-gray-600 text-sm font-semibold">Creater</th>
                  <th className="px-4 py-2 text-center text-gray-600 text-sm font-semibold">Description</th>
                  <th className="px-4 py-2 text-center text-gray-600 text-sm font-semibold">Private</th>
                  <th className="px-4 py-2 text-center text-gray-600 text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredPrivateActivities.map((activity, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="px-4 py-2 text-gray-700 text-sm">{activity.name}</td>
                    <td className="px-4 py-2 text-gray-700 text-sm">by {activity.author}</td>
                    <td className="px-4 py-2 text-center">
                      <button onClick={() => handleOpenDescriptionModal(activity.description)} className="text-blue-500 hover:underline text-sm">
                        Know more
                      </button>
                    </td>
                    <td className="px-4 py-2 text-center text-gray-700 text-sm">Private</td>
                    <td className="px-4 py-2 text-center">
                      <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>







    </div>




    </>
  )
}

export default ActivityLister
