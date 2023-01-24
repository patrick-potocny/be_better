import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'

function Typing({ className }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots(dots.length === 3 ? "" : dots + ".");
    }, 400);
    return () => clearInterval(intervalId);
  }, [dots]);

  return <p className={className}>Typing{dots}</p>;
}

Typing.propTypes = {
  className: PropTypes.string.isRequired
};

export default Typing;
