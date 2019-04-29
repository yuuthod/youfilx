import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component{
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    tvDetail: null,
    error: null,
    loading: true
  }

  render() {
    const { topRated, popular, airingToday, tvDetail, error, loading } = this.state
    return (
      <TVPresenter 
        topRated={topRated}
        popular={popular}
        airingToda={airingToday}
        tvDetail={tvDetail}
        error={error}
        loading={loading}
      />
    );
  }
}