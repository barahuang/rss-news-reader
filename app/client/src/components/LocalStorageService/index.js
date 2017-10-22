const updateLocalStorage = (feed, saving) => {
  const preListString = window.localStorage.getItem('favoriteList');
  let newListArray = []; // a real array

  if (!!preListString) {
    const preListArray = JSON.parse(preListString);
    if (!!saving) {
      //save the feed
      newListArray = [feed, ...preListArray];
    } else {
      // remove the feed
      newListArray = preListArray.filter(
        fd => JSON.stringify(fd) !== JSON.stringify(feed)
      );
    }
  } else {
    newListArray = [feed];
  }

  window.localStorage.setItem('favoriteList', JSON.stringify(newListArray));
};

const isInLocalStorage = feed => {
  const preListString = window.localStorage.getItem('favoriteList');
  return preListString.indexOf(JSON.stringify(feed)) !== -1;
};

export { updateLocalStorage, isInLocalStorage };
