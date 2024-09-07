import React from 'react'

function NotFound() {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '30px',
    }
  return (
    <div style={style}> Error 404: Page Not Found</div>
  )
}

export default NotFound