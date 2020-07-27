let search = document.getElementById("searchInput");
let isSearch = [];
for (i=0; i<30; i++) {
  isSearch[i] = true;
}
search.addEventListener("keyup", event => {
  console.log('hi')
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("getSearch").click();
  }
})

const switchOption = siteId => {
  let shop = document.getElementById(siteId);
  if (isSearch[siteId]) {
    shop.style.backgroundColor = "#F44336";
    shop.innerHTML = `Disable`;
    console.log(shop);
    isSearch[siteId] = false;
  } else {
    shop.style.backgroundColor = "#4CAF50";
    shop.innerHTML = `Enable`;
    isSearch[siteId] = true;
  }
}

const switchOptionTrue = siteId => {
  let shop = document.getElementById(siteId);
    shop.style.backgroundColor = "#4CAF50";
    shop.innerHTML = `Enable`;
    isSearch[siteId] = true;
}

const switchOptionFalse = siteId => {
  let shop = document.getElementById(siteId);
    shop.style.backgroundColor = "#F44336";
    shop.innerHTML = `Disable`;
    isSearch[siteId] = false;
}

const selectAll = () => {
  for (i=0; i<30; i++) {
    switchOptionTrue(i);
  }
}

const clearAll = () => {
  for (i=0; i<30; i++) {
    switchOptionFalse(i);
  }
}

const selectOnlySearch = () => {
  for (i=0; i<13; i++) {
    switchOptionTrue(i);
  }
  switchOptionFalse(13);
  switchOptionFalse(14);
  switchOptionFalse(15);
}

const selectOnlyNoSearch = () => {
  for (i=0; i<13; i++) {
    switchOptionFalse(i);
  }
  switchOptionTrue(13);
  switchOptionTrue(14);
  switchOptionTrue(15);
}

const startSearch = () => {
  let searchWord = search.value;
  if (isSearch[0]) {
    window.open(`https://www.hktvmall.com/hktv/zh/search_a?keyword=${searchWord}`);
  }
  if (isSearch[1]) {
    window.open(`https://www.parknshop.com/zh-hk/search?code=ALL&text=${searchWord}&searchField=${searchWord}`);
  }
  if (isSearch[2]) {
    window.open(`https://www.ztore.com/tc/search/${searchWord}`);
  }
  if (isSearch[3]) {
    window.open(`https://www.watsons.com.hk/search?text=${searchWord}`);
  }
  if (isSearch[4]) {
    window.open(`https://www.omakasetoy.com/?product_cat=&s=${searchWord}&post_type=product`);
  }
  if (isSearch[5]) {
    window.open(`https://www.18gifts.com/?s=${searchWord}&page=search&post_type=product`);
  }
  if (isSearch[6]) {
    window.open(`https://www.sampsonstore.com/neovision/condom/product/search.is?product_name=${searchWord}`);
  }
  if (isSearch[7]) {
    window.open(`https://taketoys.hk/zh/search/?q=${searchWord}`);
  }
  if (isSearch[8]) {
    window.open(`https://www.18dsc.com.hk/index.php?route=product/search&search=${searchWord}&description=true`);
  }
  if (isSearch[9]) {
    window.open(`https://www.adultloving.hk/index.php?route=product/search&search=${searchWord}&description=true`);
  }
  if (isSearch[10]) {
    window.open(`https://lexy.com.hk/pages/search-results-page?q=${searchWord}`);
  }
  if (isSearch[11]) {
    window.open(`https://highlights.hk/index.php?search=${searchWord}&submit_search=&route=product%2Fsearch`);
    }
  if (isSearch[12]) {
    window.open(`https://ohyagroups.com/index.php?route=product/search&search=${searchWord}&description=true`);
  }
  if (isSearch[13]) {
    window.open(`https://tenga.hk/hk/tenga/products/`);
  }
  if (isSearch[14]) {
    window.open(`http://cupidotoy.com/`);
  }
  if (isSearch[15]) {
    window.open(`https://www.durex-shopline.com/products?query=${searchWord}`);
  }















}
