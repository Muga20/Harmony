import image from '../img/portfolio-1.png';
import image2 from '../img/portfolio-2.png';
function Sample () {
    return(
        <div>
        <main id="main">
<section id="portfolio" className="portfolio ">
  <div className="container ">

    <div className="title ">
      <h2 className="text-primary">Portfolio</h2>
      <p> These are samples of projects i have worked on and completed succesfully </p>
    </div>
    <hr></hr>
    <div className="row" data-aos="fade-up">
      <div className="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li>Samples</li>
        </ul>
      </div>
    </div>

    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <h1>ConnectIt Blog</h1>
          <img src= {image} className="img-fluid" alt=""></img>
          <div className="portfolio-links">
            <a href= {image} data-gallery="portfolioGallery" className="portfolio-lightbox" title=""><i className="bx bx-plus"></i></a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <h1>Tomorrowland</h1>
          <img src= {image2} className="img-fluid" alt=""></img>
          <div className="portfolio-links">
            <a href= {image2} data-gallery="portfolioGallery" className="portfolio-lightbox" title=""><i className="bx bx-plus"></i></a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
</main>
        </div>
    )
}
export default Sample;