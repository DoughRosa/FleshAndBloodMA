const videos = [
  //------------------ Nationals UK ----------------------------------//
  {
    title: "Dash vs Nuu",
    description: `National Championship UK <br> Round 1 <br> Alex Chitu <br> vs <br> Adam Harbinson.`,
    hash: "XgpmQg_8aEY",
    game: "XgpmQg_8aEY?si=-PT2ygXJWQ9UroeC&amp;start=1612",
    hero: "dash nuu",
    class: "national"
  },
  {
    title: "Azalea vs Riptide",
    description: `National Championship UK <br> Round 2 <br> Liam Holden <br> vs <br> Declan Patrick.`,
    hash: "XgpmQg_8aEY",
    game: "XgpmQg_8aEY?si=-PT2ygXJWQ9UroeC&amp;start=5300",
    hero: "azalea riptide",
    class: "national"
  },
  {
    title: "Kano vs Prism",
    description: `National Championship UK <br> Round 3 <br> Liam Canning <br> vs <br> Matthew Foulkes.`,
    hash: "XgpmQg_8aEY",
    game: "XgpmQg_8aEY?si=-PT2ygXJWQ9UroeC&amp;start=9514",
    hero: "kano prism",
    class: "national"
  },
  {
    title: "Nuu vs Prism",
    description: `National Championship UK <br> Round 10 <br> Violet Burn <br> vs <br> Matthew Foulkes.`,
    hash: "4Xq2gpGoZP8",
    game: "4Xq2gpGoZP8?si=YRqt94A8kK_wNnck&amp;start=995",
    hero: "nuu prism",
    class: "national"
  },
  {
    title: "Kano vs Zen",
    description: `National Championship UK <br> Round 11 <br> Noah Hicks <br> vs <br> Emad Kashy.`,
    hash: "4Xq2gpGoZP8",
    game: "4Xq2gpGoZP8?si=YRqt94A8kK_wNnck&amp;start=4314",
    hero: "kano zen",
    class: "national"
  },
  {
    title: "Zen vs Zen",
    description: `National Championship UK <br> Round 12 <br> Isaac Murray <br> vs <br> George Rodger.`,
    hash: "4Xq2gpGoZP8",
    game: "4Xq2gpGoZP8?si=YRqt94A8kK_wNnck&amp;start=8513",
    hero: "zen",
    class: "national"
  },
  {
    title: "Riptide vs Prism",
    description: `National Championship UK <br> Top 8 <br> Andrew Rayner <br> vs <br> Jack Mountford.`,
    hash: "4Xq2gpGoZP8",
    game: "4Xq2gpGoZP8?si=YRqt94A8kK_wNnck&amp;start=16256",
    hero: "riptide prism",
    class: "national"
  },
  {
    title: "Riptide vs Dash",
    description: `National Championship UK <br> Top 4 <br> Andrew Rayner <br> vs <br> Anton Cid Mejias.`,
    hash: "4Xq2gpGoZP8",
    game: "4Xq2gpGoZP8?si=YRqt94A8kK_wNnck&amp;start=20676",
    hero: "riptide dash",
    class: "national"
  },
  {
    title: "Zen vs Dash",
    description: `National Championship UK <br> Finals <br> Emad Kashy <br> vs <br> Anton Cid Mejias.`,
    hash: "4Xq2gpGoZP8",
    game: "4Xq2gpGoZP8?si=YRqt94A8kK_wNnck&amp;start=24964",
    hero: "zen dash",
    class: "national"
  },
  //------------------ Nationals USA ----------------------------------//
  {
    title: "Zen vs Enigma",
    description: `National Championship USA <br> Round 1 <br> Charles Dunn <br> vs <br> Pheano Black.`,
    hash: "AFxsqO0xg7w",
    game: "AFxsqO0xg7w?si=mPVY5dOjHKXgw-dp&amp;start=777",
    hero: "zen enigma",
    class: "national"
  },
  {
    title: "Dash I/O vs Levia",
    description: `National Championship USA <br> Round 2 <br> Mara Faris <br> vs <br> Michael Rutkowski.`,
    hash: "AFxsqO0xg7w",
    game: "AFxsqO0xg7w?si=mPVY5dOjHKXgw-dp&amp;start=4695",
    hero: "dashIo levia",
    class: "national"
  },
  {
    title: "Riptide vs Dorinthea",
    description: `National Championship USA <br> Round 2 <br> Gabriel Torres <br> vs <br> Joshua Lau.`,
    hash: "AFxsqO0xg7w",
    game: "AFxsqO0xg7w?si=mPVY5dOjHKXgw-dp&amp;start=6368",
    hero: "riptide dorinthea",
    class: "national"
  },
  {
    title: "Nuu vs Zen",
    description: `National Championship USA <br> Round 3 <br> Noah Geiger <br> vs <br> Pat Eshguy.`,
    hash: "AFxsqO0xg7w",
    game: "AFxsqO0xg7w?si=mPVY5dOjHKXgw-dp&amp;start=9279",
    hero: "zen nuu",
    class: "national"
  },
  {
    title: "Boltyn vs Maxx",
    description: `National Championship USA <br> Round 4 <br> Alex Tyler <br> vs <br> Justin Fryar.`,
    hash: "AFxsqO0xg7w",
    game: "AFxsqO0xg7w?si=mPVY5dOjHKXgw-dp&amp;start=13149",
    hero: "boltyn maxx",
    class: "national"
  },
  {
    title: "Levia vs Kayo",
    description: `National Championship USA <br> Round 4 <br> Chris Iaali <br> vs <br> Bryan Knecht.`,
    hash: "AFxsqO0xg7w",
    game: "AFxsqO0xg7w?si=mPVY5dOjHKXgw-dp&amp;start=14648",
    hero: "levia kayo",
    class: "national"
  },
  {
    title: "Kayo vs Enigma",
    description: `National Championship USA <br> Round 11 <br> Andrew Rothermel <br> vs <br> Aaron Grace.`,
    hash: "JhEHwVred3M",
    game: "JhEHwVred3M?si=kV4xLVxoCI4Muw5l&amp;start=10748",
    hero: "enigma kayo",
    class: "national"
  },
  {
    title: "Boltyn vs Zen",
    description: `National Championship USA <br> Round 11 <br> Reese Toomre <br> vs <br> Jacob Shaker.`,
    hash: "JhEHwVred3M",
    game: "JhEHwVred3M?si=kV4xLVxoCI4Muw5l&amp;start=13201",
    hero: "boltyn zen",
    class: "national"
  },
  {
    title: "Kayo vs Enigma",
    description: `National Championship USA <br> Round 11 <br> Andrew Rothermel <br> vs <br> Aaron Grace.`,
    hash: "JhEHwVred3M",
    game: "JhEHwVred3M?si=kV4xLVxoCI4Muw5l&amp;start=10748",
    hero: "enigma kayo",
    class: "national"
  },
  {
    title: "Azalea vs Zen",
    description: `National Championship USA <br> Round 12 <br> Isaac Brooks <br> vs <br> Michael Dalton.`,
    hash: "JhEHwVred3M",
    game: "JhEHwVred3M?si=kV4xLVxoCI4Muw5l&amp;start=14859",
    hero: "azalea zen",
    class: "national"
  },
  {
    title: "Boltyn vs Kano",
    description: `National Championship USA <br> Round 13 <br> Reese Toomre <br> vs <br> Majin Bae.`,
    hash: "JhEHwVred3M",
    game: "JhEHwVred3M?si=kV4xLVxoCI4Muw5l&amp;start=18615",
    hero: "boltyn kano",
    class: "national"
  },
  {
    title: "Azalea vs Enigma",
    description: `National Championship USA <br> Round 13 <br> Will Bradshaw <br> vs <br> Nathan Lapham.`,
    hash: "JhEHwVred3M",
    game: "JhEHwVred3M?si=kV4xLVxoCI4Muw5l&amp;start=20702",
    hero: "enigma azalea",
    class: "national"
  },
  {
    title: "Kayo vs Enigma",
    description: `National Championship USA <br> Round 14 <br> Andrew Rothermel <br> vs <br> Brian Lorenz.`,
    hash: "JhEHwVred3M",
    game: "JhEHwVred3M?si=kV4xLVxoCI4Muw5l&amp;start=23098",
    hero: "enigma kayo",
    class: "national"
  },
  {
    title: "Zen vs Boltyn",
    description: `National Championship USA <br> Round 14 <br> Naib Mobassir <br> vs <br> Reese Toomre.`,
    hash: "JhEHwVred3M",
    game: "JhEHwVred3M?si=kV4xLVxoCI4Muw5l&amp;start=25085",
    hero: "zen boltyn",
    class: "national"
  },
  {
    title: "Enigma vs Prism",
    description: `National Championship USA <br> Top 8 <br> Aaron Grace <br> vs <br> Austin Somers.`,
    hash: "TfUyZeNo73E",
    game: "TfUyZeNo73E?si=SzolxzqTkmt0B5je&amp;start=928",
    hero: "enigma prism",
    class: "national"
  },
  {
    title: "Zen vs Zen",
    description: `National Championship USA <br> Top 8 <br> Jacob Shaker <br> vs <br> Michael Dalton.`,
    hash: "TfUyZeNo73E",
    game: "TfUyZeNo73E?si=SzolxzqTkmt0B5je&amp;start=3419",
    hero: "zen",
    class: "national"
  },
  {
    title: "Azalea vs Kayo",
    description: `National Championship USA <br> Top 8 <br> William Bradshaw <br> vs <br> Andrew Rothermel.`,
    hash: "TfUyZeNo73E",
    game: "TfUyZeNo73E?si=SzolxzqTkmt0B5je&amp;start=6434",
    hero: "azalea kayo",
    class: "national"
  },
  {
    title: "Zen vs Enigma",
    description: `National Championship USA <br> Top 8 <br> Evan Herndon <br> vs <br> Nathan Lapham.`,
    hash: "TfUyZeNo73E",
    game: "TfUyZeNo73E?si=SzolxzqTkmt0B5je&amp;start=9488",
    hero: "zen enigma",
    class: "national"
  },
  {
    title: "Enigma vs Kayo",
    description: `National Championship USA <br> Top 4 <br> Aaron Grace <br> vs <br> Andrew Rothermel.`,
    hash: "TfUyZeNo73E",
    game: "TfUyZeNo73E?si=SzolxzqTkmt0B5je&amp;start=12042",
    hero: "enigma kayo",
    class: "national"
  },
  {
    title: "Zen vs Zen",
    description: `National Championship USA <br> Top 4 <br> Evan Herndon <br> vs <br> Michael Dalton.`,
    hash: "TfUyZeNo73E",
    game: "TfUyZeNo73E?si=SzolxzqTkmt0B5je&amp;start=15979",
    hero: "zen",
    class: "national"
  },
  {
    title: "Zen vs Kayo",
    description: `National Championship USA <br> Final <br> Evan Herdon <br> vs <br> Andrew Rothermel.`,
    hash: "TfUyZeNo73E",
    game: "TfUyZeNo73E?si=SzolxzqTkmt0B5je&amp;start=18807",
    hero: "zen kayo",
    class: "national"
  },
  
  //------------------ BH SINGAPORE -------------------------------//
  {
    title: "Enigma vs Enigma",
    description: `Battle Hardned Singapore <br> Round 1 <br> Elliot Tan <br> vs <br> Kai Yang.`,
    hash: "QyWROlI68SM",
    game: "QyWROlI68SM?si=pXpCMbYKgP_fHsxY&amp;start=565",
    hero: "enigma",
    class: "battlehardned"
  },
  {
    title: "Levia vs Zen",
    description: `Battle Hardned Singapore <br> Round 2 <br> Jian Han <br> vs <br> Nicholas Loh.`,
    hash: "QyWROlI68SM",
    game: "QyWROlI68SM?si=pXpCMbYKgP_fHsxY&amp;start=4575",
    hero: "levia zen",
    class: "battlehardned"
  },
  {
    title: "Kayo vs Maxx",
    description: `Battle Hardned Singapore <br> Round 3 <br> Jia Zheng <br> vs <br> Esmond Heng.`,
    hash: "QyWROlI68SM",
    game: "QyWROlI68SM?si=pXpCMbYKgP_fHsxY&amp;start=8081",
    hero: "kayo maxx",
    class: "battlehardned"
  },
  {
    title: "Betsy vs Kayo",
    description: `Battle Hardned Singapore <br> Round 4 <br> Teo Joo Eng <br> vs <br> Ho Wei Jie.`,
    hash: "QyWROlI68SM",
    game: "QyWROlI68SM?si=pXpCMbYKgP_fHsxY&amp;start=11721",
    hero: "betsy kayo",
    class: "battlehardned"
  },
  {
    title: "Nuu vs Dorinthea",
    description: `Battle Hardned Singapore <br> Round 5 <br> James Lim <br> vs <br> Richard Anthony.`,
    hash: "QyWROlI68SM",
    game: "QyWROlI68SM?si=pXpCMbYKgP_fHsxY&amp;start=17299",
    hero: "nuu dorinthea",
    class: "battlehardned"
  },
  {
    title: "Levia vs Betsy",
    description: `Battle Hardned Singapore <br> Round 6 <br> Denny Sunario <br> vs <br> Tee Joo Eng.`,
    hash: "QyWROlI68SM",
    game: "QyWROlI68SM?si=pXpCMbYKgP_fHsxY&amp;start=21285",
    hero: "levia betsy",
    class: "battlehardned"
  },
  {
    title: "Uzuri vs Azalea",
    description: `Battle Hardned Singapore <br> Round 7 <br> Wiroon Juesathainrat <br> vs <br> Jian Wei Tee.`,
    hash: "QyWROlI68SM",
    game: "QyWROlI68SM?si=pXpCMbYKgP_fHsxY&amp;start=25091",
    hero: "uzuri azalea",
    class: "battlehardned"
  },
  {
    title: "Dash vs Victor",
    description: `Battle Hardned Singapore <br> Top 8 <br> Kah Deng Fu <br> vs <br> Yeo Xie Hang.`,
    hash: "QyWROlI68SM",
    game: "QyWROlI68SM?si=pXpCMbYKgP_fHsxY&amp;start=29855",
    hero: "dash victor",
    class: "battlehardned"
  },
  {
    title: "Zen vs Dorinthea",
    description: `Battle Hardned Singapore <br> Top 4 <br> Teo Ivan <br> vs <br> Lee Gabriel.`,
    hash: "QyWROlI68SM",
    game: "QyWROlI68SM?si=pXpCMbYKgP_fHsxY&amp;start=32926",
    hero: "zen dorinthea",
    class: "battlehardned"
  },
  {
    title: "Zen vs Dash",
    description: `Battle Hardned Singapore <br> Finals <br> Teo Ivan <br> vs <br> Kong Bryan.`,
    hash: "QyWROlI68SM",
    game: "QyWROlI68SM?si=pXpCMbYKgP_fHsxY&amp;start=35471",
    hero: "zen dash",
    class: "battlehardned"
  },
  //------------------ PRO QUEST MONTREAL -------------------------//
  {
    title: "Kano vs Enigma",
    description: `Pro Quest Montreal <br> Round 1 <br> Benson Lai <br> vs <br> Noah Clark.`,
    hash: "bVuJItQe5yg",
    game: "bVuJItQe5yg?si=dY3LWOb8ibHgkvve&amp;start=209",
    hero: "kano enigma",
    class: "pq"
  },
  {
    title: "Enigma vs Riptide",
    description: `Pro Quest Montreal <br> Round 1 <br> David Trinh <br> vs <br> Eric Bitmanis.`,
    hash: "bVuJItQe5yg",
    game: "bVuJItQe5yg?si=dY3LWOb8ibHgkvve&amp;start=2502",
    hero: "riptide enigma",
    class: "pq"
  },
  {
    title: "Levia vs Nuu",
    description: `Pro Quest Montreal <br> Round 2 <br> Kelsie Tandubuana <br> vs <br> Joshua Miller.`,
    hash: "bVuJItQe5yg",
    game: "bVuJItQe5yg?si=dY3LWOb8ibHgkvve&amp;start=4129",
    hero: "levia nuu",
    class: "pq"
  },
  {
    title: "Prism vs Kayo",
    description: `Pro Quest Montreal <br> Round 2 <br> Pierre Nicholas Perrin <br> vs <br> Chris Jones.`,
    hash: "bVuJItQe5yg",
    game: "bVuJItQe5yg?si=dY3LWOb8ibHgkvve&amp;start=6580",
    hero: "prism kayo",
    class: "pq"
  },
  {
    title: "Zen vs Vynnset",
    description: `Pro Quest Montreal <br> Round 3 <br> Alexandre Givern <br> vs <br> Niko Bonnay.`,
    hash: "bVuJItQe5yg",
    game: "bVuJItQe5yg?si=dY3LWOb8ibHgkvve&amp;start=8289",
    hero: "zen vynnset",
    class: "pq"
  },
  {
    title: "Boltyn vs Prism",
    description: `Pro Quest Montreal <br> Round 3 <br> Michael Metallo <br> vs <br> Pheano Black.`,
    hash: "bVuJItQe5yg",
    game: "bVuJItQe5yg?si=dY3LWOb8ibHgkvve&amp;start=10195",
    hero: "boltyn prism",
    class: "pq"
  },
  {
    title: "Zen vs Bravo",
    description: `Pro Quest Montreal <br> Round 4 <br> Matt Muus <br> vs <br> Jonathan Lemire.`,
    hash: "bVuJItQe5yg",
    game: "bVuJItQe5yg?si=dY3LWOb8ibHgkvve&amp;start=12093",
    hero: "zen bravo",
    class: "pq"
  },
  {
    title: "Katsu vs Victor",
    description: `Pro Quest Montreal <br> Round 5 <br> Thomas Zimmer <br> vs <br> Ben Quantrell.`,
    hash: "bVuJItQe5yg",
    game: "bVuJItQe5yg?si=dY3LWOb8ibHgkvve&amp;start=16014",
    hero: "katsu victor",
    class: "pq"
  },
  {
    title: "Riptide vs Prism",
    description: `Pro Quest Montreal <br> Round 5 <br> Adam Schoof <br> vs <br> Basil Bloomer.`,
    hash: "bVuJItQe5yg",
    game: "bVuJItQe5yg?si=dY3LWOb8ibHgkvve&amp;start=17894",
    hero: "riptide prism",
    class: "pq"
  },
  {
    title: "Nuu vs Katsu",
    description: `Pro Quest Montreal <br> Round 6 <br> Daniel Dreisziger <br> vs <br> Kevin Constantineau.`,
    hash: "bVuJItQe5yg",
    game: "bVuJItQe5yg?si=dY3LWOb8ibHgkvve&amp;start=19865",
    hero: "nuu katsu",
    class: "pq"
  },
  {
    title: "Kano vs Vynnset",
    description: `Pro Quest Montreal <br> Round 7 <br> Yan Garito <br> vs <br> Niko Bonnay.`,
    hash: "bVuJItQe5yg",
    game: "bVuJItQe5yg?si=dY3LWOb8ibHgkvve&amp;start=23820",
    hero: "kano vynnset",
    class: "pq"
  },
  {
    title: "Nuu vs Enigma",
    description: `Pro Quest Montreal <br> Round 7 <br> Daniel Dreisziger <br> vs <br> Noah Clark.`,
    hash: "bVuJItQe5yg",
    game: "bVuJItQe5yg?si=dY3LWOb8ibHgkvve&amp;start=25396",
    hero: "nuu enigma",
    class: "pq"
  },
  {
    title: "Prism vs Enigma",
    description: `Pro Quest Montreal <br> Top 8 <br> Basil Bloomer <br> vs <br> Noah Clark.`,
    hash: "bVuJItQe5yg",
    game: "bVuJItQe5yg?si=dY3LWOb8ibHgkvve&amp;start=31909",
    hero: "prism enigma",
    class: "pq"
  },
  {
    title: "Nuu vs Enigma",
    description: `Pro Quest Montreal <br> Top 4 <br> Daniel Deisziger <br> vs <br> Noah Clark.`,
    hash: "bVuJItQe5yg",
    game: "bVuJItQe5yg?si=dY3LWOb8ibHgkvve&amp;start=34708",
    hero: "nuu enigma",
    class: "pq"
  },
  {
    title: "Kano vs Katsu",
    description: `Pro Quest Montreal <br> Top 4 <br> Yan Garito <br> vs <br> Thomas Zimmer.`,
    hash: "bVuJItQe5yg",
    game: "bVuJItQe5yg?si=dY3LWOb8ibHgkvve&amp;start=36954",
    hero: "kano katsu",
    class: "pq"
  },
  {
    title: "Katsu vs Enigma",
    description: `Pro Quest Montreal <br> Finals <br> Thomas Zimmer <br> vs <br> Noah Clark.`,
    hash: "bVuJItQe5yg",
    game: "bVuJItQe5yg?si=dY3LWOb8ibHgkvve&amp;start=38181",
    hero: "enigma katsu",
    class: "pq"
  },
  //------------------ AGE MAY ---------------------------//
  {
    title: "Riptide vs Kassai",
    description: `Age Open May <br> Round 1 <br> Taylor Stradley <br> vs <br> Chris Iaali.`,
    hash: "Ae2L66Ra0g4",
    game: "Ae2L66Ra0g4?si=ZqvgwL0eN3TaXprK&amp;start=2510",
    hero: "riptide kassai",
    class: "age"
  },
  {
    title: "Kayo vs Victor",
    description: `Age Open May <br> Round 2 <br> Peter Buddensiek <br> vs <br> Dalton Cameron.`,
    hash: "Ae2L66Ra0g4",
    game: "Ae2L66Ra0g4?si=ZqvgwL0eN3TaXprK&amp;start=6587",
    hero: "kayo victor",
    class: "age"
  },
  {
    title: "Azalea vs Rhinar",
    description: `Age Open May <br> Round 3 <br> John Zapata <br> vs <br> John Kim.`,
    hash: "Ae2L66Ra0g4",
    game: "Ae2L66Ra0g4?si=ZqvgwL0eN3TaXprK&amp;start=10265",
    hero: "azalea rhinar",
    class: "age"
  },
  {
    title: "Dash vs Kano",
    description: `Age Open May <br> Round 4 <br> Anthony Pham <br> vs <br> Eric Dauernheim.`,
    hash: "Ae2L66Ra0g4",
    game: "Ae2L66Ra0g4?si=ZqvgwL0eN3TaXprK&amp;start=13630",
    hero: "dash kano",
    class: "age"
  },
  {
    title: "Azalea vs Kano",
    description: `Age Open May <br> Round 5 <br> Bryce Platz <br> vs <br> Ryan Brown.`,
    hash: "Ae2L66Ra0g4",
    game: "Ae2L66Ra0g4?si=ZqvgwL0eN3TaXprK&amp;start=17333",
    hero: "azalea kano",
    class: "age"
  },
  {
    title: "Dorinthea vs Dash",
    description: `Age Open May <br> Round 6 <br> Charles Dunn <br> vs <br> Anthony Plam.`,
    hash: "Ae2L66Ra0g4",
    game: "Ae2L66Ra0g4?si=ZqvgwL0eN3TaXprK&amp;start=20892",
    hero: "dorinthea dash",
    class: "age"
  },
  {
    title: "Kassai vs Kayo",
    description: `Age Open May <br> Top 8 <br> Chris Iaali <br> vs <br> Peter Buddensiek.`,
    hash: "0LHS3xb2ysk",
    game: "0LHS3xb2ysk?si=8q_4n2Sh4Bheripi&amp;start=468",
    hero: "kassai kayo",
    class: "age"
  },
  {
    title: "Dorinthea vs Rhinar",
    description: `Age Open May <br> Top 4 <br> Charles Dunn <br> vs <br> Andrew Rudin.`,
    hash: "0LHS3xb2ysk",
    game: "0LHS3xb2ysk?si=8q_4n2Sh4Bheripi&amp;start=3437",
    hero: "dorinthea rhinar",
    class: "age"
  },
  {
    title: "Dorinthea vs Kano",
    description: `Age Open May <br> Finals <br> Charles Dunn <br> vs <br> Eric Dauernheim.`,
    hash: "0LHS3xb2ysk",
    game: "0LHS3xb2ysk?si=8q_4n2Sh4Bheripi&amp;start=6977",
    hero: "dorinthea kano",
    class: "age"
  },

  //------------------ Calling Warsaw --------------------//
  {
    title: "Azalea vs Kayo",
    description: `Calling Warsaw <br> Round 1 <br> Paul Dohrer <br> vs <br> Arthur Trehet.`,
    hash: "siSJv4d5Ox0",
    game: "siSJv4d5Ox0?si=l87amdJjhXccE30l&amp;start=748",
    hero: "azalea kayo",
    class: "calling"
  },
  {
    title: "Riptide vs Kayo",
    description: `Calling Warsaw <br> Round 2 <br> Daniele Frattarelli <br> vs <br> Francesco Giorgio.`,
    hash: "siSJv4d5Ox0",
    game: "siSJv4d5Ox0?si=l87amdJjhXccE30l&amp;start=4572",
    hero: "riptide kayo",
    class: "calling"
  },
  {
    title: "Boltyn vs Victor",
    description: `Calling Warsaw <br> Round 3 <br> Gianluigi Lia <br> vs <br> Wojciech Rucinski.`,
    hash: "siSJv4d5Ox0",
    game: "siSJv4d5Ox0?si=l87amdJjhXccE30l&amp;start=8208",
    hero: "boltyn victor",
    class: "calling"
  },
  {
    title: "Uzuri vs Azalea",
    description: `Calling Warsaw <br> Round 4 <br> Christopher Bizau <br> vs <br> Yorgos Samaras.`,
    hash: "siSJv4d5Ox0",
    game: "siSJv4d5Ox0?si=l87amdJjhXccE30l&amp;start=12262",
    hero: "azalea uzuri",
    class: "calling"
  },
  {
    title: "Levia vs Prism",
    description: `Calling Warsaw <br> Round 5 <br> Laurin Niehues <br> vs <br> Sammy Weckx.`,
    hash: "siSJv4d5Ox0",
    game: "siSJv4d5Ox0?si=l87amdJjhXccE30l&amp;start=16050",
    hero: "levia prism",
    class: "calling"
  },
  {
    title: "Kayo vs Dash I/O",
    description: `Calling Warsaw <br> Round 6 <br> Yong Jin Jang <br> vs <br> Thomas Preyer.`,
    hash: "siSJv4d5Ox0",
    game: "siSJv4d5Ox0?si=l87amdJjhXccE30l&amp;start=20067",
    hero: "dashIo kayo",
    class: "calling"
  },
  {
    title: "Kassai vs Bravo",
    description: `Calling Warsaw <br> Round 7 <br> Suciu Andrei <br> vs <br> Luka Kramaric.`,
    hash: "siSJv4d5Ox0",
    game: "siSJv4d5Ox0?si=l87amdJjhXccE30l&amp;start=23970",
    hero: "kassai bravo",
    class: "calling"
  },
  {
    title: "Azalea vs Kayo",
    description: `Calling Warsaw <br> Round 8 <br> Brodie Spurlock <br> vs <br> Arthur Trehet.`,
    hash: "Z17_9Ce-8vs",
    game: "Z17_9Ce-8vs?si=9MfOXdTRARaNbCpJ&amp;start=998",
    hero: "azalea kayo",
    class: "calling"
  },
  {
    title: "Dash vs Kassai",
    description: `Calling Warsaw <br> Round 9 <br> Alex Chitu <br> vs <br> Jacob Clements.`,
    hash: "Z17_9Ce-8vs",
    game: "Z17_9Ce-8vs?si=9MfOXdTRARaNbCpJ&amp;start=4995",
    hero: "dash kassai",
    class: "calling"
  },
  {
    title: "Victor vs Victor",
    description: `Calling Warsaw <br> Round 10 <br> Alex Chitu <br> vs <br> Jacob Clements.`,
    hash: "Z17_9Ce-8vs",
    game: "Z17_9Ce-8vs?si=9MfOXdTRARaNbCpJ&amp;start=8716",
    hero: "victor",
    class: "calling"
  },
  {
    title: "Kano vs Azalea",
    description: `Calling Warsaw <br> Round 11 <br> Jan Kucera <br> vs <br> Yorgos Samaras.`,
    hash: "Z17_9Ce-8vs",
    game: "Z17_9Ce-8vs?si=9MfOXdTRARaNbCpJ&amp;start=12892",
    hero: "kano azalea",
    class: "calling"
  },
  {
    title: "Azalea vs Azalea",
    description: `Calling Warsaw <br> Round 12 <br> Michael Feng <br> vs <br> Brodie Spurlock.`,
    hash: "Z17_9Ce-8vs",
    game: "Z17_9Ce-8vs?si=9MfOXdTRARaNbCpJ&amp;start=16730",
    hero: "azalea",
    class: "calling"
  },
  {
    title: "Kayo vs Dash",
    description: `Calling Warsaw <br> Top 8 <br> Kanaris Bounas <br> vs <br> Alex Chitu.`,
    hash: "Z17_9Ce-8vs",
    game: "Z17_9Ce-8vs?si=9MfOXdTRARaNbCpJ&amp;start=21324",
    hero: "kayo dash",
    class: "calling"
  },
  {
    title: "Kayo vs Kano",
    description: `Calling Warsaw <br> Top 4 <br> Kanaris Bounas <br> vs <br> Jan Kucera.`,
    hash: "Z17_9Ce-8vs",
    game: "Z17_9Ce-8vs?si=9MfOXdTRARaNbCpJ&amp;start=23959",
    hero: "kayo kano",
    class: "calling"
  },
  {
    title: "Kano vs Boltyn",
    description: `Calling Warsaw <br> Top 4 <br> Vincent Weinzierl <br> vs <br> GianLuigi Lia.`,
    hash: "Z17_9Ce-8vs",
    game: "Z17_9Ce-8vs?si=9MfOXdTRARaNbCpJ&amp;start=26355",
    hero: "kano boltyn",
    class: "calling"
  },
  {
    title: "Kano vs Kayo",
    description: `Calling Warsaw <br> Finals <br> Vincent Weinzierl <br> vs <br> Kanaris Bounas.`,
    hash: "Z17_9Ce-8vs",
    game: "Z17_9Ce-8vs?si=9MfOXdTRARaNbCpJ&amp;start=31357",
    hero: "kano kayo",
    class: "calling"
  },
   //----------------- Battle Hardened Atlanta ----------//
  {
    title: "Azalea vs Kayo",
    description: `Battle Hardened Atlanta<br> Round 1 <br> Will Bradshaw <br> vs <br> Josh Byers.`,
    hash: "CWNkmUXe-Ho",
    game: "CWNkmUXe-Ho?si=krGrW3jwkdRJxkPt&amp;start=927",
    hero: "azalea kayo",
    class: "battlehardned"
  },
  {
    title: "Victor vs Dromai",
    description: `Battle Hardened Atlanta<br> Round 2 <br> Nathan Crawford <br> vs <br> Davis Chancey.`,
    hash: "CWNkmUXe-Ho",
    game: "CWNkmUXe-Ho?si=krGrW3jwkdRJxkPt&amp;start=4609",
    hero: "victor dromai",
    class: "battlehardned"
  },
  {
    title: "Katsu vs Azalea",
    description: `Battle Hardened Atlanta<br> Round 3 <br> Sebastiano Cavallo <br> vs <br> Jason Irons.`,
    hash: "CWNkmUXe-Ho",
    game: "CWNkmUXe-Ho?si=krGrW3jwkdRJxkPt&amp;start=8590",
    hero: "azalea katsu",
    class: "battlehardned"
  },
  {
    title: "Uzuri vs Dash I/O",
    description: `Battle Hardened Atlanta<br> Round 3 <br> Evan Ford <br> vs <br> Nate F.`,
    hash: "CWNkmUXe-Ho",
    game: "CWNkmUXe-Ho?si=krGrW3jwkdRJxkPt&amp;start=11073",
    hero: "uzuri dashIo",
    class: "battlehardned"
  },
  {
    title: "Victor vs Uzuri",
    description: `Battle Hardened Atlanta<br> Round 4 <br> Nathan Crawford <br> vs <br> Ning Liu.`,
    hash: "CWNkmUXe-Ho",
    game: "CWNkmUXe-Ho?si=krGrW3jwkdRJxkPt&amp;start==13028",
    hero: "victor uzuri",
    class: "battlehardned"
  },
  {
    title: "Victor vs Riptide",
    description: `Battle Hardened Atlanta<br> Round 5 <br> Ed Knight <br> vs <br> Scott Sharpe.`,
    hash: "CWNkmUXe-Ho",
    game: "CWNkmUXe-Ho?si=krGrW3jwkdRJxkPt&amp;start=17084",
    hero: "victor riptide",
    class: "battlehardned"
  },
  {
    title: "Levia vs Dromai",
    description: `Battle Hardened Atlanta<br> Round 6 <br> Joel Thompson <br> vs <br> Gui Cohen.`,
    hash: "CWNkmUXe-Ho",
    game: "CWNkmUXe-Ho?si=krGrW3jwkdRJxkPt&amp;start=20983",
    hero: "levia dromai",
    class: "battlehardned"
  },
  {
    title: "Azalea vs Dash I/O",
    description: `Battle Hardened Atlanta<br> Round 7 <br> Brodie Spurlock <br> vs <br> Evan Herndon.`,
    hash: "CWNkmUXe-Ho",
    game: "CWNkmUXe-Ho?si=krGrW3jwkdRJxkPt&amp;start=25057",
    hero: "azalea dashIo",
    class: "battlehardned"
  },
  {
    title: "Dromai vs Dromai",
    description: `Battle Hardened Atlanta<br> Round 7 <br> Mara Faris <br> vs <br> Gui Cohen.`,
    hash: "CWNkmUXe-Ho",
    game: "CWNkmUXe-Ho?si=krGrW3jwkdRJxkPt&amp;start=26569",
    hero: "dromai",
    class: "battlehardned"
  },
  {
    title: "Levia vs Kassai",
    description: `Battle Hardened Atlanta<br> Round 8 <br> Joel Thompson <br> vs <br> Jose Rodriguez.`,
    hash: "CWNkmUXe-Ho",
    game: "CWNkmUXe-Ho?si=krGrW3jwkdRJxkPt&amp;start=28745",
    hero: "levia kassai",
    class: "battlehardned"
  },
  {
    title: "Prism vs Dromai",
    description: `Battle Hardened Atlanta<br> Top 8 <br> Andrew Cook <br> vs <br> Mara Faris.`,
    hash: "CWNkmUXe-Ho",
    game: "CWNkmUXe-Ho?si=krGrW3jwkdRJxkPt&amp;start=33805",
    hero: "prismAoS dromai",
    class: "battlehardned"
  },
  {
    title: "Prism vs Dromai",
    description: `Battle Hardened Atlanta<br> Top 4 <br> Andrew Cook <br> vs <br> Jeremy Chen.`,
    hash: "CWNkmUXe-Ho",
    game: "CWNkmUXe-Ho?si=krGrW3jwkdRJxkPt&amp;start=37463",
    hero: "prismAoS dromai",
    class: "battlehardned"
  },
  {
    title: "Azalea vs Dromai",
    description: `Battle Hardened Atlanta<br> Finals <br> Brodie Spurlock <br> vs <br> Jeremy Chen.`,
    hash: "CWNkmUXe-Ho",
    game: "CWNkmUXe-Ho?si=krGrW3jwkdRJxkPt&amp;start=40935",
    hero: "azalea dromai",
    class: "battlehardned"
  },
  //------------------ Age Abril -----------------------//
  {
    title: "Victor vs Victor",
    description: `Age Open April <br> Round 1 <br> Henry Gomez <br> vs <br> Chris Iaali.`,
    hash: "ZMpe1vLK1fc",
    game: "ZMpe1vLK1fc?si=iIvLhim90tHaTTR6&amp;start=2635",
    hero: "victor",
    class: "age"
  }, 
  {
    title: "Victor vs Dash I/O",
    description: `Age Open April <br> Round 2 <br> Todd Katow <br> vs <br> Taylor Horspool.`,
    hash: "ZMpe1vLK1fc",
    game: "ZMpe1vLK1fc?si=iIvLhim90tHaTTR6&amp;start=6147",
    hero: "victor dashIo",
    class: "age"
  },
  {
    title: "Dromai vs Dorinthea",
    description: `Age Open April <br> Round 3 <br> Chris Stidger <br> vs <br> Charles Dunn.`,
    hash: "ZMpe1vLK1fc",
    game: "ZMpe1vLK1fc?si=iIvLhim90tHaTTR6&amp;start=9940",
    hero: "dromai dorinthea",
    class: "age"
  },
  {
    title: "Kassai vs Dorinthea",
    description: `Age Open April <br> Round 4 <br> Colin Eriksen <br> vs <br> Aria How.`,
    hash: "ZMpe1vLK1fc",
    game: "ZMpe1vLK1fc?si=iIvLhim90tHaTTR6&amp;start=13795",
    hero: "kassai dorinthea",
    class: "age"
  },
  {
    title: "Kano vs Dromai",
    description: `Age Open April <br> Round 5 <br> Ryan Brown <br> vs <br> Patrick Rubakava.`,
    hash: "ZMpe1vLK1fc",
    game: "ZMpe1vLK1fc?si=iIvLhim90tHaTTR6&amp;start=17659",
    hero: "kano dromai",
    class: "age"
  },
  {
    title: "Katsu vs Kayo",
    description: `Age Open April <br> Round 6 <br> Fuzzy Delp <br> vs <br> Evan Bridges.`,
    hash: "ZMpe1vLK1fc",
    game: "ZMpe1vLK1fc?si=iIvLhim90tHaTTR6&amp;start=21171",
    hero: "katsu kayo",
    class: "age"
  },
  {
    title: "Dash vs Victor",
    description: `Age Open April <br> Top 8 <br> Anthony Pham <br> vs <br> Chris Iaali.`,
    hash: "ccxFulwlQLg",
    game: "ccxFulwlQLg?si=qWZDCb4dbM-UogKh&amp;start=2687",
    hero: "dash victor",
    class: "age"
  },
  {
    title: "Bravo vs Victor",
    description: `Age Open April <br> Top 4 <br> Alan Hoang <br> vs <br> Chris Iaali.`,
    hash: "ccxFulwlQLg",
    game: "ccxFulwlQLg?si=qWZDCb4dbM-UogKh&amp;start=5743",
    hero: "bravo victor",
    class: "age"
  },
  {
    title: "Dash I/O vs Victor",
    description: `Age Open April <br> Finals <br> Tyler Horspool <br> vs <br> Chris Iaali.`,
    hash: "ccxFulwlQLg",
    game: "ccxFulwlQLg?si=qWZDCb4dbM-UogKh&amp;start=10403",
    hero: "dashIo victor",
    class: "age"
  },    
  //------------------ Calling Phuket ------------------//
  {
    title: "Kassai vs Dorinthea",
    description: `Calling Phuket <br> Round 1 <br> Hilmi Halim <br> vs <br> Cyk Lionel.`,
    hash: "UBjTghmpgQE",
    game: "UBjTghmpgQE?si=V6WjpvEeAKgY9Zon&amp;start=746",
    hero: "kassai dorinthea",
    class: "calling"
  },
  {
    title: "Dash vs Katsu",
    description: `Calling Phuket <br> Round 2 <br> Tobias Schmiedberg <br> vs <br> Prempracha S.`,
    hash: "UBjTghmpgQE",
    game: "UBjTghmpgQE?si=V6WjpvEeAKgY9Zon&amp;start=4782",
    hero: "katsu dash",
    class: "calling"
  },
  {
    title: "Kayo vs Azalea",
    description: `Calling Phuket <br> Round 2 <br> Shirui Wu <br> vs <br> Jian Wei Tee.`,
    hash: "UBjTghmpgQE",
    game: "UBjTghmpgQE?si=V6WjpvEeAKgY9Zon&amp;start=6984",
    hero: "kayo azalea",
    class: "calling"
  },
  {
    title: "Prism vs Azalea",
    description: `Calling Phuket <br> Round 3 <br> Channon Puttaree <br> vs <br> Justin Cu.`,
    hash: "UBjTghmpgQE",
    game: "UBjTghmpgQE?si=V6WjpvEeAKgY9Zon&amp;start=8246",
    hero: "prismAoS azalea",
    class: "calling"
  },
  {
    title: "Victor vs Boltyn",
    description: `Calling Phuket <br> Round 4 <br> CC Fung <br> vs <br> Brandon Peh.`,
    hash: "UBjTghmpgQE",
    game: "UBjTghmpgQE?si=V6WjpvEeAKgY9Zon&amp;start=14411",
    hero: "victor boltyn",
    class: "calling"
  },
  {
    title: "Vynnset vs Kayo",
    description: `Calling Phuket <br> Round 5 <br> Hermann Yeo <br> vs <br> Soh Zheng.`,
    hash: "UBjTghmpgQE",
    game: "UBjTghmpgQE?si=V6WjpvEeAKgY9Zon&amp;start=18091",
    hero: "vynnset kayo",
    class: "calling"
  },
  {
    title: "Azalea vs Dorinthea",
    description: `Calling Phuket <br> Round 5 <br> Jian Wei <br> vs <br> Cyk Lionel.`,
    hash: "UBjTghmpgQE",
    game: "UBjTghmpgQE?si=V6WjpvEeAKgY9Zon&amp;start=19958",
    hero: "azalea dorinthea",
    class: "calling"
  },
  {
    title: "Victor vs Dromai",
    description: `Calling Phuket <br> Round 6 <br> Nova Chan <br> vs <br> Derk Hua Lee.`,
    hash: "UBjTghmpgQE",
    game: "UBjTghmpgQE?si=V6WjpvEeAKgY9Zon&amp;start=21882",
    hero: "victor dromai",
    class: "calling"
  },
  {
    title: "Prism vs Dromai",
    description: `Calling Phuket <br> Round 7 <br> Vespa <br> vs <br> Derk Hua Lee.`,
    hash: "UBjTghmpgQE",
    game: "UBjTghmpgQE?si=V6WjpvEeAKgY9Zon&amp;start=26251",
    hero: "prismAoS dromai",
    class: "calling"
  },
  {
    title: "Prism vs Azalea",
    description: `Calling Phuket <br> Round 8 <br> Vespa <br> vs <br> Jian Wei Tee.`,
    hash: "ZUHkaP5ZT60",
    game: "ZUHkaP5ZT60?si=yyefOauG_mvA1gYS&amp;start=442",
    hero: "prismAoS azalea",
    class: "calling"
  },
  {
    title: "Dromai vs Dorinthea",
    description: `Calling Phuket <br> Round 8 <br> Derk Hua <br> vs <br> Pei Tung.`,
    hash: "ZUHkaP5ZT60",
    game: "ZUHkaP5ZT60?si=yyefOauG_mvA1gYS&amp;start=2749",
    hero: "dromai dorinthea",
    class: "calling"
  },
  {
    title: "Uzuri vs Azalea",
    description: `Calling Phuket <br> Round 9 <br> Josiah Cheah <br> vs <br> Jian Wei Tee.`,
    hash: "ZUHkaP5ZT60",
    game: "ZUHkaP5ZT60?si=yyefOauG_mvA1gYS&amp;start=4369",
    hero: "uzuri azalea",
    class: "calling"
  },
  {
    title: "Kayo vs Dromai",
    description: `Calling Phuket <br> Round 10 <br> Chu Heng <br> vs <br> Derek Hua Lee.`,
    hash: "ZUHkaP5ZT60",
    game: "ZUHkaP5ZT60?si=yyefOauG_mvA1gYS&amp;start=8486",
    hero: "kayo dromai",
    class: "calling"
  },
  {
    title: "Prism vs Uzuri",
    description: `Calling Phuket <br> Round 10 <br> Vespa <br> vs <br> Josiah Malaysia.`,
    hash: "ZUHkaP5ZT60",
    game: "ZUHkaP5ZT60?si=yyefOauG_mvA1gYS&amp;start=9951",
    hero: "prismAoS uzuri",
    class: "calling"
  },
  {
    title: "Katsu vs Prism",
    description: `Calling Phuket <br> Round 11 <br> Puddin Tam <br> vs <br> Channon Puttaree.`,
    hash: "ZUHkaP5ZT60",
    game: "ZUHkaP5ZT60?si=yyefOauG_mvA1gYS&amp;start=13046",
    hero: "prismAoS katsu",
    class: "calling"
  },
  {
    title: "Katsu vs Dromai",
    description: `Calling Phuket <br> Top 8 <br> Puddin Tam <br> vs <br> Derk Hua Lee.`,
    hash: "ZUHkaP5ZT60",
    game: "ZUHkaP5ZT60?si=yyefOauG_mvA1gYS&amp;start=20921",
    hero: "katsu dromai",
    class: "calling"
  },
  {
    title: "Azalea vs Uzuri",
    description: `Calling Phuket <br> Top 8 <br> Brody Spurlock <br> vs <br> Josiah Malaysia.`,
    hash: "ZUHkaP5ZT60",
    game: "ZUHkaP5ZT60?si=yyefOauG_mvA1gYS&amp;start=22823",
    hero: "azalea uzuri",
    class: "calling"
  },
  {
    title: "Prism vs Azalea",
    description: `Calling Phuket <br> Top 4 <br> Vespa <br> vs <br> Brody Spurlock.`,
    hash: "ZUHkaP5ZT60",
    game: "ZUHkaP5ZT60?si=yyefOauG_mvA1gYS&amp;start=25183",
    hero: "prismAoS azalea",
    class: "calling"
  },
  {
    title: "Katsu vs Azalea",
    description: `Calling Phuket <br> Finals <br> Pudding Tam <br> vs <br> Brody Spurlock.`,
    hash: "ZUHkaP5ZT60",
    game: "ZUHkaP5ZT60?si=yyefOauG_mvA1gYS&amp;start=32509",
    hero: "katsu azalea",
    class: "calling"
  },

  //------------------ PT LA --------------------------//
  {
    title: "Katsu vs Kayo",
    description: `Pro Tour Los Angeles <br> Round 1 <br> Taylor Crawford <br> vs <br> Michael Feng.`,
    hash: "E6Ci-XAkGnc",
    game: "E6Ci-XAkGnc?si=aKQye8O54-Qcgh1D&amp;start=1397",
    hero: "katsu kayo",
    class: "protour"
  },
  {
    title: "Victor vs Dorinthea",
    description:
      "Pro Tour Los Angeles <br> Round 1 <br> Shing Tsang <br> vs <br> Nick Butcher.",
    hash: "E6Ci-XAkGnc",
    game: "E6Ci-XAkGnc?si=aKQye8O54-Qcgh1D&amp;start=3520",
    hero: "victor dorinthea",
    class: "protour"
  },
  {
    title: "Boltyn vs Viserai",
    description:
      "Pro Tour Los Angeles <br> Round 2 <br> Roger Bodee <br> vs <br> Jordan Long.",
    hash: "E6Ci-XAkGnc",
    game: "E6Ci-XAkGnc?si=aKQye8O54-Qcgh1D&amp;start=5496",
    hero: "boltyn viserai",
    class: "protour"
  },
  {
    title: "Levia vs Prism",
    description:
      "Pro Tour Los Angeles <br> Round 2 <br> Ilias Karamanis <br> vs <br> Rhea Adams.",
    hash: "E6Ci-XAkGnc",
    game: "E6Ci-XAkGnc?si=aKQye8O54-Qcgh1D&amp;start=7475",
    hero: "levia prismaos",
    class: "protour"
  },
  {
    title: "Kayo vs Kayo",
    description:
      "Pro Tour Los Angeles <br> Round 3 <br> Michael Hamilton <br> vs <br> Allen Lau.",
    hash: "E6Ci-XAkGnc",
    game: "E6Ci-XAkGnc?si=aKQye8O54-Qcgh1D&amp;start=9784",
    hero: "kayo",
    class: "protour"
  },
  {
    title: "Azalea vs Kano",
    description:
      "Pro Tour Los Angeles <br> Round 2 <br> Justin Cu <br> vs <br> Julian Sniffen.",
    hash: "E6Ci-XAkGnc",
    game: "E6Ci-XAkGnc?si=aKQye8O54-Qcgh1D&amp;start=12110",
    hero: "azalea kano",
    class: "protour"
  },
  {
    title: "Dromai vs Viserai",
    description:
      "Pro Tour Los Angeles <br> Round 4 <br> Nicholas Tran <br> vs <br> Jon Ho.",
    hash: "E6Ci-XAkGnc",
    game: "E6Ci-XAkGnc?si=aKQye8O54-Qcgh1D&amp;start=14231",
    hero: "dromai viserai",
    class: "protour"
  },
  {
    title: "Dorinthea vs Kayo",
    description:
      "Pro Tour Los Angeles <br> Round 4 <br> Cody Williams <br> vs <br> Matt Rogers.",
    hash: "E6Ci-XAkGnc",
    game: "E6Ci-XAkGnc?si=aKQye8O54-Qcgh1D&amp;start=16347",
    hero: "dorinthea kayo",
    class: "protour"
  },
  {
    title: "Kayo vs Rhinar",
    description:
      "Pro Tour Los Angeles <br> Round 11 <br> Allen Lau <br> vs <br> Pablo Pintor.",
    hash: "Ck1pAbVD6Iw",
    game: "Ck1pAbVD6Iw?si=mxWlvFOlP8RUNcNz&amp;start=11921",
    hero: "kayo rhinar",
    class: "protour"
  },
  {
    title: "Kayo vs Kayo",
    description:
      "Pro Tour Los Angeles <br> Round 11 <br> Daniel Correas <br> vs <br> Petter Ward.",
    hash: "Ck1pAbVD6Iw",
    game: "Ck1pAbVD6Iw?si=mxWlvFOlP8RUNcNz&amp;start=13660",
    hero: "kayo",
    class: "protour"
  },
  {
    title: "Dorinthea vs Levia",
    description:
      "Pro Tour Los Angeles <br> Round 12 <br> Joshua Lau <br> vs <br> Ilias Karamanis.",
    hash: "Ck1pAbVD6Iw",
    game: "Ck1pAbVD6Iw?si=mxWlvFOlP8RUNcNz&amp;start=15662",
    hero: "dorinthea levia",
    class: "protour"
  },
  {
    title: "Dorinthea vs Boltyn",
    description:
      "Pro Tour Los Angeles <br> Round 12 <br> Maximilian Klein <br> vs <br> Aidan Barsony.",
    hash: "Ck1pAbVD6Iw",
    game: "Ck1pAbVD6Iw?si=mxWlvFOlP8RUNcNz&amp;start=17775",
    hero: "dorinthea boltyn",
    class: "protour"
  },
  {
    title: "Kayo vs Dromai",
    description:
      "Pro Tour Los Angeles <br> Round 13 <br> Peter Ward <br> vs <br> Brandon Ejupi.",
    hash: "Ck1pAbVD6Iw",
    game: "Ck1pAbVD6Iw?si=mxWlvFOlP8RUNcNz&amp;start=19280",
    hero: "dromai kayo",
    class: "protour"
  },
  {
    title: "Dorinthea vs Dromai",
    description:
      "Pro Tour Los Angeles <br> Round 13 <br> Maximilian Klein <br> vs <br> Ian Zhang.",
    hash: "Ck1pAbVD6Iw",
    game: "Ck1pAbVD6Iw?si=mxWlvFOlP8RUNcNz&amp;start=21195",
    hero: "dorinthea dromai",
    class: "protour"
  },
  {
    title: "Kayo vs Dorinthea",
    description:
      "Pro Tour Los Angeles <br> Round 14 <br> Andrew Rothermel <br> vs <br> Maximilian Klein.",
    hash: "Ck1pAbVD6Iw",
    game: "Ck1pAbVD6Iw?si=mxWlvFOlP8RUNcNz&amp;start=23320",
    hero: "dorinthea kayo",
    class: "protour"
  },
  {
    title: "Dorinthea vs Kayo",
    description:
      "Pro Tour Los Angeles <br> Round 14 <br> Joshua Lau <br> vs <br> Noah Beygelman.",
    hash: "Ck1pAbVD6Iw",
    game: "Ck1pAbVD6Iw?si=mxWlvFOlP8RUNcNz&amp;start=25232",
    hero: "dorinthea kayo",
    class: "protour"
  },
  {
    title: "Dorinthea vs Dorinthea",
    description:
      "Pro Tour Los Angeles <br> Top 8 <br> Maximilian Klein <br> vs <br> Joshua Lau.",
    hash: "iYxoe8rlIx8",
    game: "iYxoe8rlIx8?si=62k8va0Ajz3-sq0s&amp;start=5595",
    hero: "dorinthea",
    class: "protour"
  },
  {
    title: "Kayo vs Kayo",
    description:
      "Pro Tour Los Angeles <br> Top 8 <br> Sebastian Grondal <br> vs <br> Joel Repta.",
    hash: "iYxoe8rlIx8",
    game: "iYxoe8rlIx8?si=62k8va0Ajz3-sq0s&amp;start=11615",
    hero: "kayo",
    class: "protour"
  },
  {
    title: "Kayo vs Kano",
    description:
      "Pro Tour Los Angeles <br> Top 8 <br> Daniel Correas <br> vs <br> Felipe Cardoso.",
    hash: "iYxoe8rlIx8",
    game: "iYxoe8rlIx8?si=62k8va0Ajz3-sq0s&amp;start=14010",
    hero: "kano kayo",
    class: "protour"
  },
  {
    title: "Dromai vs Kayo",
    description:
      "Pro Tour Los Angeles <br> Top 4 <br> Arthur Trehet <br> vs <br> Joel Repta.",
    hash: "iYxoe8rlIx8",
    game: "iYxoe8rlIx8?si=62k8va0Ajz3-sq0s&amp;start=16630",
    hero: "dromai kayo",
    class: "protour"
  },
  {
    title: "Kayo vs Dorinthea",
    description:
      "Pro Tour Los Angeles <br> Top 4 <br> Daniel Correas <br> vs <br> Maximilian Klein.",
    hash: "iYxoe8rlIx8",
    game: "iYxoe8rlIx8?si=62k8va0Ajz3-sq0s&amp;start=20650",
    hero: "dorinthea kayo",
    class: "protour"
  },
  {
    title: "Dromai vs Dorinthea",
    description:
      "Pro Tour Los Angeles <br> Finals <br> Arthur Trehet <br> vs <br> Maximilian Klein.",
    hash: "iYxoe8rlIx8",
    game: "iYxoe8rlIx8?si=62k8va0Ajz3-sq0s&amp;start=24830",
    hero: "dromai dorinthea",
    class: "protour"
  },
  //-----------------Age Março-----------------------//
  {
    title: "Dromai vs Dash I/O",
    description:
      "Age Open March <br> Round 1 <br> Michaele Teppa <br> vs <br> Grant Strom.",
    hash: "YV6JpCgruf4",
    game: "YV6JpCgruf4?si=8svfQoA1b6_JPC_e&amp;start=3115",
    hero: "dromai dashIo",
    class: "age"
  }, 
  {
    title: "Kano vs Levia",
    description:
      "Age Open March <br> Round 2 <br> Brian Gutierrez <br> vs <br> Clark Moore.",
    hash: "YV6JpCgruf4",
    game: "YV6JpCgruf4?si=8svfQoA1b6_JPC_e&amp;start=6749",
    hero: "kano levia",
    class: "age"
  }, 
  {
    title: "Dorinthea vs Kayo",
    description:
      "Age Open March <br> Round 3 <br> Richard Truong <br> vs <br> Moises Lopez.",
    hash: "YV6JpCgruf4",
    game: "YV6JpCgruf4?si=8svfQoA1b6_JPC_e&amp;start=10243",
    hero: "dorinthea kayo",
    class: "age"
  }, 
  {
    title: "Katsu vs Azalea",
    description:
      "Age Open March <br> Round 4 <br> Tyler Horspool <br> vs <br> John Zapata.",
    hash: "YV6JpCgruf4",
    game: "YV6JpCgruf4?si=8svfQoA1b6_JPC_e&amp;start=13798",
    hero: "katsu azalea",
    class: "age"
  }, 
  {
    title: "Bravo vs Riptide",
    description:
      "Age Open March <br> Round 5 <br> Diana Green <br> vs <br> Talon Stradley.",
    hash: "YV6JpCgruf4",
    game: "YV6JpCgruf4?si=8svfQoA1b6_JPC_e&amp;start=17399",
    hero: "bravo riptide",
    class: "age"
  }, 
  {
    title: "Katsu vs Kassai",
    description:
      "Age Open March <br> Round 6 <br> Nicholas Tagg <br> vs <br> Joel Recinos.",
    hash: "YV6JpCgruf4",
    game: "YV6JpCgruf4?si=8svfQoA1b6_JPC_e&amp;start=21106",
    hero: "katsu kassai",
    class: "age"
  }, 
  {
    title: "Katsu vs Riptide",
    description:
      "Age Open March <br> Top 8 <br> Nicholas Tagg <br> vs <br> Talon Stradley.",
    hash: "bzh6PrdTZpc",
    game: "bzh6PrdTZpc?si=Ei3yZloHPe5_Zw-_&amp;start=3084",
    hero: "katsu riptide",
    class: "age"
  }, 
  {
    title: "Kayo vs Levia",
    description:
      "Age Open March <br> Top 4 <br> Moises Lopez <br> vs <br> Ethan S.R. Van Sant.",
    hash: "bzh6PrdTZpc",
    game: "bzh6PrdTZpc?si=Ei3yZloHPe5_Zw-_&amp;start=6846",
    hero: "kayo levia",
    class: "age"
  }, 
  {
    title: "Dromai vs Levia",
    description:
      "Age Open March <br> Finals <br> Gabriel Montes <br> vs <br> Ethan S.R. Van Sant.",
    hash: "bzh6PrdTZpc",
    game: "bzh6PrdTZpc?si=Ei3yZloHPe5_Zw-_&amp;start=10123",
    hero: "dromai levia",
    class: "age"
  },  
  //-----------------Age Fevereiro-------------------//
  {
    title: "Kayo vs Bravo",
    description:
      "Age Open February <br> Round 1 <br> Fuzzy Delp <br> vs <br> Alan Hoang.",
    hash: "npXwuzUXBXE",
    game: "npXwuzUXBXE?si=jeFv0EGjhlOXI8xr&amp;start=2595",
    hero: "kayo bravo",
    class: "age"
  },
  {
    title: "Kassai vs Katsu",
    description:
      "Age Open February <br> Round 2 <br> Colin Eriksen <br> vs <br> Christian Barry.",
    hash: "npXwuzUXBXE",
    game: "npXwuzUXBXE?si=jeFv0EGjhlOXI8xr&amp;start=6843",
    hero: "kassai katsu",
    class: "age"
  },
  {
    title: "Azalea vs Kayo",
    description:
      "Age Open February <br> Round 3 <br> Zayne Johnson <br> vs <br> Nicholas Tagg.",
    hash: "npXwuzUXBXE",
    game: "npXwuzUXBXE?si=jeFv0EGjhlOXI8xr&amp;start=10466",
    hero: "kayo azalea",
    class: "age"
  },
  {
    title: "Dorinthea vs Kayo",
    description:
      "Age Open February <br> Round 4 <br> Leon David Cassel <br> vs <br> Moises Lopez.",
    hash: "npXwuzUXBXE",
    game: "npXwuzUXBXE?si=jeFv0EGjhlOXI8xr&amp;start=13971",
    hero: "kayo dorinthea",
    class: "age"
  },
  {
    title: "Bravo vs Kassai",
    description:
      "Age Open February <br> Round 5 <br> Colin Eriksen <br> vs <br> Charles Dunn.",
    hash: "npXwuzUXBXE",
    game: "npXwuzUXBXE?si=jeFv0EGjhlOXI8xr&amp;start=17513",
    hero: "kassai bravo",
    class: "age"
  },
  {
    title: "Dorinthea vs Dromai",
    description:
      "Age Open February <br> Round 6 <br> Ryan Alldredge <br> vs <br> Grant Strom.",
    hash: "npXwuzUXBXE",
    game: "npXwuzUXBXE?si=jeFv0EGjhlOXI8xr&amp;start=21288",
    hero: "dorinthea dromai",
    class: "age"
  },
  {
    title: "Bravo vs Dash",
    description:
      "Age Open February <br> Round 7 <br> Ynez Nevarez <br> vs <br> Aidan Kwasneski.",
    hash: "npXwuzUXBXE",
    game: "npXwuzUXBXE?si=jeFv0EGjhlOXI8xr&amp;start=24944",
    hero: "dash bravo",
    class: "age"
  },
  {
    title: "Kassai vs Teklovossen",
    description:
      "Age Open February <br> Top 8 <br> Colin Eriksen <br> vs <br> Connor Davenport.",
    hash: "z8pDxX1Odg4",
    game: "z8pDxX1Odg4?si=eahCEq08jcC9i7os&amp;start=1835",
    hero: "kassai teklovossen",
    class: "age"
  },
  {
    title: "Dromai vs Teklovossen",
    description:
      "Age Open February <br> Top 4 <br> Grant Strom <br> vs <br> Connor Davenport.",
    hash: "z8pDxX1Odg4",
    game: "z8pDxX1Odg4?si=eahCEq08jcC9i7os&amp;start=5712",
    hero: "dromai teklovossen",
    class: "age"
  },
  {
    title: "Dromai vs Bravo",
    description:
      "Age Open February <br> Finals <br> Grant Strom <br> vs <br> Charles Dunn.",
    hash: "z8pDxX1Odg4",
    game: "z8pDxX1Odg4?si=eahCEq08jcC9i7os&amp;start=9153",
    hero: "dromai bravo",
    class: "age"
  },
  //-----------------Age Janeiro---------------------//
  {
    title: "Katsu vs Dash",
    description:
      "Age Open January <br> Round 1 <br> Moises Lopez <br> vs <br> Anthony Pham.",
    hash: "BgMhtUVAQwA",
    game: "BgMhtUVAQwA?si=1cniSFsfaVliKH5v&amp;start=2535",
    hero: "katsu dash",
    class: "age"
  },
  {
    title: "Levia vs Bravo",
    description:
      "Age Open January <br> Round 2 <br> Chris Iaali <br> vs <br> Marcus Brown.",
    hash: "BgMhtUVAQwA",
    game: "BgMhtUVAQwA?si=1cniSFsfaVliKH5v&amp;start=6405",
    hero: "levia bravo",
    class: "age"
  },
  {
    title: "Dash I/O vs Bravo",
    description:
      "Age Open January <br> Round 3 <br> Tyler Horspool <br> vs <br> Trent Smith.",
    hash: "BgMhtUVAQwA",
    game: "BgMhtUVAQwA?si=1cniSFsfaVliKH5v&amp;start=10175",
    hero: "dashIo bravo",
    class: "age"
  },
  {
    title: "Azalea vs Boltyn",
    description:
      "Age Open January <br> Round 4 <br> Zayne Johnson <br> vs <br> Joel Recinos III.",
    hash: "BgMhtUVAQwA",
    game: "BgMhtUVAQwA?si=1cniSFsfaVliKH5v&amp;start=14162",
    hero: "azalea boltyn",
    class: "age"
  },
  {
    title: "Riptide vs Fai",
    description:
      "Age Open January <br> Round 5 <br> Jarik Caisse <br> vs <br> Anthony Zichella.",
    hash: "BgMhtUVAQwA",
    game: "BgMhtUVAQwA?si=1cniSFsfaVliKH5v&amp;start=18070",
    hero: "riptide fai",
    class: "age"
  },
  {
    title: "Azalea vs Teklovossen",
    description:
      "Age Open January <br> Round 6 <br> Zayne Johnson <br> vs <br> Evan Bridges.",
    hash: "BgMhtUVAQwA",
    game: "BgMhtUVAQwA?si=1cniSFsfaVliKH5v&amp;start=21613",
    hero: "azalea teklovossen",
    class: "age"
  },
  {
    title: "Kano vs Kano",
    description:
      "Age Open January <br> Top 8 <br> Eugene Galipchak <br> vs <br> Feiyu Cai.",
    hash: "_jhEd3mW4YI",
    game: "_jhEd3mW4YI?si=VWI8s5S8foZJQ-Jt&amp;start=2535",
    hero: "kano",
    class: "age"
  },
  {
    title: "Azalea vs Bravo",
    description:
      "Age Open January <br> Top 4 <br> Zayne Johnson <br> vs <br> Alan Hoang.",
    hash: "_jhEd3mW4YI",
    game: "_jhEd3mW4YI?si=VWI8s5S8foZJQ-Jt&amp;start=6169",
    hero: "azalea bravo",
    class: "age"
  },
  {
    title: "Kano vs Bravo",
    description:
      "Age Open January <br> Finals <br> Eugene Galipchak <br> vs <br> Alan Hoang.",
    hash: "_jhEd3mW4YI",
    game: "_jhEd3mW4YI?si=VWI8s5S8foZJQ-Jt&amp;start=9788",
    hero: "kano bravo",
    class: "age"
  },
  //-----------------Worlds--------------------------//
  {
    title: "Dash vs Bravo",
    description:
      "World Championship Barcelona <br> Round 1 <br> Vlastimil Martinek Jr <br> vs <br> Michael Hamilton.",
    hash: "UhbDVzheB1k",
    game: "UhbDVzheB1k?si=4_al378rq4K7L3Km&amp;start=1755",
    hero: "dash bravo",
    class: "worlds"
  },
  {
    title: "Iyslander vs Bravo",
    description:
      "World Championship Barcelona <br> Round 2 <br> Matthew Foulkes <br> vs <br> Jack Tang.",
    hash: "UhbDVzheB1k",
    game: "UhbDVzheB1k?si=4_al378rq4K7L3Km&amp;start=5089",
    hero: "iyslander bravo",
    class: "worlds"
  },
  {
    title: "Dash vs Teklovossen",
    description:
      "World Championship Barcelona <br> Round 3 <br> Matthew McInnes <br> vs <br> Mariusz Suchanecki.",
    hash: "UhbDVzheB1k",
    game: "UhbDVzheB1k?si=4_al378rq4K7L3Km&amp;start=9486",
    hero: "dash teklovossen",
    class: "worlds"
  },
  {
    title: "Dash vs Bravo",
    description:
      "World Championship Barcelona <br> Round 4 <br> Paul Le Gouez  <br> vs <br> Matteo Favretto.",
    hash: "UhbDVzheB1k",
    game: "UhbDVzheB1k?si=4_al378rq4K7L3Km&amp;start=13692",
    hero: "dash bravo",
    class: "worlds"
  },
  {
    title: "Bravo vs Levia",
    description:
      "World Championship Barcelona <br> Round 4 <br> Zach Bunn  <br> vs <br> Ethan Van Sant.",
    hash: "UhbDVzheB1k",
    game: "UhbDVzheB1k?si=4_al378rq4K7L3Km&amp;start=17763",
    hero: "bravo levia",
    class: "worlds"
  },
  {
    title: "Katsu vs Dorinthea",
    description:
      "World Championship Barcelona <br> Round 11 <br> Alex Lo  <br> vs <br> Yuto Suzuki.",
    hash: "yErQGNoiJfw",
    game: "yErQGNoiJfw?si=0b-UnyehR6o2oaqO&amp;start=12680",
    hero: "katsu dorinthea",
    class: "worlds"
  },
  {
    title: "Fai vs Rhinar",
    description:
      "World Championship Barcelona <br> Round 12 <br> Daniele Frattarelli  <br> vs <br> Pedro Ugioni.",
    hash: "yErQGNoiJfw",
    game: "yErQGNoiJfw?si=0b-UnyehR6o2oaqO&amp;start=16603",
    hero: "rhinar fai",
    class: "worlds"
  },
  {
    title: "Dromai vs Fai",
    description:
      "World Championship Barcelona <br> Round 13 <br> Aaron Shantz  <br> vs <br> Philip Van Donselaar.",
    hash: "yErQGNoiJfw",
    game: "yErQGNoiJfw?si=0b-UnyehR6o2oaqO&amp;start=20283",
    hero: "dromai fai",
    class: "worlds"
  },
  {
    title: "Katsu vs Fai",
    description:
      "World Championship Barcelona <br> Round 14 <br> Philip Van Donselaar <br> vs <br> Pudding Tam.",
    hash: "yErQGNoiJfw",
    game: "yErQGNoiJfw?si=0b-UnyehR6o2oaqO&amp;start=25860",
    hero: "katsu fai",
    class: "worlds"
  },
  {
    title: "Dromai vs Dash",
    description:
      "World Championship Barcelona <br> Top 8 <br> Aaron Shantz <br> vs <br> Matthew W.",
    hash: "PsJcXh4UsAI",
    game: "PsJcXh4UsAI?si=Yc34qne5FTMBDGIz&amp;start=853",
    hero: "dromai dash",
    class: "worlds"
  },
  {
    title: "Katsu vs Iyslander",
    description:
      "World Championship Barcelona <br> Top 8 <br> Pudding Tam <br> vs <br> Shing Tsang.",
    hash: "PsJcXh4UsAI",
    game: "PsJcXh4UsAI?si=Yc34qne5FTMBDGIz&amp;start=5291",
    hero: "katsu iyslander",
    class: "worlds"
  },
  {
    title: "Fai vs Dash",
    description:
      "World Championship Barcelona <br> Top 8 <br> Daniele Frattarelli <br> vs <br> Easton Douglas.",
    hash: "PsJcXh4UsAI",
    game: "PsJcXh4UsAI?si=Yc34qne5FTMBDGIz&amp;start=8481",
    hero: "fai dash",
    class: "worlds"
  },
  {
    title: "Fai vs Iyslander",
    description:
      "World Championship Barcelona <br> Top 8 <br> Alexandros Argyriou <br> vs <br> Yuki Lee Bender.",
    hash: "PsJcXh4UsAI",
    game: "PsJcXh4UsAI?si=Yc34qne5FTMBDGIz&amp;start=12920",
    hero: "fai iyslander",
    class: "worlds"
  },
  {
    title: "Dash vs Iyslander",
    description:
      "World Championship Barcelona <br> Top 4 <br> Easton Douglas <br> vs <br> Shing Tsang.",
    hash: "PsJcXh4UsAI",
    game: "PsJcXh4UsAI?si=Yc34qne5FTMBDGIz&amp;start=16449",
    hero: "Iyslander dash",
    class: "worlds"
  },
  {
    title: "Fai vs Dromai",
    description:
      "World Championship Barcelona <br> Top 4 <br> Alexandros Argyriou <br> vs <br> Aaron Shantz.",
    hash: "PsJcXh4UsAI",
    game: "PsJcXh4UsAI?si=Yc34qne5FTMBDGIz&amp;start=20115",
    hero: "fai dromai",
    class: "worlds"
  },
  {
    title: "Fai vs Iyslander",
    description:
      "World Championship Barcelona <br> Finals <br> Alexandros Argyriou <br> vs <br> Shing Tsang.",
    hash: "PsJcXh4UsAI",
    game: "PsJcXh4UsAI?si=Yc34qne5FTMBDGIz&amp;start=24882",
    hero: "fai iyslander",
    class: "worlds"
  },
  //----------------------------------------Arakni---------------------------------------------------//
  {
    title: "Arakni vs Fai",
    description:
      "Video from FAB Estonian Community <br> Gustavo <br> vs <br> Theo.",
    hash: "PrF21qq_5Z8",
    game: "PrF21qq_5Z8",
    hero: "fai arakni",
    class: "friendly"
  },
  {
    title: "Arakni vs Victor",
    description:
      "Video from ChannelFireball.",
    hash: "p-Vs4255r9A",
    game: "p-Vs4255r9A",
    hero: "victor arakni",
    class: "friendly"
  },
  {
    title: "Arakni vs Dorinthea",
    description:
      "Video from Three Floating.",
    hash: "hz76hKGMmGs",
    game: "hz76hKGMmGs",
    hero: "dorinthea arakni",
    class: "friendly"
  },
  {
    title: "Arakni vs Dash",
    description:
      "Video from Fabrika.",
    hash: "X8SgU2PmYnc",
    game: "X8SgU2PmYnc",
    hero: "dash arakni",
    class: "friendly"
  },

  //-----------------------------------Betsy---------------------------------------------//
  {
    title: "Olympia vs Betsy",
    description:
      "Video from Three Floating.",
    hash: "f29l_Mak1as",
    game: "f29l_Mak1as",
    hero: "olympia betsy",
    class: "friendly"
  }, {
    title: "Betsy vs Olympia",
    description:
      "Video from Fabrika.",
    hash: "4B198lbMOiQ",
    game: "4B198lbMOiQ",
    hero: "olympia betsy",
    class: "friendly"
  }, {
    title: "Kayo vs Betsy",
    description:
      "Video from The Second Cycle.",
    hash: "Ro0P2t-5nqs",
    game: "Ro0P2t-5nqs",
    hero: "kayo betsy",
    class: "friendly"
  }, {
    title: "Betsy vs Fai",
    description:
      "Video from Estonian Community.",
    hash: "dus5xfWaqCA",
    game: "dus5xfWaqCA",
    hero: "betsy fai",
    class: "friendly"
  },
  //----------------------------MAXX------------------------------//
  {
    title: "Lexy vs Maxx",
    description:
      "Video from Battle Hardned Milwaukee <br> Round 2 <br> Johnny E <br> vs <br> Devin McA.",
    hash: "LYIYyPsU2SE",
    game: "LYIYyPsU2SE",
    hero: "lexy maxx",
    class: "battlehardned"
  },
  {
    title: "Maxx vs Dash",
    description:
      "Video from Three Floating.",
    hash: "TOpRs6-c4lM",
    game: "TOpRs6-c4lM",
    hero: "maxx dash",
    class: "friendly"
  },

];
