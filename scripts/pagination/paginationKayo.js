let latestLastPageKayo = Math.ceil(
  videoKayo.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageKayo = Math.ceil(
  videoKayo.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageKayo = Math.ceil(
  videoKayo.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageKayo = Math.ceil(
  videoKayo.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageKayo = Math.ceil(
  videoKayo.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageKayo = Math.ceil(
  videoKayo.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageKayo = Math.ceil(
  videoKayo.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsKayo() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageKayo;
  latestLastPageBtn.disabled = pageLatest === latestLastPageKayo;
}

function firstPageLatestKayo() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageKayo();
  pageLatestBtnsKayo();
}

function prevPageLatestKayo() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageKayo();
  pageLatestBtnsKayo();
}

function nextPageLatestKayo() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageKayo();
  pageLatestBtnsKayo();
}

function lastPageLatestKayo() {
  pageLatest = Math.ceil(videoKayo.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageKayo();
  pageLatestBtnsKayo();
}

function pageWorldsBtnsKayo(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageKayo;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageKayo;
}

function firstPageWorldsKayo() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageKayo();
  pageWorldsBtnsKayo();
}

function prevPageWorldsKayo() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageKayo();
  pageWorldsBtnsKayo();
}

function nextPageWorldsKayo() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageKayo();
  pageWorldsBtnsKayo();
}

function lastPageWorldsKayo() {
  pageWorlds = Math.ceil(videoKayo.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageKayo();
  pageWorldsBtnsKayo();
}

function pageProtourBtnsKayo(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageKayo;
  protourLastPageBtn.disabled = pageProtour === protourLastPageKayo;
}

function firstPageProtourKayo() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageKayo();
  pageProtourBtnsKayo();
}

function prevPageProtourKayo() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageKayo();
  pageProtourBtnsKayo();
}

function nextPageProtourKayo() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageKayo();
  pageProtourBtnsKayo();
}

function lastPageProtourKayo() {
  pageProtour = Math.ceil(videoKayo.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageKayo();
  pageProtourBtnsKayo();
}

function pageCallingBtnsKayo(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageKayo;
  callingLastPageBtn.disabled = pageCalling === callingLastPageKayo;
}

function firstPageCallingKayo() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageKayo();
  pageCallingBtnsKayo();
}

function prevPageCallingKayo() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageKayo();
  pageCallingBtnsKayo();
}

function nextPageCallingKayo() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageKayo();
  pageCallingBtnsKayo();
}

function lastPageCallingKayo() {
  pageCalling = Math.ceil(videoKayo.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoKayo.length)

  printPageKayo();
  pageCallingBtnsKayo();
  console.log(videoKayo.length)
}

function pageBhBtnsKayo(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageKayo;
  bhLastPageBtn.disabled = pageBh === bhLastPageKayo;
}

function firstPageBhKayo() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageKayo();
  pageBhBtnsKayo();
}

function prevPageBhKayo() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageKayo();
  pageBhBtnsKayo();
}

function nextPageBhKayo() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageKayo();
  pageBhBtnsKayo();
}

function lastPageBhKayo() {
  pageBh = Math.ceil(videoKayo.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageKayo();
  pageBhBtnsKayo();
}

function pagePqBtnsKayo(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageKayo;
  pqLastPageBtn.disabled = pagePq === pqLastPageKayo;
}

function firstPagePqKayo() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageKayo();
  pagePqBtnsKayo();
}

function prevPagePqKayo() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageKayo();
  pagePqBtnsKayo();
}

function nextPagePqKayo() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageKayo();
  pagePqBtnsKayo();
}

function lastPagePqKayo() {
  pagePq = Math.ceil(videoKayo.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageKayo();
  pagePqBtnsKayo();
}



function pageAgeBtnsKayo(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageKayo;
  ageLastPageBtn.disabled = pageAge === ageLastPageKayo;
}

function firstPageAgeKayo() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageKayo();
  pageAgeBtnsKayo();
}

function prevPageAgeKayo() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageKayo();
  pageAgeBtnsKayo();
}

function nextPageAgeKayo() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageKayo();
  pageAgeBtnsKayo();
}

function lastPageAgeKayo() {
  pageAge = Math.ceil(videoKayo.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageKayo();
  pageAgeBtnsKayo();
}