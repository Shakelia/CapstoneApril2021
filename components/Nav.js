import html from "html-literal";
import Links from "../store/Links";

export default Links => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${Links.map(el => `<li><a href="el.title">${el.text}</a></li>`).join()}
      <li><a href="/Home">Home</a></li>
      <li><a href="/Login">Login</a></li>
      <ul>
        <li><a href="/Signup">Signup</a></li>
      </ul>
      <li><a href="/About">About</a></li>
      <li><a href="/Contact">Contact</a></li>
      <li><a href="/Help">Help</a></li>
    </ul>
  </nav>
`;
