import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Avula Netraditya</h1>
        <p>MERN Full-Stack Developer</p>
      </header>
      <section className="About">
        <h2>About Me</h2>
        <p>
          I am a full-stack developer with a background in computer
          science, I enjoy turning complex problems
          into simple, beautiful, and intuitive designs.
        </p>
      </section>
      <section className="Projects">
        <h2>Projects</h2>
        <div className="Project">
          <h3>Project 1</h3>
          <p>A simple React app that displays a list of projects.</p>
          <button class="bg-warning"><a href="https://example.com/project-1">project1</a></button>
        </div>
        <div className="Project">
          <h3>Project 2</h3>
          <p>A more complex React app that uses a database to store and retrieve project data.</p>
          
          <button class="bg-warning"><a href="https://example.com/project-2">project2</a></button>
        </div>
        
      </section>
      <section className="Contact">
        <h2>Contact</h2>
        <p>Email: netraditya.21bce7795@vitapstudent.ac.in</p>
        <p>Phone: 9177199278</p>
        
      </section>
      <footer>
        <p>© 2023 Netraditya</p>
      </footer>
    </div>
  );
}

export default App;