import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({
  topRated,
  popular,
  airingToday,
  tvDetail,
  loading,
  error
}) => null;

TVPresenter.propTypes = {
  topRated:PropTypes.array,
  popular:PropTypes.array,
  airingToday:PropTypes.array,
  tvDetail:PropTypes.array,
  loading:PropTypes.bool.isRequired,
  error:PropTypes.string.isRequired,
};

export default TVPresenter;