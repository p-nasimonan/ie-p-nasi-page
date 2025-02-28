import Skills from '../components/Skills';

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
        <Skills />
        <section className="education">
          <h2>経歴</h2>
          <article className="education-container">
            <h3>2024年</h3>
            <p>琉球大学工学部に入学</p>
            <h3>2024年</h3>
            <p>シス菅に参加</p>
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
            <p>アバター改変？</p>
            <p>キャストする（予定）</p>
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
        <p>React、viteを使って作成しています。</p>
        <p>React Routerを使ってページ遷移をしています。</p>
        <p>CSSを使ってデザインしています。</p>
        <p>リポジトリ：<a href='https://github.com/p-nasimonan/ie-p-nasi-page'>https://github.com/p-nasimonan/ie-p-nasi-page</a></p>
      </section>
    </div>
  );
};

export default Home; 