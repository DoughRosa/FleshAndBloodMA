let latestLastPageDash = Math.ceil(
  videoDash.filter(videoCategories[0].filter).length / displayCount
);
let worldsLastPageDash = Math.ceil(
  videoDash.filter(videoCategories[1].filter).length / displayCount
);
let protourLastPageDash = Math.ceil(
  videoDash.filter(videoCategories[2].filter).length / displayCount
);
let callingLastPageDash = Math.ceil(
  videoDash.filter(videoCategories[3].filter).length / displayCount
);
let bhLastPageDash = Math.ceil(
  videoDash.filter(videoCategories[4].filter).length / displayCount
);
let ageLastPageDash = Math.ceil(
  videoDash.filter(videoCategories[5].filter).length / displayCount
);
let pqLastPageDash = Math.ceil(
  videoDash.filter(videoCategories[6].filter).length / displayCount
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



function pageLatestBtnsDash() {
  latestFirstPageBtn.disabled = pageLatest === 1;
  latestPrevPageBtn.disabled = pageLatest === 1;
  latestNextPageBtn.disabled = pageLatest === latestLastPageDash;
  latestLastPageBtn.disabled = pageLatest === latestLastPageDash;
}

function firstPageLatestDash() {
  pageLatest = 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageDash();
  pageLatestBtnsDash();
}

function prevPageLatestDash() {
  pageLatest -= 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageDash();
  pageLatestBtnsDash();
}

function nextPageLatestDash() {
  pageLatest += 1;
  currentPageLatest.innerHTML = pageLatest;

  printPageDash();
  pageLatestBtnsDash();
}

function lastPageLatestDash() {
  pageLatest = Math.ceil(videoDash.filter(videoCategories[0].filter).length / displayCount);
  currentPageLatest.innerHTML = pageLatest;
  
  printPageDash();
  pageLatestBtnsDash();
}

function pageWorldsBtnsDash(){
  worldsFirstPageBtn.disabled = pageWorlds === 1;
  worldsPrevPageBtn.disabled = pageWorlds === 1;
  worldsNextPageBtn.disabled = pageWorlds === worldsLastPageDash;
  worldsLastPageBtn.disabled = pageWorlds === worldsLastPageDash;
}

function firstPageWorldsDash() {
  pageWorlds = 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageDash();
  pageWorldsBtnsDash();
}

function prevPageWorldsDash() {
  pageWorlds -= 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageDash();
  pageWorldsBtnsDash();
}

function nextPageWorldsDash() {
  pageWorlds += 1;
  currentPageWorlds.innerHTML = pageWorlds;

  printPageDash();
  pageWorldsBtnsDash();
}

function lastPageWorldsDash() {
  pageWorlds = Math.ceil(videoDash.filter(videoCategories[1].filter).length / displayCount);
  currentPageWorlds.innerHTML = pageWorlds;

  printPageDash();
  pageWorldsBtnsDash();
}

function pageProtourBtnsDash(){
  protourFirstPageBtn.disabled = pageProtour === 1;
  protourPrevPageBtn.disabled = pageProtour === 1;
  protourNextPageBtn.disabled = pageProtour === protourLastPageDash;
  protourLastPageBtn.disabled = pageProtour === protourLastPageDash;
}

function firstPageProtourDash() {
  pageProtour = 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageDash();
  pageProtourBtnsDash();
}

function prevPageProtourDash() {
  pageProtour -= 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageDash();
  pageProtourBtnsDash();
}

function nextPageProtourDash() {
  pageProtour += 1;
  currentPageProtour.innerHTML = pageProtour;

  printPageDash();
  pageProtourBtnsDash();
}

function lastPageProtourDash() {
  pageProtour = Math.ceil(videoDash.filter(videoCategories[2].filter).length / displayCount);
  currentPageProtour.innerHTML = pageProtour;

  printPageDash();
  pageProtourBtnsDash();
}

function pageCallingBtnsDash(){
  callingFirstPageBtn.disabled = pageCalling === 1;
  callingPrevPageBtn.disabled = pageCalling === 1;
  callingNextPageBtn.disabled = pageCalling === callingLastPageDash;
  callingLastPageBtn.disabled = pageCalling === callingLastPageDash;
}

function firstPageCallingDash() {
  pageCalling = 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageDash();
  pageCallingBtnsDash();
}

function prevPageCallingDash() {
  pageCalling -= 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageDash();
  pageCallingBtnsDash();
}

function nextPageCallingDash() {
  pageCalling += 1;
  currentPageCalling.innerHTML = pageCalling;

  printPageDash();
  pageCallingBtnsDash();
}

function lastPageCallingDash() {
  pageCalling = Math.ceil(videoDash.filter(videoCategories[3].filter).length / displayCount);
  currentPageCalling.innerHTML = pageCalling;
  console.log(videoDash.length)

  printPageDash();
  pageCallingBtnsDash();
  console.log(videoDash.length)
}

function pageBhBtnsDash(){
  bhFirstPageBtn.disabled = pageBh === 1;
  bhPrevPageBtn.disabled = pageBh === 1;
  bhNextPageBtn.disabled = pageBh === bhLastPageDash;
  bhLastPageBtn.disabled = pageBh === bhLastPageDash;
}

function firstPageBhDash() {
  pageBh = 1;
  currentPageBh.innerHTML = pageBh;

  printPageDash();
  pageBhBtnsDash();
}

function prevPageBhDash() {
  pageBh -= 1;
  currentPageBh.innerHTML = pageBh;

  printPageDash();
  pageBhBtnsDash();
}

function nextPageBhDash() {
  pageBh += 1;
  currentPageBh.innerHTML = pageBh;

  printPageDash();
  pageBhBtnsDash();
}

function lastPageBhDash() {
  pageBh = Math.ceil(videoDash.filter(videoCategories[4].filter).length / displayCount);
  currentPageBh.innerHTML = pageBh;

  printPageDash();
  pageBhBtnsDash();
}

function pagePqBtnsDash(){
  pqFirstPageBtn.disabled = pagePq === 1;
  pqPrevPageBtn.disabled = pagePq === 1;
  pqNextPageBtn.disabled = pagePq === pqLastPageDash;
  pqLastPageBtn.disabled = pagePq === pqLastPageDash;
}

function firstPagePqDash() {
  pagePq = 1;
  currentPagePq.innerHTML = pagePq;

  printPageDash();
  pagePqBtnsDash();
}

function prevPagePqDash() {
  pagePq -= 1;
  currentPagePq.innerHTML = pagePq;

  printPageDash();
  pagePqBtnsDash();
}

function nextPagePqDash() {
  pagePq += 1;
  currentPagePq.innerHTML = pagePq;

  printPageDash();
  pagePqBtnsDash();
}

function lastPagePqDash() {
  pagePq = Math.ceil(videoDash.filter(videoCategories[6].filter).length / displayCount);
  currentPagePq.innerHTML = pagePq;

  printPageDash();
  pagePqBtnsDash();
}

function pageAgeBtnsDash(){
  ageFirstPageBtn.disabled = pageAge === 1;
  agePrevPageBtn.disabled = pageAge === 1;
  ageNextPageBtn.disabled = pageAge === ageLastPageDash;
  ageLastPageBtn.disabled = pageAge === ageLastPageDash;
}

function firstPageAgeDash() {
  pageAge = 1;
  currentPageAge.innerHTML = pageAge;

  printPageDash();
  pageAgeBtnsDash();
}

function prevPageAgeDash() {
  pageAge -= 1;
  currentPageAge.innerHTML = pageAge;

  printPageDash();
  pageAgeBtnsDash();
}

function nextPageAgeDash() {
  pageAge += 1;
  currentPageAge.innerHTML = pageAge;

  printPageDash();
  pageAgeBtnsDash();
}

function lastPageAgeDash() {
  pageAge = Math.ceil(videoDash.filter(videoCategories[5].filter).length / displayCount);
  currentPageAge.innerHTML = pageAge;

  printPageDash();
  pageAgeBtnsDash();
}