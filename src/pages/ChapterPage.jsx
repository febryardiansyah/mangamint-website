import React, { useEffect, useState } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AxiosService } from "../helpers/axiosService";

function ChapterPage() {
  const [data, setData] = useState({ ch: [], loading: false });
  const { id } = useParams();

  useEffect(() => {
    setData({ ch: [], loading: true });
    AxiosService.fetch(`chapter/${id}`)
      .then((res) => {
        setData({ ch: res.data.chapter_image, loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (data.loading) {
    return (
      <Container className="mt-3 mb-3" id="detail-null">
        <center>
          <Spinner animation="grow"></Spinner>
        </center>
      </Container>
    );
  } else if (data.ch.length === 0) {
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
    <div
      style={{
        width: "100%",
        backgroundColor: "black",
        minHeight:'100vh'
      }}
    >
      <Container className="pt-3 pb-3">
        <center>
          {data.ch &&
            data.ch.map((ch) => <img src={ch.chapter_image_link} style={{
                objectFit:'fill',width:'80%',
            }} alt="" />)}
        </center>
      </Container>
    </div>
  );
}

export default ChapterPage;
