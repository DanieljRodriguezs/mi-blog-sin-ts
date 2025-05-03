import React from 'react';
import Home from './components/Home';
import Blog from './components/Blog';
import Suscribirse from './components/Suscribirse';
import QuienesSomos from './components/QuienesSomos';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'blog':
        return <Blog />;
      case 'suscribirse':
        return <Suscribirse />;
      case 'quienes-somos':
        return <QuienesSomos />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <nav>
        <button onClick={() => setCurrentPage('home')}>Inicio</button>
        <button onClick={() => setCurrentPage('blog')}>Blog</button>
        <button onClick={() => setCurrentPage('suscribirse')}>Suscribirse</button>
        <button onClick={() => setCurrentPage('quienes-somos')}>Quiénes Somos</button>
      </nav>
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
