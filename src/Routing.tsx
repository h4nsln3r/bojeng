import Helmet from 'react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Init2 from './pages/2025';
// import Init from './pages/2026';

export const PATHS = {
  START: '/',
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
          <Route path={PATHS.START} element={<Init2 />} />
          {/* <Route path="*" element={<Navigate replace to={PATHS.INIT} />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
