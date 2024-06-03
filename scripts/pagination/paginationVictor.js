let latestLastPageVictor = Math.ceil(
  videoVictor.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageVictor = Math.ceil(
  videoVictor.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageVictor = Math.ceil(
  videoVictor.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageVictor = Math.ceil(
  videoVictor.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageVictor = Math.ceil(
  videoVictor.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageVictor = Math.ceil(
  videoVictor.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageVictor = Math.ceil(
  videoVictor.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsVictor() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageVictor;
  latestLastPageBtn.disabled = pageLatest === latestLastPageVictor;
}

function firstPageLatestVictor() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageVictor();
  pageLatestBtnsVictor();
}

function prevPageLatestVictor() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageVictor();
  pageLatestBtnsVictor();
}

function nextPageLatestVictor() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageVictor();
  pageLatestBtnsVictor();
}

function lastPageLatestVictor() {
  pageLatest = Math.ceil(videoVictor.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageVictor();
  pageLatestBtnsVictor();
}

function pageWorldsBtnsVictor(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageVictor;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageVictor;
}

function firstPageWorldsVictor() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageVictor();
  pageWorldsBtnsVictor();
}

function prevPageWorldsVictor() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageVictor();
  pageWorldsBtnsVictor();
}

function nextPageWorldsVictor() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageVictor();
  pageWorldsBtnsVictor();
}

function lastPageWorldsVictor() {
  pageWorlds = Math.ceil(videoVictor.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageVictor();
  pageWorldsBtnsVictor();
}

function pageProtourBtnsVictor(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageVictor;
  protourLastPageBtn.disabled = pageProtour === protourLastPageVictor;
}

function firstPageProtourVictor() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageVictor();
  pageProtourBtnsVictor();
}

function prevPageProtourVictor() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageVictor();
  pageProtourBtnsVictor();
}

function nextPageProtourVictor() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageVictor();
  pageProtourBtnsVictor();
}

function lastPageProtourVictor() {
  pageProtour = Math.ceil(videoVictor.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageVictor();
  pageProtourBtnsVictor();
}

function pageCallingBtnsVictor(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageVictor;
  callingLastPageBtn.disabled = pageCalling === callingLastPageVictor;
}

function firstPageCallingVictor() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageVictor();
  pageCallingBtnsVictor();
}

function prevPageCallingVictor() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageVictor();
  pageCallingBtnsVictor();
}

function nextPageCallingVictor() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageVictor();
  pageCallingBtnsVictor();
}

function lastPageCallingVictor() {
  pageCalling = Math.ceil(videoVictor.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoVictor.length)

  printPageVictor();
  pageCallingBtnsVictor();
  console.log(videoVictor.length)
}

function pageBhBtnsVictor(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageVictor;
  bhLastPageBtn.disabled = pageBh === bhLastPageVictor;
}

function firstPageBhVictor() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageVictor();
  pageBhBtnsVictor();
}

function prevPageBhVictor() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageVictor();
  pageBhBtnsVictor();
}

function nextPageBhVictor() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageVictor();
  pageBhBtnsVictor();
}

function lastPageBhVictor() {
  pageBh = Math.ceil(videoVictor.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageVictor();
  pageBhBtnsVictor();
}

function pagePqBtnsVictor(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageVictor;
  pqLastPageBtn.disabled = pagePq === pqLastPageVictor;
}

function firstPagePqVictor() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageVictor();
  pagePqBtnsVictor();
}

function prevPagePqVictor() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageVictor();
  pagePqBtnsVictor();
}

function nextPagePqVictor() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageVictor();
  pagePqBtnsVictor();
}

function lastPagePqVictor() {
  pagePq = Math.ceil(videoVictor.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageVictor();
  pagePqBtnsVictor();
}

function pageAgeBtnsVictor(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageVictor;
  ageLastPageBtn.disabled = pageAge === ageLastPageVictor;
}

function firstPageAgeVictor() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageVictor();
  pageAgeBtnsVictor();
}

function prevPageAgeVictor() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageVictor();
  pageAgeBtnsVictor();
}

function nextPageAgeVictor() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageVictor();
  pageAgeBtnsVictor();
}

function lastPageAgeVictor() {
  pageAge = Math.ceil(videoVictor.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageVictor();
  pageAgeBtnsVictor();
}