$(document).ready(function(){

  //ddw menu
    $('#more').hover(function(){
        $(this).find('#more-ul').stop(true,true).slideDown('slow');
    },function(){
        $(this).find('#more-ul').stop(true,true).css('display','none');
    });

    $('#mockImg').hover(
      function(){
        $(this).attr('src','img/mockpic1.png');
    },
      function(){
        $(this).attr('src','img/mockpic2.png');
    });
    //showmore btn
    $('#about-social').hide();
    $('#show-more').click(function(){
      if($('#about-social').is(':visible')){
        $('#about-social').fadeOut('slow');
        $(this).val('Prikazi Vise');
      }else{
        $('#about-social').fadeIn('slow');
        $(this).val('Prikazi Manje');
      }
    });
    //phone tabs
    $('#tab div:not(:first)').removeClass('tab-border');
    $('.tab-item').click(function(){
      $('.tab-item').removeClass('tab-border');
      $(this).addClass('tab-border');
    })

    $('#apple').show();
    $('#samsung').hide();
    $('#huawei').hide();

    $('#tab-1').click(function(){
      $('#samsung').hide();
      $('#huawei').hide();
      $('#apple').show();
    });
    $('#tab-2').click(function(){
      $('#apple').hide();
      $('#huawei').hide();
      $('#samsung').show();
    });
    $('#tab-3').click(function(){
      $('#apple').hide();
      $('#samsung').hide();
      $('#huawei').show();
    });
});
//ham
document.querySelector('.menu-ham').addEventListener('click',function(){
  document.querySelector('#menu-nav').classList.toggle('showw');
})
// slider
var bgImg = ['img/4.jpg','img/3.jpg'];
var sec = 3;
function bgSlider(){
  window.clearTimeout();
  var x = 0;
  for(let i = 0; i < bgImg.length; i++){
    setTimeout(function(){
      document.getElementById('showcase').style.background = "url(" + bgImg[x] + ") center center / cover no-repeat";
      if((x + 1) == bgImg.length){
        setTimeout(bgSlider,sec*2000);
      }
      else{
        x++;
      }
    },(sec*2000)*i)
  }
}
bgSlider();
//dinamicko ispisivanje modela telefona na akciji
var nizSrc = ['img/action_iphone1.gif','img/action_iphone2.gif','img/action_huawei.gif','img/action_samsung.gif','img/action_sumsung2.gif','img/action_huawei2.gif'];
var nizAlt = ['iphone 11','iphone se','huawei nova 5T','samsung A30','samsung note10','huawei honor 20 pro'];
var phoneBrand = ['Apple','Apple','Huawei','Samsung','Samsung','Huawei'];
var phoneModel = ['iphone 11 64GB','iphone se 256GB','nova 5T','A30 dual','galaxy note10','honor 20 pro'];
var phonePrice = [560 , 520 , 250 , 210, 495 ,365];

var phone = '';
for(let i = 0;i < phonePrice.length; i++){
    phone +=`
    <div class="card text-center">
        <div class="card-img">
            <img src="${nizSrc[i]}" alt="${nizAlt[i]}">
        </div>
        <div class="card-content">
            <p>${phoneBrand[i]}</p>
            <p class="model text-bold">${phoneModel[i]}</p>
            <p class="price">${phonePrice[i]} &euro;</p> 
            <a href="#tabs" class="btn text-bold">Kompletan ponuda</a>
    </div>
 </div>`
}
 document.getElementById('action').innerHTML = phone;
