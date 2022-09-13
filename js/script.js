const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Escolha uma imagem";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});


const inputFile1 = document.querySelector("#picture__input1");
const pictureImage1 = document.querySelector(".picture__image1");
const pictureImageTxt1 = "Escolha uma imagem";
pictureImage1.innerHTML = pictureImageTxt1;

inputFile1.addEventListener("change", function (e) {
  const inputTarget1 = e.target;
  const file1 = inputTarget1.files[0];

  if (file1) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img1");

      pictureImage1.innerHTML = "";
      pictureImage1.appendChild(img);
    });

    reader.readAsDataURL(file1);
  } else {
    pictureImage1.innerHTML = pictureImageTxt1;
  }
});


const inputFile2 = document.querySelector("#picture__input2");
const pictureImage2 = document.querySelector(".picture__image2");
const pictureImage3 = document.querySelector(".picture__image3");
const pictureImage4 = document.querySelector(".picture__image4");
const pictureImage5 = document.querySelector(".picture__image5");
const pictureImage6 = document.querySelector(".picture__image6");
const pictureImage7 = document.querySelector(".picture__image7");
const pictureImage8 = document.querySelector(".picture__image8");
const pictureImage9 = document.querySelector(".picture__image9");
const pictureImage10 = document.querySelector(".picture__image10");
const pictureImage11 = document.querySelector(".picture__image11");
const pictureImage12 = document.querySelector(".picture__image12");
const pictureImage13 = document.querySelector(".picture__image13");


inputFile2.addEventListener("change", function (e) {
  const inputTarget2 = e.target;
  const file2 = inputTarget2.files[0];

  if (file2) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;



        const img = document.createElement("img");
        const img1 = document.createElement("img");
        const img2 = document.createElement("img");
        const img3 = document.createElement("img");
        const img4 = document.createElement("img");
        const img5 = document.createElement("img");
        const img6 = document.createElement("img");
        const img7 = document.createElement("img");
        const img8 = document.createElement("img");
        const img9 = document.createElement("img");
        const img10 = document.createElement("img");
        const img11 = document.createElement("img");

        img.src = readerTarget.result;
        img1.src = readerTarget.result;
        img2.src = readerTarget.result;
        img3.src = readerTarget.result;
        img4.src = readerTarget.result;
        img5.src = readerTarget.result;
        img6.src = readerTarget.result;
        img7.src = readerTarget.result;
        img8.src = readerTarget.result;
        img9.src = readerTarget.result;
        img10.src = readerTarget.result;
        img11.src = readerTarget.result;

        img.classList.add("picture__img2"); 
        img1.classList.add("picture__img2"); 
        img2.classList.add("picture__img2"); 
        img3.classList.add("picture__img2"); 
        img4.classList.add("picture__img2"); 
        img5.classList.add("picture__img2"); 
        img6.classList.add("picture__img2"); 
        img7.classList.add("picture__img2"); 
        img8.classList.add("picture__img2"); 
        img9.classList.add("picture__img2"); 
        img10.classList.add("picture__img2"); 
        img11.classList.add("picture__img2"); 
  


        pictureImage2.innerHTML = "";
        pictureImage2.appendChild(img);
      
        pictureImage3.innerHTML = "";
        pictureImage3.appendChild(img1);

        pictureImage4.innerHTML = "";
        pictureImage4.appendChild(img2);

        pictureImage5.innerHTML = "";
        pictureImage5.appendChild(img3);
        
        pictureImage6.innerHTML = "";
        pictureImage6.appendChild(img4);
        
        pictureImage7.innerHTML = "";
        pictureImage7.appendChild(img5);
        
        pictureImage8.innerHTML = "";
        pictureImage8.appendChild(img6);
                
        pictureImage9.innerHTML = "";
        pictureImage9.appendChild(img7);

        pictureImage10.innerHTML = "";
        pictureImage10.appendChild(img8);

        pictureImage11.innerHTML = "";
        pictureImage11.appendChild(img9);

        pictureImage12.innerHTML = "";
        pictureImage12.appendChild(img10);

        pictureImage13.innerHTML = "";
        pictureImage13.appendChild(img11);

       // pictureImage13.style = 'background-image:url'
      //  document.getElementsByTagName("body")[0].style = 'background-image:url("noite.jpg");'
      });


    reader.readAsDataURL(file2);
  } else {
    pictureImage2.innerHTML = pictureImageTxt2;
  }
});


