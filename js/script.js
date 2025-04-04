function conversor() {
    let valoreal = prompt("Digite um valor em Riot Points (apenas números)");
    let umriotpoint = 0.033;
    let resultado = valoreal * umriotpoint;
    alert("O valor convertido é de R$ " + resultado.toFixed(2));
  }  
  
  const music = document.getElementById("bg-music");
  const button = document.getElementById("music-toggle");

  let isPlaying = false;

  button.addEventListener("click", () => {
    if (isPlaying) {
      music.pause();
      button.innerText = "🎵 Tocar música";
    } else {
      music.play();
      button.innerText = "🔇 Pausar música";
    }
    isPlaying = !isPlaying;
  });


  const imagens = [
    "../img/Ahri.jpg",
    "../img/Yone.jpg",
    "../img/Aphelios.jpg",
    "../img/TFT.jpg",
    "../img/Nidalee.jpg",
    "../img/Evelynn.jpg",
    "../img/Ezreal.jpg"
  ];
  
  let indice = 0;
  
  // Pré-carrega todas as imagens para evitar atraso na primeira transição
  const preLoadImages = () => {
    return Promise.all(
      imagens.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        });
      })
    );
  };
  
  function trocarImagem() {
    const container = document.querySelector(".container");
    container.style.backgroundImage = `url('${imagens[indice]}')`;
    indice = (indice + 1) % imagens.length;
  }
  
 
  preLoadImages().then(() => {
    console.log("Todas as imagens carregadas!");
    trocarImagem(); 
    setInterval(trocarImagem, 3000); 
  });
  
  