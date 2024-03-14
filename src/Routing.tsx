import Helmet from 'react-helmet';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import StartPage from './pages/Init/Init';
import './styles/main.scss';

export const PATHS = {
  INIT: '/bojeng',
};



interface Props {
}

const Routing = ({ }: Props) => {

  return (
    <>
      <Helmet>
        <title>BOJENG</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.INIT} element={<StartPage />} />
          <Route path="*" element={<Navigate replace to={PATHS.INIT} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing;