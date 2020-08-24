import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,

    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: "space-between",
      }}
    >
      <div className="header__brand" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontSize: `36px`,
            color: `white`,
            textDecoration: `none`,
            fontWeight: `bold`
          }}
        >
          {siteTitle}
        </Link>
      </div>

      <div className="nav">
          <Link
            to="/"
            activeClassName="current-page"
            style={{
              color: `white`,
              textDecoration: `none`,
              fontSize: `24px`,
              marginRight: `18px`
            }} >
            Home
          </Link>
        <Link
          to="/page-2"
          activeClassName="current-page"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `24px`
          }}>
          About
        </Link>
      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
