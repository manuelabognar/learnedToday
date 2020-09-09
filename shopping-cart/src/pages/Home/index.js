import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store';
import ItemList from '../../components/ItemList';

function Home() {
  return (
    <>
      <Provider store={store}>
        <ItemList />
      </Provider>
    </>
  );
}

export default Home;
