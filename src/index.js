import "./assets/css/normalize.css";

/** 
* Show Buquets 
*/
async function getbouquets() {
  let url = 'https://bouquets.herokuapp.com/bouquets';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

async function renderbouquets() {
  let bouquets = await getbouquets();
  let html = '';
  bouquets.forEach(bouquet => {
      let htmlSegment = `<div class="bouquet">
                          <img src="${bouquet.image}" >
                          <h2><b>${bouquet.name}</b></h2>
                          <h2>${bouquet.price}</h2>
                      </div>`;

      html += htmlSegment;
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
}

renderbouquets();