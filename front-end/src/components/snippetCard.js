import React, { Component } from 'react';

//  /*onClick needs to change to open snippet editor with curr txt still in it*/}
//       {/*<div id="footer" className="snippetCardButtons">
//         {/* <button onClick= className='edit'>Edit</button>
//         <button
//           className="updateSnipMainText"
//           onClick={updateSnippetDescription}
//         >
//           Update Description
//         </button>
//         <button className="updateSnippetTitle" onClick={updateSnippetTitle}>
//           Update Title
//         </button>
//         <button className="deleteSnippet" onClick={deleteSnippet}>
//           Delete
//         </button>
//       </div> */

const SnippetCard = ({ snippet, displaySnippet }) => {
  const { title, tags } = snippet;

  // render the title and tags that are passed in as a snippet card
  return (
    <div className="snippetCard" onClick={displaySnippet}>
      <h2>{title}</h2>
      <p>Tags: {tags.join(', ')}</p>
    </div>
  );
};

export default SnippetCard;
