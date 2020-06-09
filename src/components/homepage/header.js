import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
  <nav className="db dt-l w-100 border-box pa3 ph5-l">
  <a
    className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l"
    href="#"
    title="Home"
  >
    <img
      src={require("../../images/logo.jpg")}
      className="h3 w3 dib"
      id="logo"
      alt="Site Logo"
    />
  </a>
  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
    <a
      className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
      href="#"
      title="Home"
    >
      Home
    </a>
    <a
      className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
      href="#"
      title="How it Works"
    >
      How it Works
    </a>
    <a
      className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
      href="#"
      title="Blog"
    >
      Blog
    </a>
    <a
      className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
      href="#"
      title="Press"
    >
      Press
    </a>
    <a className="link dim dark-gray f6 f5-l dib" href="#" title="Contact">
      Contact
    </a>
  </div>
</nav>;
  
  </header>
)

{/* Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
} */}

export default Header
