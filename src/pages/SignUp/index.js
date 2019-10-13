import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  const schema = Yup.object({
    name: Yup.string().required('Full name required'),
    email: Yup.string()
      .email('Enter a valid E-mail')
      .required('E-mail is required'),
    password: Yup.string('Password must be at least 8 characters')
      .min(8)
      .required('Password is required'),
  });

  function handleSubmit(userData) {
    dispatch(signUpRequest(userData));
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form schema={schema} onSubmit={handleSubmit} autoComplete="off">
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your E-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />
        <button type="submit">
          {loading ? <FaSpinner size={18} /> : 'Create account'}
        </button>
        <Link to="/">I already have an account</Link>
      </Form>
    </>
  );
}
