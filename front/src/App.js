import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Main from './pages/Main.js';
import Navigation from './Navigation.js';
import NavigationTop from './NavigationTop.js';
import Footer from './Footer.js';
import MyPage from './pages/MyPage.js';

function App() {
  const [showNavigation, setShowNavigation] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지가 변경될 때마다 호출되는 함수
    const handleNavigation = () => {
      const isMyPage = window.location.pathname.includes('/MyPage');
      setShowNavigation(!isMyPage); // MyPage에서는 Navigation을 보이지 않도록 설정
    };

    // 페이지가 변경될 때마다 이벤트 리스너 등록
    navigate(handleNavigation);
    handleNavigation();

    // 컴포넌트가 언마운트될 때 이벤트 리스너 해제
    return () => navigate(undefined);
  }, [navigate]);

  return (
    <div className="App">
      {showNavigation && <NavigationTop />}
      {showNavigation && <Navigation />}
      <div className="App-body">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/MyPage/*' element={<MyPage />} />
        </Routes>
      </div>
      {showNavigation && <Footer />}
    </div>
  );
}

export default App;
