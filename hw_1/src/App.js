import logo from './logo.svg';
import './App.css';
// import CurrentTime1 from './components/CurrentTime1';
import EventCard from './components/EventCard';
import './components/CurrentTime1.css'
import Message from './components/Message';
import Counter from './components/counter';
import Show from './components/visible';
import Timer from './components/timer';
import MessageList from './components/list';
import Counter2 from './components/counter2';
import TextInput from './components/TextInput';
import TodoList from './components/TodoList';
import Timer2 from './components/Timer2';
import CommentsList from './components/CommentsList';



function App() {
  // const userName = ''
  return (
    <div>
        <div>
        {/* <Message author="Kate" text="Hi, how a u?" />
        <Message author="Amazon" text="We'receved your resume and invite you for intervew" />
        <Message author="Teacher" text="Don't forget about homework" /> */}
        </div>

        {/* <div>
          <h1>Hello {userName}</h1>
          <Counter />
          <Counter2 />
          <Show />
          <Timer />
          <MessageList />
          <TextInput />
          <TodoList />
          <Timer2 />
        </div> */}

        <div>
          <CommentsList />
        </div>
    </div>
      
  

  );
 }

export default App;
