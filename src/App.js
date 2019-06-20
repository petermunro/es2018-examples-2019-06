import React from "react";
import "./App.css";
import { dayOfWeek, month } from "./values"; // named imports
import server from "./serverConfig"; // default import
import contacts from "./contacts.json"; // import a JSON data file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Day of week is: {dayOfWeek}</p>
        <p>Month is: {month}</p>
      </header>
      <h1>Server Config</h1>
      <p>Host: {server.host}</p>
      <p>Port: {server.port}</p>
      <p>useTls: {server.useTls ? "true" : "false"}</p>

      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li>
            {contact.first_name} {contact.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
