import React from "react";

const Loading = () => {
  return (
    <div className="row mt-5">
      <div className="d-flex align-items-center justify-content-center">
        <div class="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
