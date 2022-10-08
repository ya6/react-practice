const playFetchedAudio3 = async (url) => {
    console.log("playFetchedAudio3");   

  if('webkitAudioContext' in window) {
    console.log("webkitAudioContext");   
  const   myAudioContext  = new webkitAudioContext();
      const response = await fetch(url);
      const source  = myAudioContext.createBufferSource();
      source.buffer = myAudioContext.createBuffer(response, false);
      source.connect(myAudioContext.destination);
      source.noteOn(myAudioContext.currentTime);
  

} else {
  console.log("AudioContext");   
 const  ctx = new AudioContext();
   try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const decodedAudio = await ctx.decodeAudioData(buffer);

    const playSound = ctx.createBufferSource();
    playSound.buffer = decodedAudio;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
  } catch (error) {}
}

 
};

export default playFetchedAudio3;
