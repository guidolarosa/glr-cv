/* eslint-disable @typescript-eslint/no-explicit-any */
import { H1 } from "./typography";

const Column = ({ title, children }: { title: string; children: any }) => {
  return (
    <div className="flex flex-col lg:h-screen">
      <div className="border-b pb-4">
        <H1>{title}</H1>
      </div>
      <div className="overflow-y-scroll lg:h-full pb-16 pt-4 pr-2">{children}</div>
    </div>
  );
};

export default Column;
