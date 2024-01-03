import { requiredPcParts } from "@/constants";
import React from "react";
import PcBuildCard from "./PcBuildCard";

const PcBuild = () => {
  return (
    <>
      <h1>Build your pc</h1>
      {requiredPcParts.map((item) => (
        <PcBuildCard key={item.key} item={item} />
      ))}

      <button>COMPLETE BUILD</button>
    </>
  );
};

export default PcBuild;
