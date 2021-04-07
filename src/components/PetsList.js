import React from 'react';
import Pet from './Pet';
// 👉 1- We need the Pet component

export default function PetsList(props) {
  const { pets } = props

  return (
    <div className='list-pets-friends container'>
      {/* 2- Loop over the data generating a Pet element as you go */}
      {/* What props does the Pet component expect? */}
      {
        pets.map((pet) => {
          return(
            <Pet key={pet.id} pet={pet}/>
          )
        })
      }
    </div>
  )
}
