//PATH = client/src/Home.js
import React from 'react'

function Home() {
  return (
    <div className='home'>
      <div className='card home-card'>
        <h5>Ali Karim</h5>
          <div className='card-image'>
              <img src="https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="post-pic" />
          </div>
          <div className='card-content'>
            <i className="material-icons" style={{color:'red'}}>favorite</i>
            <h6>Image Title</h6>
            <p>This is amazing post</p>
            <input type="text" placeholder='add a comment' />
          </div>
      </div>
      <div className='card home-card'>
        <h5>Ali Karim</h5>
          <div className='card-image'>
              <img src="https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="post-pic" />
          </div>
          <div className='card-content'>
            <i className="material-icons" style={{color:'red'}}>favorite</i>
            <h6>Image Title</h6>
            <p>This is amazing post</p>
            <input type="text" placeholder='add a comment' />
          </div>
      </div>
      <div className='card home-card'>
        <h5>Ali Karim</h5>
          <div className='card-image'>
              <img src="https://images.unsplash.com/photo-1479030160180-b1860951d696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="post-pic" />
          </div>
          <div className='card-content'>
            <i className="material-icons" style={{color:'red'}}>favorite</i>
            <h6>Image Title</h6>
            <p>This is amazing post</p>
            <input type="text" placeholder='add a comment' />
          </div>
      </div>
      <div className='card home-card'>
        <h5>Ali Karim</h5>
          <div className='card-image'>
              <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="post-pic" />
          </div>
          <div className='card-content'>
            <i className="material-icons" style={{color:'red'}}>favorite</i>
            <h6>Image Title</h6>
            <p>This is amazing post</p>
            <input type="text" placeholder='add a comment' />
          </div>
      </div>
    </div>
  )
}

export default Home