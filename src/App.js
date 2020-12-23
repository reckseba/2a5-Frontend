import React from 'react';
import './App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          URL:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">2a5 URL-Shortner</header>
      <section>
        <NameForm />
        <div>Ergebnis</div>
        <div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAN0SURBVO3BQa7cVgADwebD3P/KHS+y4EqAIM23nbAq/sLMvw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlMFMOM+UwUw4z5TBTDjPlw0NJ+EkqdyThikpLQlNpSbii0pLwk1SeOMyUw0w5zJQPL1N5UxKeUGlJuKLyTSpvSsKbDjPlMFMOM+XDlyXhDpU7ktBUrqi0JDSVKypvSsIdKt90mCmHmXKYKR/+Z5JwRxLuUPmbHWbKYaYcZsqH/5gkNJWmciUJTeVKEv5LDjPlMFMOM+XDl6n8Tkm4Q6Ul4YrKEyp/ksNMOcyUw0z58LIk/E4qLQlNpSXhDpWWhKZyJQl/ssNMOcyUw0z58JDK30zlm1T+JoeZcpgph5ny4aEkNJWWhDepNJWWhKbSknBF5Q6VK0l4k8o3HWbKYaYcZsqHlyWhqVxJQlO5IwlN5Q6VKyotCVdUmkpLQlO5IwlN5U2HmXKYKYeZ8uFlKi0JdyThiSQ8kYQ3JaGptCRcUbmShKbyxGGmHGbKYabEX/hBSbhD5Y4kNJWWhKbyRBLuUHlTEprKE4eZcpgph5kSf+GBJNyhciUJd6i0JFxR+UlJuEOlJeEOlScOM+UwUw4zJf7CA0l4QuWOJNyhciUJV1TuSEJTuSMJTaUloam86TBTDjPlMFM+vEylJeFKEu5QaUl4QqUloSXhiSR8UxKayhOHmXKYKYeZ8uEPp9KS0FRaEloSmkpLwhWVloRvUrmi0pLwpsNMOcyUw0z58GUqLQlN5UoSmkpLQlNpSbhDpSXhd0pCU2kqbzrMlMNMOcyU+At/sSTcofJEEq6o3JGEKyo/6TBTDjPlMFM+PJSEn6TSVFoSriThisoVlZaEK0loKldUWhLuUHniMFMOM+UwUz68TOVNSbiShKbSknBF5UoSmsodKnckoalcScKbDjPlMFMOM+XDlyXhDpUnkvAmlZaEK0l4QqUl4ScdZsphphxmyof/GJU7kvCEypUkNJWWhJaE3+kwUw4z5TBTPvzPqbQkXFG5Q+WKSkvCFZWWhDcdZsphphxmyocvU/kmlStJaCotCVdUWhLuUGlJuEPlJx1mymGmHGbKh5cl4Scl4U0qLQlN5Scl4ScdZsphphxmSvyFmX8dZsphphxmymGmHGbKYaYcZsphphxmymGmHGbKYaYcZsphphxmyj8PFnsSbpkZZwAAAABJRU5ErkJggg==" />
        </div>
      </section>
      <footer>© 2012-2020 2a5.de</footer>
    </div>
  );
}

export default App;
