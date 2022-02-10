import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/page2">/page2</Link>
        </li>
      </ul>
    </div>
  );
}
