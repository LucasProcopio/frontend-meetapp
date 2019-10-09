import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form>
        <Input name="email" type="email" placeholder="Your E-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />
        <button type="submit">Submit</button>
        <Link to="/register">Create an account</Link>
      </Form>
    </>
  );
}
