
import Link from "next/link";
import { useRouter } from "next/router";

  const Nav = (props) => {
    return (
    <>
    <header className="header fixed-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-8">
              <a href="#"><img className="site-logo img-responsive" src="./static/img/jakarea-parvez.png" alt=""/></a>
            </div>
            <div className="col-lg-8 col-4">
              <nav className="navbar navbar-expand-lg">
                <div className="navbar-header">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <i className="fa fa-bars"></i>
                  </button>
                </div>
                
                <ul className="nav navbar-nav navbar-right">
                <li className="current">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <a>Service</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects">
                      <a>Projects</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

      </header>
      
    </>
  );
};

export default Nav;
