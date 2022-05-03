// import image from 'img/profile-img.jpg'
const About = () => {
  // const link="";
    return (
      
    <div>
    <section id="about" className="about">
      <div className="container">
        <div className="title  ">
          <h2 className="text-primary">About</h2>
          <p>To build a career in a growing organization where I can get the opportunities to prove my abilities by accepting challenges to fulfill the organizations goal and climb the career ladder through continuous learning and commitment. </p>
        </div>
         <hr></hr>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            {/* <img src= {image} className="img-fluid rounded mx-auto " alt=""></img> */}
          </div>
         
          <div className="col-lg-8 pt-4 pt-lg-0 " data-aos="fade-left">
            <h3 className="text-primary">Software Developer.</h3>
            <p className="fst-italic">
              Here is my personal Info.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li> <strong>Birthday:</strong> <span>25 April 2001</span></li>
                  <li> <strong>Phone:</strong> <span>+254-7430-51520</span></li>
                  <li> <strong>City:</strong> <span>Nairobi ,Kenya</span></li>
                </ul>
              </div>
               <div className="col-lg-6">
                <ul>
                  <li><strong>Age:</strong> <span>21</span></li>
                  <li> <strong>Diploma:</strong> <span>Diploma </span></li>
                  <li><strong>Email:</strong> <span>murimibrian84@gmail.com</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
     );
}
 
export default About;