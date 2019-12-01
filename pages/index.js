
import Link from 'next/link';
import '../components/Nav';
import Nav from '../components/Nav';
import '../components/Welcome';
import Welcome from '../components/Welcome';
import '../components/Logo';
import Logo from '../components/Logo';
import Gallery from '../components/Gallery';
import Layout from '../components/Layout';

const images = [
  'https://i.ibb.co/6bT897G/My-Post.png',
  'https://i.ibb.co/XtrfFVy/Weater.png',
  'https://i.ibb.co/s27Zchs/Type-n-speak.png',
  ''
];

const Home = () => (
  <Layout>
    <div className="cover">
      <div className="hello">
        <h1>Welcome To My Portfolio</h1>
        <div>This portfolio gives you an idea of my web development knowledge</div>
        <Link href="/services">
          <a className="view-more">What I Do</a>
        </Link>
      </div>
    </div>
    <div className="latest-work">
      <h2>Latest Work</h2>
      <Gallery images={images} />
      <div className="">
        <Link href="/services">
          <a className="view-more">View All</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .cover {
        position: relative;
        min-height: 600px;
        background: transparent url(https://www.ionos.co.uk/digitalguide/fileadmin/DigitalGuide/Teaser/web-development-t.jpg) no-repeat center center;
        background-size: cover;
      }
      .hello {
        position: absolute;
        top: 60px;
        left: 60px;
        background: #fff;
        padding: 30px;
      }
      .hello h1 {
        margin: 0 0 10px 0;
      }
      a.view-more {
        text-transform: uppercase;
        font-size: 16px;
      }
      .latest-work {
        text-align: center;
        padding: 30px 0;
        margin-bottom: 60px;
      }
      @media (max-width: 480px) {
        .hello {
          left: 30px;
          right: 30px;
          font-size: 18px;
          padding: 20px;
        }
        h1 {
          font-size: 28px;
        }
      }
    `}</style>
  </Layout>
);

export default Home;