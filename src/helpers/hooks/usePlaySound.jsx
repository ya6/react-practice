import { useState, useEffect } from "react";
import playFetchedAudio from "../../helpers/funcs/playFetchedAudio";
import playFetchedAudio2 from "../../helpers/funcs/playFetchedAudio2";
import playFetchedAudio3 from "../../helpers/funcs/playFetchedAudio3";
import playFetchedAudio4 from "../../helpers/funcs/playFetchedAudio4";

const usePlaySound = () => {
   const [soundUrl, setSoudUrl] = useState(null);
  useEffect(() => {
    if (soundUrl) {
          playFetchedAudio4(soundUrl);

    }

    return () => {
      setSoudUrl(null);
    };
  }, [soundUrl]);

  return [setSoudUrl];
};

export default usePlaySound;
