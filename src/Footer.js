import React from 'react'

function Footer() {
  let footerStyle = {
    position: "",
    bottom:"0",
    width: "100%"
  }
  return (
    <div className='bg-dark text-center text-light p-2 mt-2' style={footerStyle}> CopyRight @devUmair <b>Color Palette App</b>  2022</div>
  )
}

export default Footer