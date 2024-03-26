import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import './App.css';

const App = () => {
  let page;
  switch (window.location.pathname) {
    case '/':
      page = <Home />;
      break;
    case '/projects':
      page = <Projects />;
      break;
  }
  return <>{page}</>;
};

export default App;
