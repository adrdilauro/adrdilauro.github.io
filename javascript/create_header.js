function createHeader () {
  var keywordSequence;

  function commonPreStyling (side) {
    return [
      {
        property: "display",
        value: "block"
      },
      {
        property: "width",
        value: "50px"
      },
      {
        property: "height",
        value: "50px"
      },
      {
        property: "top",
        value: "30px"
      },
      {
        property: side,
        value: "calc(50% - 25px)"
      },
      {
        property: "background-color",
        value: "#df0101"
      },
      {
        property: "opacity",
        value: "1"
      },
      {
        property: "border-radius",
        value: "50px"
      }
    ];
  }

  function standardAnimationsForHeaderItem (side, sideValue, delay, duration, additionalDelay) {
    var durMinusAdd = duration - additionalDelay, delPlusAdd = delay + additionalDelay;
    durMinusAdd = parseInt(durMinusAdd * 100) / 100;
    delPlusAdd = parseInt(delPlusAdd * 100) / 100;
    return [
      {
        property: side,
        animationDetails: {
          duration: duration + "s",
          delay: delay + "s",
          easing: "linear"
        },
        final: sideValue
      },
      {
        property: "background-color",
        animationDetails: {
          duration: duration + "s",
          delay: delay + "s",
          easing: "linear"
        },
        final: "black"
      },
      {
        property: "opacity",
        animationDetails: {
          duration: duration + "s",
          delay: delay + "s",
          easing: "linear"
        },
        final: "0.5"
      },
      {
        property: "width",
        animationDetails: {
          duration: durMinusAdd + "s",
          delay: delPlusAdd + "s",
          easing: "linear"
        },
        final: "10%"
      },
      {
        property: "border-radius",
        animationDetails: {
          duration: durMinusAdd + "s",
          delay: delPlusAdd + "s",
          easing: "linear"
        },
        final: "5px"
      }
    ];
  }

  function randomKeywordsEffect () {
    var keywords = document.querySelectorAll("#header-up .keyword");
    for (var i = 0; i < 4; i++) keywords[i].style.display = "block";
    keywordSequence = [
      [1, 2, 3, 4],
      [1, 2, 4, 3],
      [1, 3, 2, 4],
      [1, 3, 4, 2],
      [1, 4, 2, 3],
      [1, 4, 3, 2],
      [2, 1, 3, 4],
      [2, 1, 4, 3],
      [2, 3, 1, 4],
      [2, 3, 4, 1],
      [2, 4, 1, 3],
      [2, 4, 3, 1],
      [3, 2, 1, 4],
      [3, 2, 4, 1],
      [3, 1, 2, 4],
      [3, 1, 4, 2],
      [3, 4, 2, 1],
      [3, 4, 1, 2],
      [4, 2, 3, 1],
      [4, 2, 1, 3],
      [4, 3, 2, 1],
      [4, 3, 1, 2],
      [4, 1, 2, 3],
      [4, 1, 3, 2]
    ][parseInt(Math.random() * 24)];
    for (var i = 0; i < 4; i++) delayedKeywordEffect(i);
  }

  function delayedKeywordEffect (i) {
    setTimeout(function () {
      tradeWind.run([
        {
          elements: "#header-up .keyword.k" + keywordSequence[i] + " span",
          preStyling: [
            {
              property: "display",
              value: "inline"
            }
          ],
          animations: [
            {
              property: "color",
              animationDetails: {
                duration: "0.5s"
              },
              final: "#f6cece"
            },
            {
              property: "box-shadow",
              animationDetails: {
                duration: "2s"
              },
              final: "none"
            }
          ]
        }
      ]);
    }, i * 150);
  }

  function finalBlow () {
    var delay1 = {
          duration: "0.3s"
        },
        delay1var = {
          duration: "0.2s",
          delay: "0.1s"
        },
        delay2 = {
          duration: "0.3s",
          delay: "0.1s"
        },
        delay2var = {
          duration: "0.2s",
          delay: "0.2s"
        },
        delay3 = {
          duration: "0.3s",
          delay: "0.2s"
        },
        delay3var = {
          duration: "0.2s",
          delay: "0.3s"
        };
    setTimeout(function () {
      setTimeout(randomKeywordsEffect, 1000);
      tradeWind.run([
        {
          elements: "#layer",
          preStyling: [
            {
              property: "background-color",
              value: "#df0101"
            },
            {
              property: "opacity",
              value: "0.1"
            }
          ],
          animations: [
            {
              property: "opacity",
              animationDetails: {
                duration: "1.5s"
              },
              final: "0"
            }
          ]
        },
        {
          elements: "#signature",
          preStyling: [
            {
              property: "display",
              value: "block"
            },
            {
              property: "opacity",
              value: "0"
            }
          ],
          animations: [
            {
              property: "opacity",
              animationDetails: {
                duration: "1.5s"
              },
              final: "0.6"
            }
          ]
        },
        {
          elements: ".header-item.experience, .header-item.education",
          animations: [
            {
              property: "height",
              animationDetails: delay1,
              final: "60px"
            },
            {
              property: "top",
              animationDetails: delay1,
              final: "20px"
            },
            {
              property: "border-radius",
              animationDetails: delay1var,
              final: "0px"
            },
            {
              property: "opacity",
              animationDetails: delay1,
              final: "0.15"
            }
          ]
        },
        {
          elements: ".header-item.skills, .header-item.languages",
          animations: [
            {
              property: "height",
              animationDetails: delay2,
              final: "60px"
            },
            {
              property: "top",
              animationDetails: delay2,
              final: "20px"
            },
            {
              property: "border-radius",
              animationDetails: delay2var,
              final: "0px"
            },
            {
              property: "opacity",
              animationDetails: delay2,
              final: "0.15"
            }
          ]
        },
        {
          elements: ".header-item.about, .header-item.contact",
          animations: [
            {
              property: "height",
              animationDetails: delay3,
              final: "60px"
            },
            {
              property: "top",
              animationDetails: delay3,
              final: "20px"
            },
            {
              property: "border-radius",
              animationDetails: delay3var,
              final: "0px"
            },
            {
              property: "opacity",
              animationDetails: delay3,
              final: "0.15"
            }
          ]
        },
        {
          elements: ".header-item-content.experience, .header-item-content.education",
          preStyling: [
            {
              property: "display",
              value: "block"
            },
            {
              property: "opacity",
              value: "0"
            }
          ],
          animations: [
            {
              property: "opacity",
              animationDetails: delay1,
              final: "0.8"
            }
          ]
        },
        {
          elements: ".header-item-content.skills, .header-item-content.languages",
          preStyling: [
            {
              property: "display",
              value: "block"
            },
            {
              property: "opacity",
              value: "0"
            }
          ],
          animations: [
            {
              property: "opacity",
              animationDetails: delay2,
              final: "0.8"
            }
          ]
        },
        {
          elements: ".header-item-content.about, .header-item-content.contact",
          preStyling: [
            {
              property: "display",
              value: "block"
            },
            {
              property: "opacity",
              value: "0"
            }
          ],
          animations: [
            {
              property: "opacity",
              animationDetails: delay3,
              final: "0.8"
            }
          ]
        },
        {
          elements: "#header-background",
          preStyling: [
            {
              property: "display",
              value: "block"
            },
            {
              property: "opacity",
              value: "0"
            }
          ],
          animations: [
            {
              property: "opacity",
              animationDetails: {
                duration: "1.2s"
              },
              final: "0.2"
            }
          ]
        }
      ], function () {
        document.getElementById("layer").style.display = "none";
      });
    }, 500);
  }

  tradeWind.run([
    {
      elements: "#header-up",
      preStyling: [
        {
          property: "width",
          value: "60px"
        },
        {
          property: "left",
          value: "calc(50% - 30px)"
        },
        {
          property: "display",
          value: "block"
        },
        {
          property: "background-color",
          value: "#df0101"
        },
        {
          property: "border-radius",
          value: "10px"
        },
        {
          property: "opacity",
          value: "1"
        }
      ],
      animations: [
        {
          property: "width",
          animationDetails: {
            duration: "0.7s",
            easing: "linear"
          },
          final: "100%"
        },
        {      preStyling: commonPreStyling("right"),
          property: "left",
          animationDetails: {
            duration: "0.7s",
            easing: "linear"
          },
          final: "0px"
        },
        {
          property: "background-color",
          animationDetails: {
            duration: "0.7s",
            easing: "linear"
          },
          final: "black"
        },
        {
          property: "border-radius",
          animationDetails: {
            duration: "0.3s",
            delay: "0.4s",
            easing: "linear"
          },
          final: "0px"
        },
        {
          property: "opacity",
          animationDetails: {
            duration: "0.7s",
            easing: "linear"
          },
          final: "0.7"
        }
      ]
    },
    {
      elements: ".header-item.contact",
      preStyling: commonPreStyling("right"),
      animations: standardAnimationsForHeaderItem("right", "calc(5% - 10.0625px)", 0.6, 0.7, 0.3)
    },
    {
      elements: ".header-item.about",
      preStyling: commonPreStyling("left"),
      animations: standardAnimationsForHeaderItem("left", "calc(5% - 10.0625px)", 0.8, 0.7, 0.3)
    },
    {
      elements: ".header-item.languages",
      preStyling: commonPreStyling("right"),
      animations: standardAnimationsForHeaderItem("right", "calc(20% - 20.125px)", 1.2, 0.5, 0.2)
    },
    {
      elements: ".header-item.skills",
      preStyling: commonPreStyling("left"),
      animations: standardAnimationsForHeaderItem("left", "calc(20% - 20.125px)", 1.4, 0.5, 0.2)
    },
    {
      elements: ".header-item.education",
      preStyling: commonPreStyling("right"),
      animations: standardAnimationsForHeaderItem("right", "calc(35% - 30.1875px)", 1.8, 0.3, 0.1)
    },
    {
      elements: ".header-item.experience",
      preStyling: commonPreStyling("left"),
      animations: standardAnimationsForHeaderItem("left", "calc(35% - 30.1875px)", 2.0, 0.3, 0.1)
    }
  ], finalBlow);
}
