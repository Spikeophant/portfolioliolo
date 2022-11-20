import React from 'react';

export default function ({ href, title,  content }) {
  return (
    <div className="col-md-4">
      <div className="card mb4">
        <div className="card-header">
          <h4 className="card-title">{ title } <a href={ href }>
            <svg className="bi" width="32" height="32" fill="currentColor">
              <use xlinkHref="bootstrap-icons.svg#GitHub"/>
            </svg>
          </a></h4>
        </div>
        <div className="card-body">
          { content}
        </div>
      </div>
    </div>
  );
}