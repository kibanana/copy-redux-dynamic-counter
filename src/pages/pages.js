import MainPage from '../components/MainPage';
import UseRedux from '../components/UseRedux';

const pages = [
  {
    path: '/',
    component: MainPage,
    exact: true,
  },
  {
    path: '/use-redux',
    component: UseRedux,
  },
];

export default pages;
