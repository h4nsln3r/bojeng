import Helmet from 'react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Init from './pages/Init/';

import './styles/main.scss';

export const PATHS = {
  START: '/bojeng',
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
          <Route path={PATHS.START} element={<Init />} />
          {/* <Route path="*" element={<Navigate replace to={PATHS.INIT} />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
