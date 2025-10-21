import heroimg from '../assets/hero2.png'


function SocialLink({ name, href }) {
    return (
        <a href={href} className="text-white me-3">
            <i className={`fab fa-${name} fa-lg`}></i>
        </a>
    );
}


function Hero() {
  return (
    <section
      className="hero d-flex flex-column justify-content-center text-white"
      style={{
        height: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <h1 className="display-3 fw-bold">Hi, I'm Yasser Fathallah</h1>
        <p className="lead">Web Developer | Graphic Designer</p>
        
        <div className="mt-4">
          <a href="#bio" className="btn btn-light btn-lg me-2">
            About Me
          </a>
          <a href="#contact" className="btn btn-outline-light btn-lg">
            Contact
          </a>
        </div>

        <div className="mt-4">
          <SocialLink name="facebook" href="https://facebook.com/" />
          <SocialLink name="twitter" href="https://twitter.com/" />
          <SocialLink name="linkedin" href="https://linkedin.com/" />
          <SocialLink name="github" href="https://github.com/" />
        </div>
      </div>
    </section>
  );
}

export default Hero;