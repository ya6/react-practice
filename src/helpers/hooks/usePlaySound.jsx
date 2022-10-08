import { useState, useEffect } from "react";
import playFetchedAudio from "../../helpers/funcs/playFetchedAudio";
import playFetchedAudio2 from "../../helpers/funcs/playFetchedAudio2";

const usePlaySound = () => {
  const [soundUrl, setSoudUrl] = useState(null);
  useEffect(() => {
    if (soundUrl) playFetchedAudio2(soundUrl);

    return () => {
      setSoudUrl(null);
    };
  }, [soundUrl]);

  return [setSoudUrl];
};

export default usePlaySound;
