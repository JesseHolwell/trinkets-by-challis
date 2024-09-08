const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />
      <section className="container p-14 text-center">
        <h3>
          Website made with love by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://jesseholwell.com/"
            className="text-primary transition-all border-primary hover:border-b-2 underline"
          >
            Jesse
          </a>
        </h3>
        <h3>&copy; Copyright {currentYear}</h3>
      </section>
    </footer>
  );
};
