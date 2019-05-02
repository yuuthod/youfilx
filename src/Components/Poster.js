import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const ImgContainer = styled.div``;

const Image = styled.div``;

const Title = styled.span``;

const Rating = styled.span``;

const Year = styled.span``;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImgContainer>
        <Image imageUrl={imageUrl} />
        <Rating>
          <span role="img" aria-label="rating">
            🌟
          </span>{" "}
          {rating}/10
        </Rating>
      </ImgContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  year: PropTypes.string.isRequired,
  isMovie: PropTypes.bool.isRequired
};

export default Poster;
