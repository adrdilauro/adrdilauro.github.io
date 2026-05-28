function initialAnimation () {
  var extracted = {}, howManyExtracted = 0, current;

  function recursiveRunBall () {
    if (howManyExtracted === 36) return;
    current = parseInt(Math.random() * (36 - howManyExtracted)) + 1;
    convertToNotExtracted();
    storeToExtracted();
    runBall(convertSide(current), convertPosition(current), (howManyExtracted === 36));
    setTimeout(function () {
      recursiveRunBall();
    }, 200);
  }

  function storeToExtracted () {
    extracted[current] = true;
    howManyExtracted += 1;
  }

  function runBall (side, position, final) {
    var finalLeft = calcFinalLeft(side, position), duration = calcDuration(side, position);
    tradeWind.run([
      {
        elements: ".ball.go.ball-" + side + "-" + position,
        animations: [
          {
            property: "top",
            animationDetails: {
              duration: duration + "s",
              easing: "ease-out"
            },
            final: "calc(100% + 7.5px)"
          },
          {
            property: "left",
            animationDetails: {
              duration: duration + "s",
              easing: "ease-in"
            },
            final: finalLeft
          }
        ]
      },
      {
        elements: ".ball.back.ball-" + side + "-" + position,
        preStyling: [
          {
            property: "top",
            value: "-15px"
          },
          {
            property: "left",
            value: finalLeft
          }
        ],
        animations: [
          {
            property: "top",
            animationDetails: {
              duration: duration + "s",
              easing: "ease-in",
              delay: (2.5 - duration) + "s"
            },
            final: finalBackTop(side, position)
          },
          {
            property: "left",
            animationDetails: {
              duration: duration + "s",
              easing: "ease-out",
              delay: (2.5 - duration) + "s"
            },
            final: finalBackLeft(side, position)
          }
        ]
      }
    ], function () {
      if (final) showImage();
    });
  }

  function bigConversionOfBalls () {
    var instructions = [], side, position, instruction, details;
    setTimeout(function () {
      coverAnimation();
    }, 1000);
    for (var i = 1; i <= 36; i++) {
      side = convertSide(i);
      position = convertPosition(i);
      details = {
        duration: "0.15s",
        easing: "linear",
        delay: ((i - 1) * 0.05) + "s"
      };
      instruction = {
        elements: ".ball.back.ball-" + side + "-" + position,
        animations: [
          {
            property: (side === 1 || side === 3) ? "width" : "height",
            animationDetails: details,
            final: "42px"
          },
          {
            property: "border-radius",
            animationDetails: details,
            final: "0px"
          }
        ]
      };
      if (side === 1) {
        instruction.animations.push({
          property: "height",
          animationDetails: details,
          final: "10px"
        });
        instruction.animations.push({
          property: "top",
          animationDetails: details,
          final: "calc(50% + 126px)"
        });
      }
      if (side === 2) {
        instruction.animations.push({
          property: "top",
          animationDetails: details,
          final: calculateTopPositionOfExpandedElementOnSideOneFour(position)
        });
        instruction.animations.push({
          property: "width",
          animationDetails: details,
          final: "10px"
        });
        instruction.animations.push({
          property: "left",
          animationDetails: details,
          final: "calc(50% + 100px)"
        });
      }
      if (side === 3) {
        instruction.animations.push({
          property: "left",
          animationDetails: details,
          final: calculateLeftPositionOfExpandedElementOnSideOne(position)
        });
        instruction.animations.push({
          property: "height",
          animationDetails: details,
          final: "10px"
        });
        instruction.animations.push({
          property: "top",
          animationDetails: details,
          final: "calc(50% - 135px)"
        });
      }
      if (side === 4) {
        instruction.animations.push({
          property: "width",
          animationDetails: details,
          final: "10px"
        });
        instruction.animations.push({
          property: "left",
          animationDetails: details,
          final: "calc(50% - 110px)"
        });
      }
      instructions.push(instruction);
    }
    instructions.push({
      elements: "#photo-container",
      animations: [
        {
          property: "opacity",
          animationDetails: {
            duration: "3.4s"
          },
          final: "1"
        }
      ]
    });
    tradeWind.run(instructions, function () {
      moveUpPhoto()
    });
  }
  
  function moveUpPhoto () {
    var balls = document.querySelectorAll(".ball");
    for (var i = 0; i < balls.length; i++) balls[i].style.display = "none";
    var details = {
      duration: "2s"
    };
    tradeWind.run([
      {
        elements: "#photo-container",
        animations: [
          {
            property: "width",
            animationDetails: details,
            final: "63.74px"
          },
          {
            property: "height",
            animationDetails: details,
            final: "80px"
          },
          {
            property: "top",
            animationDetails: details,
            final: "0px"
          },
          {
            property: "left",
            animationDetails: details,
            final: "calc(50% - 31.87px)"
          }
        ]
      },
      {
        elements: ".new-borders.top",
        preStyling: [
          {
            property: "display",
            value: "block"
          }
        ],
        animations: [
          {
            property: "height",
            animationDetails: details,
            final: "0px"
          },
          {
            property: "width",
            animationDetails: details,
            final: "63.74px"
          },
          {
            property: "top",
            animationDetails: details,
            final: "0px"
          },
          {
            property: "left",
            animationDetails: details,
            final: "calc(50% - 31.87px)"
          }
        ]
      },
      {
        elements: ".new-borders.right",
        preStyling: [
          {
            property: "display",
            value: "block"
          }
        ],
        animations: [
          {
            property: "width",
            animationDetails: details,
            final: "0px"
          },
          {
            property: "height",
            animationDetails: details,
            final: "80px"
          },
          {
            property: "top",
            animationDetails: details,
            final: "0px"
          },
          {
            property: "left",
            animationDetails: details,
            final: "calc(50% + 31.87px)"
          }
        ]
      },
      {
        elements: ".new-borders.bottom",
        preStyling: [
          {
            property: "display",
            value: "block"
          }
        ],
        animations: [
          {
            property: "height",
            animationDetails: details,
            final: "0px"
          },
          {
            property: "width",
            animationDetails: details,
            final: "63.74px"
          },
          {
            property: "top",
            animationDetails: details,
            final: "80px"
          },
          {
            property: "left",
            animationDetails: details,
            final: "calc(50% - 31.87px)"
          }
        ]
      },
      {
        elements: ".new-borders.left",
        preStyling: [
          {
            property: "display",
            value: "block"
          }
        ],
        animations: [
          {
            property: "height",
            animationDetails: details,
            final: "80px"
          },
          {
            property: "width",
            animationDetails: details,
            final: "0px"
          },
          {
            property: "top",
            animationDetails: details,
            final: "2px"
          },
          {
            property: "left",
            animationDetails: details,
            final: "calc(50% - 31.87px)"
          }
        ]
      }
    ], function () {
      var newBorders = document.querySelectorAll(".new-borders");
      for (var i = 0; i < newBorders.length; i++) newBorders[i].style.display = "none";
      createHeader();
    });
  }

  function calculateTopPositionOfExpandedElementOnSideOneFour (position) {
    return {
      10: "calc(50% - 134.5px)",
      9:  "calc(50% - 109.5px)",
      8:  "calc(50% - 84.5px)",
      7:  "calc(50% - 59.5px)",
      6:  "calc(50% - 34.5px)",
      5:  "calc(50% - 9.5px)",
      4:  "calc(50% + 16.5px)",
      3:  "calc(50% + 41.5px)",
      2:  "calc(50% + 66.5px)",
      1:  "calc(50% + 91.5px)"
    }[position];
  }

  function calculateLeftPositionOfExpandedElementOnSideOne (position) {
    return {
      8: "calc(50% - 109.5px)",
      7: "calc(50% - 84.5px)",
      6: "calc(50% - 59.5px)",
      5: "calc(50% - 34.5px)",
      4: "calc(50% - 9.5px)",
      3: "calc(50% + 16.5px)",
      2: "calc(50% + 41.5px)",
      1: "calc(50% + 65.5px)"
    }[position];
  }

  function showImage () {
    setTimeout(function () {
      bigConversionOfBalls();
    }, 500);
  }

  function finalBackTop (side, position) {
    if (side === 1) return "calc(50% + 118.5px)";
    if (side === 3) return "calc(50% - 132.5px)";
    if (side === 2) {
      return {
        1:  "calc(50% + 118.5px)",
        2:  "calc(50% + 93.5px)",
        3:  "calc(50% + 68.5px)",
        4:  "calc(50% + 43.5px)",
        5:  "calc(50% + 18.5px)",
        6:  "calc(50% - 7.5px)",
        7:  "calc(50% - 32.5px)",
        8:  "calc(50% - 57.5px)",
        9:  "calc(50% - 82.5px)",
        10: "calc(50% - 107.5px)"
      }[position];
    } else {
      return {
        1:  "calc(50% - 132.5px)",
        2:  "calc(50% - 107.5px)",
        3:  "calc(50% - 82.5px)",
        4:  "calc(50% - 57.5px)",
        5:  "calc(50% - 32.5px)",
        6:  "calc(50% - 7.5px)",
        7:  "calc(50% + 18.5px)",
        8:  "calc(50% + 43.5px)",
        9:  "calc(50% + 68.5px)",
        10: "calc(50% + 93.5px)"
      }[position];
    }
  }

  function finalBackLeft (side, position) {
    if (side === 2) return "calc(50% + 92.5px)";
    if (side === 4) return "calc(50% - 107.5px)";
    if (side === 1) {
      return {
        1:  "calc(50% - 107.5px)",
        2:  "calc(50% - 82.5px)",
        3:  "calc(50% - 57.5px)",
        4:  "calc(50% - 32.5px)",
        5:  "calc(50% - 7.5px)",
        6:  "calc(50% + 18.5px)",
        7:  "calc(50% + 43.5px)",
        8:  "calc(50% + 68.5px)"
      }[position];
    } else {
      return {
        1:  "calc(50% + 92.5px)",
        2:  "calc(50% + 67.5px)",
        3:  "calc(50% + 42.5px)",
        4:  "calc(50% + 17.5px)",
        5:  "calc(50% - 7.5px)",
        6:  "calc(50% - 32.5px)",
        7:  "calc(50% - 57.5px)",
        8:  "calc(50% - 82.5px)"
      }[position];
    }
  }

  function convertSide (x) {
    if (x <= 8) {
      return 1;
    } else if (x <= 18) {
      return 2;
    } else if (x <= 26) {
      return 3;
    } else {
      return 4;
    }
  }

  function convertPosition (x) {
    if (x <= 8) {
      return x;
    } else if (x <= 18) {
      return x - 8;
    } else if (x <= 26) {
      return x - 18;
    } else {
      return x - 26;
    }
  }

  function convertToNotExtracted () {
    var i = 1;
    while (current > 0) {
      if (!extracted[i]) current -= 1;
      i += 1;
    }
    current = i - 1;
  }

  function calcFinalLeft (side, position) {
    return {
      "1.5":  "calc(64% - 7.5px)",
      "1.6":  "calc(66% - 7.5px)",
      "1.7":  "calc(68% - 7.5px)",
      "1.8":  "calc(70% - 7.5px)",
      "2.1":  "calc(72% - 7.5px)",
      "2.2":  "calc(74% - 7.5px)",
      "2.3":  "calc(76% - 7.5px)",
      "2.4":  "calc(78% - 7.5px)",
      "2.5":  "calc(80% - 7.5px)",
      "2.6":  "calc(82% - 7.5px)",
      "2.7":  "calc(84% - 7.5px)",
      "2.8":  "calc(86% - 7.5px)",
      "2.9":  "calc(88% - 7.5px)",
      "2.10": "calc(90% - 7.5px)",
      "3.1":  "calc(92% - 7.5px)",
      "3.2":  "calc(94% - 7.5px)",
      "3.3":  "calc(96% - 7.5px)",
      "3.4":  "calc(98% - 7.5px)",
      "3.5":  "calc( 2% - 7.5px)",
      "3.6":  "calc( 4% - 7.5px)",
      "3.7":  "calc( 6% - 7.5px)",
      "3.8":  "calc( 8% - 7.5px)",
      "4.1":  "calc(10% - 7.5px)",
      "4.2":  "calc(12% - 7.5px)",
      "4.3":  "calc(14% - 7.5px)",
      "4.4":  "calc(16% - 7.5px)",
      "4.5":  "calc(18% - 7.5px)",
      "4.6":  "calc(20% - 7.5px)",
      "4.7":  "calc(22% - 7.5px)",
      "4.8":  "calc(24% - 7.5px)",
      "4.9":  "calc(26% - 7.5px)",
      "4.10": "calc(28% - 7.5px)",
      "1.1":  "calc(30% - 7.5px)",
      "1.2":  "calc(32% - 7.5px)",
      "1.3":  "calc(34% - 7.5px)",
      "1.4":  "calc(36% - 7.5px)"
    }[side + "." + position];
  }

  function calcDuration (side, position) {
    return {
      "1.5":  0.48,
      "1.6":  0.51,
      "1.7":  0.54,
      "1.8":  0.57,
      "2.1":  0.60,
      "2.2":  0.63,
      "2.3":  0.66,
      "2.4":  0.69,
      "2.5":  0.72,
      "2.6":  0.75,
      "2.7":  0.78,
      "2.8":  0.81,
      "2.9":  0.84,
      "2.10": 0.87,
      "3.1":  0.90,
      "3.2":  0.93,
      "3.3":  0.96,
      "3.4":  0.99,
      "3.5":  0.99,
      "3.6":  0.96,
      "3.7":  0.93,
      "3.8":  0.90,
      "4.1":  0.87,
      "4.2":  0.84,
      "4.3":  0.81,
      "4.4":  0.78,
      "4.5":  0.75,
      "4.6":  0.72,
      "4.7":  0.69,
      "4.8":  0.66,
      "4.9":  0.63,
      "4.10": 0.60,
      "1.1":  0.57,
      "1.2":  0.54,
      "1.3":  0.51,
      "1.4":  0.48
    }[side + "." + position];
  }

  function sourceDisappears () {
    var duration = "7s";
    tradeWind.run([
      {
        elements: "#start",
        animations: [
          {
            property: "width",
            animationDetails: {
              duration: duration,
              easing: "linear"
            },
            final: "15px"
          },
          {
            property: "height",
            animationDetails: {
              duration: duration,
              easing: "linear"
            },
            final: "15px"
          },
          {
            property: "top",
            animationDetails: {
              duration: duration,
              easing: "linear"
            },
            final: "calc(50% - 7.5px)"
          },
          {
            property: "left",
            animationDetails: {
              duration: duration,
              easing: "linear"
            },
            final: "calc(50% - 7.5px)"
          }
        ]
      }
    ], function () {
      document.getElementById("start").style.display = "none";
    });
  }

  function showLayer () {
    document.getElementById("layer").style.display = "block";
  }

  document.getElementById("start").style.backgroundColor = "#df0101";
  showLayer();
  recursiveRunBall();
  sourceDisappears();
}

