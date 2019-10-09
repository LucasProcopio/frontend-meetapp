import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../pages/_layouts/auth/index';
import DefaultLayout from '../pages/_layouts/default/index';

export default function RouterWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = false;

  /**
   * Redirects user to login page if not logged in
   */
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  /**
   * Redirects user to dashboard if user is loggedIn
   * and tries to access auth pages
   */
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouterWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
  isPrivate: PropTypes.bool,
};

RouterWrapper.defaultProps = {
  isPrivate: false,
};
