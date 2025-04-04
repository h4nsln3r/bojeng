import Helmet from 'react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Init from './pages/Init/';
import Zucchini from './pages/Zucchini/';
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
          <Route path={PATHS.INTRO} element={<Init />} />
          <Route path={PATHS.ZUCCINI} element={<Zucchini />} />
          {/* <Route path="*" element={<Navigate replace to={PATHS.INIT} />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
