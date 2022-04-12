import React from 'react';
import Message from './Message';
import AlternativeMessage from './AlternativeMessage';
import image from './Gull_portrait_ca_usa.jpg';

const messageData = {
  avatar: image,
  name: 'Some Name',
  message: 'some text',
  time: '23:00',
};

function HW1() {
  return (
    <div>
      <hr />
      homeworks 1 should work (должно работать)
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      {/* <hr />
      для личного творчества, могу проверить
      <AlternativeMessage />
      <hr />*/}
    </div>
  );
}

export default HW1;
