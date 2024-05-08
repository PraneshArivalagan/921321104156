import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and Route separately
import AllProductsPage from './components/AllProductsPage';

function App() {
  return (
    <BrowserRouter> {/* Wrap your routes in BrowserRouter */}
      <Switch> {/* Use Switch for defining routes */}
        <Route path="/" exact component={AllProductsPage} /> {/* Define routes using Route */}
        {/* Add more routes as needed */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
