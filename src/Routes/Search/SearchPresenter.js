import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;

`;

const SearchPresenter = ({ 
  movieResults, 
  tvResults, 
  loading, 
  error, 
  searchTerm, 
  handleSubmit,
  updateTerm
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Search Movies or TV Shows" value={searchTerm} type="text" onChange={updateTerm} />
    </Form>
    { loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Result">
            {movieResults.map(movie => (
              <span key={movie.id}>{movie.title}</span>
            ))}         
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Result">
            {tvResults.map(tv => (
              <span key={tv.id}>{tv.name}</span>
            ))}         
          </Section>
        )}
        {error && <Message color="e74c3c" text={error} />}
        { tvResults && 
          movieResults && 
          tvResults.length === 0 && 
          movieResults.length === 0 && (
            <Message text="Nothing found" color="#95a5a6" />
          )}    
      </>
    )}
  </Container>
);

// input을 컨트롤 하기 위해 value={searchTerm}를 추가하고 searchTerm를 생성해 값을 받는다.

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;