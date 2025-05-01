/**
 * Worksコンポーネント
 * プロジェクトのリストを表示します。
 * 各プロジェクトにはタイトル、説明、サムネールが含まれます。
 * 制限事項: サムネールのURLは仮のものです。
 */

const Works = () => {
  const projects = [
    { id: 1, title: "3Dモデリング", url: "https://p-nasi.booth.pm/items/6763447", thumbnail: "https://booth.pximg.net/09182763-2564-4712-be80-397fbcf88ba3/i/6763447/848ddd5a-f672-41a3-92ee-2ad9ee72f58f_base_resized.jpg" , description: "VRChatの衣装です。500円で販売しています" },
    { id: 2, title: "LWJGLを使ったゲーム", url: "https://github.com/p-nasimonan/Minicraft" ,thumbnail:"https://github.com/user-attachments/assets/59e83d2a-3233-4a95-b995-a53b3de4eb92",description: "javaの最終課題でマイクラもどきを作った。アルゴリズムわからないO(n^2) \n UMLを作るなど、オブジェクト指向にこだわった結果わかりやすくできたと感じている" },
    { id: 3, title: "カード構築webアプリ", url: "https://p-nasimonan.github.io/PPLALE-web_front/", thumbnail:"https://github.com/user-attachments/assets/5a895727-011e-4c35-8c57-66b94f290253", description: "ぷぷりえーるのデッキ構築webサイト。 \n 初めて複数人に使われたりissueが来るwebアプリできた。" },
  ];

  return (
    <div className="page-content">
      <section className="works-grid">
        {projects.map((project) => (
          <article className="work-item" key={project.id}>
            <h2>{project.title}</h2>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.thumbnail} alt={`${project.title}のサムネール`} />
            </a>
            <p>{project.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Works; 