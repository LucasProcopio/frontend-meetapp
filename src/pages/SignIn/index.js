import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';

import * as Yup from 'yup';
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  const schema = Yup.object({
    email: Yup.string()
      .email('Enter a valid E-mail')
      .required('E-mail is required'),
    password: Yup.string().required('Password is required'),
  });

  function handleSubmit(userData) {
    dispatch(signInRequest(userData));
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form schema={schema} onSubmit={handleSubmit} autoComplete="off">
        <Input name="email" type="email" placeholder="Your E-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />
        <button type="submit">
          {loading ? <FaSpinner size={18} /> : 'Submit'}
        </button>
        <Link to="/register">Create an account</Link>
      </Form>
    </>
  );
}
