import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from 'route/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={`route_${route.path}`} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
