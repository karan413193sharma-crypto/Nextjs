import React from 'react'
import Link from 'next/link'
const F1 = () => {
  return (
    <>
       <div>
      F1 page
    </div>
    <div>
        <Link href="/f1/f2">F2page </Link>
        <Link href="/f3">F3 page</Link>
    </div>
    </>
  )
}

export default F1
