import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PagesHome from './pages-home/pages-home';
import PagesNotFound from './pages-not-found/pages-not-found';

/* eslint-disable-next-line */
export interface PagesProps {}

export function Pages(props: PagesProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagesHome />} />
        <Route path="*" element={<PagesNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
