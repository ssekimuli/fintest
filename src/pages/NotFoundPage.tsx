function NotFoundPage() {
  return (
    <main className="not-found">
      <div className="container not-found__content">
        <span>404</span>
        <h1>That page could not be found.</h1>
        <p>The page may have moved, or the address may be incorrect.</p>
        <a className="button button--primary" href="/">
          Return to homepage
        </a>
      </div>
    </main>
  );
}

export default NotFoundPage;
