import { useState, useEffect } from "react";
import playFetchedAudio from "../../helpers/funcs/playFetchedAudio";
import playFetchedAudio2 from "../../helpers/funcs/playFetchedAudio2";
import playFetchedAudio3 from "../../helpers/funcs/playFetchedAudio3";

const usePlaySound = () => {
  console.log('usePlaySound');
  const [soundUrl, setSoudUrl] = useState(null);
  useEffect(() => {
    if (soundUrl) {
      console.log("soundUrl", soundUrl);
      playFetchedAudio3(soundUrl);

    }

    return () => {
      setSoudUrl(null);
    };
  }, [soundUrl]);

  return [setSoudUrl];
};

export default usePlaySound;
