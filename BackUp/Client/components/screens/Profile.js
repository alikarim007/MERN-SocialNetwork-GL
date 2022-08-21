//PATH = client/src/components/Home.js
import React from "react";

function Profile() {
  return (
    <div style={{
      maxWidth: "550px",
      margin: "0px auto"
    }}>
      <div style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey"
      }}>
        <div>
          <img
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "80px",
            }}
            src="https://images.unsplash.com/profile-fb-1651933751-bfc4a73df887.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
            alt="profile pic"
          />
        </div>
        <div>
            <h4>Ali Karim S</h4>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                width: "110%",                
            }}>
                <h5>40 posts</h5>
                <h5>500 followers</h5>
                <h5>25 following</h5>
            </div>
        </div>
      </div>

      <div className="gallary">
            <img className="item" src="https://images.unsplash.com/photo-1472213984618-c79aaec7fef0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className="item" src="https://images.unsplash.com/photo-1443926818681-717d074a57af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className="item" src="https://images.unsplash.com/photo-1591543620767-582b2e76369e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className="item" src="https://images.unsplash.com/photo-1471180625745-944903837c22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className="item" src="https://images.unsplash.com/photo-1511515828069-1e4853d8b336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className="item" src="https://images.unsplash.com/photo-1543965860-0a2c912bc32f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className="item" src="https://images.unsplash.com/photo-1553856622-d1b352e9a211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className="item" src="https://images.unsplash.com/photo-1559244673-9cee88d551f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className="item" src="https://images.unsplash.com/photo-1495594059084-33752639b9c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG5hdHVyZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" /> 
            

      </div>

    </div>
  );
}

export default Profile;
