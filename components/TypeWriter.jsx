import Typewriter from 'typewriter-effect';
 
<Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Developer Enthusiast')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>