import React from "react";

type Props = {
  children: React.ReactNode;
};

const WebContainerComp = ({ children }: Props) => {
  return <div className="w-screen h-screen p-4">{children}</div>;
};

const WebContainer = React.memo(WebContainerComp);
export default WebContainer;
