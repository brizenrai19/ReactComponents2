// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React, {useState} from 'react'
import FriendsList from './FriendsList'
import Search from './Search'
import data from '../dummy-data/friends'
// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)


export default function App() {
  // 👉 3- Initialize a slice of state to keep track of the data
  // using the dummy data as the initial value of the slice of state
  const [friendData, setFriendData] = useState(data);
  // 👉 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice
  const [search, setSearch] = useState('');
  // 👉 5- Build a `changeStatus` function that takes an id and
  // changes the `married` from true to false and viceversa
  const changeStatus = (id) =>{
    console.log(id);
    setFriendData(
      friendData.map((friend) => {
        if(friend.id === id){
          console.log(friend);
          return {
            ...friend, married: !friend.married
          }
        }
        return friend;
      })
    )
  }
  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)

  return (
    <div className='app-friends container'>
      {/* 👉 6- Render the Search component */}
      <Search searchText={search} setSearchText={setSearch}/>
      {/* STRETCH - Changes to the input should update the search term */}

      {/* 👉 7- Render the FriendsList component */}
      <FriendsList friendList={friendData} changeStatusFunction={changeStatus}/>
      {/* What prop/props does FriendsList need? */}
    </div>
  )
}
