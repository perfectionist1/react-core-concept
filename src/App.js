import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  let persons = [
    {
      name:"Tamim",
      email: "tamim@gmail.com"
    },
    {
      name: 'Mostafiz',
      email: 'mostafiz@gmail.com'
    },
    {
      name: 'Mashrafee',
      email: 'mash@gmail.com'
    }
  ];
  const products = [
    {name: 'Software-1', price: '$1000'},
    {name: 'Software-2', price: '$2000'},
    {name: 'Software-3', price: '$3000'},
    {name: 'Software-4', price: '$4000'},
    {name: 'Software-5', price: '$5000'}
  ];
  //fetch('https://randomuser.me/api/?results=10')
  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then(res => res.json())
  // .then(data =>data.map(data => data.name));
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Yahoo.....
        </p>
        {/* <h2>Para Section | Name:{ person.name} Email:{person.email}</h2>
        <p> My First Paragraph over here</p> */} 
        <MyCount></MyCount>
        <MovieCounter></MovieCounter>
        <Users></Users>
        <Posts></Posts>
        <ul>
          {
            //persons.map(person => <li> {person.name} </li>)  
          } 

          {
            products.map(pd => <Product product={pd}></Product>)
          }
        </ul>       
        {
          persons.map(per => <Person person={per}></Person>)
        }
        {/* <Person name="Tamim" email="tamim@gmail.com"></Person>
        <Person name="Mushfiq" email="mushfiq@gmail.com"></Person> */}
      </header>
    </div>
  );
}

function MovieCounter(){
  const [movieCounter, setMovieCounter] = useState(1);
  // const handleClickMovie = () => {
  //   const newMovieCount = movieCounter + 1;
  //   setMovieCounter(newMovieCount);
  // };
  return(
    <div>
      <h2> Count: {movieCounter}</h2>
      <button onClick={()=> setMovieCounter(movieCounter + 1)}> Increase MovieCount</button>
    </div>
  );
}

function Posts(){
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data) )
  }, []);
  const result = posts.slice(0, 5);
  // console.log(result);

  const postStyle = {
    border: '1px solid white',
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'left'
  }
  return(
    <div style={postStyle}>
      {
        result.map(res => <p> {res.title}</p>)
      }
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);

  return(
    <div>
      <h2> Dynamic Users: {users.length} </h2>
      <ul>
        {
          users.map(user => <li> {user.name} </li>)
        }
      </ul>
    </div>
  );
}
function MyCount(){
  const [count, setCount] = useState(15);
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return(
    <div>
      <h1> Count: {count} </h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleClick}> Increase </button>
    </div>
  )
}
function Product(props){
  const prodStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: 'gray',
    border: '2px solid white',
    borderRadius: '5px',
    marginBottom: '5px'
  }

  return(
    <div style={prodStyle}>
        <h3> {props.product.name}</h3>
        <p>{props.product.price}</p>
        <button> BUY </button>
    </div>
  );
}
function Person(props){
  const myStyle = {
    border: '2px solid red',
    padding: '0 35px',
    margin: '10px 0 10px 0',
    width: '400px'
  };
    return (
      <div style={myStyle}>
        <h1> Invited Person</h1>
        <h2> {props.person.name}: {props.person.email}</h2>
      </div>
    );
}

export default App;
