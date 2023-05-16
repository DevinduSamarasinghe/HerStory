import React,{createContext, useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const ChatContext = createContext();


const ChatProvider = ({children}) => {

  const [selectedChat, setSelectedChat] = useState(null);
  const [user, setUser] = useState();
  const [notification,setNotification] = useState(false);
  const [chats, setChats] = useState([]);

  const navigate = useNavigate();

  useEffect(()=>{

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if(!userInfo){
      navigate("/login");
    }
  },[navigate]);

  return (
    <ChatContext.Provider value={{
      selectedChat,
      setSelectedChat,
      user,
      setUser,
      notification,
      setNotification,
      chats,
      setChats
    }} >
        {children}
    </ChatContext.Provider>
  )
}

export const useChatState = () => useContext(ChatContext);
export default ChatProvider;