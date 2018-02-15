import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: '#FF8F00',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Lo Fi Hip Hop
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
