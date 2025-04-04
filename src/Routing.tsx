import Helmet from 'react-helmet';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import StartPage from './pages/Intro/Intro';
import ZucchiniPage from './pages/Zucchini/Zucchini';
import './styles/main.scss';

export const PATHS = {
  INTRO: '/bojeng',
  ZUCCINI: '/zucchini',
};

interface Props {}

const Routing = ({}: Props) => {
  return (
    <>
      <Helmet>
        <title>BOJENG</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.INTRO} element={<StartPage />} />
          <Route path={PATHS.ZUCCINI} element={<ZucchiniPage />} />
          {/* <Route path="*" element={<Navigate replace to={PATHS.INIT} />} /> asd */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
