import React, { Suspense, lazy, useState } from 'react'
import { WebContext } from './WebContext';
import { Route, Routes } from 'react-router-dom';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const LoadingPage = lazy(() => import('./pages/LoadingPage'));

function App() {
  const [showBlogPopUp, setShowBlogPopUp] = useState(false);
  const [reloadData, setRelaodData] = useState(false);

  return (
    <WebContext.Provider value={{showBlogPopUp, setShowBlogPopUp, reloadData, setRelaodData}}>
      <div>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path='/' element={<LandingPage />}/>
          </Routes>
        </Suspense>
      </div>
    </WebContext.Provider>
  )
}

export default App