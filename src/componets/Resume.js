 import image from '../img/Resume.pdf';

function Resume () {
    return ( 
        <div className='container'>
        <section id="resume" name="resume">
      <div className="container rounded mx-auto  ">
          <h2 className="text-primary">Resume</h2>
     </div>
      <hr></hr>
        <button type="button" className="resume-button btn btn-primary ">
        <a href= {image} download >
          <i className="bi bi-download fs-1 text-black-50"> <img src = {image} alt=""></img></i>
        </a>
        </button>
        </section>
    </div>
     );
}
 
export default Resume;

 {/*  */}