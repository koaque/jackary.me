import * as React from "react"
import "../styles/styles.css"

const links = [
  {
    url: "https://example.com",
    text: "Example Link 1",
    badge: true,
    description: "Description for Example Link 1",
  },
  {
    url: "https://another-example.com",
    text: "Example Link 2",
    // Optionally omit the badge for some links
    description: "Description for Example Link 2",
  },
  // Add as many links as you need
];

const IndexPage = () => {
  return (
    <main className="pageStyles">
      <h1 className="headingStyles">
        Welcome to My Linktree
        <br />
        <span className="headingAccentStyles">— Explore my links below —</span>
      </h1>
      <ul className="listStyles">
        {links.map((link) => (
          <li key={link.url} className="listItemStyles">
            <a className="linkStyle" href={link.url}>
              {link.text}
              {link.badge && (
                <span className="badgeStyle" aria-label="New Badge">
                  NEW!
                </span>
              )}
            </a>
            <p className="descriptionStyle">{link.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Link Hub</title>
