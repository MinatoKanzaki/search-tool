let search = document.getElementById("searchInput");
search.addEventListener("keyup", event => {
  console.log('hi')
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("getSearch").click();
  }
})

const startSearch = () => {
  let searchWord = search.value;
  window.open(`https://www.hktvmall.com/hktv/zh/search_a?keyword=${searchWord}`);
  window.open(`https://www.omakasetoy.com/?product_cat=&s=${searchWord}&post_type=product`);
  window.open(`https://www.sampsonstore.com/neovision/condom/product/search.is?product_name=${searchWord}`);
  window.open(`https://taketoys.hk/zh/search/?q=${searchWord}`);
  window.open(`https://www.18gifts.com/?s=${searchWord}&page=search&post_type=product`);
  window.open(`https://www.18dsc.com.hk/index.php?route=product/search&search=${searchWord}&description=true`);
  window.open(`https://www.adultloving.hk/index.php?route=product/search&search=${searchWord}&description=true`);
  window.open(`https://www.parknshop.com/zh-hk/search?code=ALL&text=${searchWord}&searchField=${searchWord}`);
  window.open(`https://www.watsons.com.hk/search?text=${searchWord}`);
  window.open(`https://www.ztore.com/tc/search/${searchWord}`);
  window.open(`https://highlights.hk/index.php?search=${searchWord}&submit_search=&route=product%2Fsearch`);
  window.open(`https://ohyagroups.com/index.php?route=product/search&search=${searchWord}&description=true`);
  window.open(`https://www.durex-shopline.com/products`);
  window.open(`https://tenga.hk/hk/tenga/products/`);
  window.open(`http://cupidotoy.com/`);
}
