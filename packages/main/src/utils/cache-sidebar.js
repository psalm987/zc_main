const storeObjectInLocalStorage = (storageKey, object) => {
  localStorage.setItem(storageKey, JSON.stringify(object));
};

const retrieveObjectFromLocalStorage = storageKey => {
  return JSON.parse(localStorage.getItem(storageKey));
};

export const storeSideBarInfo = (userEmail, sidebar) => {
  storeObjectInLocalStorage(`${userEmail}-sidebarCache`, sidebar);
};

export const retrieveSideBarInfo = userEmail => {
  return retrieveObjectFromLocalStorage(`${userEmail}-sidebarCache`);
};
