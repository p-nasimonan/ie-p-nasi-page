import React, { useState, useEffect, useCallback } from 'react';
import './Game.css';

interface Circle {
  id: number;
  x: number;
  y: number;
}

const Game = () => {
  const [circles, setCircles] = useState<Circle[]>([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  // startGame関数をuseCallbackでメモ化
  const startGame = useCallback(() => {
    const interval = setInterval(() => {
      createCircle();
    }, 1000);

    return () => clearInterval(interval);
  }, []); // 依存関係がない場合は空配列

  useEffect(() => {
    if (gameStarted) {
      const cleanup = startGame();
      return cleanup;
    }
  }, [gameStarted, startGame]); // startGameを依存関係に追加

  // 新しい丸を生成
  const createCircle = () => {
    const newCircle: Circle = {
      id: Date.now(),
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 100)
    };
    setCircles(prev => [...prev, newCircle]);
  };

  // 丸をクリックした時の処理
  const handleClick = (id: number) => {
    setCircles(prev => prev.filter(circle => circle.id !== id));
    setScore(prev => prev + 1);
  };

  // マウスが近づいたら逃げる処理
  const handleMouseMove = (event: React.MouseEvent) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const escapeDistance = 100; // マウスからの逃げる距離

    setCircles(prev => prev.map(circle => {
      const dx = mouseX - circle.x;
      const dy = mouseY - circle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < escapeDistance) {
        // マウスから逃げる方向を計算
        const angle = Math.atan2(dy, dx);
        const newX = circle.x - Math.cos(angle) * 20;
        const newY = circle.y - Math.sin(angle) * 20;

        // 壁に当たった場合の反発処理
        const bounceX = newX < 0 || newX > window.innerWidth - 50;
        const bounceY = newY < 0 || newY > window.innerHeight - 50;

        return {
          ...circle,
          x: bounceX ? circle.x + Math.cos(angle) * 20 : Math.max(0, Math.min(window.innerWidth - 50, newX)),
          y: bounceY ? circle.y + Math.sin(angle) * 20 : Math.max(0, Math.min(window.innerHeight - 50, newY))
        };
      }
      return circle;
    }));
  };

  return (
    <div 
      className="game-container" 
      onMouseMove={handleMouseMove}
    >
      {!gameStarted ? (
        <button 
          onClick={() => setGameStarted(true)}
          className="start-button"
        >
          ゲームスタート
        </button>
      ) : (
        <>
          <div className="score">
            スコア: {score}
          </div>
          {circles.map(circle => (
            <div
              key={circle.id}
              onClick={() => handleClick(circle.id)}
              className="circle"
              style={{ left: circle.x, top: circle.y }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Game;
