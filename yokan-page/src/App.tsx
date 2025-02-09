import { useState, useEffect } from 'react'
import './App.css'


function App() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer); // クリーンアップ
  }, []);
  if (isLoading) {
    return (
      <>
        <div className="loader"></div>
      </>
    );
  } else {
  return (
    <>

        <h1>
          ようかんのページにようこそ！
        </h1>
    </>
  );
  };
}

export default App;
