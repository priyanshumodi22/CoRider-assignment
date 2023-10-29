import { FC } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Message from "./Message";

const Chat: FC = ({}) => {
  const [messages, setMessages]: [any, any] = useState([]);
  const [top, nextTopReached]: [any, any] = useState(0);
  const getData = async () => {
    const response = await axios.get(
      `https://qa.corider.in/assignment/chat?page=${top}`
    );
    setMessages(response.data.chats);
    console.log(messages);
  };
  window.onscroll = function () {
    if (window.scrollY === 0) {
      nextTopReached(top + 1);
    }
  };
  useEffect(() => {
    getData();
  }, [top]);
  return (
    <div className="flex-col mt-10rem mb-1rem gap-5">
      <div className="relative p-10 flex items-center justify-center">
        <p className="text-[#B7B7B7]">12 JAN, 23</p>
      </div>
      {messages.length && messages.map((msg: any) => <Message key={msg.that} msg={msg} />)}
    </div>
  );
};

export default Chat;
