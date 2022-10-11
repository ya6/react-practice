import { useState, useEffect } from "react";

// import playAudio from "../../helpers/funcs/playAudio";

const usePlaySound = () => {
  const [soundUrl, setSoudUrl] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    if (soundUrl) {
      setIsloading(true)
      const playdAudio = async (url) => {
        const audio = new Audio(url)
    
         
            const playPromise = audio.play()
            if (playPromise !== undefined) {
              playPromise
                .then((_) => {
                  audio.currentTime = 0
                  audio.play()
                  console.log('go');
                  setIsloading(false)
                })
                .catch((error) => {
                 Alert("sound load error")
                })
            }
        
          };
          
          setTimeout(()=> {
            playdAudio(soundUrl);
      
          }, 3000)
  
   
    }

    return () => {
      setSoudUrl(null);
      // setIsloading(false)
    };
  }, [soundUrl]);

  return [setSoudUrl, isLoading];
};

export default usePlaySound;
