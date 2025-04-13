import React from 'react';
import '../pages/Landing.css'
import { Container, Row, Col, Button, Carousel, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons/faNoteSticky';


function Landing() {
  return (
    <>
      {/* Hero Section */}
      <div className="herosection d-flex align-items-center">
        <Container>
          <Row className="justify-content-center text-center">
            <Col xs={11} sm={10} md={8} lg={6}>
              <h1 className="text-white fw-bold display-5 display-md-4">Find Your Accountability Partner</h1>
              <p className="text-muted fw-bold mt-3 fs-6 fs-md-5">
                Connect with people who share your goals, stay motivated together, and build powerful habits that last — one connection at a time.
              </p>
              <Button variant="light" size="lg" className="mt-3 fw-bold">
                Get Matched Now
              </Button>
            </Col>
          </Row>
        </Container>

      </div>
      {/* About section */}

      
        <section style={{ backgroundColor: '#f8fafc', padding: '4rem 0' }}>
          <Container className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold">About Us</h2>
              <p className="text-muted fs-5">Helping You Stay On Track—Together</p>
            </div>

            {/* STORY */}
            <div className=" p-4 p-md-5 rounded-4 shadow-sm mb-5" style={{backgroundColor:'lavender'}}>
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
                <div className="bg-warning rounded-4 shadow-sm p-4">
                  <p className="mb-0 text-muted">
                    “Track visually. Share openly. Stay consistent. That’s the mission.”
                  </p>
                </div>
              </Col>
            </Row>

            


          </Container >
        </section>

      

      {/* Accounatability section */}
      <Container>
        <Row className="aboutsection justify-content-center text-center mt-5">
          <Col xs={11} sm={10} md={8} lg={6}>

            <h4 className="text-dark fw-bold mt-3">What is an Accountability Partner?</h4>
            <p className="text-muted fw-bold mt-4 fs-6 fs-md-5">An accountability partner, aka accountability buddy, aka accountabilibuddy, is a person or group of people you team up with to work on tasks, projects, or goals.

              Typically, your accountability partners don't actively engage or interfere with your tasks. Instead, they provide an extra dose of focus, motivation, and sense of community.</p>
          </Col>
          <Col xs={11} sm={10} md={8} lg={6} className='rounded'>
            <img src="https://www.achrnews.com/ext/resources/2022/06-June/Leadership.jpg?1656974662" style={{ width: '100%', height: '250px' }} className='rounded' />
          </Col>
        </Row>
      </Container>

      {/* How it works */}


      
        <section style={{ backgroundColor: '#fffbea', padding: '4rem 0' }}>
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

      {/* Testimonials */}

      <Container>
        <section id="testimonials" className="py-4 " style={{ backgroundColor: 'wheat' }}>
          <Container className="text-center">
            <h2 className="mb-5">What Our Users Say</h2>
            <Carousel indicators={false} controls={true} interval={5000}>
              <Carousel.Item>
                <Card className="mx-auto shadow-sm" style={{ maxWidth: '700px' }}>
                  <Card.Body className="d-flex align-items-center text-start p-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Jamie R."
                      className="rounded-circle me-4"
                      width={80}
                      height={80}
                    />
                    <div>
                      <Card.Text className="mb-2 fst-italic">
                        "I finally finished my novel thanks to my writing buddy. We check in every morning!"
                      </Card.Text>
                      <Card.Title className="mb-0">Jamie R.</Card.Title>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item>
                <Card className="mx-auto shadow-sm" style={{ maxWidth: '700px' }}>
                  <Card.Body className="d-flex align-items-center text-start p-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt="Priya S."
                      className="rounded-circle me-4"
                      width={80}
                      height={80}
                    />
                    <div>
                      <Card.Text className="mb-2 fst-italic">
                        "This app made consistency feel fun. I'm working out more than ever before."
                      </Card.Text>
                      <Card.Title className="mb-0">Priya S.</Card.Title>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>

              <Carousel.Item>
                <Card className="mx-auto shadow-sm" style={{ maxWidth: '700px' }}>
                  <Card.Body className="d-flex align-items-center text-start p-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/75.jpg"
                      alt="David M."
                      className="rounded-circle me-4"
                      width={80}
                      height={80}
                    />
                    <div>
                      <Card.Text className="mb-2 fst-italic">
                        "My study partner and I kept each other going during finals week. Total lifesaver."
                      </Card.Text>
                      <Card.Title className="mb-0">David M.</Card.Title>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </Container>
        </section>


      </Container>

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

      {/* Achievements */}



      <Container>

        <div className="mb-5 mt-5">
          <h4 className="fw-bold text-center mb-5">Our Achievements</h4>
          <Row className="mt-4">
            <Col md={6} lg={3} className="mb-3">
              <div className="p-3  rounded-3 shadow-sm h-100" style={{backgroundColor:'greenyellow'}}>
                <strong>1,200+</strong><br />
                Goals Tracked
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-3">
              <div className="p-3  rounded-3 shadow-sm h-100" style={{backgroundColor:'coral'}}>
                <strong>100+</strong><br />
                Goal Templates.
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-3">
              <div className="p-3  rounded-3 shadow-sm h-100" style={{backgroundColor:'beige'}}>
                <strong>150</strong><br />
                Ongoing Streaks
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-3">
              <div className="p-3 rounded-3 shadow-sm h-100" style={{backgroundColor:'turquoise'}}>
                <strong>80,000+</strong><br />
                Check-ins Logged
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Team */}
      <Container>
        <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm mb-5">
          <h4 className="fw-bold text-center mb-5" > Meet the Team</h4>
          <Row className="mt-3">
            <Col md={4} className="text-center">
              <h5>Johns</h5>
              <p className="text-muted small">UX Designer</p>
              <p className="small">Passionate about making productivity feel joyful and intuitive.</p>
            </Col>
            <Col md={4} className="text-center">
              <h5>Savith</h5>
              <p className="text-muted small">Full Stack Developer</p>
              <p className="small">Loves building tools that solve real-life problems for real people.</p>
            </Col>
            <Col md={4} className="text-center">
              <h5>Bhavijith</h5>
              <p className="text-muted small">Community Manager</p>
              <p className="small">Believes support and accountability are key to long-term success.</p>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Contact Form */}

      
        <section style={{ backgroundColor: '#f1f5f9', padding: '4rem 0' }}>
          <Container>
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold"> Get In Touch</h2>
              <p className="text-muted">Have questions, feedback, or just want to say hi? We’d love to hear from you.</p>
            </div>

            <Row className="justify-content-center">
              <Col md={8}>
                <form className="bg-white p-4 p-md-5 rounded-4 shadow-sm">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea className="form-control" id="message" rows="5" placeholder="Write your message..."></textarea>
                  </div>

                  <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary px-4 py-2 rounded-pill">
                      Send Message
                    </button>
                  </div>
                </form>
              </Col>
            </Row>

            {/* FINAL NOTE */}
            <div className="text-center mt-5">
              <h4>💬A Final Note</h4>
              <p className="fs-6">
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

