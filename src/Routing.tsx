import Helmet from 'react-helmet';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store, { sagaMiddleware, persistor } from './store';
import sagas from './store';
import StartPage from './pages/startpage/';
import ErrorPage from './pages/errorpage/ErrorPage';
import './styles/main.scss';
import './styles/variables.scss';
import TestPage from './pages/testpage/TestPage';

export const PATHS = {
  // TODO
  INIT: '',
  STARTPAGE: '/start',
  TESTPAGE: '/TESTPAGE',
  ERRORPAGE: '/error'
};



interface Props {
}
// sagaMiddleware.run(sagas);

const Routing = ({ }: Props) => { // Here
  return (
    <>
      <Helmet>
        {/* <title>{t('_DocumentTitle')}</title> */}
        <title>Hannesoo</title>
      </Helmet>

      <StoreProvider store={store}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>

            <Routes>
              <Route path={PATHS.INIT} element={<StartPage />} />
              <Route path={PATHS.STARTPAGE} element={<StartPage />} />
              <Route path={PATHS.TESTPAGE} element={<TestPage />} />
              <Route path={PATHS.ERRORPAGE} element={<ErrorPage />} />
              <Route path="*" element={<Navigate replace to={PATHS.ERRORPAGE} />} />
            </Routes>

          </PersistGate>
        </BrowserRouter>
      </StoreProvider>
    </>
  )
}

export default Routing;