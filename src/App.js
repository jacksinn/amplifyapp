import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import EmailForm from './components/Form/EmailForm'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <EmailForm></EmailForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
