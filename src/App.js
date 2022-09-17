import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from "./components/header"
import 'tw-elements';

function App({ basename }) {

  return (
    <Suspense>
      <BrowserRouter basename={basename}>
        <Header />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
