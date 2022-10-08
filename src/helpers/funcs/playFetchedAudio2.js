const playFetchedAudio = async (url) => {
    const context = new AudioContext();

    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
   const dogBarkingBuffer = buffer
      const source = context.createBufferSource();
      const decodedAudio = await context.decodeAudioData(buffer);
      source.buffer = decodedAudio;
      source.connect(context.destination);
      source.start(0);
   
    

 
};

export default playFetchedAudio;
