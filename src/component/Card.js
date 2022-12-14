import React from 'react';

export default function ({ href, title,  content, deployment, image }) {
  return (
    <div className="col-md-4 col">
      <div className="card m-md-3">
        <div className="card-img-top card-img">
          <img src={image} alt="Application Image." className="img-fluid" />
        </div>
        <div className="card-header">
          <h4 className="card-title">{ title } <a href={ href } target="_blank" rel="noreferrer" className="p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-github"
                 viewBox="0 0 16 16">
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
            <a className="pr-1" target="_blank" rel="noreferrer" href={deployment} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-window"
                 viewBox="0 0 16 16">
              <path
                d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
              <path
                d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z"/>
            </svg></a></h4>
        </div>
        <div className="card-body">
          { content }
        </div>
      </div>
    </div>
  );
}