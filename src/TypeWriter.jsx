import React, { useState, useEffect, useRef } from 'react';
import "./TypeWriter.css";
const TypeWriter = ({ text }) => {
const index = useRef(0);
const [currentText, setCurrentText] = useState('');
useEffect (() => {
index.current = 0;
setCurrentText('|');
}, [text]);
useEffect (() => {
const timeoutId = setTimeout(() => {
setCurrentText ((value) => value + text.charAt(index.current));
index.current += 1;
}, 5);
return () => {
clearTimeout (timeoutId);
};
}, [currentText, text]);
return <p className='p'><b>{currentText}</b></p>;
};
export default TypeWriter;