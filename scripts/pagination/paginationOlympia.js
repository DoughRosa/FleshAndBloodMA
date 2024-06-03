let latestLastPageOlympia = Math.ceil(
  videoOlympia.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageOlympia = Math.ceil(
  videoOlympia.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageOlympia = Math.ceil(
  videoOlympia.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageOlympia = Math.ceil(
  videoOlympia.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageOlympia = Math.ceil(
  videoOlympia.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageOlympia = Math.ceil(
  videoOlympia.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageOlympia = Math.ceil(
  videoOlympia.filter(videoCategories[6].filter).length / displayCount
);

const latestFirstPageBtn = document.getElementById("latestFirstPageBtn");
const latestPrevPageBtn = document.getElementById("latestPrevPageBtn");
const latestNextPageBtn = document.getElementById("latestNextPageBtn");
const latestLastPageBtn = document.getElementById("latestLastPageBtn");

const worldsFirstPageBtn = document.getElementById("worldsFirstPageBtn");
const worldsPrevPageBtn = document.getElementById("worldsPrevPageBtn");
const worldsNextPageBtn = document.getElementById("worldsNextPageBtn");
const worldsLastPageBtn = document.getElementById("worldsLastPageBtn");

const protourFirstPageBtn = document.getElementById("protourFirstPageBtn");
const protourPrevPageBtn = document.getElementById("protourPrevPageBtn");
const protourNextPageBtn = document.getElementById("protourNextPageBtn");
const protourLastPageBtn = document.getElementById("protourLastPageBtn");

const callingFirstPageBtn = document.getElementById("callingFirstPageBtn");
const callingPrevPageBtn = document.getElementById("callingPrevPageBtn");
const callingNextPageBtn = document.getElementById("callingNextPageBtn");
const callingLastPageBtn = document.getElementById("callingLastPageBtn");

const bhFirstPageBtn = document.getElementById("bhFirstPageBtn");
const bhPrevPageBtn = document.getElementById("bhPrevPageBtn");
const bhNextPageBtn = document.getElementById("bhNextPageBtn");
const bhLastPageBtn = document.getElementById("bhLastPageBtn");

const pqFirstPageBtn = document.getElementById("pqFirstPageBtn");
const pqPrevPageBtn = document.getElementById("pqPrevPageBtn");
const pqNextPageBtn = document.getElementById("pqNextPageBtn");
const pqLastPageBtn = document.getElementById("pqLastPageBtn");

const ageFirstPageBtn = document.getElementById("ageFirstPageBtn");
const agePrevPageBtn = document.getElementById("agePrevPageBtn");
const ageNextPageBtn = document.getElementById("ageNextPageBtn");
const ageLastPageBtn = document.getElementById("ageLastPageBtn");



function pageLatestBtnsOlympia() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageOlympia;
  latestLastPageBtn.disabled = pageLatest === latestLastPageOlympia;
}

function firstPageLatestOlympia() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageOlympia();
  pageLatestBtnsOlympia();
}

function prevPageLatestOlympia() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageOlympia();
  pageLatestBtnsOlympia();
}

function nextPageLatestOlympia() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageOlympia();
  pageLatestBtnsOlympia();
}

function lastPageLatestOlympia() {
  pageLatest = Math.ceil(videoOlympia.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageOlympia();
  pageLatestBtnsOlympia();
}

function pageWorldsBtnsOlympia(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageOlympia;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageOlympia;
}

function firstPageWorldsOlympia() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageOlympia();
  pageWorldsBtnsOlympia();
}

function prevPageWorldsOlympia() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageOlympia();
  pageWorldsBtnsOlympia();
}

function nextPageWorldsOlympia() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageOlympia();
  pageWorldsBtnsOlympia();
}

function lastPageWorldsOlympia() {
  pageWorlds = Math.ceil(videoOlympia.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageOlympia();
  pageWorldsBtnsOlympia();
}

function pageProtourBtnsOlympia(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageOlympia;
  protourLastPageBtn.disabled = pageProtour === protourLastPageOlympia;
}

function firstPageProtourOlympia() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageOlympia();
  pageProtourBtnsOlympia();
}

function prevPageProtourOlympia() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageOlympia();
  pageProtourBtnsOlympia();
}

function nextPageProtourOlympia() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageOlympia();
  pageProtourBtnsOlympia();
}

function lastPageProtourOlympia() {
  pageProtour = Math.ceil(videoOlympia.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageOlympia();
  pageProtourBtnsOlympia();
}

function pageCallingBtnsOlympia(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageOlympia;
  callingLastPageBtn.disabled = pageCalling === callingLastPageOlympia;
}

function firstPageCallingOlympia() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageOlympia();
  pageCallingBtnsOlympia();
}

function prevPageCallingOlympia() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageOlympia();
  pageCallingBtnsOlympia();
}

function nextPageCallingOlympia() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageOlympia();
  pageCallingBtnsOlympia();
}

function lastPageCallingOlympia() {
  pageCalling = Math.ceil(videoOlympia.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoOlympia.length)

  printPageOlympia();
  pageCallingBtnsOlympia();
  console.log(videoOlympia.length)
}

function pageBhBtnsOlympia(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageOlympia;
  bhLastPageBtn.disabled = pageBh === bhLastPageOlympia;
}

function firstPageBhOlympia() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageOlympia();
  pageBhBtnsOlympia();
}

function prevPageBhOlympia() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageOlympia();
  pageBhBtnsOlympia();
}

function nextPageBhOlympia() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageOlympia();
  pageBhBtnsOlympia();
}

function lastPageBhOlympia() {
  pageBh = Math.ceil(videoOlympia.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageOlympia();
  pageBhBtnsOlympia();
}

function pagePqBtnsOlympia(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageOlympia;
  pqLastPageBtn.disabled = pagePq === pqLastPageOlympia;
}

function firstPagePqOlympia() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageOlympia();
  pagePqBtnsOlympia();
}

function prevPagePqOlympia() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageOlympia();
  pagePqBtnsOlympia();
}

function nextPagePqOlympia() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageOlympia();
  pagePqBtnsOlympia();
}

function lastPagePqOlympia() {
  pagePq = Math.ceil(videoOlympia.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageOlympia();
  pagePqBtnsOlympia();
}

function pageAgeBtnsOlympia(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageOlympia;
  ageLastPageBtn.disabled = pageAge === ageLastPageOlympia;
}

function firstPageAgeOlympia() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageOlympia();
  pageAgeBtnsOlympia();
}

function prevPageAgeOlympia() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageOlympia();
  pageAgeBtnsOlympia();
}

function nextPageAgeOlympia() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageOlympia();
  pageAgeBtnsOlympia();
}

function lastPageAgeOlympia() {
  pageAge = Math.ceil(videoOlympia.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageOlympia();
  pageAgeBtnsOlympia();
}