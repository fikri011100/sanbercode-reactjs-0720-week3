import React from "react";
import { HargaBuahProvider } from "./BuahContext";
import BuahList from "./BuahList";
import BuahForm from "./BuahForm";

const BuahTugas15 = () => {
  return (
    <>
      <HargaBuahProvider>
        <BuahList />
        <BuahForm />
      </HargaBuahProvider>
    </>
  );
};

export default BuahTugas15;
