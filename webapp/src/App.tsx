import { TrpcProvider } from './lib/trps.tsx';
import { AllIdeasPage } from './pages/Ideas';
import { ViewIdeaPage } from './pages/ViewIdeaPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAllIdeasRoute, getViewIdeaRoute } from './lib/routes';

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllIdeasRoute()} element={<AllIdeasPage />} />
          <Route path={getViewIdeaRoute({ ideaNick: ':ideaNick' })} element={<ViewIdeaPage />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
};
