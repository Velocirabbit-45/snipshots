import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllSnippets } from '../reducers/overviewSlice';
import SnippetCard from './snippetCard';

const Overview = ({ dispatchNav, setSnippetAndNavigate }) => {
  //declaring variables to utilize usedispatch from useselector from redux library, managing overviewSnippets state
  const dispatch = useDispatch();
  const allSnips = useSelector((state) => state.overview.overviewSnippets);

  //dipsatch the fetchallsnippets function that exists in the overviewslice file
  //useeffect is required here to prevent a bad rerender, following error occurs when dispatching without useeffect:
  //====>>>> Warning: Cannot update a component (`Overview`) while rendering a different component (`Overview`).
  //====>>>> To locate the bad setState() call inside `Overview`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render
  //we cannot queue state updates in the middle of rendering or we received the error above
  useEffect(() => {
    dispatch(fetchAllSnippets());
  }, [dispatch]);
  //dispatch(fetchAllSnippets());

  // swap out the current component for the post component
  const createSnippet = () => {
    dispatchNav('post');
  };

  // after clicking on a snippet card, call the passed in function that grabs the full snippet and swaps in the snippet component
  const handleSnippetClick = (snippet) => {
    setSnippetAndNavigate(snippet);
  };

  // render all snippet cards that we grabbed previously passing in the snippet data
  // mapping all snippets onto SnippetCard copm
  return (
    <div id="overview">
      <h1>Your Snippets</h1>
      <button onClick={createSnippet}>Post new Snippet!</button>
      {allSnips.map((snip) => (
        <SnippetCard
          key={snip._id}
          snippet={snip}
          displaySnippet={() => handleSnippetClick(snip)}
        />
      ))}
    </div>
  );
};

export default Overview;
