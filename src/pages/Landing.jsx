import React from 'react';
import '../pages/Landing.css'
import { Container, Row, Col, Button, Carousel, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons/faNoteSticky';


function Landing() {
  return (
    <>

      {/* Hero-section */}
      <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
        <Container className="mb-5 px-4  bg-amber-100 py-5 mt-3 shadow rounded">
          <Row className="gx-4 gy-5 justify-content-center align-items-center">


            <Col xs={12} md={6} className="text-center d-flex flex-column justify-content-center align-items-center px-3">
              <h1 className="fw-bold display-5 mt-5 mt-md-0">Your Accountability Partner Awaits</h1>
              <p className="fw-bold fs-5 text-muted mt-3" style={{ textAlign: 'justify' }}>
                "Connect with people who share your goals, stay motivated together, and build powerful habits that last — one connection at a time."
              </p>
              <div className="mt-4 d-flex flex-column flex-sm-row justify-content-center align-items-stretch gap-3 w-100">
                <button
                 
                  className="fw-bold  bg-amber-800 rounded fw-bold text-black py-2 px-4 fs-6 fs-sm-6 fs-md-5 w-100 w-sm-auto"
                >
                  Get Matched Now
                </button>
                <Button
                  variant="outline-dark"
                  className="fw-bold text-black hover:text-white py-2 px-4 fs-6 fs-sm-6 fs-md-5 w-100 w-sm-auto"
                >
                  Learn More
                </Button>
              </div>
            </Col>


            <Col xs={12} md={6} className="d-flex justify-content-center px-3">
              <div className="shadow rounded overflow-hidden w-100 mt-5" style={{ maxWidth: '600px' }}>
                <img
                  src="https://www.betterup.com/hubfs/woman-and-man-looking-at-a-phone-in-the-street-and-smiling-accountability-partner.jpg"
                  alt="handshake"
                  className="img-fluid w-100"
                  style={{ borderRadius: '12px', objectFit: 'cover' }}
                />
              </div>
            </Col>

          </Row>
        </Container>
      </div>
      {/* Hero Section */}
      {/* <div className="herosection d-flex align-items-center">
        <Container>
          <Row className="justify-content-start text-start">
            <Col xs={12} md={8} lg={10}>
              <Container className="bg-amber-400 shadow rounded p-4">
                <div className='hero-text border border-black p-3 shadow'>
                  <h1 className="text-black fw-bold display-5 display-md-3">
                    Your Accountability Partner Awaits jbcsdjbvcjsdbvcksb
                  </h1>
                  <p className="text-muted fw-bold mt-3 fs-6 fs-md-5">
                    Connect with people who share your goals, stay motivated together, and build powerful habits that last — one connection at a time.
                  </p>
                </div>

              </Container>
              <div className="mt-4 d-flex flex-column flex-sm-row gap-3">
                <Button variant="" size="lg" className="button1 fw-bold" style={{ backgroundColor: 'rgb(255, 99, 99)' }}>
                  Get Matched Now
                </Button>
                <Button variant="outline-dark" size="lg" className="button2 fw-bold ms-md-3">
                  Learn More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}

      {/* About section */}

      <section style={{ backgroundColor: '#f8fafc', padding: '4rem 0' }}>
        <Container className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">About Us</h2>
            <p className="text-muted fs-5">Helping You Stay On Track—Together</p>
          </div>

          {/* STORY */}
          <div className=" p-4 p-md-5 rounded-4 shadow-sm mb-5" style={{ backgroundColor: 'rgb(190, 228, 208)' }}>
            <h4 className="fw-bold">The Story Behind It</h4>
            <p>
              What started as a group of friends trying to stay accountable with reading and workouts
              became a shared spreadsheet... which eventually turned into this platform.
            </p>
            <p>
              Our goal-tracking experiment evolved into an app built for anyone seeking better consistency—
              powered by support, visuals, and collective momentum.
            </p>
          </div>

          {/* WHY WE BUILT THIS */}
          <Row className="align-items-center mb-5 p-3">
            <Col md={6}>
              <h4 className="fw-bold mb-5">Why We Built This</h4>
              <p>
                We’ve all been there—setting goals with the best intentions, only to lose steam a few weeks in.
                What we realized? The missing ingredient wasn’t willpower. It was accountability, motivation, and most of all, community.
              </p>
              <p>
                We built this space to not only track progress, but also keep people inspired through visual tools and shared journeys.
              </p>
            </Col>
            <Col md={6}>
              <div className=" rounded-4 shadow-sm p-4" >
                <img src="https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1411.jpg?t=st=1744702217~exp=1744705817~hmac=3a4288ab96056afa11a7fe9d23af880faa3966c7870ea95c0dc102a9304f0a0d&w=1380" alt="" />
              </div>
            </Col>
          </Row>

          <Row className="align-items-center mb-5 p-3">
            <Col md={6}>
              <div className=" rounded-4 shadow-sm p-4" >
                <img src="https://img.freepik.com/free-photo/business-scene-with-man-woman_23-2147626557.jpg?t=st=1744702539~exp=1744706139~hmac=ea219cd6677d92350ea939d09bac75de26b3fcc82b12cce9378dd79cd883cefb&w=1380" alt="no image" />
              </div>
            </Col>
            <Col md={6}>
              <h4 className="fw-bold mb-5 mt-5">What is an Accountability Partner?</h4>
              <p>
                An accountability partner, aka accountability buddy, aka accountabilibuddy, is a person or group of people you team up with to work on tasks, projects, or goals.


              </p>
              <p>
                Typically, your accountability partners don't actively engage or interfere with your tasks. Instead, they provide an extra dose of focus, motivation, and sense of community.
              </p>
            </Col>

          </Row>

        </Container >
      </section>

      {/* How it works */}

      <section className=' bg-amber-100 p-4'>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold">How It Works</h2>
            <p className="text-muted fs-5">Your Goals, Your Way — Backed by a Supportive Community</p>
          </div>

          <Row className="g-4">
            {/* Step 1 */}
            <Col md={6}>
              <div className="p-4 bg-light rounded-4 shadow-sm h-100" style={{ borderLeft: '6px solid #f97316' }}>
                <h5 className="fw-bold">1.Set Up Your Space</h5>
                <p>
                  Sign up and kick things off with three ready-to-go goal templates.
                  You're all set to begin your journey from day one.
                </p>
              </div>
            </Col>

            {/* Step 2 */}
            <Col md={6}>
              <div className="p-4 bg-light rounded-4 shadow-sm h-100" style={{ borderLeft: '6px solid #10b981' }}>
                <h5 className="fw-bold">2.Make It Yours</h5>
                <p>
                  Create unlimited custom trackers for anything you care about—fitness, learning, mindfulness, or personal habits.
                </p>
              </div>
            </Col>

            {/* Step 3 */}
            <Col md={6}>
              <div className="p-4 bg-light rounded-4 shadow-sm h-100" style={{ borderLeft: '6px solid #6366f1' }}>
                <h5 className="fw-bold">3.Choose What to Share</h5>
                <p>
                  Want to inspire others? Make your goals public. Prefer to keep things personal?
                  Keep them private—it’s entirely up to you.
                </p>
              </div>
            </Col>

            {/* Step 4 */}
            <Col md={6}>
              <div className="p-4 bg-light rounded-4 shadow-sm h-100" style={{ borderLeft: '6px solid #f59e0b' }}>
                <h5 className="fw-bold">4.Follow and Grow Together</h5>
                <p>
                  Discover public activities from others in the community. Like what you see?
                  Follow them and instantly add their goals to your profile.
                </p>
              </div>
            </Col>

            {/* Step 5 */}
            <Col md={6}>
              <div className="p-4 bg-light rounded-4 shadow-sm h-100" style={{ borderLeft: '6px solid #ec4899' }}>
                <h5 className="fw-bold">5.Visualize Your Progress</h5>
                <p>
                  Stay motivated with a colorful heatmap that highlights your consistency.
                  Watch your efforts light up the year—one step at a time.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features section */}

      <Container>
        <section id="features" className="py-5">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <img src="https://media.licdn.com/dms/image/v2/D4D12AQHRRc8BDE2Pog/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1654497256742?e=2147483647&v=beta&t=8KXx5IlM418QEnl9u0uoCS6ejU8Ghawb1a-xFe8y4aE" alt="Connection" className="img-fluid rounded" />
              </Col>
              <Col md={6}>
                <h2>Meaningful Connections That Drive Progress</h2>
                <ul className="list-unstyled mt-5">
                  <li><FontAwesomeIcon icon={faNoteSticky} style={{ color: "#dadd27", }} /> Smart Matching Based on Your Goals</li>
                  <li><FontAwesomeIcon icon={faNoteSticky} style={{ color: "#dadd27", }} /> Weekly Check-ins & Chat Support</li>
                  <li><FontAwesomeIcon icon={faNoteSticky} style={{ color: "#dadd27", }} /> Encouragement from People Just Like You</li>
                  <li><FontAwesomeIcon icon={faNoteSticky} style={{ color: "#dadd27", }} /> Optional Habit Tracking to See Your Growth</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>

      </Container>

      {/* testimonals */}
      <section className="py-5 px-3" style={{ background: 'linear-gradient(to right, #fffbe6, #fefaf3)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6 text-dark"> What Our Users Say</h2>
            <p className="text-muted fs-5">Motivation That Sticks Around</p>
          </div>

          <div className="row gy-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ backgroundColor: '#ffffff' }}>
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    alt="Aarav"
                    className="rounded-circle mb-3"
                    style={{ width: '80px', height: '80px', objectFit: 'cover', border: '3px solid #ffe58f' }}
                  />
                  <p className="text-muted fst-italic mb-3" style={{ fontSize: '1rem' }}>
                    “Seeing my progress on the heatmap keeps me going—it’s super motivating!”
                  </p>
                  <h5 className="fw-semibold mb-1 text-dark">Aarav</h5>
                  <small className="text-secondary">Daily Reader</small>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ backgroundColor: '#ffffff' }}>
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/22.jpg"
                    alt="Aliya"
                    className="rounded-circle mb-3"
                    style={{ width: '80px', height: '80px', objectFit: 'cover', border: '3px solid #ffe58f' }}
                  />
                  <p className="text-muted fst-italic mb-3" style={{ fontSize: '1rem' }}>
                    “I love that I can follow others' templates and share my wins. Feels like a supportive circle.”
                  </p>
                  <h5 className="fw-semibold mb-1 text-dark">Aliya</h5>
                  <small className="text-secondary">Workout Enthusiast</small>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ backgroundColor: '#ffffff' }}>
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Tanya"
                    className="rounded-circle mb-3"
                    style={{ width: '80px', height: '80px', objectFit: 'cover', border: '3px solid #ffe58f' }}
                  />
                  <p className="text-muted fst-italic mb-3" style={{ fontSize: '1rem' }}>
                    “I used to lose track of my habits, but now I can literally see my consistency. The colors on the heatmap are such a vibe!”
                  </p>
                  <h5 className="fw-semibold mb-1 text-dark">Tanya</h5>
                  <small className="text-secondary">Student & Habit Tracker</small>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ backgroundColor: '#ffffff' }}>
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/30.jpg"
                    alt="Rohit"
                    className="rounded-circle mb-3"
                    style={{ width: '80px', height: '80px', objectFit: 'cover', border: '3px solid #ffe58f' }}
                  />
                  <p className="text-muted fst-italic mb-3" style={{ fontSize: '1rem' }}>
                    “Following someone else’s study routine helped me finally stick to mine. I didn’t feel like I was doing it alone.”
                  </p>
                  <h5 className="fw-semibold mb-1 text-dark">Rohit</h5>
                  <small className="text-secondary">Aspiring UPSC Candidate</small>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4" style={{ backgroundColor: '#ffffff' }}>
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/12.jpg"
                    alt="Priya"
                    className="rounded-circle mb-3"
                    style={{ width: '80px', height: '80px', objectFit: 'cover', border: '3px solid #ffe58f' }}
                  />
                  <p className="text-muted fst-italic mb-3" style={{ fontSize: '1rem' }}>
                    “Even when I miss a day, I know I can bounce back. This app helps me stay accountable without pressure.”
                  </p>
                  <h5 className="fw-semibold mb-1 text-dark">Priya</h5>
                  <small className="text-secondary">Mindfulness Explorer</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Faqs */}
      <Container className='mt-5 p-5'  >
        <Row className='justify-content-center mt-5'>
          <h3 className='fw-bold text-dark text-center'>WHAT.THE.FAQs</h3>
          <Col className='mt-5'>
            <Accordion>
              <Accordion.Item eventKey="0" className='fw-bold text-dark'>
                <Accordion.Header>Q: Is the app free to use?</Accordion.Header>
                <Accordion.Body>

                  A: Yes, the app is completely free to get started with all core features available.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className='fw-bold text-dark'>
                <Accordion.Header>Q: Can I keep some goals private?</Accordion.Header>
                <Accordion.Body>
                  A: Absolutely! You decide what to share and what stays private.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className='fw-bold text-dark'>
                <Accordion.Header>Q: What kind of goals can I track?</Accordion.Header>
                <Accordion.Body>
                  A: Anything—fitness, reading, meditation, study routines, personal habits... it’s all up to you.


                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className='fw-bold text-dark'>
                <Accordion.Header>Q: What is the heatmap feature?</Accordion.Header>
                <Accordion.Body>
                  A: It’s a visual tracker that shows your activity consistency over the year using colors—so you can literally see your progress.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className='fw-bold text-dark'>
                <Accordion.Header>Q: I’m not consistent—will this still help me?</Accordion.Header>
                <Accordion.Body>
                  A: Yes! The app is built to motivate, not judge. Even small steps count, and seeing progress—even with gaps—can inspire you to keep going.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className='fw-bold text-dark'>
                <Accordion.Header>Q: Can I reset or edit my goals later?</Accordion.Header>
                <Accordion.Body>
                  A: Of course! You can update, delete, or restart any tracker whenever you like. Flexibility is built-in.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6" className='fw-bold text-dark'>
                <Accordion.Header>Q: What happens when I follow someone’s public activity?</Accordion.Header>
                <Accordion.Body>
                  A: You get a copy of their goal template in your own profile. You can then customize it however you like.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7" className='fw-bold text-dark'>
                <Accordion.Header>Q: Do I need to interact with others?</Accordion.Header>
                <Accordion.Body>
                  A: Not at all. You can use the app completely solo or get involved with the community—it’s entirely your choice.


                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8" className='fw-bold text-dark'>
                <Accordion.Header>Q: Can I use it for team goals or group challenges?</Accordion.Header>
                <Accordion.Body>
                  A: While this version is more personal-focused, you can align goals by following the same public templates—great for friendly challenges!

                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </Col>


        </Row>
      </Container>


      {/* Contact Form */}

      <section style={{ backgroundColor: 'gray', padding: '4rem 0' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold"> Get In Touch</h2>
            <p className="text-muted">Have questions, feedback, or just want to say hi? We’d love to hear from you.</p>
          </div>

          <Row className="justify-content-center">
            <Col md={8}>
              <form className=" p-4 p-md-5 rounded-4 shadow-sm bg-white" >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input type="email" className="form-control " id="email" placeholder="Enter your email" />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Write your message..."></textarea>
                </div>

                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-warning px-4 py-2 rounded-pill">
                    Send Message
                  </button>
                </div>
              </form>
            </Col>
          </Row>

          {/* FINAL NOTE */}
          <div className="text-center mt-5">
            {/* <h4>A Final Note</h4> */}
            <p className="fs-6 fst-italic">
              Whatever your goal is—whether it’s reading 10 pages a day, running a marathon, or just drinking more water—
              we’re here to cheer you on every step of the way.
              This app was made for you, and we can't wait to see what you’ll accomplish.
            </p>
          </div>
        </Container>
      </section>

    </>
  );
}

export default Landing;

