const playFetchedAudio = async (url) => {
  let ctx=null
  if('webkitAudioContext' in window) {
    console.log("webkitAudioContext");   
      ctx = new webkitAudioContext();
} else {
  console.log("AudioContext");   
   ctx = new AudioContext();
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

export default playFetchedAudio;
