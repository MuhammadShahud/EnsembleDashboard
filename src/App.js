import { Route, Routes } from 'react-router';
import './App.css';
import { routes, unAuthRoutes } from './routes';
import WithNavbar, { WithoutNavbar } from './utils/with-navbar';
import { useSelector } from 'react-redux';
import { withoutNavbarKeys } from './utils/utils';
function App() {
  const { isAuth } = useSelector((state) => state.auth);
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.route) {
        return (
          <Route
            element={withoutNavbarKeys.includes(route.key) ? <WithoutNavbar /> : <WithNavbar />}
            key={route.key}
          >
            <Route path={route.route} element={<route.component />} key={route.key} />
          </Route>
        );
      }
      return null;
    });

  return (
    <>
      <Routes>
        {isAuth && getRoutes(routes)}
        {!isAuth && getRoutes(unAuthRoutes)}
      </Routes>
    </>
  );
}

export default App;
