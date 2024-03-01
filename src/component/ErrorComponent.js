import React from "react";

const ErrorComponent = ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <div className="error-container">
      <h2>An Error Occurred</h2>
      <p>{error?.message || "Something went wrong, please try again later."}</p>
    </div>
  );
};

export default ErrorComponent;
