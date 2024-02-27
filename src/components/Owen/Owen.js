import React from "react"
import './Owen.css';

function Owen() {
  return (
    <>
      <div>
        <header className="header">
          <div className="container">
            <h1>React Landing Page</h1>
          </div>
        </header>

        <main className="content">
          <div className="container">
            <h2>Welcome to my page</h2>
            <p>This is a simple React.js landing page.</p>
          </div>
        </main>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Michael Owen Oduor</p>
          </div>
        </footer>
      </div>
      </>
  );
}

export default Owen;
