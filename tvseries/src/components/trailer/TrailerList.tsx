import { FC, useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import TrailerContext from "../../contexts/TrailerContext";
import { ITrailer } from "../../interfaces/ITrailer";
import { TrailerContextType } from "../../types/TrailerContextType";
import TrailerItem from "./TrailerItem";

const TrailerList: FC = () => {
  const { trailer, getTrailerFromService } = useContext(
    TrailerContext
  ) as TrailerContextType;

  useEffect(() => {
    getTrailerFromService();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trailer]);

  const createTrailerList = () => {
    return trailer?.map((trailer: ITrailer, key: number) => {
      return (
        <Col className="pt-4" sm={6} md={4} lg={3} xl={2} key={key}>
          <TrailerItem id={trailer.id} link={trailer.link} />
        </Col>
      );
    });
  };
  return <Row>{createTrailerList()}</Row>;
};

export default TrailerList;
