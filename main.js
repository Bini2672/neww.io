let numic = document.getElementById("numic");
let biniyam = document.getElementById("biniyam");
let mexcico = document.getElementById("tasfu");
let mikey = document.getElementById("mikey");
let elshdy = document.getElementById("elshdy");
let matila = document.getElementById("matila");
let ateyki = document.getElementById("natey");
let hjg = document.getElementById("hjg");
let nop = document.getElementById("nop");
let myMove = document.getElementById("myMove");
let one = document.getElementById("one");
let two = document.getElementById("two");
let ther = document.getElementById("ther");
let oref = document.getElementById("oref");
let five = document.getElementById("five");
let sicse = document.getElementById("sicse");
let seven = document.getElementById("seven");
let a = document.getElementById("a");
let naghen = document.getElementById("naghen");
let tewwati = document.getElementById("tewwati");
let tewatione = document.getElementById("tewati-one");
let tewatitwo = document.getElementById("tewati-two");
let tewatither = document.getElementById("tewati-ther");
let t = document.getElementById("maaa");
let tewatfive = document.getElementById("tewat-five");
let tewatsexe = document.getElementById("tewat-sexe");
let tewatiseven = document.getElementById("tewati-seven");
let tewatieghe = document.getElementById("tewati-eghet");
let tewatghen = document.getElementById("tewat-ghen");
let thertin = document.getElementById("thertin");

