import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({ result, error, loading, isMovie }) => null;

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  isMovie: PropTypes.bool.isRequired
};

export default DetailPresenter;
