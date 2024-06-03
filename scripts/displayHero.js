document.addEventListener("DOMContentLoaded", function () {
  const printPageFunction = localStorage.getItem("printPage");
  if (printPageFunction) {
    window[printPageFunction]();
    localStorage.removeItem("printPage");
  }
});

function renderVideos(rowElement, videos) {
  rowElement.innerHTML = "";
  videos.forEach((video) => {
    const videoCard = `
        <div class="card-hero col-10 col-sm-4 col-md-2 m-3 pb-3">
          <img class="card-img" src="https://img.youtube.com/vi/${video.hash}/sddefault.jpg" alt="thumbnail">
          <h3 class="card-title text-center ">${video.title}</h3>
          <div class="card-body pb-4 text-light">
            <p class="card-text">${video.description}</p>
            <button type="button" class="btn btn-danger" onclick="openModalMovie('${video.game}')">Watch Now!</button>
          </div>
        </div>`;
    rowElement.innerHTML += videoCard;
  });
}

function printPageArakni() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoArakni
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoArakni
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoArakni
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoArakni
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoArakni
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoArakni
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoArakni
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsArakni();
  pageWorldsBtnsArakni();
  pageProtourBtnsArakni();
  pageCallingBtnsArakni();
  pageBhBtnsArakni();
  pageAgeBtnsArakni();
  pagePqBtnsArakni();
}

function printPageAzalea() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoAzalea
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoAzalea
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoAzalea
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoAzalea
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoAzalea
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoAzalea
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoAzalea
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsAzalea();
  pageWorldsBtnsAzalea();
  pageProtourBtnsAzalea();
  pageCallingBtnsAzalea();
  pageBhBtnsAzalea();
  pagePqBtnsAzalea();
  pageAgeBtnsAzalea();
}

function printPageBetsy() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBetsy
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBetsy
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBetsy
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBetsy
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBetsy
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBetsy
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBetsy
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsBetsy();
  pageWorldsBtnsBetsy();
  pageProtourBtnsBetsy();
  pageCallingBtnsBetsy();
  pageBhBtnsBetsy();
  pagePqBtnsBetsy();
  pageAgeBtnsBetsy();
}

function printPageBravo() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBravo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBravo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBravo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBravo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBravo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBravo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBravo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsBravo();
  pageWorldsBtnsBravo();
  pageProtourBtnsBravo();
  pageCallingBtnsBravo();
  pageBhBtnsBravo();
  pagePqBtnsBravo();
  pageAgeBtnsBravo();
}

function printPageDash() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDash
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDash
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDash
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDash
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDash
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDash
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDash
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsDash();
  pageWorldsBtnsDash();
  pageProtourBtnsDash();
  pageCallingBtnsDash();
  pageBhBtnsDash();
  pagePqBtnsDash();
  pageAgeBtnsDash();
}

function printPageIo() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoIo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoIo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoIo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoIo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoIo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoIo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoIo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsIo();
  pageWorldsBtnsIo();
  pageProtourBtnsIo();
  pageCallingBtnsIo();
  pageBhBtnsIo();
  pagePqBtnsIo();
  pageAgeBtnsIo();
}

function printPageDorinthea() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDorinthea
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDorinthea
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDorinthea
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDorinthea
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDorinthea
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDorinthea
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDorinthea
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsDorinthea();
  pageWorldsBtnsDorinthea();
  pageProtourBtnsDorinthea();
  pageCallingBtnsDorinthea();
  pageBhBtnsDorinthea();
  pagePqBtnsDorinthea();
  pageAgeBtnsDorinthea();
}

function printPageDromai() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDromai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDromai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDromai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDromai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDromai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDromai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoDromai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsDromai();
  pageWorldsBtnsDromai();
  pageProtourBtnsDromai();
  pageCallingBtnsDromai();
  pageBhBtnsDromai();
  pagePqBtnsDromai();
  pageAgeBtnsDromai();
}

function printPageEnigma() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoEnigma
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoEnigma
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoEnigma
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoEnigma
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoEnigma
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoEnigma
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoEnigma
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsEnigma();
  pageWorldsBtnsEnigma();
  pageProtourBtnsEnigma();
  pageCallingBtnsEnigma();
  pageBhBtnsEnigma();
  pagePqBtnsEnigma();
  pageAgeBtnsEnigma();
}

