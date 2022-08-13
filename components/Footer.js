export default function Footer() {
  const{ALGOLIA_API_KEY}=process.env;
  const body={
    appId: 'H4B4JE3EG9',
    apiKey: '83279b62a0b4e5f04773f97035dc0e2c',
    siteId: 'f7337d54-e3e5-4024-8410-4061f051395b',
    branch: 'main',
    selector: 'div#search',
  }
 
  return (
    <>
      <footer>
        <section className="testimonial">
          <h2>
            "Pain is temporary,Pride is forever."
          </h2>
          <p>"Not sure"</p>
        </section>
        <section className="app-footer-links">
          <ul>
            <li>About</li>
            <li>Company</li>
            <li>Locations</li>
            <li>Contact</li>
            <li>Hours</li>
          </ul>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
          <div className="newsletter">
            <h2 className="newsletter-title">Sign up for our newsletter:</h2>
            <input
              className="newsletter-input"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </section>
        <div className="project-credit">
          <p>
            This project is
            <a href="https://github.com/chrishannaby/shopify-next-netlify">
              open source on GitHub
            </a>
            , hosted with <a href="https://bit.ly/2G29YwK">Netlify</a>, built
            with Next.js and made with 💚 by Cassidy Williams (
            <a href="https://twitter.com/cassidoo">@cassidoo</a>)
          </p>
        </div>
      </footer>
    </>
  );
}
