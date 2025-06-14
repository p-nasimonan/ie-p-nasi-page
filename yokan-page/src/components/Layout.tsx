import { Link, Outlet } from 'react-router-dom';

/*
  ページの構成
  - Layout
    - Home
    - Works
    - Contact
    @param {object} props
    @returns {JSX.Element}
*/
const Layout = () => {
  return (
    <div className="main-content">
      <h1 className="welcome-title">
        ようかんのページにようこそ！
      </h1>
      <nav>
        <ul className="navigation-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/works">works</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          <li>
            <a href="https://ie.u-ryukyu.ac.jp/~e245719/hello">hello(課題)</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout; 