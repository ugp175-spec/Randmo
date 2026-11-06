import "./About.css";

export default function About() {
  return (
    <div className="container secondary-page about-page">
      <h1>About Randmo</h1>
      <p>Randmo is a simple collection of random generators made for everyday decisions, small games, creativity and learning.</p>
      <h2>Project features</h2>
      <ul>
        <li>14 different random tools</li>
        <li>Search and category filtering</li>
        <li>Save generated results</li>
        <li>View recent generation history</li>
        <li>Responsive interface built with React</li>
      </ul>
      <h2>Technology used</h2>
      <p>React, Vite, JavaScript, React Router, CSS and browser localStorage.</p>
      <h2>About the developers</h2>
      <p>Randmo was created by Utsav Prajapati, Somil Varotariya and Ashwin Prajapati as a fun project to learn React and build something useful.</p>
      <p>We hope you enjoy using it!</p>
    </div>
  );
}
