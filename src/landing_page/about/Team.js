import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
       >

        {/* Shubham Kumar  */}
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/Shubhamkumar.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Shubham Kumar</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
          Hi! I'm Shubham Kumar, currently pursuing a B.Tech in Computer Science and Engineering - Computer Science (Data Science) 
          from  <br></br>
          <a href="https://liet.in/" style={{ textDecoration: "none" }}>
            Lloyd Institute of Engineering and Technology. 

            </a>
          I completed my Diploma in Computer Science and have skills in C++(DSA),Problem Solving, HTML, CSS, and SQL.
          </p>
          <p>
         I'm working on a pre-final year project: a trading website similar to Zerodha, which involves both frontend and backend development using MongoDB for the database. I plan to upload the project to GitHub to share my work and collaborate with others.
         </p> 
         <p>
         I’m passionate about technology and always eager to learn and grow in this field. If you’d like to connect, feel free to follow me!
        </p>
          <p>Connect on 
          <a href="https://github.com/shubham4013">
            <img src="media/images/GitHub.png" alt="Github image" 
            style={{width:"12%" }}
            />
            </a> 

            <a href="https://www.linkedin.com/in/shubham-kumar-singh-8b270b229">
            <img src="media/images/linkedin.png" alt="Linkedin image" 
            style={{width:"17%" }} />
            </a>

            <a href="https://www.instagram.com/shiv_premi__2004?igsh=MWJyOWZzaHVsOGx1eA==">
            <img src="media/images/Instagram.png" alt="Instagram image" 
            style={{width:"11%" }}
            />
            </a> 
          </p>
        </div>




{/* Team Member */}

{/* 1st team member*/}
   <div className="col-6 p-3 text-center">
          <img
            src="media/images/Amit.jpg"
            style={{ borderRadius: "95%", width: "40%" }}
          />
          <h4 className="mt-5">Amit Kumar Singh</h4>
          <h6>Co-Founder</h6>
        </div>
        <div className="col-6 p-3">
          <p>
          Hi! I'm Amit Kumar singh, currently pursuing a B.Tech in Computer Science and Engineering - Computer Science
          from Lloyd Institute of Engineering and Technology.
          </p>
          <p>
          I’m passionate about technology and always eager to learn and grow in this field.
           If you’d like to connect, feel free to follow me!
          </p>
          <p>Connect on
 

            <a href="https://github.com/shubham4013">
            <img src="media/images/GitHub.png" alt="Github image" 
            style={{width:"14%" }}
            />
            </a> 

            <a href="https://www.linkedin.com/in/shubham-kumar-singh-8b270b229">
            <img src="media/images/linkedin.png" alt="Linkedin image" 
            style={{width:"17%" }} />
            </a>

            <a href="https://www.instagram.com/shiv_premi__2004?igsh=MWJyOWZzaHVsOGx1eA==">
            <img src="media/images/Instagram.png" alt="Instagram image" 
            style={{width:"14%" }}
            />
            </a> 
          </p>
        </div>

{/* 2nd team member */}
<div className="col-6 p-3 text-center">
          <img
            src="media/images/Shubhamkumar.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Rahul Kumar</h4>
          <h6>CO-Founder</h6>
        </div>
        <div className="col-6 p-3">
          <p>
          Hi! I'm Rahul Kumar , currently pursuing a B.Tech in Computer Science and Engineering - Computer Science
          from Lloyd Institute of Engineering and Technology.
          </p>
          <p>
          I’m passionate about technology and always eager to learn and grow in this field. 
          If you’d like to connect, feel free to follow me!
          </p>

          <p>Connect on 
          <a href="https://github.com/shubham4013">
            <img src="media/images/GitHub.png" alt="Github image" 
            style={{width:"12%" }}
            />
            </a> 

            <a href="https://www.linkedin.com/in/shubham-kumar-singh-8b270b229">
            <img src="media/images/linkedin.png" alt="Linkedin image" 
            style={{width:"17%" }} />
            </a>

            <a href="https://www.instagram.com/shiv_premi__2004?igsh=MWJyOWZzaHVsOGx1eA==">
            <img src="media/images/Instagram.png" alt="Instagram image" 
            style={{width:"11%" }}
            />
            </a> 
          </p>
        </div>























      </div>
    </div>
  );
}

export default Team;
