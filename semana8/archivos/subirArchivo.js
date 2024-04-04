let fotoPerfil = "";

window.onload = function () {
  const boton = document.getElementById("btn-subir-archivo");

  let cloudinaryWidget = cloudinary.createUploadWidget(
    {
      cloudName: "dezdyauun",
      uploadPreset: "luiscascante",
    },
    function (error, result) {
      if (!error && result && result.event === "success") {
        fotoPerfil = result.info.url;
        // document.getElementById("foto_perfil").src = fotoPerfil;
        // thumbnailPerfil = result.info.thumbnail_url;
      }
    }
  );

  boton.addEventListener("click", function () {
    cloudinaryWidget.open();
  });
};
