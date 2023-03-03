import { useState } from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="Footer">
        <form>
          <textarea name="postContent" rows={1} cols={500} />
        </form>
    </div>
  )
}

export default Footer

