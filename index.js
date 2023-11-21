const arrayImg = [
  "https://i.blogs.es/ceda9c/dalle/450_1000.jpg",
  "https://cdn.shopify.com/s/files/1/0229/0839/files/bancos_de_imagenes_gratis.jpg?v=1630420628",
  "https://media.es.wired.com/photos/641b2076880298eb68cc9b8a/16:9/w_1280,c_limit/Todd_Namban_Create_a_photorrealistic_portrait_of_a_red_fox_usin_cd0b7e04-868d-45d4-beaf-b7515e6154ca.png",
  "https://imgv3.fotor.com/images/cover-photo-image/a-game-character-enchantress-wearing-red-clothes-and-horns-created-by-Fotor-ai-image-generator.jpg",
  "https://img.freepik.com/fotos-premium/impresionantes-fotografias-olas-agua_674594-15088.jpg",
  "https://i.blogs.es/d559d0/jlacort_happy_elephant_running_across_the_desert._4k_26e6e27c-dbd6-4b14-b8ba-ac0841f2c25f/450_1000.jpeg",
  "https://images.unsplash.com/photo-1598759310798-18f8497d9858?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
  "https://ichef.bbci.co.uk/news/640/cpsprodpb/4fef/live/26f28080-6ad1-11ee-8073-5b93bd1aa7db.jpg",
  "https://quo.eldiario.es/wp-content/uploads/2019/10/7-impactantes-imagenes-de-animales-salvajes-en-libertad.jpg",
  "https://www.eltiempo.com/files/image_640_428/uploads/2018/03/22/5ab428c6cda71.jpeg",
];

const section = document.createElement("section");
section.className = "galeria";


for (let i = arrayImg.length -1; i >= 0; i--){
    const divSection = document.createElement("div");
    const img = document.createElement("img");
    img.src = arrayImg[i];
    if (i === 3 || i === 7)img.className = "opaca";
    divSection.appendChild(img);
    section.appendChild(divSection);
    document.body.appendChild(section);
}
console.log(section);
