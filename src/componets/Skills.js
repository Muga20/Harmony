const Skills = () =>{
    return (
<div>
<main id="main">
<section id="skills" className="skills ">
      <div className="container   rounded mx-auto  ">
        <div className="title ">
          <h2 className="text-primary">Skills</h2>
          <p></p>
        </div>
           <hr></hr>
        <div className="row skills-content">

          <div className="col-lg-6" data-aos="fade-up">

            <div className="progress">
              <span className="skill">HTML <i className="val">69%</i></span>
              <div className="progress-bar-wrap">
                <div className=" progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">50%</i></span>
              <div className="progress-bar-wrap">
                <div className="  progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Laravel <i className="val">40%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">JavaScript <i className="val">35%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar " role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
           
            <div className="progress">
                <span className="skill">PHP <i className="val">30%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          </div>
        </div>
      </div>
    </section>
    </main>
</div>
    );
}

export default Skills 

