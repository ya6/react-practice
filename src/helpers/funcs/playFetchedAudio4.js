const playFetchedAudio4 = async (url) => {
    const audio = new Audio(url)

     
        const playPromise = audio.play()
        if (playPromise !== undefined) {
          playPromise
            .then((_) => {
              audio.currentTime = 0
              audio.play()
            })
            .catch((error) => {
             Alert("sound load error")
            })
        }
    

 
};

export default playFetchedAudio4;