// dinamicko ispisivanje tabova
var nizBrand = ['apple','samsung','huawei'];
var tabs = '';
var x = 1;
for(let i = 0; i < nizBrand.length; i++){
  tabs += `<div class="tab-item tab-border" id="tab-${x}" >
                    <p>${nizBrand[i]}</p>
                </div>
               `
               x++;
}
tab.innerHTML = tabs;
 //Jquery plug-in
 $('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
//dinamicko ispisivanje kompletne ponude telefona
var nizSrcApple = ['img/iphone12.gif','img/iphone11promax.gif','img/iphone11pro.gif','img/action_iphone1.gif','img/iphone11promax.gif','img/iphone11pro.gif','img/action_iphone2.gif','img/action_iphone1.gif'];
var nizAltApple = ['iphone 12 64GB','iphone 11 pro max 256GB','iphone 11 pro 64gb','iphone 11 64GB','iphone pro max 64GB','iphone 11 pro 256GB','iphone se 256GB','iphone 11 256GB'];
var phonePriceApple = [890 , 999 , 785 , 560, 855 ,910, 520, 600];
var apple = '';
var br=1;
for(let i = 0;i < phonePriceApple.length; i++){
    apple +=`
    <div class="card text-center">
        <div class="card-img">
            <img src="${nizSrcApple[i]}" alt="${nizAltApple[i]}">
        </div>
        <div class="card-content">
            <p>Apple</p>
            <p class="model text-bold">${nizAltApple[i]}</p>
            <p class="price">${phonePriceApple[i]} &euro;</p> 
            <a href="#phone-content" id="phone-${br}" class="btn text-bold link-item">Detaljnije</a>
    </div>
 </div>`
 br++
}
document.getElementById('apple').innerHTML = apple;

var nizSrcSams = ['img/note20.gif','img/s20plus.gif','img/s20ultra.gif','img/action_samsung.gif','img/action_sumsung2.gif','img/note20ultra.gif'];
var nizAltSams = ['galaxy note20 dual','galaxy s20+','galaxy s20 ultra 5g','a30 dual','galaxy note10','galaxy note20 ultra','iphone 11 pro 256GB'];
var phonePriceSams = [940 , 600 , 970 , 210, 495 ,850];
var br = 9;
var sams = '';
for(let i = 0;i < phonePriceSams.length; i++){
    sams +=`
    <div class="card text-center">
        <div class="card-img">
            <img src="${nizSrcSams[i]}" alt="${nizAltSams[i]}">
        </div>
        <div class="card-content">
            <p>Samsung</p>
            <p class="model text-bold">${nizAltSams[i]}</p>
            <p class="price">${phonePriceSams[i]} &euro;</p> 
            <a href="#phone-content" id="phone-${br}" class="btn text-bold link-item">Detaljnije</a>
    </div>
 </div>`
 br++
}
samsung.innerHTML = sams;

var nizSrcHua = ['img/p40pro.gif','img/p30pro.gif','img/action_huawei.gif','img/action_huawei2.gif'];
var nizAltHua = ['p40 pro dual sim','p30 pro 8gb','nova 5T','honor 20 pro'];
var phonePriceHua = [580 , 550 , 250 , 365];
var br = 15;
var hua = '';
for(let i = 0;i < phonePriceHua.length; i++){
    hua +=`
    <div class="card text-center">
        <div class="card-img">
            <img src="${nizSrcHua[i]}" alt="${nizAltHua[i]}">
        </div>
        <div class="card-content">
            <p>Huawei</p>
            <p class="model text-bold">${nizAltHua[i]}</p>
            <p class="price">${phonePriceHua[i]} &euro;</p> 
            <a href="#phone-content" id="phone-${br}" class="btn text-bold link-item">Detaljnije</a>
    </div>
 </div>`
 br++;
}
huawei.innerHTML = hua;
//dinamicko ispisivanje tabele i forme
var brModela = 18;
var categories = ['Operativni Sistem','Ekran','Baterija','Memorija','Kamera'];
var brojac=1;
for(var x=0; x < brModela; x++){
var div = document.createElement('div');
div.setAttribute('id',`phone-${brojac}-content`);
div.setAttribute('class','content-item');
var phoneTable = document.createElement('div');
phoneTable.setAttribute('class','phone-table');
//tabela
var table = document.createElement('table');
table.setAttribute('class','table')
var headTable = document.createElement('thead');
table.appendChild(headTable);
var headRow = document.createElement('tr');
headTable.appendChild(headRow);
var th = document.createElement('th');
th.setAttribute('colspan','2');
th.setAttribute('class','text-bold');
th.appendChild(document.createTextNode('osnovno'));
headRow.appendChild(th);
var bodyTable = document.createElement('tbody');
table.appendChild(bodyTable);
for(var i = 0;i<5;i++){
  var bodyRows = document.createElement('tr')
  for(var j = 0;j<2;j++){
    var td = document.createElement('td')
    if(j%2==0){
      td.appendChild(document.createTextNode(categories[i]));
      
    }else{
        td.appendChild(document.createTextNode(''));
        td.setAttribute('class','proba');
    }
    bodyRows.appendChild(td);
  }
  bodyTable.appendChild(bodyRows);
}

div.appendChild(phoneTable);
phoneTable.appendChild(table);
brojac++;
document.getElementById('phone-content').appendChild(div);
}
var tdTags = document.querySelectorAll('.proba');
var specs = ['iOS 14','Super Retina XDR (OLED)','2815mAh Li-Ion','64GB','12Mpx','iOS 13','Super Retina XDR (OLED)','3969mAh Li-Ion','256GB','12Mpx','iOS 13','Super Retina XDR (OLED)','3046mAh Li-Ion neizmenjiva','64GB','12Mpx','iOS13','IPS (LCD)','3110mAh Li-Ion neizmenjiva','64GB','12Mpx','iOS 13','Super Retina XDR (OLED)','3969mAh Li-Ion neizmenjiva','64GB','12Mpx','iOS 13','Super Retina XDR (OLED)','3969mAh Li-Ion neizmenjiva','256GB','12Mpx','iOS 13','Retina IPS (LCD)','1821mAh Li-Ion neizmenjiva','256GB','12Mpx','iOS 13','IPS (LCD)','3110mAh Li-Ion neizmenjiva','256GB','12Mpx','Android 10','Super AMOLED (OLED)','4300mAh Li-Ion neizmenjiva','256GB','12Mpx','Androind 10','Dynamic AMOLED (OLED)','4500mAh Li-Po neizmenjiva','128GB','12Mpx','Android 10','Dynamic AMOLED (OLED)','4500mAh Li-Po neizmenjiva','128GB','108Mpx','Android 9','Super AMOLED (OLED)','4000mAh Li-Po neizmenjiva','32GB','25Mpx','Android 9','Dynamic AMOLED (OLED)','3500mAh Li-Ion neizmenjiva','256GB','12Mpx','Android 10','Dynamic AMOLED (OLED)','4500mAh Li-Ion neizmenjiva','256GB','108Mpx','Android 10 Open Source','OLED (OLED)','4200mAh Li-Po neizmenjiva','128GB','50Mpx','Android 9','OLED (OLED)','4200mAh Li-Po neizmenjiva','128GB','40Mpx','Android 9 ','IPS (LCD)','3750mAh Li-Po neizmenjiva','128GB','48Mpx','Android 9','IPS (LCD)','4000mAh Li-Po neizmenjiva','256GB','48Mpx'];

for(let i =0;i<specs.length;i++){
    tdTags[i].innerHTML = specs[i];
}
//forma
var formName = ['name','mail','zipcode','adres','phone'];
var formId = ['imePrezime','email','zip','adress','number'];
var formPH = ['Ime i prezime','Email','Postanski broj','Adresa','Broj telefona'];
var formErr = ['Ime i prezime moraju početi velikim slovom i sadržati minimalno po 3 karaktera','Niste uneli validnu email adresu','Niste uneli validan poštanski broj','Niste uneli validnu adresu','Niste uneli validan broj'];
var forma = document.createElement('form');
forma.setAttribute('method','POST');
forma.setAttribute('id','order');
forma.setAttribute('name','form1');
var naslov = document.createElement('h2');
naslov.appendChild(document.createTextNode('Naruci'));
forma.appendChild(naslov)
for(let p = 0; p < formName.length; p++){
  var divContol = document.createElement('div');
  divContol.setAttribute('class','form-contol');
  var ulaz = document.createElement('input');
  ulaz.setAttribute('type','text');
  ulaz.setAttribute('name',formName[p]);
  ulaz.setAttribute('id',formId[p]);
  ulaz.setAttribute('placeholder',formPH[p]);
  ulaz.setAttribute('class','provera');
  var greska = document.createElement('p')
  greska.appendChild(document.createTextNode(formErr[p]))
  greska.setAttribute('class','show-err')
  divContol.appendChild(ulaz)
  forma.appendChild(divContol);
  forma.appendChild(greska)
}
var btnSubmit = document.createElement('input');
btnSubmit.setAttribute('type','button');
btnSubmit.setAttribute('value','Naruci');
btnSubmit.setAttribute('id','orderNow');
btnSubmit.setAttribute('class','btn');
forma.appendChild(btnSubmit);
var result = document.createElement('p');
result.setAttribute('id','res');
result.setAttribute('class','hide');
result.appendChild(document.createTextNode('Uspesno ste naručili uredjaj!'))
forma.appendChild(result);
var phoneForm = document.createElement('div');
phoneForm.className = 'phone-form card content-item';
phoneForm.appendChild(forma);
document.getElementById('phone-content').appendChild(phoneForm);
//pronadji detalje za bas taj model
var linkItems = document.querySelectorAll('.link-item');
var contentItems = document.querySelectorAll('.content-item');
function orderNow(){
  hideItems();
   let show = document.querySelector(`#${this.id}-content`);
   show.classList.add('show');
   document.querySelector('.phone-form').classList.add('show');
}
function hideItems(){
  contentItems.forEach(function(item){
    item.classList.remove('show')
  })
}
linkItems.forEach(function(item){
  item.addEventListener('click',orderNow)
});

//form events
document.getElementById('imePrezime').addEventListener('blur',validateName);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('zip').addEventListener('blur',validateZip);
document.getElementById('adress').addEventListener('blur',validateAdress);
document.getElementById('number').addEventListener('blur',validateNumber);
var err;
function validateName(){
  let name = document.getElementById('imePrezime');
  let re = /^[A-ZŠĐĆČŽ][a-zšđčćž]{2,11}(\s[A-ZŠĐĆČŽ][a-zšđčćž]{2,15})+$/
  err=0;
  if(!re.test(name.value)){
    name.classList.add('border-err')
    name.parentElement.nextElementSibling.classList.add('show2');
    name.classList.remove('good');
    err++;
  }else{
    name.classList.remove('border-err');
    name.parentElement.nextElementSibling.classList.remove('show2');
    name.classList.add('good');
  }
}
function validateEmail(){
  let email = document.getElementById('email');
  let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  err= 0;
  if(!re.test(email.value)){
    email.classList.remove('good');
    email.classList.add('border-err');
    email.parentElement.nextElementSibling.classList.add('show2');
    err++
  }else{
    email.classList.remove('border-err');
    email.parentElement.nextElementSibling.classList.remove('show2');
    email.classList.add('good');
  }
}
function validateZip(){
  let zip = document.getElementById('zip');
  let re = /^[0-9]{5}$/;
  err= 0;
  if(!re.test(zip.value)){
    zip.classList.remove('good');
    zip.classList.add('border-err');
    zip.parentElement.nextElementSibling.classList.add('show2');
    err++
  }else{
    zip.classList.remove('border-err');
    zip.parentElement.nextElementSibling.classList.remove('show2');
    zip.classList.add('good');
  }
}
function validateAdress(){
  let adress = document.getElementById('adress');
  let re = /^([A-ZŠĐĆČŽ][a-zšđčćž]{2,15}|[0-9])+(\s[A-ZŠĐĆČŽ[a-zšđčćž0-9\.\-]{2,20})+$/;
  err=0
  if(!re.test(adress.value)){
    adress.classList.remove('good');
    adress.classList.add('border-err');
    adress.parentElement.nextElementSibling.classList.add('show2');
    err++
  }else{
    adress.classList.remove('border-err');
    adress.parentElement.nextElementSibling.classList.remove('show2');
    adress.classList.add('good');
  }
}
function validateNumber(){
  let number = document.getElementById('number');
  let re =  /^(\+381[0-9]{8,9}|(06|01)[0-9]{7,8})$/;
  err=0
  if(!re.test(number.value)){
    number.classList.remove('good');
    number.classList.add('border-err');
    number.parentElement.nextElementSibling.classList.add('show2');
    err++
  }else{
    number.classList.remove('border-err');
    number.parentElement.nextElementSibling.classList.remove('show2');
    number.classList.add('good');
  }
}
//provera da li je ostavio sva polja prazna i resetovanje forme 
document.getElementById('orderNow').addEventListener('click',function(){
  if(document.getElementById('imePrezime').value == '' || document.getElementById('email').value == '' || document.getElementById('zip').value == '' || document.getElementById('adress').value == '' || document.getElementById('number').value == ''){
    document.getElementById('imePrezime').classList.add('border-err');
    document.getElementById('email').classList.add('border-err');
    document.getElementById('zip').classList.add('border-err');
    document.getElementById('adress').classList.add('border-err');
    document.getElementById('number').classList.add('border-err');
  }
  document.querySelectorAll('.provera').forEach(function(item){
    if(item.classList.contains('border-err')){
      document.getElementById('res').innerHTML = '';
    }
    else{
      document.getElementById('res').innerHTML = 'Uspešno ste naručili uređaj';
    }
  });
  if(err==0){
    document.getElementById('imePrezime').value = '';
    document.getElementById('imePrezime').classList.remove('good');
    document.getElementById('email').value = '';
    document.getElementById('email').classList.remove('good');
    document.getElementById('zip').value = '';
    document.getElementById('zip').classList.remove('good');
    document.getElementById('adress').value = '';
    document.getElementById('adress').classList.remove('good');
    document.getElementById('number').value = '';
    document.getElementById('number').classList.remove('good');
    document.getElementById('res').classList.add('show2');
  }
});
//dinamicko ispisivanje linkova u futeru
var linksName = ['Sitemap','JS','Dokumentacija'];
var linksHref = ['xml/sitemap.xml','js/main.js','dokumentacija_mobshop.pdf'];
var navVal = ['Početna','Akcija','O nama','Proizvodi','Autor'];
var navHref = ['index.html','#section-action','#about','#all-phones','#autor'];
var socialName =['Facebook','Instagram'];
var socialHref = ['https://www.facebook.com/filip.lazarevic.35/','https://www.instagram.com/lazarevic10/'];

var foterOutput = '<ul><h2>Navigacija</h2>';
for(let i = 0; i < navVal.length; i++){
  foterOutput +=`
            <li><a target="_blank" href="${navHref[i]}">${navVal[i]}</a></li>
  `
}
  foterOutput += '</ul>'
document.getElementById('navigacija').innerHTML = foterOutput;

var foterOutput1 = '<ul><h2>Mreže</h2>';
for(let i = 0; i < socialName.length; i++){
  foterOutput1 +=`
            <li><a target="_blank" href="${socialHref[i]}">${socialName[i]}</a></li>
  `
}
  foterOutput1 += '</ul>'
document.getElementById('mreze').innerHTML = foterOutput1;

var foterOutput2 = '<ul><h2>Korisni Linkovi</h2>';
for(let i = 0; i < linksName.length; i++){
  foterOutput2 +=`
            <li><a target="_blank" href="${linksHref[i]}">${linksName[i]}</a></li>
  `
}
  foterOutput2 += '</ul>';
document.getElementById('links').innerHTML = foterOutput2;