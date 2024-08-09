import Head from 'next/head'
import React from 'react'
import Header from './Header';
import Footer from './Footer';

export default function Layout({children}) {
  return (
    <div data-theme="retro">
      
      <Header >
      </Header>
      <div className='container mx-auto '>{children}</div>
      <Footer></Footer>
    </div>
  )
}
