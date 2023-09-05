import { ConstrSite } from '../components/ConstrSite/ConstrSite';
import { Header } from '../components/Header/Header';
import { ConstrBlock } from '../components/ConstrBlock/ConstrBlock';
import { ConstrRender } from '../components/ConstrRender/ConstrRender';

import './App.scss';

const App = () => {
  return (
    <>
      <Header/>
      <div className="App">
        <ConstrSite/>
        <ConstrBlock/>
        <ConstrRender/>
      </div>
    </>
  );
}

export default App;
