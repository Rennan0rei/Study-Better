import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'

export default function NotFound() {
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Página não encontrada</p>
        <Link to="/" className="text-indigo-600 hover:underline">
          Voltar para a Home
        </Link>
      </div>
    </>
  )
}
