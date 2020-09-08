import { useLocation, useRouteMatch } from "react-router-dom";

export const useMakeLink = (config) => {
  const match = useRouteMatch();
  const location = useLocation();
  
  if (!config) {
    return location;
  }
  
  const {
    to,
    hash,
    state = {},
    query = {},
    pushToQuery = {},
    isRelative = false,
  } = config;

  const pathname = (match && isRelative)
    ? `${match.url}${to}`
    : to || location.pathname;

  const search = !Object.keys(query).length
    ? new URLSearchParams(location.search)
    : new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    search.set(key, value);
  });

  Object.entries(pushToQuery).forEach(([key, value]) => {
    const existingValue = search.get(key);
    const arrayValue = existingValue ? existingValue.split(",") : [];
    arrayValue.push(value);
    search.set(key, arrayValue);
  });

  return {
    pathname,
    search: search.toString(),
    hash,
    state,
  };
};