
export default function AboutMe() {
  return (
    <section className="py-5 bg-white" id='bio'>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-center mb-4">About Me</h2>
        <p className="lead text-center mx-auto" style={{ maxWidth: "1200px" }}>
                  I am a Software Developer with a Bachelor's degree in Computer Science.
                  I have experience in project management and data analysis, with a focus on developing effective solutions for businesses and healthcare organizations.
                  My skills include web development, graphic design, and data visualization.
                  I am passionate about merging technology and design to deliver impactful results.
        </p>
        <a href="./cv.pdf" download className="btn btn-dark mt-3" style={{width: '250px'}}>Download CV</a>
      </div>
    </section>
  );
}