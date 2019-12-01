import Layout from '../components/Layout';

const Services = () => (
  <Layout title="My Projects">
    <h1>My Projects</h1>
    <div className="services">
      <div className="services-list">
        <div className="item">
          <img id="item1" src="https://i.ibb.co/6bT897G/My-Post.png" />
          <h2>Snake Game</h2>
          <em>Description</em>
          <p>This is an implementation of the classic snake game which was built using React Js.</p>
          <p><a target="_blank" href="https://serene-peak-87196.herokuapp.com/">Link to the App</a></p>
        </div>
        <div className="item">
          <img id="item2" src="https://i.ibb.co/XtrfFVy/Weater.png" />
          <h2>Weather App</h2>
          <em>Description</em>
          <p>This weather app was built using React js and Node.js. This app uses a fetch method and grabs data from an API.</p>
          <p><a target="_blank" href="https://hidden-headlane-62916.herokuapp.com/">Link to the App</a></p>
        </div>
        <div className="item">
          <img src="https://i.ibb.co/s27Zchs/Type-n-speak.png" />
          <h2>Type-n-speak</h2>
          <em>Description</em>
          <p>This app uses a fetch method which allows the user to enter text and select from a voice from a list so that the text can be read by the app.</p>
          <p><a target="_blank" href="https://stark-temple-79658.herokuapp.com/">Link to the App</a></p>
        </div>
        
      </div>
    </div>
    <style jsx>{`
      .services {
        max-width: 1000px;
        margin: 0 auto;
      }
      .services-list {
        padding: 0 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .services .item {
        padding: 20px;
        margin-bottom: 40px;
        width: 50%;
      }
      img {
        max-width: 100%;
        
      }
     
      h2 {
        margin: 0 0 5px 0;
      }
      p {
        font-size: 18px;
        color: #777;
      }
      @media (max-width: 600px) {
        .services .item {
          width: auto;
          padding: 10px 20px;
        }
      }
    `}</style>
  </Layout>
);

export default Services;