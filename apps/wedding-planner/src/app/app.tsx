import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PagesHome } from '@marken-shop-react/pages/home';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagesHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
