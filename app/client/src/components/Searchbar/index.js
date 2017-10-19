import React from 'react';
import './index.css';

export default () => (
  <div className="searchbar">
    <input placeholder="Search" />
    <span className="search-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="22"
        viewBox="0 0 21 22"
      >
          <path
          id="search-icon"
          fill="#9B9B9B"
          d="M2.648,15.872 C3.433,16.658 4.376,17.287 5.454,17.758 C6.553,18.229 7.698,18.454 8.888,18.454 C10.728,18.454 12.389,17.938 13.893,16.905 L18.18,21.192 C18.494,21.506 18.854,21.664 19.302,21.664 C19.751,21.664 20.111,21.506 20.447,21.192 C20.761,20.855 20.919,20.496 20.919,20.047 C20.919,19.621 20.761,19.239 20.447,18.925 L16.16,14.638 C17.193,13.134 17.709,11.473 17.709,9.633 C17.709,8.443 17.484,7.298 17.013,6.198 C16.542,5.121 15.913,4.178 15.128,3.393 C14.342,2.607 13.399,1.979 12.322,1.507 C11.222,1.036 10.077,0.811 8.888,0.811 C7.698,0.811 6.553,1.036 5.454,1.507 C4.376,1.979 3.433,2.607 2.648,3.393 C1.862,4.178 1.234,5.121 0.762,6.198 C0.291,7.298 0.066,8.443 0.066,9.633 C0.066,10.822 0.291,11.967 0.762,13.067 C1.234,14.144 1.862,15.087 2.648,15.872 L2.648,15.872 Z M8.888,4.021 C10.436,4.021 11.761,4.56 12.861,5.66 C13.96,6.76 14.499,8.084 14.499,9.633 C14.499,11.181 13.96,12.506 12.861,13.606 C11.761,14.705 10.436,15.244 8.888,15.244 C7.339,15.244 6.015,14.705 4.915,13.606 C3.815,12.506 3.276,11.181 3.276,9.633 C3.276,8.084 3.815,6.76 4.915,5.66 C6.015,4.56 7.339,4.021 8.888,4.021 L8.888,4.021 Z"
        />
      </svg>
    </span>
  </div>
);