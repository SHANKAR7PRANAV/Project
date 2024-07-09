import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export class Layout extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <main style={{ height:"80vh" }}>{this.props.children}</main>
        <Footer></Footer>
      </div>
    )
  }
}

export default Layout
