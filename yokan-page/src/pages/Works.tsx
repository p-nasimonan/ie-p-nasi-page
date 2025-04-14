/**
 * Worksコンポーネント
 * プロジェクトのリストを表示します。
 * 各プロジェクトにはタイトル、説明、サムネールが含まれます。
 * 制限事項: サムネールのURLは仮のものです。
 */

const Works = () => {
  const projects = [
    { id: 1, title: "3Dモデリング", url: "https://p-nasi.booth.pm/items/6763447", thumbnail: "https://booth.pximg.net/09182763-2564-4712-be80-397fbcf88ba3/i/6763447/848ddd5a-f672-41a3-92ee-2ad9ee72f58f_base_resized.jpg" , description: "VRChatの衣装です。500円で販売しています" },
    { id: 2, title: "LWJGLを使ったゲーム", url: "https://github.com/p-nasimonan/Minicraft" ,thumbnail:"https://private-user-images.githubusercontent.com/170346546/404365972-59e83d2a-3233-4a95-b995-a53b3de4eb92.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ1OTE1NjAsIm5iZiI6MTc0NDU5MTI2MCwicGF0aCI6Ii8xNzAzNDY1NDYvNDA0MzY1OTcyLTU5ZTgzZDJhLTMyMzMtNGE5NS1iOTk1LWE1M2IzZGU0ZWI5Mi5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQwMDQxMDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00Mzg0NzU5ZTc1Y2FkYTQ3NDNiNzU0ODZjODgzMjdiYjJjNzRkMDFkODI0NDBiZDk3MDJhOTNkYTEwZjE1Y2VkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.MLsuVHHwL9z6kKCcoOn3efmHscDewoUa8Pplf1PqTl0",description: "javaの最終課題でマイクラもどきを作った。 \n UMLを作るなど、オブジェクト指向にこだわった結果わかりやすくできたと感じている" },
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