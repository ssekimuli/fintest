import { Link } from "react-router";

function NotFoundPage() {
  return (
    <main className="not-found">
      <div className="container not-found__content">
        <span>404</span>
        <h1>That page could not be found.</h1>
        <p>The page may have moved, or the address may be incorrect.</p>
        <Link className="button button--primary" to="/">
          Return to homepage
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
