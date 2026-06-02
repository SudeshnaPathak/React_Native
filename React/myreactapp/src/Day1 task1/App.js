import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import { Counter } from './Counter';
import {MessageToggle} from './MessageToggle';
import {LikeCount} from './LikeButton';
import { useState } from 'react';
import { DisplayLiveText } from './LiveTextDisplay';
import {ColorChanger} from './ColorChanger';
import {NameCard} from './NameCard';
import {FontSizeController} from './FontSizeController';
import {TaskStatus} from './TaskStatus';
import {GreetingCard} from './GreetingCard';

function App() {
  const [i, setI] = useState(0);
  return (
    // javascript + html ----> jsx
    // <div>
    //     <div>
    //         <span>I am span</span>
    //         <p>I am paragraph</p>
    //     </div>
    //     <div>
    //         <h1>I am heading 1</h1>
    //         <p>I am another paragraph</p>
    //     </div>
    // </div>


    // <div>
    //   <p>{i}</p>
    //   <button onClick={()=>setI(i+10)}>Click Me</button>
    //   <Header />
    //   <Hero />
    //   <Footer />
    // </div>

    // <Counter />

    // <MessageToggle />

    // <LikeCount />

    // <DisplayLiveText />

    // <ColorChanger />

    // <NameCard />

    // <FontSizeController />

    // <TaskStatus />
    <GreetingCard />
  );
}

export default App;
