import './App.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Jobs from "./Pages/Jobs/Jobs";
import Courses from "./Pages/Courses/Courses";
import ServicesPage from "./Pages/Service/ServicesPage";
import PricePlanPage from "./Pages/PricePlans/PricePlans";
import "./icomoon/style.css"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [openChat, setOpenChat] = useState(false)
  const staticMessage = "Hello i need your help right now. please spare some time for my query"

  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/why-we-rock",
      element: <About />,
    },
    {
      path: "/join-us",
      element: <Jobs />,
    },
    {
      path: "/courses",
      element: <Courses />,
    },
    {
      path: "/services",
      element: <ServicesPage />,
    },
    {
      path: "/price&plans",
      element: <PricePlanPage />,
    },

  ]);

  const sendWhatsAppMessage = () => {
    window.open(`https://api.whatsapp.com/send?phone=12092835757&text=${staticMessage}`, "_blank");
  }
  return (
    <div className="App">
      <div onClick={sendWhatsAppMessage} className='whatsapp-outer'>
        <span className="icon-whatsapp"></span>
      </div>
      {openChat &&
        <div className='live-chat-section'>
          <div className='header'>
            <p>Live Chat</p>
            <div onClick={() => setOpenChat(false)} className='close-icon'>
              <p>x</p>
            </div>
          </div>
          <div className='chat-area'>
            <div className='start-chat'>
              <div className='start-chat-icon'>
                <span className="icon-live-chat"></span>
              </div>
              <p>Start Chat Now</p>
            </div>
            {/* <div style={{ flexDirection: "row" }} className='chat-msg'>
              <div className='chater-name-user'>
                <p>MS</p>
              </div>
              <div className='chater-msg'>
                <p>MSsadasdasdasssssssssssssssssssssssssssssssssasdasdasddddddddddddddddddd</p>
              </div>
            </div>
            <div style={{ flexDirection: "row-reverse" }} className='chat-msg'>
              <div className='chater-name-admin'>
                <p>MS</p>
              </div>
              <div className='chater-msg'>
                <p>MSsadasdasdasssssssssssssssssssssssssssssssssasdasdasddddddddddddddddddd</p>
              </div>
            </div> */}
          </div>
          <div className='chat-action-btn'>
            <div className='input-area'>
              <input autoFocus placeholder='Write your message' />
            </div>
            <button className='send-btn'> <p>Send</p></button>
          </div>
        </div>
      }
      <div className='live-chat'>
        <span className="icon-live-chat" onClick={() => setOpenChat(true)}></span>
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
