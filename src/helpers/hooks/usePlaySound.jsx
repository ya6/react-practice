import { useState, useEffect } from "react";
import playFetchedAudio from "../../helpers/funcs/playFetchedAudio";

const usePlaySound = () => {
  const [soundUrl, setSoudUrl] = useState(null);
  useEffect(() => {
    if (soundUrl) playFetchedAudio(soundUrl);

    return () => {
      setSoudUrl(null);
    };
  }, [soundUrl]);

  return [setSoudUrl];
};

export default usePlaySound;
