import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePageHome} from "@marken-shop-react/home/page/home";
import {ThemePageTheme} from "@marken-shop-react/theme/page/theme";
import {NotFoundPageNotFound} from "@marken-shop-react/not-found/page/not-found";

export function App() {
  return (
    <div className={"h-screen bg-cyan-100"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ThemePageTheme />} />
          <Route path="/home" element={<HomePageHome />} />
          <Route path="*" element={<NotFoundPageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
