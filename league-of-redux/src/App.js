import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getSummoner } from './store/actions';
import Summoner from './components/Summoner';
import SummonerForm from './components/SummonerForm';

import './App.css';

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.h2`
    color: white;
`;

function App(props) {
  const getSummoner = (summonerName) => {
    props.getSummoner(summonerName);
  }

  return (
    <AppContainer>
      {props.isFetching ? 
        <Loader>Fetching Summoner...</Loader> :
        <div>
          <SummonerForm getSummoner={getSummoner} />
          {props.summoner && <Summoner />}
        </div>}
    </AppContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    summoner: state.summoner
  }
}

export default connect(mapStateToProps, { getSummoner })(App);