import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Main from './pages/Main.js';
import Navigation from './component/Navigation.js';
import NavigationTop from './component/NavigationTop.js';
import Footer from './Footer.js';
import MyPage from './pages/MyPage.js';
import SignUI from './pages/SignUI.js';
import UserProfile from './pages/UserProfile.js';
import UserModify from './pages/UserModify.js';
import CompetitionDetail from './pages/CompetitionDetail.js';

function App() {
  const [showNavigation, setShowNavigation] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지가 변경될 때마다 호출되는 함수
    const handleNavigation = () => {
      const isSignUI = window.location.pathname.includes('/SignUI');
      setShowNavigation(!isSignUI);
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
          <Route path='/SignUI/*' element={<SignUI />} />
          <Route path='/UserProfile/*' element={<UserProfile />} />
          <Route path='/UserModify/*' element={<UserModify />} />
          <Route path='/CompetitionDetail/*' element={<CompetitionDetail />} />
        </Routes>
      </div>
      {showNavigation && <Footer />}
    </div>
  );
}

export default App;
