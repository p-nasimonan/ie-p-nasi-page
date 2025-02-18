/*
  @ts-check
  @type {import('react').FunctionComponent}
  
*/
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import './App.css'

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
            <a href="https://ie.u-ryukyu.ac.jp/~e245719/internal">学内向け</a>
          </li>
        </ul>
      </nav>
      {/* ここに各ページのコンテンツが表示される */}
      <Outlet />
    </div>
  );
};

/*
  Homeページのコンポーネント
  @returns {JSX.Element}
*/
const Home = () => {
  return (
    <div className="page-content">
      <section className="profile">
        <img src = "/~e245719/myself.png" alt="自分の写真" />
        <article className="profile-container">
          <h2>名前</h2>
          <p>ネット上の名前: ようかん、P-nasi</p>
        </article>
        <article className="profile-container">
          <h2>所属</h2>
          <p>琉球大学 工学部 知能情報コース y24</p>
        </article>
      </section>
      <div className="subinfo">
        <section className="skills">
          <h2>スキル</h2>
          <article className="skills-container">
            <h3>言語</h3>
            <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg"></img>
            <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg"></img>
            <img src="https://cdn.worldvectorlogo.com/logos/java.svg"></img>
            <img src="https://cdn.worldvectorlogo.com/logos/c.svg"></img>
          </article>
          <article className="skills-container">
            <h3>フレームワーク</h3>
            <p>React、Vue</p>
          </article>
          <article className="skills-container">
            <h3>その他</h3>
            <p>Git、CSS、HTML</p>
          </article>
        </section>
        <section className="education">
          <h2>経歴</h2>
          <article className="education-container">
            <h3>2024年</h3>
            <p>琉球大学工学部に入学</p>
          </article>
        </section>
        <section className='hobby'>
          <h2>趣味</h2>
          <article className="hobby-container">
            <h3>プログラミング</h3>
            <p>React、Vue、Pythonなどを使っています。</p>
          </article>
          <article className="hobby-container">
            <h3>アニメ</h3>
            <p>ごちうさ</p>
          </article>
          <article className='hobby-container'>
            <h3>VRChat</h3>
            <p>アバター</p>
          </article>
          <article className="hobby-container">
            <h3>ゲーム</h3>
            <p>原神</p>
          </article>
          <article className="hobby-container">
            <h3>音楽</h3>
            <p>KawaiiFutureBase</p>
          </article>
        </section>
      </div>



      <section className="about-site">
        <h2>$ このサイトについて</h2>
        <p>ようかんのページへようこそ！</p>
        <p>このページは、琉球大学工学部の学生が趣味で作った自己紹介ページです。</p>
        <p>このページはReact、viteを使って作成しています。</p>
        <p>このページは、React Routerを使ってページ遷移をしています。</p>
        <p>このページは、CSSを使ってデザインしています。</p>
      </section>
    </div>
  );
};

/*
  Worksページのコンポーネント
  @returns {JSX.Element}
*/
const Works = () => {
  return (
    <div className="page-content">
      <section className="works-grid">
      <h2>Minicraft</h2>
        <article className="work-item">
          <h2>プロジェクト1</h2>
          <p>説明文がここに入ります...</p>
        </article>
        {/* 他の作品も同様に追加 */}
      </section>
    </div>
  );
};

/*
  Contactページのコンポーネント
  @returns {JSX.Element}
*/
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

const Loading: React.FC<{ hideLoading: boolean }> = ({ hideLoading }) => {
  return (
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
  );
}

/*
  Appコンポーネント
  @returns {JSX.Element}
*/
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
      <Loading hideLoading={hideLoading} />
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
