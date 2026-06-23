// tombol daftar
const button = document.querySelector(".hero button");

if(button){
  button.addEventListener("click", () => {
    alert("Pendaftaran berhasil dibuka!");
  });
}

// tampil anggota kelompok
function toggleAnggota(){

  const anggotaBox = document.getElementById("anggotaBox");

  if(anggotaBox.style.display === "grid"){
    anggotaBox.style.display = "none";
  }else{
    anggotaBox.style.display = "grid";
  }

}

// popup fasilitas
function showImage(src){
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-img").src = src;
}

function closeImage(){
    document.getElementById("popup").style.display = "none";
}


