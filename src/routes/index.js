import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import CharacterList from 'components/CharacterList';
import CharacterDetails from 'components/CharacterDetails';
import NotFound from 'components/NotFound';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navigate to="/character" replace />} />
        <Route path="/character" element={<CharacterList />} />
        <Route path="/character/:characterId" element={<CharacterDetails />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
