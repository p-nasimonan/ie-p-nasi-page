import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
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
            <a href="https://ie.u-ryukyu.ac.jp/~e245719/internal">学内向け</a>
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
        <img src = "/~e245719/myself.png" alt="自分の写真" />
        <div className="profile-container">
          <h2>名前</h2>
          <p>ネット上の名前: ようかん、P-nasi</p>
        </div>
        <div className="profile-container">
          <h2>所属</h2>
          <p>琉球大学 工学部 知能情報コース y24</p>
        </div>
      </div>
      <div className="introduction">
        <h2>$ このサイトについて</h2>
        <p>ようかんのページへようこそ！</p>
        <p>このページは、琉球大学工学部の学生が趣味で作った自己紹介ページです。</p>
        <p>このページはReact、viteを使って作成しています。</p>
        <p>このページは、React Routerを使ってページ遷移をしています。</p>
        <p>このページは、CSSを使ってデザインしています。</p>
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
      <div className="contact">
        <h2>twitter</h2>
        <a href="https://x.com/youkan0124"><img src="https://rakugakiicon.com/ri/wp-content/uploads/2015/04/b759b32978d8c1a78eaa4d84db2fc405.png"></img></a>
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hideLoading, setHideLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // まずローディング画面のフェードアウトを開始
      setHideLoading(true);

      // ローディング画面のフェードアウト完了後にローディングコンポーネントを削除
      setTimeout(() => {
        setIsLoading(false);
      }, 100); // フェードアウトアニメーションの時間と同じ

    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter basename="/~e245719">
    {isLoading && (
        <div className={`loading ${hideLoading ? 'hide' : ''}`}>
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
    )}
      <div className={`content-wrapper ${!isLoading ? 'visible' : ''}`}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="works" element={<Works />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
