import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';

export default function Lcenter({ maxWidth, children, ...restProps }) {
   return (
      <React.Fragment>
         <Container maxWidth={maxWidth} {...restProps}>
            {children}
         </Container>
      </React.Fragment>
   );
}
Lcenter.propTypes = {
   maxWidth: PropTypes.string,
   children: PropTypes.node.isRequired
};
Lcenter.defaultProps = {
   maxWidth: 'md'
};
