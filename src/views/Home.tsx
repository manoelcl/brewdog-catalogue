const Home = () => {
  return (
    <>
      <section className="home">
        <h2>Consult and search the entire Brewdog catalogue</h2>
        <p>
          This website is a tribute to Brewdog brewery. The data used is
          provided by the Punk API, an interesting project that collects the
          data of the creations of this brewery. I hope you enjoy this page
          searching and discovering new beers as much as I have programming it.
        </p>
      </section>
      <div className="parallax image1"></div>
      <section className="home">
        <h2>Goals of this project</h2>
        <p>
          This project started as a programming practice with React. Some time
          later I decided to take it up again adding my knowledge of typescript.
          Some of the things have improved, but in general I have respected the
          original design that I liked so much.
        </p>
        <p>
          The underlying idea of this project is to make beer data accessible in
          an intuitive and visual way. The central point is the dynamic use of
          the colors of the beer. Although it is not the most important aspect
          that defines a beer, for some people it is necessary to know the color
          of the beer they want to drink.
        </p>
      </section>
      <div className="parallax image2"></div>
      <section className="home">
        <h2>Behind this project</h2>
        <p>
          You can check the code of this project or my profile in the following
          links:
        </p>
        <ul>
          <li>
            <a href="https://github.com/manoelcl/brewdog-catalogue">
              Github repository
            </a>
          </li>
          <li>
            <a href="https://github.com/manoelcl">My Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/manoelcl/">LinkedIn</a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;
