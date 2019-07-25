import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getMastery } from '../store/actions';
import Mastery from './Mastery';

const SummonerContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    background-color: #555795;
    border-radius: 5px;
    padding: 25px;
`;

const SummonerName = styled.h2`
    color: white;
    margin: 0;
`;

const SummonerLevel = styled.p`
    color: white;
    font-style: italic;
    font-size: 0.8rem;
    margin: 0;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const SummonerImg = styled.img`
    height: 50px;
    border-radius: 50%;
    margin-left: 20px;
`;

const MasteryButton = styled.button`
    background-color: #555795;
    color: white;
    border: 1px solid #211E49;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
    margin-top: 15px;
    outline: none;
`;

const Summoner = (props) => {
    const getMastery = (summonerId) => {
        props.getMastery(summonerId);
    }

    return (
        <SummonerContainer>
            <Column>
                <Row>
                    <Column>
                        <SummonerName>{props.summoner.name}</SummonerName>
                        {props.summoner.summonerLevel && <SummonerLevel>Summoner Level: {props.summoner.summonerLevel}</SummonerLevel>}
                    </Column>
                    {props.summoner.profileIconId && <SummonerImg src={`http://ddragon.leagueoflegends.com/cdn/9.14.1/img/profileicon/${props.summoner.profileIconId}.png`} alt="#" />}
                </Row>
                {props.mastery ? 
                    <Mastery mastery={props.mastery} /> :
                    <MasteryButton onClick={() => getMastery(props.summoner.id)}>
                        Check {props.summoner.name}'s Top 5 Champs!
                    </MasteryButton>
                }
            </Column>
        </SummonerContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        summoner: state.summoner,
        mastery: state.mastery
    }
}

export default connect(mapStateToProps, { getMastery })(Summoner);