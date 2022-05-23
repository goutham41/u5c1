import React from "react";
export const useCounter = (init: number) => {
  const [value, usecounter] = React.useState(init);

  const inc = (a: number) => {
    usecounter(value + a);
  };

  const dec = (a: number) => {
    usecounter(value - a);
  };

  const set = (a: number) => {
    usecounter(a);
  };

  return { value, inc, dec, set };
};