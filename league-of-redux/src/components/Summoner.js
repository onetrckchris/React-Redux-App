import React from 'react';
import { connect } from 'react-redux';

import SummonerForm from './SummonerForm';

const Summoner = (props) => {
    const getSummoner = (summonerName) => {
        console.log(summonerName);
    }

    return (
        <div>
            <SummonerForm getSummoner={getSummoner} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        error: state.error,
        summoner: state.summoner
    }
}

export default connect(mapStateToProps, {})(Summoner);