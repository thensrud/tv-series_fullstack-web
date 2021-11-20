import { FC } from "react";
import { ITrailer } from "../../interfaces/ITrailer";

const TrailerItem: FC<ITrailer> = ({ id, link }) => {
  return <div>{link}</div>;
};

export default TrailerItem;
