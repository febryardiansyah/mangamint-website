import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { AxiosService } from "../helpers/axiosService";
import { ComicType } from "../helpers/comicType";
import MangaColorType from "../helpers/mangaColorType";

function SearchResultPage() {
  const { query } = useParams();
  const [state, setState] = useState({ loading: false, mangaList: [] });

  useEffect(() => {
    setState({ loading: true });
    AxiosService.fetch(`search/${query}`)
      .then((res) => {
        setState({ loading: false, mangaList: res.data.manga_list });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  if (state.loading) {
    return (
      <Container style={{ height: "100vh" }}>
        <center>
          <Spinner animation="grow"></Spinner>
        </center>
      </Container>
    );
  }
  if (state.mangaList.length === 0) {
    return (
      <Container style={{ height: "100vh" }}>
        <center>
          <h2>{`${query} not found`}</h2>
        </center>
      </Container>
    )
  }
  return (
    <Container style={{ minHeight: "100vh" }}>
      {state.mangaList &&
        state.mangaList.map((manga) => (
          <Card className="mb-4">
            <Card.Header>
              <b>{manga.title}</b>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <Card.Img variant="top" src={manga.thumb} />
                </Col>
                <Col md={9}>
                  <Card.Title>{manga.chapter}</Card.Title>
                  <Card.Text>{manga.updated_on} yang lalu</Card.Text>
                  <div className="rounded mb-2" style={{
                    width: '20%',textAlign:'center',border: '1px solid',borderColor:MangaColorType(manga.type)
                  }}>{ComicType(manga.type)}</div>
                  <Button
                    variant="danger"
                    as={Link}
                    to={`/detail/${manga.endpoint}`}
                  >
                    See detail
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
    </Container>
  );
}

export default SearchResultPage;
