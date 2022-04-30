import React from 'react';
import Message from './Message';
import AlternativeMessage from './AlternativeMessage';
import image from './Gull_portrait_ca_usa.jpg';

const messageData = {
  avatar: image,
  name: 'Laura Benin',
  message: 'Lorem ipsum dolor sit amet.',
  time: '23:00',
};

function HW1() {
  return (
    <div>
      <hr />
      <h2>homework 1</h2> {/*should work (должно работать)*/}
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
