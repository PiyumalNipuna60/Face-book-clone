import './App.css';
import Feed from './component/feed/Feed';
import Header from './component/header/Header';
import SideBar from './component/sideBar/SideBar';


function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Feed />
    </div>
  );
}

export default App;
