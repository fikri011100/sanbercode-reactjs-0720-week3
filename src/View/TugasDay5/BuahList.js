import React, { useContext } from "react";
import { BuahContext } from "./BuahContext";

const BuahList = () => {
  const [dataHargaBuah] = useContext(BuahContext);

  return (
    <ul>
      {/* {console.log(dataHargaBuah)} */}
      {
        // dataHargaBuah.map(el=>{
        //   return <li>NAME: {el.name} PRICE: {el.price} WIGHT: {el.weight} </li>
        // })
      }
    </ul>
  );
};

export default BuahList;
