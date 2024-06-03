let latestLastPageDorinthea = Math.ceil(
  videoDorinthea.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageDorinthea = Math.ceil(
  videoDorinthea.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageDorinthea = Math.ceil(
  videoDorinthea.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageDorinthea = Math.ceil(
  videoDorinthea.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageDorinthea = Math.ceil(
  videoDorinthea.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageDorinthea = Math.ceil(
  videoDorinthea.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageDorinthea = Math.ceil(
  videoDorinthea.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsDorinthea() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageDorinthea;
  latestLastPageBtn.disabled = pageLatest === latestLastPageDorinthea;
}

function firstPageLatestDorinthea() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageDorinthea();
  pageLatestBtnsDorinthea();
}

function prevPageLatestDorinthea() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageDorinthea();
  pageLatestBtnsDorinthea();
}

function nextPageLatestDorinthea() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageDorinthea();
  pageLatestBtnsDorinthea();
}

function lastPageLatestDorinthea() {
  pageLatest = Math.ceil(videoDorinthea.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageDorinthea();
  pageLatestBtnsDorinthea();
}

function pageWorldsBtnsDorinthea(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageDorinthea;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageDorinthea;

  console.log(worldsLastPageDorinthea)
}

function firstPageWorldsDorinthea() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageDorinthea();
  pageWorldsBtnsDorinthea();
}

function prevPageWorldsDorinthea() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageDorinthea();
  pageWorldsBtnsDorinthea();
}

function nextPageWorldsDorinthea() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageDorinthea();
  pageWorldsBtnsDorinthea();
}

function lastPageWorldsDorinthea() {
  pageWorlds = Math.ceil(videoDorinthea.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageDorinthea();
  pageWorldsBtnsDorinthea();
}

function pageProtourBtnsDorinthea(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageDorinthea;
  protourLastPageBtn.disabled = pageProtour === protourLastPageDorinthea;
}

function firstPageProtourDorinthea() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageDorinthea();
  pageProtourBtnsDorinthea();
}

function prevPageProtourDorinthea() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageDorinthea();
  pageProtourBtnsDorinthea();
}

function nextPageProtourDorinthea() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageDorinthea();
  pageProtourBtnsDorinthea();
}

function lastPageProtourDorinthea() {
  pageProtour = Math.ceil(videoDorinthea.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageDorinthea();
  pageProtourBtnsDorinthea();
}

function pageCallingBtnsDorinthea(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageDorinthea;
  callingLastPageBtn.disabled = pageCalling === callingLastPageDorinthea;
}

function firstPageCallingDorinthea() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageDorinthea();
  pageCallingBtnsDorinthea();
}

function prevPageCallingDorinthea() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageDorinthea();
  pageCallingBtnsDorinthea();
}

function nextPageCallingDorinthea() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageDorinthea();
  pageCallingBtnsDorinthea();
}

function lastPageCallingDorinthea() {
  pageCalling = Math.ceil(videoDorinthea.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoDorinthea.length)

  printPageDorinthea();
  pageCallingBtnsDorinthea();
  console.log(videoDorinthea.length)
}

function pageBhBtnsDorinthea(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageDorinthea;
  bhLastPageBtn.disabled = pageBh === bhLastPageDorinthea;
}

function firstPageBhDorinthea() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageDorinthea();
  pageBhBtnsDorinthea();
}

function prevPageBhDorinthea() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageDorinthea();
  pageBhBtnsDorinthea();
}

function nextPageBhDorinthea() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageDorinthea();
  pageBhBtnsDorinthea();
}

function lastPageBhDorinthea() {
  pageBh = Math.ceil(videoDorinthea.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageDorinthea();
  pageBhBtnsDorinthea();
}

function pagePqBtnsDorinthea(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageDorinthea;
  pqLastPageBtn.disabled = pagePq === pqLastPageDorinthea;
}

function firstPagePqDorinthea() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageDorinthea();
  pagePqBtnsDorinthea();
}

function prevPagePqDorinthea() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageDorinthea();
  pagePqBtnsDorinthea();
}

function nextPagePqDorinthea() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageDorinthea();
  pagePqBtnsDorinthea();
}

function lastPagePqDorinthea() {
  pagePq = Math.ceil(videoDorinthea.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageDorinthea();
  pagePqBtnsDorinthea();
}

function pageAgeBtnsDorinthea(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageDorinthea;
  ageLastPageBtn.disabled = pageAge === ageLastPageDorinthea;
}

function firstPageAgeDorinthea() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageDorinthea();
  pageAgeBtnsDorinthea();
}

function prevPageAgeDorinthea() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageDorinthea();
  pageAgeBtnsDorinthea();
}

function nextPageAgeDorinthea() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageDorinthea();
  pageAgeBtnsDorinthea();
}

function lastPageAgeDorinthea() {
  pageAge = Math.ceil(videoDorinthea.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageDorinthea();
  pageAgeBtnsDorinthea();
}