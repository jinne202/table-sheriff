import RestaurantMain from 'components/pages/Restaurant/Main';
import RestaurantDetail from 'components/pages/Restaurant/Detail';
import Main from 'components/pages/Main';
import FoodMain from 'components/pages/Food/Main';
import FoodDetail from 'components/pages/Food/Detail';

export const routes = [
  { path: '/', element: <Main /> },
  { path: '/restaurant', element: <RestaurantMain /> },
  { path: '/restaurant/detail', element: <RestaurantDetail /> },
  { path: '/food', element: <FoodMain /> },
  { path: '/food/detail/:id', element: <FoodDetail /> },
];