function funcaodata(){

  var datatxt = window.document.getElementsByClassName('data')

  var data = new Date()
  var dia = data.getDate()
  var ano = data.getFullYear()
  var mes = data.toLocaleString("pt-Br", { month: "long" });
  var text = `${dia} de ${mes} de ${ano}.`
  
  for (let i = 0; i < datatxt.length; i++) {
      datatxt[i].innerHTML = text
  }


}

function funcaonome() {
  let nomealuno = prompt("Digite o seu nome:", "Nome");
  let text;

  let person = prompt("Digite o nome do personagem escolhido:", "Nome");


  if (person == null || person == "") {
    person = prompt("Digite o nome do personagem escolhido:", "Nome");
  } else {
    text = person;
  }
  var nomeperson = document.getElementsByClassName("personname")


  for (var i = 0; i < nomeperson.length; i++) {
    nomeperson[i].innerHTML = text
}



  var nameluno = document.getElementById("namealuno")
  nameluno.innerHTML = nomealuno

}


function onSelectImage(event) {
	// se usuário não selecionou nenhum imagem não faça nada
	if (!event.target.files.length) return;

	// aqui pegaremos a primeira imagem da lista: FileList
	var selectedFile = event.target.files[0];

	// FileReader https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
	var reader = new FileReader();

	// assim que terminar de ler a imagem
	// jogá-la como plano de fundo da div#image-area
	reader.onload = function(event) {
		document.querySelector('#image-area').style.background = "url('" + event.target.result + "') no-repeat 0 0";
	};

	// Informa ao reader para ler a image como base64
	reader.readAsDataURL(selectedFile);
}

function onSelectImage1(event) {
	if (!event.target.files.length) return;

	var selectedFile = event.target.files[0];

	var reader = new FileReader();

	reader.onload = function(event) {
		document.querySelector('#image-area1').style.background = "url('" + event.target.result + "') no-repeat 0 0";
	};

	
	reader.readAsDataURL(selectedFile);
}

function onSelectImage2(event) {
	if (!event.target.files.length) return;

	var selectedFile = event.target.files[0];

	var reader = new FileReader();

	reader.onload = function(event) {
		document.querySelector('#image-area2').style.background = "url('" + event.target.result + "') no-repeat 0 0";
	};

	
	reader.readAsDataURL(selectedFile);
}


function onSelectImage3(event) {
	if (!event.target.files.length) return;

	var selectedFile = event.target.files[0];

	var reader = new FileReader();

	reader.onload = function(event) {
		document.querySelector('#image-area3').style.background = "url('" + event.target.result + "') no-repeat 0 0";
	};

	
	reader.readAsDataURL(selectedFile);
}


function onSelectImage4(event) {
	if (!event.target.files.length) return;

	var selectedFile = event.target.files[0];

	var reader = new FileReader();

	reader.onload = function(event) {
		document.querySelector('#image-area4').style.background = "url('" + event.target.result + "') no-repeat 0 0";
	};

	
	reader.readAsDataURL(selectedFile);
}

function onSelectImage5(event) {
	if (!event.target.files.length) return;

	var selectedFile = event.target.files[0];

	var reader = new FileReader();

	reader.onload = function(event) {
		document.querySelector('#image-area5').style.background = "url('" + event.target.result + "') no-repeat 0 0";
	};

	
	reader.readAsDataURL(selectedFile);
}
