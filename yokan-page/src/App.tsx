import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import './App.css'

// レイアウトコンポーネント
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
            <Link to="/internal">学内向け</Link>
          </li>
        </ul>
      </nav>
      {/* ここに各ページのコンテンツが表示される */}
      <Outlet />
    </div>
  );
};

// 各ページのコンポーネント
const Home = () => {
  return (
    <div className="page-content">
      <div className="profile">
        <img src = "/myself.png" alt="自分の写真" />
        <div className="profile-text">
          <h2>名前</h2>
          <p>ネット上の名前: ようかん、P-nasi</p>
        </div>
        <div className="profile-text">
          <h2>所属</h2>
          <p>琉球大学 工学部 知能情報コース y24</p>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <div className="page-content">
      <h2>Works</h2>
      <div className="works-grid">
        <div className="work-item">
          <h2>プロジェクト1</h2>
          <p>説明文がここに入ります...</p>
        </div>
        {/* 他の作品も同様に追加 */}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="page-content">
      <h1>Contact</h1>
    </div>
  );
};

const Internal = () => {
  return (
    <div className="page-content">
      <h1>学内向け情報</h1>
      {/* 学内向けコンテンツ */}
    </div>
  );
};

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loading = document.querySelector('.loading');
      const scene = document.querySelector('#scene');
      
      if (loading && scene) {
        // ローディング画面をフェードアウト
        loading.classList.add('hidden');
        // シーンをフェードアウト
        scene.classList.add('hidden');
      }
    }, 2000);

    return () => clearTimeout(timer); // クリーンアップ
  }, []);

  return (
    <Router>
      <>
        <div className="loading">
          <div id="scene">
            <div className="boxBase">
              <div className="top"></div>
              <div className="bottom"></div>
              <div className="front"></div>
              <div className="back"></div>
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <div className="boxBase">
              <div className="top"></div>
              <div className="bottom"></div>
              <div className="front"></div>
              <div className="back"></div>
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <div className="boxBase">
              <div className="top"></div>
              <div className="bottom"></div>
              <div className="front"></div>
              <div className="back"></div>
              <div className="left"></div>
              <div className="right"></div>
            </div>
          </div>
        </div>

        <Routes>
          {/* Layoutを親ルートとして設定 */}
          <Route path="/" element={<Layout />}>
            {/* インデックスルート（ホームページ） */}
            <Route index element={<Home />} />
            {/* 子ルート */}
            <Route path="works" element={<Works />} />
            <Route path="contact" element={<Contact />} />
            <Route path="internal" element={<Internal />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
