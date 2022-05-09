import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Navigate, NavLink, Route, Routes,
} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import CharactersPage from './Pages/CharactersPage/CharactersPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import Header from './Components/Header/Header';
import CharacterPage from './Pages/CharacterPage/CharacterPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import EpisodesPage from './Pages/EpisodesPage/EpisodesPage';
import EpisodePage from './Pages/EpisodePage/EpisodePage';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/episodes/:id" element={<EpisodePage />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  </div>
);

export default App;
