import gplay from "google-play-scraper";

const idApp = 'com.supercell.clashroyale';
const sortApp = gplay.sort.RATING;

gplay.reviews({
  appId: idApp,
  sort: sortApp,
  num: 3000
}).then(console.log, console.log);

gplay.reviews({
  appId: idApp,
  sort: sortApp,
  paginate: true,
  nextPaginationToken: null
}).then(console.log, console.log);

gplay.reviews({
  appId: idApp,
  sort: sortApp,
  paginate: true,
  nextPaginationToken: 'TOKEN_FROM_THE_PREVIOUS_REQUEST'
}).then(console.log, console.log);