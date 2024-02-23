import logo from './logo.svg';
import './App.css';
// import CurrentTime1 from './components/CurrentTime1';
import EventCard from './components/EventCard';
import './components/CurrentTime1.css'
import Message from './components/Message';


function App() {
  return (
    <div>
        <Message author="Kate" text="Hi, how a u?" />
        <Message author="Amazon" text="We'receved your resume and invite you for intervew" />
        <Message author="Teacher" text="Don't forget about homework" />
    </div>
      
  

  );
 }

export default App;
