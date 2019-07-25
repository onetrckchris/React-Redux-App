import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const StyledField = styled(Field)`
    padding: 10px;
    font-size: 1rem;
    background-color: #555795;
    outline: none;
    color: white;
    width: 200px;
    border: none;
    border-radius: 5px;

    &::placeholder {
        color: white;
    }
`;

const SummonerForm = (props) => {
    return (
        <Form>
            <StyledField type="text" name="summonerName" placeholder="Search for a summoner..." autoComplete="Off" />
        </Form>
    )
}

export default withFormik({
    mapPropsToValues() {
        return {
            summonerName: ''
        }
    },
    validationSchema: Yup.object().shape({
        summonerName: Yup.string().required()
    }),
    handleSubmit(value, formikBag) {
        formikBag.resetForm();
        formikBag.props.getSummoner(value.summonerName);
    }
})(SummonerForm);