import React from 'react';
import { RouterProvider } from "react-router-dom";
import { routes } from "Routes/routes";

const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
