
import Link from 'next/link';
function Nav() {
    return (
        <div>
            <ul className="menu">
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Services">
                        <a>Service</a>
                    </Link>
                </li>
               
                <li>
                    <Link href="/About">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Contact">
                        <a>Contact</a>
                    </Link>
                </li>
                <style jsx>{`
      .menu {
        margin: 5px 0 0;
        padding: 0;
        list-style: none;
        display: flex;
      }
      .menu li a {
        font-size: 22px;
        color: #111;
        font-weight: 300;
        padding: 5px 2px;
        margin: 0 10px;
        text-decoration: none;
      }
      .menu li a:hover {
        padding-bottom: 3px;
        border-bottom: 2px solid #ffe525;
      }
      @media (max-width: 600px) {
        .menu {
          display: block;
          margin-top: 20px;
        }
        .menu li {
          display: inline-block;
        }
        .menu li a {
          font-size: 18px;
        }
      }
    `}</style>
            </ul>


        </div>
    )
}

export default Nav; 