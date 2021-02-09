import React from "react";
import { Button, Card, Container, Row, Spinner,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ComicType } from "../../helpers/comicType";
import MangaColorType from "../../helpers/mangaColorType";

function MangaListComponent({ mangaList, loading }) {
  console.log("loading??? => " + loading);
  if (loading) {
    return (
      <Container
        style={{
          height: "100vh",
        }}
      >
        <center>
          <Spinner animation="grow"></Spinner>
        </center>
      </Container>
    );
  }
  return (
    <div>
      {mangaList &&
        mangaList.map((manga) => (
          <Card className="mb-4 mt-4">
            <Card.Header> <b>{manga.title}</b> </Card.Header>
            <Card.Body>
              <Row>
                <Col md={3}>
                <Card.Img variant="top" src={manga.thumb} />
                </Col>
                <Col md={9}>
                  <Row >
                    <Col md={6}>
                      <Card.Title>{manga.chapter}</Card.Title>
                    </Col>
                    <Col md={6} >
                      <div className=" rounded mb-2" style={{
                      width: '30%',textAlign:'center',
                      border:'1px solid',borderColor:MangaColorType(manga.type)
                    }}>{ComicType(manga.type)}</div>
                    </Col>
                  </Row>
                  <Card.Text>{manga.updated_on} yang lalu</Card.Text>
                  
                  <Button variant="danger" as={Link} to={`/detail/${manga.endpoint}`}>See detail</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default MangaListComponent;
