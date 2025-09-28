document.addEventListener("DOMContentLoaded", () => {
  // --- DATA ---
  const squad = {
    batsmen: [
      {
        name: "Rajat Patidar (C)",
        role: "Batsman",
        img: "Assets/rajat-patidar.png",
      },
      {
        name: "Virat Kohli",
        role: "Batsman",
        img: "Assets/virat-kohli.png",
      },
      {
        name: "Mayank Agarwal (RP)",
        role: "Batsman",
        img: "Assets/mayank-agarwal.png",
      },
    ],
    wicketKeepers: [
      {
        name: "Phil Salt",
        role: "Wicket Keeper",
        img: "Assets/phil-salt.png",
      },
      {
        name: "Jitesh Sharma (WK)",
        role: "Wicket Keeper",
        img: "Assets/jitesh-sharma.png",
      },
    ],
    allRounders: [
      {
        name: "Liam Livingstone",
        role: "All Rounder",
        img: "Assets/liam-livingstone.png",
      },
      {
        name: "Krunal Pandya",
        role: "All Rounder",
        img: "Assets/krunal-pandya.png",
      },
    ],
    bowlers: [
      {
        name: "Suyash Sharma (IP)",
        role: "Bowler",
        img: "Assets/suyash-sharma.png",
      },
      {
        name: "Romario Shepherd",
        role: "Bowler",
        img: "Assets/romario-shephard.png",
      },
      {
        name: "Bhuvneshwar Kumar",
        role: "Bowler",
        img: "Assets/b-kumar.png",
      },
      {
        name: "Yash Dayal",
        role: "Bowler",
        img: "Assets/yash-dayal.png",
      },
      {
        name: "Josh Hazlewood",
        role: "Bowler",
        img: "Assets/josh-hazelwood.png",
      },
    ],
  };

  const coachingStaff = [
    { name: "Andy Flower", role: "Head Coach" },
    { name: "Mo Bobat", role: "Director of Cricket" },
    { name: "Dinesh Karthik", role: "Mentor & Batting Consultant" },
    { name: "Malolan Rangarajan", role: "Assistant & Fielding Coach" },
    { name: "Omkar Salvi", role: "Bowling Coach" },

    { name: "Richard Halsall", role: "Fielding Specialist" },
    { name: "Evan Speechly", role: "Head Physio" },
    { name: "James Pipe", role: "Team Doctor" },
    { name: "Navnita Gautam", role: "Sports Massage Therapist" },
    { name: "Dr Shikha Dhaundiyal", role: "Team Dietitian" },

    { name: "Arihant Jain", role: "Team Manager" },
    { name: "Rajesh Menon", role: "VP & Head of RCB" },
  ];

  const teamLogos = {
    "Royal Challengers Bengaluru":"Assets/rcb-logo-new.png",
    "Punjab Kings": "Assets/pbks-logo.png",
    "Mumbai Indians": "Assets/MI.png",
    "Gujarat Titans": "Assets/GT.png",
    "Lucknow Super Giants":"Assets/lsg-logo.png",
    "Chennai Super Kings": "Assets/CSK.png",
    "Kolkata Knight Riders":"Assets/KKR.png",
    "Sunrisers Hyderabad":"Assets/SRH.png",
    "Delhi Capitals": "Assets/DC.png",
    "Rajasthan Royals":"Assets/RR.png",
  };

  const scheduleData = [
    {
      matchNum: 74,
      date: "2025-06-03T19:30:00",
      team1: "Royal Challengers Bengaluru",
      score1: "190/9 (20)",
      team2: "Punjab Kings",
      score2: "184/7 (20)",
      venue: "Narendra Modi Stadium, Ahmedabad",
      result: "Royal Challengers Bengaluru Won by 6 Runs",
    },
    {
      matchNum: 71,
      date: "2025-05-29T19:30:00",
      team1: "Punjab Kings",
      score1: "101/10 (14.1)",
      team2: "Royal Challengers Bengaluru",
      score2: "106/2 (10.0)",
      venue: "New PCA Stadium, Chandigarh",
      result: "Royal Challengers Bengaluru Won by 8 Wickets",
    },
    {
      matchNum: 70,
      date: "2025-05-27T19:30:00",
      team1: "Lucknow Super Giants",
      score1: "227/3 (20)",
      team2: "Royal Challengers Bengaluru",
      score2: "230/4 (18.4)",
      venue: "Ekana Cricket Stadium, Lucknow",
      result: "Royal Challengers Bengaluru Won by 6 Wickets",
    },
    {
      matchNum: 65,
      date: "2025-05-23T19:30:00",
      team1: "Sunrisers Hyderabad",
      score1: "231/6 (20)",
      team2: "Royal Challengers Bengaluru",
      score2: "189/10 (19.5)",
      venue: "Ekana Cricket Stadium, Lucknow",
      result: "Sunrisers Hyderabad Won by 42 Runs",
    },
    {
      matchNum: 58,
      date: "2025-05-17T19:30:00",
      team1: "Kolkata Knight Riders",
      score1: "",
      team2: "Royal Challengers Bengaluru",
      score2: "",
      venue: "M Chinnaswamy Stadium, Bengaluru",
      result: "Match Abandoned",
    },
    {
      matchNum: 52,
      date: "2025-05-03T19:30:00",
      team1: "Royal Challengers Bengaluru",
      score1: "213/5 (20)",
      team2: "Chennai Super Kings",
      score2: "211/5 (20)",
      venue: "M Chinnaswamy Stadium, Bengaluru",
      result: "Royal Challengers Bengaluru Won by 2 Runs",
    },
    {
      matchNum: 45,
      date: "2025-04-27T19:30:00",
      team1: "Delhi Capitals",
      score1: "162/8 (20)",
      team2: "Royal Challengers Bengaluru",
      score2: "165/4 (18.3)",
      venue: "Arun Jaitley Stadium, Delhi",
      result: "Royal Challengers Bengaluru Won by 6 Wickets",
    },
    {
      matchNum: 42,
      date: "2025-04-24T19:30:00",
      team1: "Royal Challengers Bengaluru",
      score1: "205/5 (20)",
      team2: "Rajasthan Royals",
      score2: "194/9 (20)",
      venue: "M Chinnaswamy Stadium, Bengaluru",
      result: "Royal Challengers Bengaluru Won by 11 Runs",
    },
    {
      matchNum: 38,
      date: "2025-04-20T15:30:00",
      team1: "Punjab Kings",
      score1: "157/6 (20)",
      team2: "Royal Challengers Bengaluru",
      score2: "159/3 (18.5)",
      venue: "New PCA Stadium, Chandigarh",
      result: "Royal Challengers Bengaluru Won by 7 Wickets",
    },
    {
      matchNum: 34,
      date: "2025-04-18T19:30:00",
      team1: "Royal Challengers Bengaluru",
      score1: "95/9 (14.0)",
      team2: "Punjab Kings",
      score2: "98/5 (12.1)",
      venue: "M Chinnaswamy Stadium, Bengaluru",
      result: "Punjab Kings Won by 5 Wickets",
    },
    {
      matchNum: 29,
      date: "2025-04-13T15:30:00",
      team1: "Rajasthan Royals",
      score1: "173/4 (20)",
      team2: "Royal Challengers Bengaluru",
      score2: "175/1 (17.3)",
      venue: "Sawai Mansingh Stadium, Jaipur",
      result: "Royal Challengers Bengaluru Won by 9 Wickets",
    },
    {
      matchNum: 24,
      date: "2025-04-10T19:30:00",
      team1: "Royal Challengers Bengaluru",
      score1: "163/7 (20)",
      team2: "Delhi Capitals",
      score2: "169/4 (17.5)",
      venue: "M Chinnaswamy Stadium, Bengaluru",
      result: "Delhi Capitals Won by 6 Wickets",
    },
    {
      matchNum: 20,
      date: "2025-04-07T19:30:00",
      team1: "Royal Challengers Bengaluru",
      score1: "221/5 (20)",
      team2: "Mumbai Indians",
      score2: "209/9 (20)",
      venue: "Wankhede Stadium, Mumbai",
      result: "Royal Challengers Bengaluru Won by 12 Runs",
    },
    {
      matchNum: 14,
      date: "2025-04-02T19:30:00",
      team1: "Royal Challengers Bengaluru",
      score1: "169/8 (20)",
      team2: "Gujarat Titans",
      score2: "170/2 (17.5)",
      venue: "M Chinnaswamy Stadium, Bengaluru",
      result: "Gujarat Titans Won by 8 Wickets",
    },
    {
      matchNum: 8,
      date: "2025-03-28T19:30:00",
      team1: "Royal Challengers Bengaluru",
      score1: "196/7 (20)",
      team2: "Chennai Super Kings",
      score2: "146/8 (20)",
      venue: "MA Chidambaram Stadium, Chennai",
      result: "Royal Challengers Bengaluru Won by 50 Runs",
    },
    {
      matchNum: 1,
      date: "2025-03-22T19:30:00",
      team1: "Kolkata Knight Riders",
      score1: "174/8 (20)",
      team2: "Royal Challengers Bengaluru",
      score2: "177/3 (16.2)",
      venue: "Eden Gardens, Kolkata",
      result: "Royal Challengers Bengaluru Won by 7 Wickets",
    },
  ];

  // --- DYNAMIC CONTENT GENERATION ---

  // Generate Squad
  const squadContainer = document.getElementById("squad-container");
  let squadHTML = "";
  for (const category in squad) {
    squadHTML += `<h3 class="text-2xl font-bold rcb-red mb-6 uppercase tracking-wider">${category
      .replace(/([A-Z])/g, " $1")
      .trim()}</h3>`;
    squadHTML +=
      '<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">';
    squad[category].forEach((player) => {
      squadHTML += `
                                <div class="player-card rounded-lg overflow-hidden text-center shadow-lg">
                                    <img src="${player.img}" alt="${player.name}" class="w-full h-80 object-cover object-top">
                                    <div class="player-card-overlay">
                                        <h3 class="text-2xl font-black rcb-gold uppercase">${player.name}</h3>
                                        <p class="text-gray-300 mt-1">${player.role}</p>
                                    </div>
                                </div>`;
    });
    squadHTML += "</div>";
  }
  // Coaching staff
  squadHTML += `<h3 class="text-2xl font-bold rcb-red mb-6 uppercase tracking-wider mt-16">Support Staff</h3>`;
  squadHTML +=
    '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">';
  coachingStaff.forEach((staff) => {
    squadHTML += `<div class="bg-rcb-gradient p-6 rounded-lg text-center"><h4 class="text-xl font-bold rcb-gold">${staff.name}</h4><p class="text-gray-400">${staff.role}</p></div>`;
  });
  squadHTML += "</div>";
  squadContainer.innerHTML = squadHTML;

  // Generate Schedule
  const scheduleContainer = document.getElementById("schedule-container");
  const recentResults = scheduleData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  let scheduleHTML = `<div class="space-y-6">`;
  recentResults.forEach((match) => {
    const matchDate = new Date(match.date);
    const formattedDate = matchDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const isRcbMatch =
      match.team1.includes("Bengaluru") ||
      match.team2.includes("Bengaluru");
    const didRcbWin = isRcbMatch && match.result.includes("Bengaluru");

    let team1Class = "font-semibold text-gray-400";
    let team2Class = "font-semibold text-gray-400";
    if (match.result.includes(match.team1)) {
      team1Class = "font-bold text-white";
    } else if (match.result.includes(match.team2)) {
      team2Class = "font-bold text-white";
    }

    const finalMatchHighlight =
      match.matchNum === 74
        ? "border-2 border-rcb-gold shadow-lg shadow-rcb-gold/20"
        : "";

    scheduleHTML += `
                      <div class="bg-rcb-gradient p-5 rounded-lg ${finalMatchHighlight} transition-all duration-300 hover:border-rcb-red">
                          <div class="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 mb-3 text-center sm:text-left">
                              <span class="mb-2 sm:mb-0">Match ${
                                match.matchNum
                              } | ${formattedDate}</span>
                              <span>${match.venue}</span>
                          </div>
                          <div class="flex items-center justify-around text-center">
                              <div class="w-2/5">
                                  <img src="${
                                    teamLogos[match.team1] ||
                                    "https://placehold.co/40x40/ccc/000?text=?"
                                  }" alt="${
      match.team1
    }" class="h-12 w-12 mx-auto mb-2 rounded-full">
                                  <h4 class="text-md md:text-lg ${team1Class}">${
      match.team1
    }</h4>
                                  <p class="text-lg md:text-xl font-bold">${
                                    match.score1 || ""
                                  }</p>
                              </div>
                              <div class="text-2xl font-bold rcb-red">VS</div>
                              <div class="w-2/5">
                                  <img src="${
                                    teamLogos[match.team2] ||
                                    "https://placehold.co/40x40/ccc/000?text=?"
                                  }" alt="${
      match.team2
    }" class="h-12 w-12 mx-auto mb-2 rounded-full">
                                  <h4 class="text-md md:text-lg ${team2Class}">${
      match.team2
    }</h4>
                                  <p class="text-lg md:text-xl font-bold">${
                                    match.score2 || ""
                                  }</p>
                              </div>
                          </div>
                          <div class="text-center mt-4 pt-4 border-t border-gray-700">
                              <p class="font-bold ${
                                didRcbWin ? "rcb-gold text-lg" : "text-white"
                              }">${
      match.matchNum === 74
        ? "🏆 RCB ARE THE CHAMPIONS! 🏆"
        : match.result
    }</p>
                          </div>
                      </div>
                  `;
  });
  scheduleHTML += `</div>`;
  scheduleContainer.innerHTML = scheduleHTML;

  // --- INTERACTIVITY ---
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("hidden")
  );
  document
    .querySelectorAll("#mobile-menu a")
    .forEach((link) =>
      link.addEventListener("click", () =>
        mobileMenu.classList.add("hidden")
      )
    );

  const submitCommentButton = document.getElementById("submit-comment");
  const usernameInput = document.getElementById("username-input");
  const commentInput = document.getElementById("comment-input");
  const commentsSection = document.getElementById("comments-section");
  submitCommentButton.addEventListener("click", () => {
    const username = usernameInput.value.trim() || "Anonymous";
    const comment = commentInput.value.trim();
    if (comment) {
      const newComment = document.createElement("div");
      newComment.className = "bg-gray-700 p-3 rounded-lg";
      newComment.innerHTML = `<p class="font-bold text-rcb-red">@${username
        .replace(/</g, "&lt;")
        .replace(
          />/g,
          "&gt;"
        )}</p><p class="text-sm text-gray-300">${comment
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")}</p>`;
      commentsSection.prepend(newComment);
      commentInput.value = "";
      usernameInput.value = "";
      commentsSection.scrollTop = 0; // Scroll to top to see the newest comment
    }
  });

  const pollOptionsContainer = document.getElementById("poll-options");
  const pollResultsContainer = document.getElementById("poll-results");
  const pollOptions = {
    FinalWin: 62,
    KohlisCentury: 28,
    SirajsSpell: 10,
  };
  pollOptionsContainer.addEventListener("click", (e) => {
    const button = e.target.closest(".poll-option");
    if (button) {
      pollOptionsContainer.classList.add("hidden");
      const totalVotes = Object.values(pollOptions).reduce(
        (a, b) => a + b,
        0
      );
      pollResultsContainer.innerHTML = Object.entries(pollOptions)
        .map(([option, votes]) => {
          const percentage = ((votes / totalVotes) * 100).toFixed(1);
          return `<div><div class="flex justify-between mb-1"><span class="text-base font-medium">${
            pollOptionsContainer.querySelector(`[data-option=${option}]`)
              .textContent
          }</span><span class="text-sm font-medium">${percentage}%</span></div><div class="w-full bg-gray-700 rounded-full h-2.5"><div class="bg-rcb-red h-2.5 rounded-full poll-bar-fill" style="width: 0%"></div></div></div>`;
        })
        .join("");
      pollResultsContainer.classList.remove("hidden");
      setTimeout(() => {
        pollResultsContainer
          .querySelectorAll(".poll-bar-fill")
          .forEach((bar, index) => {
            const percentage = (
              (Object.values(pollOptions)[index] / totalVotes) *
              100
            ).toFixed(1);
            bar.style.width = `${percentage}%`;
          });
      }, 100);
    }
  });

  const sections = document.querySelectorAll(".section-fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  sections.forEach((section) => observer.observe(section));

  // --- DYNAMIC BACKGROUND SCRIPT ---
  window.addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--mouse-x", e.clientX + "px");
    document.body.style.setProperty("--mouse-y", e.clientY + "px");
  });
});