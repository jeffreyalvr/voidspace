import { useState } from "react";

import TimeSelector from "@views/TimeSelector";
import Zen from "@views/Zen";

const Main = () => {
  const [focusing, setFocusing] = useState(false);

  const handleFocusEvent = () => {
    setFocusing(true);
  };

  return (
    <main className="flex flex-col gap-4 w-full h-full md:p-10 items-center">
      {focusing ? (
        <Zen />
      ) : (
        <TimeSelector focusing={focusing} focusEvent={handleFocusEvent} />
      )}
    </main>
  );
};

export default Main;
