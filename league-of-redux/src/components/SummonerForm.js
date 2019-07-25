import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const SummonerForm = (props) => {
    return (
        <Form>
            <Field type="text" name="summonerName" placeholder="Search for a summoner..." autoComplete="Off" />
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