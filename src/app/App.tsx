import { ConstrSite } from '../components/ConstrSite/ConstrSite';
import { Header } from '../components/Header/Header';
import { ConstrBlock } from '../components/ConstrBlock/ConstrBlock';

import './App.scss';

const App = () => {
  return (
    <>
      <Header/>
      <div className="App">
        <ConstrSite/>
        <ConstrBlock/>
      </div>
    </>
  );
}

export default App;
