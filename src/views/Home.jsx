import img from "../brewdog1.jpg";
const Home = () => {
  return (
    <>
      <section>
        <h2>Consult and search the whole Brewdog catalogue</h2>
        <p>
          This website is an hommage to the beers of Brewdog. We use the data
          provided by the <a href="">Punk API</a>, a cool project which have
          collected data of this brewery creations. I hope that you enjoy
          searching and discovering new beers.
        </p>
        <img src={img} alt="brewdog" />
      </section>
      <section>
        <h2>Goals of this project</h2>
        <p>
          This project was intended to be a React.js practice. I wanted to
          create a website that allowed people to search in a beer API, giving
          them useful information. This website allows you to search beers by
          bitterness and alcohol but also by color. Though colour isn't such an
          important part of the beer, many people preferences are visual, so I
          created an interface with a strong visual focus
        </p>
      </section>
      <section>
        <h2>Goals of this project</h2>
        <p>
          This projects was intended for a React.js practice. I wanted to create
          a website that allowed people to search in a beer API, giving them
          useful information. This website allows you to search beers by
          bitterness and alcohol but also by color. Though colour isn't such an
          important part of the beer, many people preferences are visual, so I
          created an interface with a strong visual focus
        </p>
      </section>
    </>
  );
};

export default Home;