document.getElementById("opop").onclick = function () {
  let matcal = document.getElementById("demo").value;
  matcal = Math.floor(Math.random() * matcal) + 1;

  let tadie = document.getElementById("demm").value;
  tadie = Math.floor(Math.random() * tadie) + 1;

  let piyasa = document.getElementById("bjaje").value;
  piyasa = Math.floor(Math.random() * piyasa) + 1;

  let madingo = document.getElementById("toyoya").value;
  madingo = Math.floor(Math.random() * madingo) + 1;

  let tediafro = document.getElementById("taxsi").value;
  tediafro = Math.floor(Math.random() * tediafro) + 1;

  let tediafr = document.getElementById("makin").value;
  tediafr = Math.floor(Math.random() * tediafr) + 1;

  let tediaf = document.getElementById("isuzu").value;
  tediaf = Math.floor(Math.random() * tediaf) + 1;

  let tofic = document.getElementById("picup").value;
  tofic = Math.floor(Math.random() * tofic) + 1;

  let tedi = document.getElementById("affeser").value;
  tedi = Math.floor(Math.random() * tedi) + 1;

  let totite = document.getElementById("sinoko").value;
  totite = Math.floor(Math.random() * totite) + 1;

  if (matcal === 1) {
    document.getElementById("numic").innerHTML = matcal;
    numic.style.backgroundColor = "red";
    numic.style.color = "white";
  } else {
    document.getElementById("numic").innerHTML = "1";
  }
  if (tadie == 2) {
    document.getElementById("biniyam").innerHTML = tadie;
    biniyam.style.backgroundColor = "red";
    biniyam.style.color = "white";
  } else {
    document.getElementById("biniyam").innerHTML = "2";
  }
  if (piyasa === 3) {
    document.getElementById("tasfu").innerHTML = piyasa;
    mexcico.style.backgroundColor = "red";
    mexcico.style.color = "white";
  } else {
    document.getElementById("tasfu").innerHTML = "3";
  }
  if (madingo == 4) {
    document.getElementById("mikey").innerHTML = madingo;
    mikey.style.backgroundColor = "red";
    mikey.style.color = "white";
  } else {
    document.getElementById("mikey").innerHTML = "4";
  }
  if (tediafro == 5) {
    document.getElementById("elshdy").innerHTML = tediafro;
    elshdy.style.backgroundColor = "red";
    elshdy.style.color = "white";
  } else {
    document.getElementById("elshdy").innerHTML = "5";
  }
  if (tediafr == 6) {
    document.getElementById("matila").innerHTML = tediafr;
    matila.style.backgroundColor = "red";
    matila.style.color = "white";
  } else {
    document.getElementById("matila").innerHTML = "6";
  }

  if (tediaf == 7) {
    document.getElementById("natey").innerHTML = tediaf;
    ateyki.style.backgroundColor = "red";
    ateyki.style.color = "white";
  } else {
    document.getElementById("natey").innerHTML = "7";
  }
  
  if (tofic == 8) {
    document.getElementById("hjg").innerHTML = tofic;
    hjg.style.backgroundColor = "red";
    hjg.style.color = "white";
  } else {
    document.getElementById("hjg").innerHTML = "8";
  }

  if (tedi == 9) {
    document.getElementById("nop").innerHTML = tedi;
    nop.style.backgroundColor = "red";
    nop.style.color = "white";
  } else {
    document.getElementById("nop").innerHTML = "9";
  }

  if (totite == 10) {
    document.getElementById("myMove").innerHTML = totite;
    myMove.style.backgroundColor = "red";
    myMove.style.color = "white";
  } else {
    document.getElementById("myMove").innerHTML = "10";
  }

  //20//
  

  if (matcal === 21) {
    document.getElementById("tewati-one").innerHTML = matcal;
    tewatione.style.backgroundColor = "red";
    tewatione.style.color = "white";
  } else {
    document.getElementById("tewati-one").innerHTML = "21";
  }
  if (tadie == 12) {
    document.getElementById("two").innerHTML = tadie;
    two.style.backgroundColor = "red";
    two.style.color = "white";
  } else {
    document.getElementById("two").innerHTML = "12";
  }
  if (piyasa == 13) {
    document.getElementById("ther").innerHTML = piyasa;
    ther.style.backgroundColor = "red";
    ther.style.color = "white";
  } else {
    document.getElementById("ther").innerHTML = "13";
  }
  if (madingo == 14) {
    document.getElementById("oref").innerHTML = madingo;
    oref.style.backgroundColor = "red";
    oref.style.color = "white";
  } else {
    document.getElementById("oref").innerHTML = "14";
  }
  if (tediafro == 15) {
    document.getElementById("five").innerHTML = tediafro;
    five.style.backgroundColor = "red";
    five.style.color = "white";
  } else {
    document.getElementById("five").innerHTML = "15";
  }
  if (tediafr == 16) {
    document.getElementById("sicse").innerHTML = tediafr;
    sicse.style.backgroundColor = "red";
    sicse.style.color = "white";
  } else {
    document.getElementById("sicse").innerHTML = "16";
  }

  if (tediaf == 17) {
    document.getElementById("seven").innerHTML = tediaf;
    seven.style.backgroundColor = "red";
    seven.style.color = "white";
  } else {
    document.getElementById("seven").innerHTML = "17";
  }
  
  if (tofic == 18) {
    document.getElementById("a").innerHTML = tofic;
    a.style.backgroundColor = "red";
    a.style.color = "white";
  } else {
    document.getElementById("a").innerHTML = "18";
  }

  if (tedi == 19) {
    document.getElementById("naghen").innerHTML = tedi;
    naghen.style.backgroundColor = "red";
    naghen.style.color = "white";
  } else {
    document.getElementById("naghen").innerHTML = "19";
  }

  if (totite == 20) {
    document.getElementById("tewwati").innerHTML = totite;
    tewwati.style.backgroundColor = "red";
    tewwati.style.color = "white";
  } else {
    document.getElementById("tewwati").innerHTML = "20";
  }

  //30//
  
  if (matcal === 11) {
    document.getElementById("one").innerHTML = matcal;
    one.style.backgroundColor = "red";
    one.style.color = "white";
  } else {
    document.getElementById("one").innerHTML = "11";
  }
  if (tadie == 22) {
    document.getElementById("tewati-two").innerHTML = tadie;
    tewatitwo.style.backgroundColor = "red";
    tewatitwo.style.color = "white";
  } else {
    document.getElementById("tewati-two").innerHTML = "22";
  }
  if (piyasa == 23) {
    document.getElementById("tewati-ther").innerHTML = piyasa;
    tewatither.style.backgroundColor = "red";
    tewatither.style.color = "white";
  } else {
    document.getElementById("tewati-ther").innerHTML = "23";
  }
  if (madingo == 24 ) {
    document.getElementById("maaa").innerHTML = madingo;
    t.style.backgroundColor = "red";
    t.style.color = "white";
  } else {
    document.getElementById("maaa").innerHTML = "24";
  }
  if (tediafro == 25) {
    document.getElementById("tewat-five").innerHTML = tediafro;
    tewatfive.style.backgroundColor = "red";
    tewatfive.style.color = "white";
  } else {
    document.getElementById("tewat-five").innerHTML = "25";
  }
  if (tediafr == 26) {
    document.getElementById("tewat-sexe").innerHTML = tediafr;
    tewatsexe.style.backgroundColor = "red";
    tewatsexe.style.color = "white";
  } else {
    document.getElementById("tewat-sexe").innerHTML = "26";
  }

  if (tediaf == 27) {
    document.getElementById("tewati-seven").innerHTML = tediaf;
    tewatiseven.style.backgroundColor = "red";
    tewatiseven.style.color = "white";
  } else {
    document.getElementById("tewati-seven").innerHTML = "27";
  }
  
  if (tofic == 28) {
    document.getElementById("tewati-eghet").innerHTML = tofic;
    tewatieghe.style.backgroundColor = "red";
    tewatieghe.style.color = "white";
  } else {
    document.getElementById("tewati-eghet").innerHTML = "28";
  }

  if (tedi == 29) {
    document.getElementById("tewat-ghen").innerHTML = tedi;
    tewatghen.style.backgroundColor = "red";
    tewatghen.style.color = "white";
  } else {
    document.getElementById("tewat-ghen").innerHTML = "29";
  }

  if (totite == 30) {
    document.getElementById("thertin").innerHTML = totite;
    thertin.style.backgroundColor = "red";
    thertin.style.color = "white";
  } else {
    document.getElementById("thertin").innerHTML = "30";
  }

}

