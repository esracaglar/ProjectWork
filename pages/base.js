'use strict';
let I;

module.exports = {

  _init() {
    I = actor();
  },


  // top menu items
  logo:{css:'a.logo'}, 
  searchText:{css:'#searchText'},
  detailSearch:{css:"a[href='https://www.sahibinden.com/arama/detayli']"},
  login:{css:'li.login-text'},
  register:{css:'li.register-text'},
  newclassified:{css:'li.new-classified'},
  mainSearchButton :{css:"button[type='submit']"},
  
  // left menu items
  vehicle:{css:"a[href='/kategori/vasita']"},
  automobile:{css:"a[href='/kategori/otomobil']"},
  suv:{css:"a[href='/kategori/arazi-suv-pickup']"},
  motorcycle:{css:"a[href='/kategori/motosiklet']"},	
  
  // search items
  vehicles:{css:"span[href='/arama/detayli?category=3517']"},
  motorcycles:{css:"span[href='/arama/detayli?category=3532']"},
  mt07ABS:'https://www.sahibinden.com/arama/detayli?category=221415',
  minYear:{css:"input[name='a269_min']"},
  maxYear:{css:"input[name='a269_max']"},
  searchButton:{css:"button.btn.mtdef"},
  searchResult:{css:"div.result-text.estimated-result-text span:nth-child(3)"},
  numberOfImages:{css:"ul.vitrin-list.clearfix li img"},
  color:{xpath:"//select[@id='a1331']/following-sibling::div/div/span"},  
  notFound: 'Arama filtrelerinize uygun ilan bulunamadı.',
  motorcycleyamaha:{css:"li.category-level-3517 ul li a"},
  footerMenu:{css:'div#cookiePolicy'},
  grey: 'Gri'
}