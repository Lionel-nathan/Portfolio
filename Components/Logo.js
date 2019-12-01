import Link from 'next/link';

const Logo = () => (
    <div className="logo">
        <Link href="/">
            <a>
                <img href="../pages/index" src="http://www.picturetopeople.org/out/picturetopeople.org-3cd2b3ac0e715ceeb7710f6ee4b27dfee8bfa734cb213984fb.png" />
            </a>
        </Link>


        <style jsx>{`
      .logo img {
        display: block;
        width: 120px;
      }
      @media (max-width: 600px) {
        .logo {
          display: inline-block;
        }
      }
    `}</style>
    </div>
);

export default Logo;