import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const fetchCat = () => axios.get('https://aws.random.cat/meow');

const initialState = {
  isFetching: false,
  cat: {},
  count: 0
}

const reducer = (state, { type, payload }) => {
  switch(type) {
    case 'FETCH_CAT_PENDING':
      return {
        ...state,
        isFetching: true
      }
    case 'FETCH_CAT_SUCCESS':
      return {
        ...state,
        isFetching: false,
        cat: payload
      }
    case 'COUNTER_CLICK':
      return {
        ...state,
        isFetching: false,
        count: payload
      }
    default:
      return state
  }
}

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: 'FETCH_CAT_PENDING'
    })

    fetchCat().then(response => {
      dispatch({
        type: 'FETCH_CAT_SUCCESS',
        payload: response.data
      })
    })

  }, []);

  if (state.isFetching) {
    return <p>Loading....</p>
  }

  return (
    <div className="TodoList">
      <header className="App-header">
        <p>
        You click {state.count} times
        </p>

        <button
          style={{
            padding: '8px 16px',
            borderRadius: 4,
            fontSize: '1.25rem'
          }}
          onClick={() => {
            dispatch({
              type: 'COUNTER_CLICK',
              payload: state.count + 1
            })
          }}
        >
          Click me
        </button>

        <p>
          <img src={state.cat.file} alt="Cat" width="256" />
        </p>

      </header>
    </div>
  );
}

export default TodoList;