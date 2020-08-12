//This is a component but functions as a button.
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

const LinkButton = (props) => {
  const {
    history,
    location,
    input,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props;
  return (
    <button
      {...rest} // `children` is just another prop!
      onClick={(event) => {
        onClick && onClick(event);
        history.push({
          pathname: to,
          state: {
            id: input,
          },
        });
      }}
    />
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default withRouter(LinkButton);
