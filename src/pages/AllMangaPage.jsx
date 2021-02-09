import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import MangaListComponent from "../components/allManga/MangaListComponent";
import PaginationComponent from "../components/allManga/PaginationComponent";
import { AxiosService } from "../helpers/axiosService";

function AllMangaPage() {
  const { page } = useParams();
  const pageNumber = page !== undefined ? parseInt(page) : 1;
  const [state, setState] = useState({
    loading: false,
    mangaList: [],
    currentPage: 0,
  });

  const { loading, mangaList, currentPage } = state;

  useEffect(() => {
    console.log(`page from useParams ====>${pageNumber}`);
    setState({ loading: true, currentPage: pageNumber });
    AxiosService.fetch(`manga/page/${pageNumber}`)
      .then((res) => {
        setState({
          loading: false,
          mangaList: res.data.manga_list,
          currentPage: currentPage + 1,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNumber]);

  return (
    <Container style={{minHeight: "100vh" }}>
      <MangaListComponent mangaList={mangaList} loading={loading} />
      <PaginationComponent currentPage={currentPage} />
    </Container>
  );
}

export default AllMangaPage;