function printPageFai() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoFai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoFai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoFai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoFai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoFai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoFai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoFai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsFai();
  pageWorldsBtnsFai();
  pageProtourBtnsFai();
  pageCallingBtnsFai();
  pageBhBtnsFai();
  pagePqBtnsFai();
  pageAgeBtnsFai();
}

function printPageKano() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKano
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKano
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKano
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKano
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKano
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKano
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKano
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsKano();
  pageWorldsBtnsKano();
  pageProtourBtnsKano();
  pageCallingBtnsKano();
  pageBhBtnsKano();
  pagePqBtnsKano();
  pageAgeBtnsKano();
}

function printPageKassai() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKassai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKassai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKassai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKassai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKassai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKassai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKassai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsKassai();
  pageWorldsBtnsKassai();
  pageProtourBtnsKassai();
  pageCallingBtnsKassai();
  pageBhBtnsKassai();
  pagePqBtnsKassai();
  pageAgeBtnsKassai();
}

function printPageKatsu() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKatsu
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKatsu
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKatsu
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKatsu
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKatsu
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKatsu
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKatsu
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsKatsu();
  pageWorldsBtnsKatsu();
  pageProtourBtnsKatsu();
  pageCallingBtnsKatsu();
  pageBhBtnsKatsu();
  pagePqBtnsKatsu();
  pageAgeBtnsKatsu();
}

function printPageKayo() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKayo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKayo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKayo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKayo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKayo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKayo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoKayo
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsKayo();
  pageWorldsBtnsKayo();
  pageProtourBtnsKayo();
  pageCallingBtnsKayo();
  pageBhBtnsKayo();
  pagePqBtnsKayo();
  pageAgeBtnsKayo();
}

function printPageLevia() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoLevia
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoLevia
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoLevia
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoLevia
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoLevia
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoLevia
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoLevia
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsLevia();
  pageWorldsBtnsLevia();
  pageProtourBtnsLevia();
  pageCallingBtnsLevia();
  pageBhBtnsLevia();
  pagePqBtnsLevia();
  pageAgeBtnsLevia();
}

function printPageMaxx() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoMaxx
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoMaxx
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoMaxx
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoMaxx
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoMaxx
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoMaxx
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoMaxx
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsMaxx();
  pageWorldsBtnsMaxx();
  pageProtourBtnsMaxx();
  pageCallingBtnsMaxx();
  pageBhBtnsMaxx();
  pagePqBtnsMaxx();
  pageAgeBtnsMaxx();
}

function printPageNuu() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoNuu
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoNuu
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoNuu
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoNuu
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoNuu
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoNuu
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoNuu
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsNuu();
  pageWorldsBtnsNuu();
  pageProtourBtnsNuu();
  pageCallingBtnsNuu();
  pageBhBtnsNuu();
  pagePqBtnsNuu();
  pageAgeBtnsNuu();
}

function printPageOlympia() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoOlympia
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoOlympia
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoOlympia
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoOlympia
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoOlympia
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoOlympia
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoOlympia
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsOlympia();
  pageWorldsBtnsOlympia();
  pageProtourBtnsOlympia();
  pageCallingBtnsOlympia();
  pageBhBtnsOlympia();
  pagePqBtnsOlympia();
  pageAgeBtnsOlympia();
}

function printPagePrism() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoPrism
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoPrism
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoPrism
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoPrism
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoPrism
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoPrism
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoPrism
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsPrism();
  pageWorldsBtnsPrism();
  pageProtourBtnsPrism();
  pageCallingBtnsPrism();
  pageBhBtnsPrism();
  pagePqBtnsPrism();
  pageAgeBtnsPrism();
}

function printPageRhinar() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoRhinar
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoRhinar
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoRhinar
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoRhinar
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoRhinar
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoRhinar
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoRhinar
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsRhinar();
  pageWorldsBtnsRhinar();
  pageProtourBtnsRhinar();
  pageCallingBtnsRhinar();
  pageBhBtnsRhinar();
  pagePqBtnsRhinar();
  pageAgeBtnsRhinar();
}

