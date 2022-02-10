import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Page 2</h1>
      <ul>
        <li>
          <Link to="/">Go back home</Link>
        </li>
      </ul>
    </div>
  );
}
