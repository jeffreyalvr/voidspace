import useFocusStore from "@store/useFocusStore";

import { Statuses } from "@constants";

import TimeSelector from "@views/TimeSelector";
import Zen from "@views/Zen";

const Main = () => {
  const { focusStatus } = useFocusStore();

  return (
    <main className="flex flex-col gap-4 w-full h-full md:p-10 items-center">
      {focusStatus !== Statuses.UNSET ? <Zen /> : <TimeSelector />}
    </main>
  );
};

export default Main;
