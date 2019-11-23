import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="mb-5 d-flex justify-content-center align-items-center">
        <Link to="/pokedex" className="button button--secoundary">
          View all pokemons
        </Link>
      </div>
    </>
  )
}

export default HomePage
