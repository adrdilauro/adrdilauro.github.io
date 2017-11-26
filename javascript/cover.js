function coverAnimation () {
  var cover = document.getElementById("cover"), current = 1;

  cover.classList.add("show1");
  tradeWind.run([
    {
      elements: "#cover",
      animations: [
        {
          property: "opacity",
          animationDetails: {
            duration: "2.5s"
          },
          final: "1"
        }
      ]
    }
  ]);
  setTimeout(coverRecursion, 2000);

  function coverRecursion () {
    current += 1;
    if (current > 6) return;
    cover.classList.add("show" + current);
    cover.classList.remove("show" + (current - 1));
    setTimeout(coverRecursion, 600);
  }
}
