import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import EmailForm from './components/Form/EmailForm'
import Questionnaire from './components/Question/Questionnaire'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <EmailForm></EmailForm>
      <Questionnaire></Questionnaire>
      <Footer></Footer>
    </div>
  );
}

export default App;
