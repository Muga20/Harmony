import image from '../img/profile-img.png'

const Header = () => {
    return (  
      <div>
    
        <i className ="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <header id="header">
          <div className="d-flex flex-column">
            <div className='button-dark'><i className="fa-solid fa-moon fs-2 " onclick="myFunction()" ></i></div>
          
            
            <div className="profile">
              <img src= {image} alt="" className="image-profile"></img>
              <h1 className="text-light"><a href="index.html">Brian Mugambi</a></h1>
              <div className="social-links mt-3 text-center">
                <a href="https://twitter.com/muga_mbi" className="twitter"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com/_muri_mi/" className="instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/Muga20" className="github"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/brian-murimi-509b87210/" className="linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <li><a href="#hero" className="nav-link scrollto active"><span>Home</span></a></li>
                <li><a href="#about" className="nav-link scrollto"><span>About</span></a></li>
                <li><a href="#resume"className="nav-link scrollto"> <span>Resume</span></a></li>
                <li><a href="#portfolio" className="nav-link scrollto"> <span>Portfolio</span></a></li>
                <li><a href="#services"className="nav-link scrollto"> <span>Abilities</span></a></li>
                <li><a href="#contact" className="nav-link scrollto"> <span>Contact</span></a></li>
              </ul>
            </nav>
          </div>
        </header>

</div>
    );
}
 
export default Header;
