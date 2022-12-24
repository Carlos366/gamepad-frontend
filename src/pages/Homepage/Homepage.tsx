import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';

const Homepage = () => {
  const [games, setGames] = useState<any>([]);
  const [order, setOrder] = useState<any>('');
  // tracking on which page we currently are
  const [page, setPage] = useState(1);
  // add loader refrence
  const loader = useRef(null);

  let key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  useEffect(() => {
    fetchGames();
  }, [order, page]);

  const handleObserver = (entities: any) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };
  const fetchGames = () => {
    axios
      .get(
        `https://api.rawg.io/api/games?key=${key}&parent_platforms=1,2,3,7&ordering=${order}&page_size=24&page=${page}`
      )
      .then((res) => {
        setGames([...games, ...res.data.results]);
      });
  };

  return (
    <Container fluid className='text-white'>
      <h1>All games</h1>
      <Row xs={1} md={2} lg={3} xl={4}>
        {games?.map((game: any) => (
          <Col key={game.id}>
            <Card className='bg-dark'>
              <Card.Img variant='top' src={game.background_image} />
              <Card.Body>
                <Card.Title>{game.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className='loading' ref={loader}>
        <Spinner animation='border' role='status' />
      </div>
    </Container>
  );
};

export default Homepage;
