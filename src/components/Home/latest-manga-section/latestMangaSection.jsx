import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { AxiosService } from "../../../helpers/axiosService";

function LatestMangaSection() {
  const [data, setData] = useState({ mangaList: [], error: "" });

  useEffect(() => {
    AxiosService.fetch("manga/page/1")
      .then((res) => {
        console.log(res.data);
        setData({ mangaList: res.data.manga_list, error: null });
      })
      .catch((err) => {
        setData({ error: err.message, mangaList: [] });
      });
  }, []);

  if (data.mangaList.length === 0) {
    return (
      <Row className="mt-3">
        <Col>
          <SkeletonTheme color="grey" highlightColor="#444">
            <p>
              <Skeleton height={350} width={300} count={1} />
            </p>
          </SkeletonTheme>
        </Col>
        <Col>
          <SkeletonTheme color="grey" highlightColor="#444">
            <p>
              <Skeleton height={350} width={300} count={1} />
            </p>
          </SkeletonTheme>
        </Col>
        <Col>
          <SkeletonTheme color="grey" highlightColor="#444">
            <p>
              <Skeleton height={350} width={300} count={1} />
            </p>
          </SkeletonTheme>
        </Col>
      </Row>
    );
  }
  return (
      <div className="mt-4">
      <h3>Terbaru</h3>
      <Row>
        {data.mangaList.map((manga) => (
          <Col md={4} xs={12} className="mb-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={manga.thumb} />
              <Card.Body>
                <Card.Title>
                  {manga.title.length > 15
                    ? `${manga.title.substring(0, 15)}..`
                    : manga.title}
                </Card.Title>
                <Card.Text>{manga.chapter}</Card.Text>
                <Button variant="danger" as={Link} to={`/detail/${manga.endpoint}`}>See detail</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button variant="outline-info" className="mt-3 mb-3 mr-auto ml-auto d-block"as={Link} to='/all/page/1'>See More</Button>
    </div>
  );
}

export default LatestMangaSection;
