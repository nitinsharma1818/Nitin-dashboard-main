// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
// import ThemeSwitcher from './components/ThemeSwitcher';
import { lightTheme, darkTheme } from './theme';
import Dashboard from './pages/Dashboard';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import CalendarPage from './pages/CalendarPage';
import KanbanPage from './pages/KanbanPage';

function App() {
  const [theme, setTheme] = React.useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <main style={{ flexGrow: 1, padding: '1rem' }}>
            <Header toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/kanban" element={<KanbanPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
