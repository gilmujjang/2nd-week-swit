/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// import { faPaperPlaneTop } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { setMessage, addMessage } from 'reducers/reducer';
import { Wrapper, MessageInput } from './styled';

function Input() {
  const text = useSelector((state) => state.messageReducer.text);
  const currentUser = useSelector((state) => state.logInReducer.user);
  const messages = useSelector((state) => state.messageReducer.messages);
  const dispatch = useDispatch();
  const onChange = (e) => {
    e.preventDefault();
    dispatch(setMessage(e.target.value));
  };
  const timestamp = () => {
    const today = new Date();
    today.setHours(today.getHours() + 9);
    return today.toISOString().replace('T', ' ').substring(0, 19);
  };

  const onSubmit = (e) => {
    const newMessage = {
      userId: currentUser.id,
      userName: currentUser.name,
      profileImage: '',
      content: text,
      date: timestamp(),
      messageId: messages.length + 1,
    };
    e.preventDefault();
    dispatch(addMessage(newMessage));
    dispatch(setMessage(''));
    console.log(messages);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      return;
    }
    if (e.keyCode === 13) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <MessageInput
          type="text"
          placeholder="Enter message"
          name="message"
          value={text}
          onChange={onChange}
          onKeyDown={handleKeyPress}
        />
        <button type="submit" disabled={!text}>
          전송!
          {/* <FontAwesomeIcon icon={['fas', 'coffee']} /> */}
        </button>
      </form>
    </Wrapper>
  );
}

export default Input;
