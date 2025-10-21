function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 mt-5">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-4 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start">
            <div>
              <a href="#" className="text-white me-3 text-decoration-none">
                Home
              </a>
              <a href="#bio" className="text-white me-3 text-decoration-none">
                About
              </a>
              <a href="#skills" className="text-white me-3 text-decoration-none">
                Skills
              </a>
              <a href="#projects" className="text-white me-3 text-decoration-none">
                Projects
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0 d-flex justify-content-center">
            <a
              href="mailto:yasserfat7alah@gmail.com"
              className="btn btn-outline-light"
            >
              Contact Me
            </a>
          </div>

          <div className="col-md-4 d-flex justify-content-center justify-content-md-end">
            <div>
              <a href="https://facebook.com" className="text-white me-3">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://twitter.com" className="text-white me-3">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://linkedin.com" className="text-white me-3">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="https://github.com" className="text-white">
                <i className="fab fa-github fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
   
      </div>
      <div className=" mt-3 bg-black">
          <div className=" text-center">
            <p className="mb-0">
                Made with love by Yasser Fathallah. © {new Date().getFullYear()}
            </p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
