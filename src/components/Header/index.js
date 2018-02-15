import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      marginTop: '1rem',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        marginLeft: '8rem',
        maxWidth: 960,
        padding: '1.45rem 1rem',
        textAlign: 'left',
        transform: 'rotate(2deg)'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            padding: '.5rem 1rem',
            color: 'white',
            textDecoration: 'none',
            backgroundColor: '#FF8F00',
            transform: 'rotate(-20deg)'
          }}
        >
          Lo Fi Hip Hop
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
