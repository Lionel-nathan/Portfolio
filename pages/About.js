import Link from 'next/link';
import '../components/Nav';
import Nav from '../components/Nav';
import Layout from '../components/Layout';


function About() {
  return (
    <div className="container">
      <Layout title="About Me">
        <h1>About Me</h1>
        <img className="company" src="https://lh3.googleusercontent.com/a-/AAuE7mBeC4xKNBR9dn2g47t9iTgvROCrZhZ9WQ41MjHnJQ=s96-cc" />
        <div className="about-text">

          
            <big>
              I am Lionel-Nathan Masamba, a 22 years old who has a strong passion and interest for software development.
            </big>
          
          <br />
          <br />
          <div className="table">
            <div className="row">
              <div className="column" >
                <h4>Education</h4>
                <strong><small>Damelin Mowbray</small></strong>
                <br />
                (Information Technology)<br />
                <em>2015 - 2017</em>
                <br />
                <strong><small>Cape Peninsula University of Technology</small></strong> <br />Btech
                <br />
                (Software Development)
                <br />
                <em>2018 - 2019</em>
                <br />
              </div>
              <div className="column" >
                <h4>Experiences</h4>
                <strong><small>The Agency- Web Design</small></strong>
                <br />
                <em>Feb 2017 - May 2017</em>
                <br />
              </div>
              <div className="column" >
                <h4>Languages</h4>
                <ul>
                  <li>French</li>
                  <li>English</li>
                </ul>
                <br />
              </div>
              <div className="column" >
                <h4>Skills & Endorsement</h4>
                <ul>
                  <li>ASP.NET</li>
                  <li>Node.js</li>
                  <li>Next.js</li>
                  <li>VB.NET</li>
                  <li>MongoDb</li>
                  <li>MySQL</li>
                  <li>Python</li>
                  <li>REACT.js</li>
                  <li>Java</li>
                  <li>jQuery</li>
                  <li>Express.js</li>
                </ul>
              </div>

            </div>
          </div>
          

        </div>

        <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: 275px 275px 275px;
          text-align:center;
          grid-gap: 90px;
          
        }
        
        .box {
        
          padding: 0px;
          font-size: 150%;
        }
      .company-info {
        margin: 0 0 100px 0;
        padding: 0;
        list-style: none;
        font-size: 18px;
      }
      .company {
        font-weight: 700;
        font-size: 24px;
      }
      .about-text {
        color: #777;
        text-align: left;
        max-width: 1000px;
        margin: 0 auto 100px;
        padding: 0px;
      }
      img {
        float: center;
        margin: 10px 0 20px 20px;
        
      }
      @media (max-width: 600px) {
        .about-text img {
          float: none;
          display: block;
          margin: 0 auto 30px;
        }
      }

      * {
        box-sizing: border-box;
      }
      
      /* Create four equal columns that floats next to each other */
      .column {
        float: left;
        width: 25%;
        padding: 10px;
        
        
      }
      .table{
        box-shadow: 0 0 20px 0 rgba(72,94,116,0.7);
        padding: 1em;
        
      }
      
      /* Clear floats after the columns */
      .row:after {
        content: "";
        display: table;
        clear: both;
      }
    `}</style>
      </Layout>
    </div>
  )
}

export default About;