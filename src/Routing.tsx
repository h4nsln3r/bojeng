import Helmet from 'react-helmet';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Init from './pages/2026';
import Ai from './pages/2026/ai';

export const PATHS = {
  START: '/',
  AI: '/test',
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
          <Route path={PATHS.AI} element={<Ai />} />
          <Route path="*" element={<Navigate replace to={PATHS.START} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
