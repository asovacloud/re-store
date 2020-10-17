import React from 'react';

const ErrorIndicator = () => {

  return (
    <div className="error-indicator">
      <h4 className="error-indicator__title">BOOM!</h4>
      <div className="error-indicator__description">
        <div>Sometghin has gone terribly wrong</div>
      </div>
    </div>
  );

};

export default ErrorIndicator;
