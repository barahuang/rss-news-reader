const storageName = 'favoriteList';

const updateLocalStorage = (feed, isSaving) => {
  const preListString = window.localStorage.getItem(storageName);
  let newListArray = []; // a real array

  if (!!preListString) {
    const preListArray = JSON.parse(preListString);
    if (!!isSaving) {
      //save the feed
      newListArray = [feed, ...preListArray];
    } else {
      // remove the feed
      newListArray = preListArray.filter(
        feedItem => JSON.stringify(feedItem) !== JSON.stringify(feed)
      );
    }
  } else {
    newListArray = [feed];
  }

  window.localStorage.setItem(storageName, JSON.stringify(newListArray));
};

const add = feed => {
  updateLocalStorage(feed, true);
};

const remove = feed => {
  updateLocalStorage(feed, false);
};

const check = feed => {
  const preListString = window.localStorage.getItem(storageName);
  return !!preListString && preListString.indexOf(JSON.stringify(feed)) > -1;
};

export { add, remove, check };
