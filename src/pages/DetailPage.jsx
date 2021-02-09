import React, { useEffect, useState } from "react";
import {
  Accordion,
  Alert,
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Table,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { AxiosService } from "../helpers/axiosService";
import "./detailPage.css";

function DetailPage() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    AxiosService.fetch(`manga/detail/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (data.title === "") {
    return (
      <Container className="mt-3 mb-3" id="detail-null">
        <Alert variant="danger" dismissible>
          <Alert.Heading>Oh snap! Data won't loaded!</Alert.Heading>
          <p>Please refresh your browser</p>
        </Alert>
      </Container>
    );
  }
  return (
    <Container className="mt-3 mb-3" id="detail" style={{minHeight: "100vh",}}>
      <Row>
        <Col md={4}>
          <Image id="img-banner" src={data.thumb} />
        </Col>
        <Col md={8}>
          <Table striped bordered responsive>
            <tbody>
              <tr>
                <td>Title</td>
                <td>{data.title}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>{data.type}</td>
              </tr>
              <tr>
                <td>Author</td>
                <td>{data.author}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>{data.status}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      {data.genre_list &&
        data.genre_list.map((genre) => (
          <Button variant="outline-success" disabled className="m-1 mt-3">
            {genre.genre_name}
          </Button>
        ))}
      <Accordion className="mt-2">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Read synopsis
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body style={{ textAlign: "justify" }}>
              {data.synopsis}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <h3 className="mt-3">Chapter list</h3>
      {data.chapter &&
        data.chapter.map((ch) => (
          <Card className="m-3">
            <Button
              variant="outline-danger"
              size="lg"
              block
              as={Link}
              to={`/chapter/${ch.chapter_endpoint}`}
            >
              {ch.chapter_title}
            </Button>
          </Card>
        ))}
    </Container>
  );
}

export default DetailPage;
