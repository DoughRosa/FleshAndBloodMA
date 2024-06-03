let latestLastPageBravo = Math.ceil(
  videoBravo.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageBravo = Math.ceil(
  videoBravo.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageBravo = Math.ceil(
  videoBravo.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageBravo = Math.ceil(
  videoBravo.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageBravo = Math.ceil(
  videoBravo.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageBravo = Math.ceil(
  videoBravo.filter(videoCategories[5].filter).length / displayCount
);

let pqLastPageBravo = Math.ceil(
  videoBravo.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsBravo() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageBravo;
  latestLastPageBtn.disabled = pageLatest === latestLastPageBravo;
}

function firstPageLatestBravo() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageBravo();
  pageLatestBtnsBravo();
}

function prevPageLatestBravo() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageBravo();
  pageLatestBtnsBravo();
}

function nextPageLatestBravo() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageBravo();
  pageLatestBtnsBravo();
}

function lastPageLatestBravo() {
  pageLatest = Math.ceil(videoBravo.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageBravo();
  pageLatestBtnsBravo();
}

function pageWorldsBtnsBravo(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageBravo;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageBravo;
}

function firstPageWorldsBravo() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageBravo();
  pageWorldsBtnsBravo();
}

function prevPageWorldsBravo() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageBravo();
  pageWorldsBtnsBravo();
}

function nextPageWorldsBravo() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageBravo();
  pageWorldsBtnsBravo();
}

function lastPageWorldsBravo() {
  pageWorlds = Math.ceil(videoBravo.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageBravo();
  pageWorldsBtnsBravo();
}

function pageProtourBtnsBravo(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageBravo;
  protourLastPageBtn.disabled = pageProtour === protourLastPageBravo;
}

function firstPageProtourBravo() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageBravo();
  pageProtourBtnsBravo();
}

function prevPageProtourBravo() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageBravo();
  pageProtourBtnsBravo();
}

function nextPageProtourBravo() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageBravo();
  pageProtourBtnsBravo();
}

function lastPageProtourBravo() {
  pageProtour = Math.ceil(videoBravo.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageBravo();
  pageProtourBtnsBravo();
}

function pageCallingBtnsBravo(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageBravo;
  callingLastPageBtn.disabled = pageCalling === callingLastPageBravo;
}

function firstPageCallingBravo() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageBravo();
  pageCallingBtnsBravo();
}

function prevPageCallingBravo() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageBravo();
  pageCallingBtnsBravo();
}

function nextPageCallingBravo() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageBravo();
  pageCallingBtnsBravo();
}

function lastPageCallingBravo() {
  pageCalling = Math.ceil(videoBravo.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoBravo.length)

  printPageBravo();
  pageCallingBtnsBravo();
  console.log(videoBravo.length)
}

function pageBhBtnsBravo(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageBravo;
  bhLastPageBtn.disabled = pageBh === bhLastPageBravo;
}

function firstPageBhBravo() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageBravo();
  pageBhBtnsBravo();
}

function prevPageBhBravo() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageBravo();
  pageBhBtnsBravo();
}

function nextPageBhBravo() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageBravo();
  pageBhBtnsBravo();
}

function lastPageBhBravo() {
  pageBh = Math.ceil(videoBravo.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageBravo();
  pageBhBtnsBravo();
}





function pagePqBtnsBravo(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageBravo;
  pqLastPageBtn.disabled = pagePq === pqLastPageBravo;
}

function firstPagePqBravo() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageBravo();
  pagePqBtnsBravo();
}

function prevPagePqBravo() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageBravo();
  pagePqBtnsBravo();
}

function nextPagePqBravo() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageBravo();
  pagePqBtnsBravo();
}

function lastPagePqBravo() {
  pagePq = Math.ceil(videoBravo.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageBravo();
  pagePqBtnsBravo();
}


function pageAgeBtnsBravo(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageBravo;
  ageLastPageBtn.disabled = pageAge === ageLastPageBravo;
}

function firstPageAgeBravo() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageBravo();
  pageAgeBtnsBravo();
}

function prevPageAgeBravo() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageBravo();
  pageAgeBtnsBravo();
}

function nextPageAgeBravo() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageBravo();
  pageAgeBtnsBravo();
}

function lastPageAgeBravo() {
  pageAge = Math.ceil(videoBravo.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageBravo();
  pageAgeBtnsBravo();
}