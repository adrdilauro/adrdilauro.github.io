(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var clickCounter = 0;
    var start = document.getElementById("start"), canGlow = true, clicked = false, alreadySelected = false;
    start.addEventListener("click", function () {
      ga('send', 'event', 'Interactions', 'Click start');
      clicked = true;
      start.classList.remove("glow");
      canGlow = false;
      initialAnimation();
    });
    start.addEventListener("mouseenter", function () {
      start.classList.remove("glow");
    });
    start.addEventListener("mouseleave", function () {
      if (!canGlow) return;
      start.classList.add("glow");
    });
    setTimeout(function () {
      if (clicked) return;
      ga('send', 'event', 'Interactions', 'Did not understand that he had to click');
      alert("Click on the disc!");
    }, 5000);
    setTimeout(function () {
      if (!canGlow) return;
      start.classList.add("glow");
    }, 3000);
    setTimeout(lazyLoadImages, 100);
    var headers = document.querySelectorAll(".header-item-content");
    for (var i = 0; i < headers.length; i++) {
      headers[i].addEventListener("mouseenter", function () {
        if (this.classList.contains("on")) return;
        var selector = "." + this.getAttribute("class").replace("-content ", ".");
        document.querySelectorAll(selector)[0].classList.add("on");
      });
      headers[i].addEventListener("mouseleave", function () {
        if (this.classList.contains("on")) return;
        var selector = "." + this.getAttribute("class").replace("-content ", ".");
        document.querySelectorAll(selector)[0].classList.remove("on");
      });
      headers[i].addEventListener("click", function () {
        ga('send', 'event', 'Interactions', 'Click menu', this.getAttribute("class"));
        if (clickCounter < 3) {
          switch(clickCounter) {
            case 0:
              ga('send', 'event', 'Sequence', 'First menu click', this.getAttribute("class"));
              break;
            case 1:
              ga('send', 'event', 'Sequence', 'Second menu click', this.getAttribute("class"));
              break;
            case 2:
              ga('send', 'event', 'Sequence', 'Third menu click', this.getAttribute("class"));
              break;
          }
          clickCounter += 1;
        }
        if (this.classList.contains("on")) return;
        var identifier, classList = this.classList;
        for (var j = 0; j < classList.length; j++) {
          if (classList[j] !== "header-item-content") identifier = classList[j];
        }
        if (alreadySelected) {
          var allHeaders = document.querySelectorAll(".header-item.on")
          for (var j = 0; j < allHeaders.length; j++) allHeaders[j].classList.remove("on");
          document.querySelectorAll(".header-item-content.on")[0].classList.remove("on");
        }
        alreadySelected = true;
        var selector = "." + this.getAttribute("class").replace("-content ", ".");
        document.querySelectorAll(selector)[0].classList.add("on");
        this.classList.add("on");
        reactToHeaderClick(identifier);
      });
    }
  });
}());

function lazyLoadImages () {
  var coverExtraction = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);

  function shuffle (o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  function isMobile () {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }

  var css = "", style = document.createElement('style'), imageAppendix = ".jpg";
  if (isMobile()) imageAppendix = "light.png";
  for (var i = 0; i < 6; i++) css += "#cover .cover" + (i + 1) + " { background-image: url(image/" + coverExtraction[i] + imageAppendix + "); }";
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.head.appendChild(style);
}

/*
require 'openssl'
require 'base64'
require 'securerandom'
require 'json'

def decrypt(encrypted_base64, passphrase)
  decoded = JSON.parse(Base64.decode64(encrypted_base64))
  salt = Base64.decode64(decoded['salt'])
  iv   = Base64.decode64(decoded['iv'])
  tag  = Base64.decode64(decoded['tag'])
  ciphertext = Base64.decode64(decoded['data'])
  iter = decoded['iter']

  key = OpenSSL::KDF.pbkdf2_hmac(
    passphrase,
    salt: salt,
    iterations: iter,
    length: 32,
    hash: 'SHA256'
  )

  cipher = OpenSSL::Cipher.new('aes-256-gcm')
  cipher.decrypt
  cipher.key = key
  cipher.iv = iv
  cipher.auth_tag = tag

  cipher.update(ciphertext) + cipher.final
end

# === Example Usage ===
secret = "My secret string"
password = "my$secure*passphrase"

encrypted = encrypt(secret, password)
puts "Encrypted: #{encrypted}"

decrypted = decrypt(encrypted, password)
puts "Decrypted: #{decrypted}"

decrypt('eyJzYWx0IjoiNkhncXdRUCswL2piZDlNd1QrNWdYdz09IiwiaXYiOiI5QTgxcnpXL0pkTTBKNGFLIiwidGFnIjoiSEY1cEVhcEw2ZjE1eVErMmFRSCtVZz09IiwiZGF0YSI6ImVIS3lpcjhzQm9FbWsrbnNFNjB2K2c9PSIsIml0ZXIiOjIwMDAwMH0=', '**[4]** con virgola e maiuscola')

*/
