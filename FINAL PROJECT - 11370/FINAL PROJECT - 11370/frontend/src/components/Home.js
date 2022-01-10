import React, { useState, useEffect } from 'react'
import "../nav.css"
import Typewriter from 'typewriter-effect'
import Typist from 'react-typist'

export default function Home() {
    const [count, setCount] = useState(1);
    useEffect(() => {
        console.log("Count: " + count);
        setCount(1);
    }, [count]);

    return (
        <div className='text-center ' >
            <h1><i>Welcome to The Booktown </i></h1>
            {/* <h1>Thanks for Visiting My Website</h1> */}
            <Typewriter onInit={(t) => t.typeString("A book worm’s paradise.").start()}/> <br/>

            <p>
                Offering you the most {''}
                {count ? (
        <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
          <span> exhilarating</span>
          <Typist.Backspace count={20} delay={1200} />
          <span> motivating</span>
          <Typist.Backspace count={20} delay={1200} />
          <span> and spell-binding</span>
          <Typist.Backspace count={20} delay={1200} />
        </Typist>
      ) : (
        ""
      )}
               books of all time
            </p>
        </div>
    )
}
