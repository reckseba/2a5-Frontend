import React from 'react';
import Input from './components/Input';
import CopyButton from './components/CopyButton';
import './App.css';


function App() {

  return (
    <div className="App">
      <header className="App-header">2a5 URL-Shortner</header>
      <section>
        <Input />
        <div>
          <input id="result" />
          <a id="resultlink" href="/">Visit</a>
          <CopyButton />
        </div>
        <div>
          <img id="qrcode" alt="QR-Code" src="" />
        </div>
      </section>
      <footer>© 2012-2020 2a5.de</footer>
    </div>
  );
}

export default App;
