/*
CHALLENGE 1:
Tüm <img> etiketlerine mouseenter ve mouseleave eventleri ekleyin.
- Mouse üzerine geldiğinde (mouseenter): ilgili resme "grayscale" class'ı ekleyin.
- Mouse çıktığında (mouseleave): "grayscale" class'ını kaldırın.
*/
const images = document.querySelectorAll("img");

  images.forEach((gray) => {
      gray.addEventListener("mouseenter", () => {
        gray.classList.add("grayscale");
      })
      gray.addEventListener("mouseleave", () =>{
        gray.classList.remove("grayscale");
      })
    }
  );
/*
CHALLENGE 2:
Sayfa aktifken (herhangi bir yere tıklandığında), klavye dinlemeye başlasın.
- Klavyeden "1" tuşuna basılırsa <body> elementine "theme1" class'ı eklensin
- "2" → "theme2", "3" → "theme3" olarak eklensin
- "Escape" (Esc) tuşuna basılırsa body'deki tüm bu class'lar kaldırılsın
NOT: Klavye eventlerini document yerine **window** nesnesine ekleyin.
*/
window.addEventListener("keyup",(event) => {
console.log(event);
  if(event.key === "1"){
    document.body.classList.remove("theme2","theme3");
    document.body.classList.add("theme1");
  }else if(event.key === "2"){
    document.body.classList.remove("theme1","theme3");
    document.body.classList.add("theme2");
  }else if(event.key === "3"){
    document.body.classList.remove("theme2","theme1");
    document.body.classList.add("theme3");
  }else if(event.key === "Escape"){
    document.body.classList.remove("theme1","theme2","theme3");
  }
})
/*
CHALLENGE 3:
<input id="full_name"> alanına yazı yazıldıkça:
- Girilen metni otomatik olarak BÜYÜK HARFE çevirin
- Metin 5 karakterden UZUNSA <button> elementini "enabled" yapın
- Aksi halde (5 veya daha az karakter) buton "disabled" olmalı
*/
const yorumYazisi = document.getElementById("full_name");
yorumYazisi.addEventListener("input",(event) => {
  if(event.target.value.length < 5){
    document.querySelector("button").disabled = true;
  }else{
    document.querySelector("button").disabled = false;
  }
  event.target.value = event.target.value.toUpperCase();
})
/*
CHALLENGE 4:
Form submit edildiğinde (Kaydet butonuna basıldığında):
- Input alanındaki metni alıp, <p id="submitResult"> içerisine şu metni yazın:
  "{inputa_yazılan_metin} başarı ile kaydedildi."
- Input alanını temizleyin
- <button> tekrar disabled hale gelsin
*/
