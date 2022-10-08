import { useState, useEffect } from "react";

import playAudio from "../../helpers/funcs/playAudio";

const usePlaySound = () => {
  const [soundUrl, setSoudUrl] = useState(null);
  useEffect(() => {
    if (soundUrl) {
      playAudio(soundUrl);
    }

    return () => {
      setSoudUrl(null);
    };
  }, [soundUrl]);

  return [setSoudUrl];
};

export default usePlaySound;
