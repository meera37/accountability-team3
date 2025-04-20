import React, { useState, useEffect } from 'react'
import SummaryCards from './SummaryCards'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {  fetchAllActivitiesApi, fetchSingleUserApi , updateUserHabitsApi, patchHistoryApi  } from '../services/allApi';

function ActivityLister({ tab }) {

  useEffect(() => {
    let curUser = localStorage.getItem('curUser')
    // console.log({curUser})
    fetchdata(curUser)
    // fetchActivities()
  }, [])

  const fetchdata = async (curUser) => {
    try {
      const request = await fetchSingleUserApi(curUser);
      const userData = request.data;

      if (userData) {
        console.log("Fetched user data:", userData);

        const publicActivitiesObjects = (userData.public || []).map(activity => ({ name: activity, type: 'public' }));
        const privateActivitiesObjects = (userData.private || []).map(activity => ({ name: activity, type: 'private' }));
        const coreActivitiesObjects = (userData.core || []).map(activity => ({ name: activity, type: 'core' }));

        setPublicActivities(publicActivitiesObjects);
        setPrivateActivities(privateActivitiesObjects);
        setAllActivities([...coreActivitiesObjects, ...publicActivitiesObjects, ...privateActivitiesObjects]);
      } else {
        console.log("User data not found.");
        setPublicActivities([]);
        setPrivateActivities([]);
        setAllActivities([]);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setPublicActivities([]);
      setPrivateActivities([]);
      setAllActivities([]);
    }
  };

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
  const [errors, setErrors] = useState({});
  const [descriptionLength, setDescriptionLength] = useState(15);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false)
  const handleOpenDescriptionModal = (description) => {
    setSelectedActivityDescription(description);
    setShowDescriptionModal(true);
  };
  const handleCloseDescriptionModal = () => setShowDescriptionModal(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!activityName.trim()) {
      newErrors.activityName = '* Activity name is required';
      isValid = false;
    }

    if (!activityDescription.trim()) {
      newErrors.activityDescription = '* Description is required';
      isValid = false;
    }

    if (!activityDuration) {
      newErrors.activityDuration = '* Please select a duration';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleCreateActivity = async () => {
    const curUser = localStorage.getItem('curUser');

    if (!validateForm()){
       console.log('error')
       // TODO toastify error popup
       return;
    }

      const newActivity = {
        name: activityName,
        description: activityDescription,
        duration: activityDuration,
        type: activityType,
        author: curUser,
      };

      const request = await fetchSingleUserApi(curUser);
      const userData = request.data;

      const updatedUserData = { ...userData , [activityType]: [ activityName, ...userData[activityType] ]  }
      // console.log({updatedUserData})

      try{
        const response = await updateUserHabitsApi(updatedUserData);
        console.log(response.data)
      }catch(error){
        console.log(error)
      }

      const update_history =  {
        type: activityType ,
        description: activityDescription,
        startDate: new Date().toISOString().slice(0, 10),
        endDate: "never",
        options: { "intensityScale": [ 0,1,2,3,4,5] },
        history: []
     }
      //history: (activityDuration != '365')? []:{ "2025": [] },

      const updateHistoryResponse = await patchHistoryApi({id:curUser, [newActivity.name]: update_history });
      console.log(updateHistoryResponse.data)

      const currentUserHabits = {
        core: [...allActivities.filter(act => act.type === 'core').map(act => act.name)],
        public: [...publicActivities.filter(act => act.type === 'public').map(act => act.name)],
        private: [...privateActivities.filter(act => act.type === 'private').map(act => act.name)],
        id: curUser,
      };

      setAllActivities([...allActivities, newActivity]);

      if (activityType === 'public') {
        currentUserHabits.public.push(newActivity.name);
        setPublicActivities([...publicActivities, newActivity]);
      } else {
        currentUserHabits.private.push(newActivity.name);
        setPrivateActivities([...privateActivities, newActivity]);
      }

      setActivityName('');
      setActivityDescription('');
      setActivityDuration('');
      setActivityType('public');
      setErrors({});
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

  const fetchActivities = async () => {
    try {
      const response = await fetchAllActivitiesApi();
      console.log("Fetched activities:", response);
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  };

  return (
    <>
      <div aria-hidden={ tab !='dashboard'} className={`p-4 pt-0 space-y-6 ${tab=='dashboard'? 'block':'hidden' }`}>

        <div className='d-flex flex-row-reverse'>
          <img className="rounded-circle shadow-4-strong " width={100} alt="avatar2" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"  />
          <h1 className='pt-4 pe-3'>Hi  i am </h1>
        </div>
        
        <SummaryCards 
        total={allActivities.length}
        puCount={publicActivities.length}
        prCount={privateActivities.length}
        />

        <div className="flex justify-center items-center gap-3 flex-wrap">
          <div className="relative w-[300px] sm:w-[400px]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Activities"
              className="w-full border-2 border-gray-400 rounded-full px-4 pr-10 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0"
            />
            {
             search &&
             (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
                aria-label="Clear search"
              >
                x
              </button>
            )}
          </div>

          <button
            onClick={handleOpen}
            // className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm"
            style={{
              backgroundColor: 'darkcyan',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              transition: 'background-color 0.3s ease',
              fontSize: '0.875rem', 
              cursor: 'pointer', 
              border: 'none', 
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'teal')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'darkcyan')}
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
                {errors.activityName && (
                  <Form.Text className="text-danger">{errors.activityName}</Form.Text>
                )}
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
                {errors.activityDescription && (
                  <Form.Text className="text-danger">{errors.activityDescription}</Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="activityDuration">
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  as="select"
                  value={activityDuration
                  }
                  onChange={(e) => setActivityDuration(e.target.value)}
                >
                  <option value="">Select Duration (days)</option>
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                  <option value="60">60</option>
                  <option value="365">lifeTime</option>
                </Form.Control>
                {errors.activityDuration && (
                  <Form.Text className="text-danger">{errors.activityDuration}</Form.Text>
                )}
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
            <p style={{ wordWrap: 'break-word' }}>{selectedActivityDescription}</p>
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
              <div className="overflow-x-auto max-h-96 overflow-y-auto">
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
                    {
                     filteredAllActivities.map((activity, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="px-4 py-2 text-gray-700 text-sm">{activity.name}</td>
                        <td className="px-4 py-2 text-gray-700 text-sm">by {activity.curUser}</td>
                        <td className="px-4 py-2 text-center">
                          <button onClick={() => handleOpenDescriptionModal(activity.description)} className="text-blue-500 hover:underline text-sm">

                            {activity.description ? (
                              <>
                                {activity.description.length > descriptionLength ? `${activity.description.slice(0, descriptionLength)}...` : activity.description}
                              </>
                            ) : (
                              ''
                            )}
                          </button>
                        </td>
                        <td className="px-4 py-2 text-center text-gray-700 text-sm">
                          {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                        </td>
                        <td className="px-4 py-2 text-center">
                          <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm">
                            Archive
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
          {
           filteredPublicActivities.length === 0 ? (
            <p>No public activities yet</p>
          ) : (
            <div className="overflow-x-auto max-h-96 overflow-y-auto">
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
                      <td className="px-4 py-2 text-gray-700 text-sm">by</td>
                      <td className="px-4 py-2 text-center">
                        <button onClick={() => handleOpenDescriptionModal(activity.description)} className="text-blue-500 hover:underline text-sm">

                          {activity.description ? (
                            <>
                              {activity.description.length > descriptionLength ? `${activity.description.slice(0, descriptionLength)}...` : activity.description}
                            </>
                          ) : (
                            ''
                          )}
                        </button>
                      </td>
                      <td className="px-4 py-2 text-center text-gray-700 text-sm">Public</td>
                      <td className="px-4 py-2 text-center">
                        <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm">
                            Archive
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
            <div className="overflow-x-auto max-h-96 overflow-y-auto">
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
                      <td className="px-4 py-2 text-gray-700 text-sm">by</td>
                      <td className="px-4 py-2 text-center">
                        <button onClick={() => handleOpenDescriptionModal(activity.description)} className="text-blue-500 hover:underline text-sm">

                          {
                          activity.description ? (
                            <>
                              {activity.description.length > descriptionLength ? `${activity.description.slice(0, descriptionLength)}...` : activity.description}
                            </>
                          ) : (
                            ''
                          )}
                        </button>
                      </td>
                      <td className="px-4 py-2 text-center text-gray-700 text-sm">Private</td>
                      <td className="px-4 py-2 text-center">
                        <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm">
                          Archive
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
