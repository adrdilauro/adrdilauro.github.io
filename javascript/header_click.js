function reactToHeaderClick (identifier) {
  var layer = document.getElementById("layer"),
      currentlyOn = document.querySelector(".page-content.on"),
      newOn = document.querySelector(".page-content." + identifier),
      currentlyContent = document.querySelector(".page-content.on .actual-content"),
      newContent = document.querySelector(".page-content." + identifier + " .actual-content"),
      cover = document.getElementById("cover"),
      targetCoverSelector = "#cover .cover" + mapIdentifier(),
      oldCoverSelector = "#cover .cover" + cover.classList[0].replace("show", ""),
      targetCover = document.querySelectorAll(targetCoverSelector)[0],
      oldCover = document.querySelectorAll(oldCoverSelector)[0];
  document.getElementById("signature").style.display = "none";
  layer.style.display = "block";
  if (oldCoverSelector !== targetCoverSelector) {
    animationChangeCover(makeAnimation);
  } else {
    makeAnimation();
  }

  function mapIdentifier () {
    return {
      about: 6,
      skills: 5,
      experience: 4,
      education: 3,
      languages: 2,
      contact: 1
    }[identifier];
  }

  function makeAnimation () {
    var instructions;
    tradeWind.run([
      {
        elements: "#header-up",
        animations: [
          {
            property: "background-color",
            animationDetails: {
              duration: "0.5s"
            },
            final: "#df0101"
          }
        ]
      }
    ], function () {
      setTimeout(function () {
        document.getElementById("header-up").style.backgroundColor = "black";
      }, 300);
      newContent.style.overflow = "hidden";
      newContent.style.top = "80px";
      newContent.style.minHeight = "";
      newContent.style.bottom = "";
      instructions = [
        {
          elements: ".page-content." + identifier,
          preStyling: [
            {
              property: "z-index",
              value: "26"
            },
            {
              property: "top",
              value: "0px"
            },
            {
              property: "height",
              value: "0px"
            },
            {
              property: "border-bottom",
              value: "5px solid #df0101"
            },
            {
              property: "display",
              value: "block"
            }
          ],
          animations: [
            {
              property: "height",
              animationDetails: {
                duration: "2s",
                easing: "linear"
              },
              final: "100%"
            }
          ]
        }
      ];
      if (currentlyOn) {
        currentlyContent.style.overflow = "hidden";
        currentlyContent.style.top = "";
        currentlyContent.style.bottom = "0px";
        currentlyContent.style.minHeight = parseInt(getComputedStyle(currentlyContent).height) + "px";
        instructions.push({
          elements: ".page-content.on",
          animations: [
            {
              property: "height",
              animationDetails: {
                easing: "linear",
                duration: "2s"
              },
              final: "0px"
            },
            {
              property: "top",
              animationDetails: {
                easing: "linear",
                duration: "2s"
              },
              final: "100%"
            }
          ]
        });
      }
      tradeWind.run(instructions, function () {
        if (currentlyOn) {
          currentlyOn.classList.remove("on");
          currentlyOn.style.display = "none";
        }
        newContent.style.overflow = "auto";
        newOn.classList.add("on");
        newOn.style.zIndex = "21";
        newOn.style.borderBottom = "none";
        layer.style.display = "none";
      });
    });
  }

  function animationChangeCover (callback) {
    targetCover.style.visibility = "visible";
    tradeWind.run([
      {
        elements: oldCoverSelector,
        preStyling: [
          {
            property: "z-index",
            value: "11"
          }
        ],
        animations: [
          {
            property: "opacity",
            animationDetails: {
              duration: "0.5s"
            },
            final: "0"
          }
        ]
      }
    ], function () {
      oldCover.style.zIndex = "";
      targetCover.style.visibility = "";
      oldCover.style.opacity = "";
      cover.classList.remove(cover.classList[0]);
      cover.classList.add("show" + mapIdentifier());
      callback();
    });
  }
}
