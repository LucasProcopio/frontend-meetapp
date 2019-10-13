import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { FaSpinner } from 'react-icons/fa';

import { Container, Loader } from './styles';
import { updateUserRequest } from '~/store/modules/user/actions';

export default function Profile({ location }) {
  const { profile } = location.state;

  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required('Full name is required'),
    email: Yup.string()
      .email()
      .required('E-mail is required'),
    oldPassword: Yup.string(),
    password: Yup.string().when('oldPassword', (password, field) =>
      password ? field.required('The new password is required') : field
    ),
    confirmPassword: Yup.string().when('password', (password, field) =>
      password
        ? field
            .required('Please confirm the password')
            .oneOf(
              [Yup.ref('password')],
              'The password confirmation does not match'
            )
        : field
    ),
  });

  function handleSubmit(user) {
    const { oldPassword } = user;
    const minPassLength = 8;
    if (!(oldPassword.length >= minPassLength)) {
      const userData = {
        name: user.name,
        email: user.email,
      };
      console.tron.log(userData);
      dispatch(updateUserRequest(userData));
      return;
    }
    dispatch(updateUserRequest(user));
  }

  return (
    <Container>
      <Form
        schema={schema}
        initialData={profile}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Input name="name" placeholder="Full name" />
        <Input type="email" name="email" placeholder="Your e-mail" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Current password"
        />
        <Input type="password" name="password" placeholder="New password" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
        />
        <button type="submit">
          {loading ? (
            <Loader>
              <FaSpinner size={18} />
            </Loader>
          ) : (
            <>
              <MdAddCircleOutline size={20} />
              <span>Save profile</span>
            </>
          )}
        </button>
      </Form>
    </Container>
  );
}

Profile.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      profile: PropTypes.object,
    }),
  }).isRequired,
};
