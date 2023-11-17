import { useEffect, useState, React, useLayoutEffect, useContext, createContext, useCallback, useTransition } from 'react';
import './App.css';

function AppTest () {
  const [state, setState] = useState('state1')
  const [state2, setState2] = useState('state2')
  useEffect(() => {
    console.log('------我是没有依赖的useEffect')
    document.getElementById('but').addEventListener('click', navClick)
    return () => console.log('------我是没有依赖的useEffect的清除函数')
  }, [])
  useLayoutEffect(() => {
    console.log('------我是没有依赖的useLayoutEffect')
    return () => console.log('------我是没有依赖的useLayoutEffect的清除函数')
  }, [])
  useEffect(() => {
    console.log('------我是每次更新都要执行的useEffect')
    return () => console.log('------我是每次更新都要执行的useEffect清除')
  })
  const click = () => {
    setState('react点击1')
    setState2('react点击2')
  }
  const navClick = () => {
    setState('原生点击1')
    setState2('原生点击1')
  }
  const time = () => {
    setTimeout(() => {
      setState('changeTime')
      setState2('changeTime2')
    }, 2000)
  }
  return (
    <div>
      <span>state1：{state}</span>
      <span>state2：{state2}</span>
      <button onClick={click}>react事件</button>
      <button id='but'>原生事件</button>
      <button onClick={time}>延迟事件</button>
    </div>
  )
}

export default AppTest;
