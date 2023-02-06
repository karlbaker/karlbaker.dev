import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderBar from './components/HeaderBar/HeaderBar';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/Blog/ArticlePage';
import ArticlesListPage from './pages/Blog/ArticlesListPage';
import ResumePage from './pages/Resume/ResumePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <HeaderBar />
      <div id="page-body">
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/blog" element={<ArticlesListPage />} />
        <Route path="/blog/:articleId" element={<ArticlePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
      </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
