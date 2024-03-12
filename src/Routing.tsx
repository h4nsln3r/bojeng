import Helmet from 'react-helmet';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import StartPage from './pages/startpage/';
import './styles/main.scss';
import './styles/variables.scss';

export const PATHS = {
  INIT: '/bojeng/start',
  STARTPAGE: '/bojeng'
};



interface Props {
}

const Routing = ({ }: Props) => {

  console.log("routing")
  return (
    <>
      <Helmet>
        <title>BOJENG</title>
      </Helmet>

      <StoreProvider store={store}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <Routes>
              <Route path={PATHS.INIT} element={<StartPage />} />
              <Route path={PATHS.STARTPAGE} element={<StartPage />} />
              <Route path="*" element={<Navigate replace to={PATHS.STARTPAGE} />} />
            </Routes>
          </PersistGate>
        </BrowserRouter>
      </StoreProvider>
    </>
  )
}

export default Routing;