function printPageRiptide() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoRiptide
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoRiptide
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoRiptide
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoRiptide
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoRiptide
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoRiptide
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoRiptide
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsRiptide();
  pageWorldsBtnsRiptide();
  pageProtourBtnsRiptide();
  pageCallingBtnsRiptide();
  pageBhBtnsRiptide();
  pagePqBtnsRiptide();
  pageAgeBtnsRiptide();
}

function printPageBoltyn() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBoltyn
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBoltyn
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBoltyn
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBoltyn
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBoltyn
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBoltyn
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoBoltyn
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsBoltyn();
  pageWorldsBtnsBoltyn();
  pageProtourBtnsBoltyn();
  pageCallingBtnsBoltyn();
  pageBhBtnsBoltyn();
  pagePqBtnsBoltyn();
  pageAgeBtnsBoltyn();
}

function printPageTeklovossen() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoTeklovossen
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoTeklovossen
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoTeklovossen
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoTeklovossen
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoTeklovossen
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoTeklovossen
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoTeklovossen
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsTeklovossen();
  pageWorldsBtnsTeklovossen();
  pageProtourBtnsTeklovossen();
  pageCallingBtnsTeklovossen();
  pageBhBtnsTeklovossen();
  pagePqBtnsTeklovossen();
  pageAgeBtnsTeklovossen();
}

function printPageUzuri() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoUzuri
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoUzuri
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoUzuri
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoUzuri
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoUzuri
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoUzuri
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoUzuri
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsUzuri();
  pageWorldsBtnsUzuri();
  pageProtourBtnsUzuri();
  pageCallingBtnsUzuri();
  pageBhBtnsUzuri();
  pagePqBtnsUzuri();
  pageAgeBtnsUzuri();
}

function printPageVictor() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoVictor
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoVictor
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoVictor
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoVictor
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoVictor
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoVictor
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoVictor
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsVictor();
  pageWorldsBtnsVictor();
  pageProtourBtnsVictor();
  pageCallingBtnsVictor();
  pageBhBtnsVictor();
  pagePqBtnsVictor();
  pageAgeBtnsVictor();
}

function printPageViserai() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoViserai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoViserai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoViserai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoViserai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoViserai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoViserai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoViserai
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsViserai();
  pageWorldsBtnsViserai();
  pageProtourBtnsViserai();
  pageCallingBtnsViserai();
  pageBhBtnsViserai();
  pagePqBtnsViserai();
  pageAgeBtnsViserai();
}

function printPageVynnset() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoVynnset
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoVynnset
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoVynnset
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoVynnset
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoVynnset
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoVynnset
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoVynnset
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsVynnset();
  pageWorldsBtnsVynnset();
  pageProtourBtnsVynnset();
  pageCallingBtnsVynnset();
  pageBhBtnsVynnset();
  pagePqBtnsVynnset();
  pageAgeBtnsVynnset();
}

function printPageZen() {
  videoCategories.forEach(({ row, filter, page }) => {
    if (row == rowLatest) {
      const startIndex = (pageLatest - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoZen
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("latest_content").classList.add("vanish");
        }
      }
    }
    if (row == rowWorlds) {
      const startIndex = (pageWorlds - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoZen
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("worlds_content").classList.add("vanish");
        }
      }
    }
    if (row == rowProtour) {
      const startIndex = (pageProtour - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoZen
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("protour_content").classList.add("vanish");
        }
      }
    }
    if (row == rowCalling) {
      const startIndex = (pageCalling - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoZen
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("calling_content").classList.add("vanish");
        }
      }
    }
    if (row == rowBh) {
      const startIndex = (pageBh - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoZen
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("bh_content").classList.add("vanish");
        }
      }
    }
    if (row == rowPq) {
      const startIndex = (pagePq - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoZen
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("pq_content").classList.add("vanish");
        }
      }
    }
    if (row == rowAge) {
      const startIndex = (pageAge - 1) * displayCount;
      const endIndex = startIndex + displayCount;

      if (row) {
        const filteredVideos = videoZen
          .filter(filter)
          .slice(startIndex, endIndex);
        renderVideos(row, filteredVideos);

        if (filteredVideos.length === 0) {
          document.getElementById("age_content").classList.add("vanish");
        }
      }
    }
  });

  pageLatestBtnsZen();
  pageWorldsBtnsZen();
  pageProtourBtnsZen();
  pageCallingBtnsZen();
  pageBhBtnsZen();
  pagePqBtnsZen();
  pageAgeBtnsZen();
}