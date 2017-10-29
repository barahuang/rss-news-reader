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

const getAll = targetStorageName =>
  JSON.parse(window.localStorage.getItem(targetStorageName));

const dump = (targetStorageName, feeds) => {
  window.localStorage.setItem(targetStorageName, JSON.stringify(feeds));
};
const remove = feed => {
  updateLocalStorage(feed, false);
};

const check = (targetStorageName, feed) => {
  const targetListString = window.localStorage.getItem(targetStorageName);
  const allStoredFeeds = JSON.parse(targetListString);

  return (
    !!targetListString &&
    allStoredFeeds.some(storedFeed => storedFeed.pubDate === feed.pubDate)
  );
};

export { getAll, dump, add, remove, check };
