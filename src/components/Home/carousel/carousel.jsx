import { useEffect, useState } from "react";
import { Card, Carousel, Spinner } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { AxiosService } from "../../../helpers/axiosService";
import "./carousel.css";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState({
    loading: true,
    manga_list: [],
    error: "",
  });

  useEffect(() => {
    setData({ loading: true });
    AxiosService.fetch("recommended")
      .then((res) => {
        setData({
          loading:false,
          manga_list: res.data.manga_list,
          error: null,
        });
      })
      .catch((error) => {
        setData({ loading: false, manga_list: [], error: error.message });
      });
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  if (data.loading) {
    return (
      <center>
        <SkeletonTheme color="grey" highlightColor="#444">
          <p>
            <Skeleton height={400} width={`100%`} count={1} />
          </p>
        </SkeletonTheme>
      </center>
    );
  }
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.manga_list.map((manga) => (
        <Carousel.Item interval={1000}>
          <Card id="img-item" as={Link} to={`/detail/${manga.endpoint}`}>
            <img
              className="d-block w-100"
              src={manga.thumb}
              alt={manga.title}
            />
          </Card>
          <Carousel.Caption>
            <div className="parent">
              <h3 id="img-title">{manga.title}</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
