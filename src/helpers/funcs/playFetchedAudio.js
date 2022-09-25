const playFetchedAudio = async (url) => {
  const ctx = new AudioContext();
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const decodedAudio = await ctx.decodeAudioData(buffer);

    const playSound = ctx.createBufferSource();
    playSound.buffer = decodedAudio;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
  } catch (error) {}
};

export default playFetchedAudio;
