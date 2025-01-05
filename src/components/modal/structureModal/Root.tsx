import React from "react";

type RootProps = {
  children: React.ReactNode;
};

function Root({ children }: RootProps) {
  return <div className="min-w-96 bg-white p-5 rounded-md">{children}</div>;
}

export default Root;
