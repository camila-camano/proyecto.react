import React from "react";

export const Loader = () => {
  return (
    <div class="d-flex align-items-center">
      <strong>Loading...</strong>
      <div
        class="spinner-border ml-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
};
