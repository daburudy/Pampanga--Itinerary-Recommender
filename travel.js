

 let reservation = document.getElementById("container-add")
let tripPlace = document.getElementById("trip-name")
let title = document.getElementById("title")
function reser() {
    if (reservation.style.display == "none") {
        reservation.style.display = "block"
    }
    else {
        reservation.style.display = "none"
    }
}
/*the mapping */
let welcome = localStorage.getItem("sample")
let nameX = document.getElementById('nameX')
let itsChoice = document.getElementById('your-choice')
let mapStay = document.getElementById("mapstay")
let pictures = document.getElementById("place-pic")
let mapPlace = document.getElementById("map")
let description = document.getElementById("what-is-it")
let place = document.getElementById("places-to-stay")
let bg = document.getElementById("background-image")
let mapping = localStorage.getItem("place")
let visitors = document.getElementById('welcome-days')

let guestSet = localStorage.getItem("guest")
let firstPic = document.getElementById("hey1")
let secPic = document.getElementById("hey2")
let thirdPic = document.getElementById("hey3")
let fourthPic = document.getElementById("hey4")
let fifthPic = document.getElementById("hey5")
let sixthPic = document.getElementById("hey6")
let sevenPic = document.getElementById("hey7")
let depart = document.getElementById("depart")



if (welcome == '1 Day')  {
  visitors.innerHTML =   welcome
  document.getElementById('numOne').style.display = 'block'
  document.getElementById('numTwo').style.display = 'none'
  document.getElementById('numThree').style.display = 'none'
  document.getElementById('numFour').style.display = 'none'
  document.getElementById('numFive').style.display = 'none'
  document.getElementById('numSix').style.display = 'none'
  document.getElementById('numSeven').style.display = 'none'
  document.getElementById('holder1').style.display = 'block'
  document.getElementById('holder2').style.display = 'none'
  document.getElementById('holder3').style.display = 'none'
  document.getElementById('holder4').style.display = 'none'
  document.getElementById('holder5').style.display = 'none'
  document.getElementById('holder6').style.display = 'none'
  document.getElementById('holder7').style.display = 'none'

}

else if (welcome == '2 Days' ) {
  visitors.innerHTML =   welcome
  document.getElementById('numOne').style.display = 'block'
  document.getElementById('numTwo').style.display = 'block'
  document.getElementById('numThree').style.display = 'none'
  document.getElementById('numFour').style.display = 'none'
  document.getElementById('numFive').style.display = 'none'
  document.getElementById('numSix').style.display = 'none'
  document.getElementById('numSeven').style.display = 'none'
  document.getElementById('holder1').style.display = 'block'
  document.getElementById('holder2').style.display = 'block'
  document.getElementById('holder3').style.display = 'none'
  document.getElementById('holder4').style.display = 'none'
  document.getElementById('holder5').style.display = 'none'
  document.getElementById('holder6').style.display = 'none'
  document.getElementById('holder7').style.display = 'none'
}

else if  (welcome =='3 Days' ) {
  visitors.innerHTML =   welcome
  document.getElementById('numOne').style.display = 'block'
  document.getElementById('numTwo').style.display = 'block'
  document.getElementById('numThree').style.display = 'block'
  document.getElementById('numFour').style.display = 'none'
  document.getElementById('numFive').style.display = 'none'
  document.getElementById('numSix').style.display = 'none'
  document.getElementById('numSeven').style.display = 'none'
  document.getElementById('holder1').style.display = 'block'
  document.getElementById('holder2').style.display = 'block'
  document.getElementById('holder3').style.display = 'block'
  document.getElementById('holder4').style.display = 'none'
  document.getElementById('holder5').style.display = 'none'
  document.getElementById('holder6').style.display = 'none'
  document.getElementById('holder7').style.display = 'none'
}

else if  (welcome == '4 Days' ) {
  visitors.innerHTML =   welcome 
  document.getElementById('numOne').style.display = 'block'
  document.getElementById('numTwo').style.display = 'block'
  document.getElementById('numThree').style.display = 'block'
  document.getElementById('numFour').style.display = 'block'
  document.getElementById('numFive').style.display = 'none'
  document.getElementById('numSix').style.display = 'none'
  document.getElementById('numSeven').style.display = 'none'
  document.getElementById('holder1').style.display = 'block'
  document.getElementById('holder2').style.display = 'block'
  document.getElementById('holder3').style.display = 'block'
  document.getElementById('holder4').style.display = 'block'
  document.getElementById('holder5').style.display = 'none'
  document.getElementById('holder6').style.display = 'none'
  document.getElementById('holder7').style.display = 'none'
}
else if  (welcome == '5 Days' ) {
  visitors.innerHTML =   welcome 
  document.getElementById('numOne').style.display = 'block'
  document.getElementById('numTwo').style.display = 'block'
  document.getElementById('numThree').style.display = 'block'
  document.getElementById('numFour').style.display = 'block'
  document.getElementById('numFive').style.display = 'block'
  document.getElementById('numSix').style.display = 'none'
  document.getElementById('numSeven').style.display = 'none'
  document.getElementById('holder1').style.display = 'block'
  document.getElementById('holder2').style.display = 'block'
  document.getElementById('holder3').style.display = 'block'
  document.getElementById('holder4').style.display = 'block'
  document.getElementById('holder5').style.display = 'block'
  document.getElementById('holder6').style.display = 'none'
  document.getElementById('holder7').style.display = 'none'
}
else if  (welcome == '6 Days' ) {
  visitors.innerHTML =   welcome 
  document.getElementById('numOne').style.display = 'block'
  document.getElementById('numTwo').style.display = 'block'
  document.getElementById('numThree').style.display = 'block'
  document.getElementById('numFour').style.display = 'block'
  document.getElementById('numFive').style.display = 'block'
  document.getElementById('numSix').style.display = 'block'
  document.getElementById('numSeven').style.display = 'none'
  document.getElementById('holder1').style.display = 'block'
  document.getElementById('holder2').style.display = 'block'
  document.getElementById('holder3').style.display = 'block'
  document.getElementById('holder4').style.display = 'block'
  document.getElementById('holder5').style.display = 'block'
  document.getElementById('holder6').style.display = 'block'
  document.getElementById('holder7').style.display = 'none'
}
else if  (welcome =='7 Days' ) {
  visitors.innerHTML =   welcome 
  document.getElementById('numOne').style.display = 'block'
  document.getElementById('numTwo').style.display = 'block'
  document.getElementById('numThree').style.display = 'block'
  document.getElementById('numFour').style.display = 'block'
  document.getElementById('numFive').style.display = 'block'
  document.getElementById('numSix').style.display = 'block'
  document.getElementById('numSeven').style.display = 'block'
  document.getElementById('holder1').style.display = 'block'
  document.getElementById('holder2').style.display = 'block'
  document.getElementById('holder3').style.display = 'block'
  document.getElementById('holder4').style.display = 'block'
  document.getElementById('holder5').style.display = 'block'
  document.getElementById('holder6').style.display = 'block'
  document.getElementById('holder7').style.display = 'block'
}
/*san fernando*/
localStorage.getItem('hi1')
localStorage.getItem('hi2')
localStorage.getItem('hi3')
localStorage.getItem('hi4')
localStorage.getItem('hi5')
localStorage.getItem('hi6')
localStorage.getItem('hi7')
/*guagua*/
localStorage.getItem('hi8')
localStorage.getItem('hi9')
localStorage.getItem('hi10')
localStorage.getItem('hi11')
localStorage.getItem('hi12')
localStorage.getItem('hi13')
localStorage.getItem('hi14')
/*florida*/
localStorage.getItem('hi15')
localStorage.getItem('hi16')
localStorage.getItem('hi17')
localStorage.getItem('hi18')
localStorage.getItem('hi19')
localStorage.getItem('hi20')
localStorage.getItem('hi21')
/*porac*/
localStorage.getItem('hi22')
localStorage.getItem('hi23')
localStorage.getItem('hi24')
localStorage.getItem('hi25')
localStorage.getItem('hi26')
localStorage.getItem('hi27')
localStorage.getItem('hi28')
/*arayat*/
localStorage.getItem('hi29')
localStorage.getItem('hi30')
localStorage.getItem('hi31')
localStorage.getItem('hi32')
localStorage.getItem('hi33')
localStorage.getItem('hi34')
localStorage.getItem('hi35')
/*apalit*/
localStorage.getItem('hi36')
localStorage.getItem('hi37')
localStorage.getItem('hi38')
localStorage.getItem('hi39')
localStorage.getItem('hi40')
localStorage.getItem('hi41')
localStorage.getItem('hi42')
/*candaba*/
localStorage.getItem('hi43')
localStorage.getItem('hi44')
localStorage.getItem('hi45')
localStorage.getItem('hi46')
localStorage.getItem('hi47')
localStorage.getItem('hi48')
localStorage.getItem('hi49')
/*macabebe*/
localStorage.getItem('hi50')
localStorage.getItem('hi51')
localStorage.getItem('hi52')
localStorage.getItem('hi53')
localStorage.getItem('hi54')
localStorage.getItem('hi55')
localStorage.getItem('hi56')
/*sasmuan*/
localStorage.getItem('hi57')
localStorage.getItem('hi58')
localStorage.getItem('hi59')
localStorage.getItem('hi60')
localStorage.getItem('hi61')
localStorage.getItem('hi62')
localStorage.getItem('hi63')
/*san luis*/
localStorage.getItem('hi64')
localStorage.getItem('hi65')
localStorage.getItem('hi66')
localStorage.getItem('hi67')
localStorage.getItem('hi68')
localStorage.getItem('hi69')
localStorage.getItem('hi70')
/*san simon*/
localStorage.getItem('hi71')
localStorage.getItem('hi72')
localStorage.getItem('hi73')
localStorage.getItem('hi74')
localStorage.getItem('hi75')
localStorage.getItem('hi76')
localStorage.getItem('hi77')
/*mexico*/
localStorage.getItem('hi78')
localStorage.getItem('hi79')
localStorage.getItem('hi80')
localStorage.getItem('hi81')
localStorage.getItem('hi82')
localStorage.getItem('hi83')
localStorage.getItem('hi84')
/*minalin*/
localStorage.getItem('hi85')
localStorage.getItem('hi86')
localStorage.getItem('hi87')
localStorage.getItem('hi88')
localStorage.getItem('hi89')
localStorage.getItem('hi90')
localStorage.getItem('hi91')
/*santa rita*/
localStorage.getItem('hi92')
localStorage.getItem('hi93')
localStorage.getItem('hi94')
localStorage.getItem('hi95')
localStorage.getItem('hi96')
localStorage.getItem('hi97')
localStorage.getItem('hi98')
/*santo tomas*/
localStorage.getItem('hi09')
localStorage.getItem('hi100')
localStorage.getItem('hi101')
localStorage.getItem('hi102')
localStorage.getItem('hi103')
localStorage.getItem('hi104')
localStorage.getItem('hi105')
/*santa ana*/
localStorage.getItem('hi106')
localStorage.getItem('hi107')
localStorage.getItem('hi108')
localStorage.getItem('hi109')
localStorage.getItem('hi110')
localStorage.getItem('hi111')
localStorage.getItem('hi112')
/*magalang*/
localStorage.getItem('hi113')
localStorage.getItem('hi114')
localStorage.getItem('hi115')
localStorage.getItem('hi116')
localStorage.getItem('hi117')
localStorage.getItem('hi118')
localStorage.getItem('hi119')
/*mabalacat*/
localStorage.getItem('hi120')
localStorage.getItem('hi121')
localStorage.getItem('hi122')
localStorage.getItem('hi123')
localStorage.getItem('hi124')
localStorage.getItem('hi125')
localStorage.getItem('hi126')
/*bacolor*/
localStorage.getItem('hi127')
localStorage.getItem('hi128')
localStorage.getItem('hi129')
localStorage.getItem('hi130')
localStorage.getItem('hi131')
localStorage.getItem('hi132')
localStorage.getItem('hi133')
/*angeles*/
localStorage.getItem('hi134')
localStorage.getItem('hi135')
localStorage.getItem('hi136')
localStorage.getItem('hi137')
localStorage.getItem('hi138')
localStorage.getItem('hi139')
localStorage.getItem('hi140')
/*lubao*/
localStorage.getItem('hi141')
localStorage.getItem('hi142')
localStorage.getItem('hi143')
localStorage.getItem('hi144')
localStorage.getItem('hi145')
localStorage.getItem('hi146')
localStorage.getItem('hi147')

let theValue = document.getElementById("myText1")

if (mapping == "San Fernando, Pampanga") {
  document.getElementById('from').innerHTML = 'San Fernando' 
   mapStay.innerHTML ='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20in%20san%20fernando%20pampanga%20san%20fernando%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">'
    mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20san%20fernando%20pampanga%20san%20fernando%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
    title.innerHTML = "Trip to San Fernando, Pampanga"
    tripPlace.innerHTML = "Trip to San Fernando Pamp."
    pictures.src = "sanfernando/sky.jpg"
    bg.src = "sanfernando/sky.jpg"
    place.innerHTML = "San Fernando, Pampanga"
    nameX.innerHTML =  "San Fernando, Pampanga"
    description.innerHTML ="The town of San Fernando was founded in 1754 from the towns of Bacolor and Mexico. The first church was built in 1755 with wooden walls and nipa roofing. The municipal tribunal was erected later in the year in front of the town plaza using durable materials and thatched nipa roofing. Don Vidal de Arrozal served as its first gobernadorcillo that year."
    document.getElementById('things3').innerHTML = 'Relaxing &emsp;•'

    document.getElementById('text1').value = localStorage.getItem('hi1')
    document.getElementById('text2').value = localStorage.getItem('hi2')
    document.getElementById('text3').value = localStorage.getItem('hi3')
    document.getElementById('text4').value = localStorage.getItem('hi4')
    document.getElementById('text5').value = localStorage.getItem('hi5')
    document.getElementById('text6').value = localStorage.getItem('hi6')
    document.getElementById('text7').value = localStorage.getItem('hi7')
     
    /*sports complex*/
    if (localStorage.getItem('hi1') == 'Bren Z. Guiao Sports Complex' ) {
      document.getElementById('title-spts').innerHTML = 'Bren Z. Guiao Sports Complex'
      document.getElementById('yr-pic').src = 'images/brenz.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '3.5'
      document.getElementById('spotsz').innerHTML = ' Sports Complex · Gym'
      document.getElementById('ninu').innerHTML= ' The Bren Z. Guiao Sports Complex and Convention Center is a sports complex located in San Fernando, Pampanga, Philippines'
 /*day2*/
     document.getElementById('title-spots2').innerHTML = 'AJ Amboy Sports'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = ' Sports'
     document.getElementById('ninu2').innerHTML= ' San Fernando Sports Complex'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sindalan Sports Complex'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '3.9'
     document.getElementById('spotsz3').innerHTML = ' Sports'
     document.getElementById('ninu3').innerHTML= 'San Fernando Sports Complex'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Philippines Sports Performance Plus'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '5.0'
    document.getElementById('spotsz4').innerHTML = ' Sports'
    document.getElementById('ninu4').innerHTML= ' Gym in San Fernando City'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML= ' None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = ' None'
 document.getElementById('ninu6').innerHTML= ' None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML = ' None'
document.getElementById('ninu7').innerHTML= ' None'


    }
    /*shopping*/
    
    else if  (localStorage.getItem('hi1') == 'North Walk' ) {
      document.getElementById('title-spts').innerHTML = 'North Walk Clark'
      document.getElementById('yr-pic').src = 'images/north.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '3.5'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= ' Shopping mall in San Fernando '
   
      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sm City Pampanga'
     document.getElementById('yr-pic2').src = 'images/Smp.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = ' Shopping'
     document.getElementById('ninu2').innerHTML= ' Shopping mall in San Fernando'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Walter Mart'
     document.getElementById('yr-pic3').src = 'images/wmsf.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = ' Shopping'
     document.getElementById('ninu3').innerHTML= '  Shopping mall in San Fernando'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Sm City Down Town'
    document.getElementById('yr-pic4').src = 'images/downtown.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = ' Shopping'
    document.getElementById('ninu4').innerHTML= '  Shopping mall in San Fernando'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Vista Mall'
   document.getElementById('yr-pic5').src = 'images/vmsf.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = ' Shopping'
   document.getElementById('ninu5').innerHTML= '  Shopping mall in San Fernando'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Sm City Telabastagan'
 document.getElementById('yr-pic6').src = 'images/telebastagan.jpg'
 document.getElementById('hide6').style.color = 'orange'
 document.getElementById('rating6').innerHTML = '4.4'
 document.getElementById('spotsz6').innerHTML = ' Shopping'
 document.getElementById('ninu6').innerHTML= '  Shopping mall in San Fernando'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Robinsons Starmills'
document.getElementById('yr-pic7').src = 'images/rbs.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML = ' Shopping'
document.getElementById('ninu7').innerHTML= '  Shopping mall in San Fernando'

    }

    /*historical*/
    else if (localStorage.getItem('hi1') == 'San Fernando Train Station' ) {
      document.getElementById('title-spts').innerHTML = 'San Fernando Train Station'
      document.getElementById('yr-pic').src = 'images/sfts.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'Historical landmark in San Fernando City'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'City Hall Of San Fernando'
     document.getElementById('yr-pic2').src = 'images/city.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.6'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML= 'Business center in San Fernando City.' 

 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Pampanga Capitol'
     document.getElementById('yr-pic3').src = 'images/capitol.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '3.6'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML= 'Local government office in San Fernando City'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Lazatin House'
    document.getElementById('yr-pic4').src = 'images/lzh.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.6'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML= 'Historical landmark in San Fernando City.'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Ocampo Hizon House'
   document.getElementById('yr-pic5').src = 'images/ocampo.jpg'
   document.getElementById('hide5').style.color = 'orange'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML= ' Historic House in San Fernando'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Dayrit Cuyugan House'
 document.getElementById('yr-pic6').src = 'images/dayrit.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML= '  Historic House in San Fernando'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Cuyugan-Baron House'
document.getElementById('yr-pic7').src = 'images/baron.jpg'
document.getElementById('hide7').style.color = 'orange'
document.getElementById('rating7').innerHTML = '4.4'
document.getElementById('spotsz7').innerHTML = 'History'
document.getElementById('ninu7').innerHTML= '  Historic House in San Fernando'


    }
    /*nature*/
    else if (localStorage.getItem('hi1') ==  "TPKIF NATURE'S FARM" ) {
      document.getElementById('title-spts').innerHTML = "TPKIF NATURE'S FARM"
      document.getElementById('yr-pic').src = 'images/tfk.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Farm '
      document.getElementById('ninu').innerHTML= 'Natural farming embracing back to basic agriculture.' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'St. Jude Village Park'
     document.getElementById('yr-pic2').src = 'images/jude.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML= 'Village hall in San Fernando City'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML= '  None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML= ' None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML= ' None'
 /*day6*/
  document.getElementById('ttle-spts6').innerHTML = 'None'
  document.getElementById('yr-pic6').src = 'images/usedata.jpg'
  document.getElementById('hide6').style.color = 'None'
  document.getElementById('rating6').innerHTML = 'None'
  document.getElementById('spotsz6').innerHTML = 'None'
  document.getElementById('ninu6').innerHTML= '  None'
/*day7*/
 document.getElementById('ttle-spts7').innerHTML = 'None'
 document.getElementById('yr-pic7').src = 'images/usedata.jpg'
 document.getElementById('hide7').style.color = 'None'
 document.getElementById('rating7').innerHTML = 'None'
 document.getElementById('spotsz7').innerHTML = ' None'
document.getElementById('ninu7').innerHTML= '  None'


    }
    /*nature history*/
 else if (localStorage.getItem('hi1') == "City Hall Of San Fernando") {
      document.getElementById('title-spts').innerHTML = "City Hall Of San Fernando"
      document.getElementById('yr-pic').src = 'images/city.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.6'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Business center in San Fernando City.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Pampanga Capitol'
     document.getElementById('yr-pic2').src = 'images/capitol.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '3.6'
     document.getElementById('spotsz2').innerHTML = ' History'
     document.getElementById('ninu2').innerHTML= 'Local government office in San Fernando City'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'San Fernando Train Station'
     document.getElementById('yr-pic3').src = 'images/sfts.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML= 'Historical landmark in San Fernando City'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Lazatin House'
    document.getElementById('yr-pic4').src = 'images/lzh.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.6'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML= 'Historical landmark in San Fernando City.'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Ocampo Hizon House'
   document.getElementById('yr-pic5').src = 'images/ocampo.jpg'
   document.getElementById('hide5').style.color = 'orange'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML= ' Historic House in San Fernando'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Dayrit Cuyugan House'
 document.getElementById('yr-pic6').src = 'images/dayrit.jpg'
 document.getElementById('hide6').style.color = '4.3'
 document.getElementById('rating6').innerHTML = 'gray'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML= ' Historic House in San Fernando'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Cuyugan-Baron House'
document.getElementById('yr-pic7').src = 'images/baron.jpg'
document.getElementById('hide7').style.color = 'orange'
document.getElementById('rating7').innerHTML = '4.4'
document.getElementById('spotsz7').innerHTML = ' History'
document.getElementById('ninu7').innerHTML= 'Historic House in San Fernando'


    }
     /*nature shopping*/
    else if (localStorage.getItem('hi1') ==  "SM City Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "SM City Pampanga"
      document.getElementById('yr-pic').src = 'images/Smp.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Shopping mall in San Fernando City.' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'St. Jude Village Park'
     document.getElementById('yr-pic2').src = 'images/jude.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML= 'Village hall in San Fernando City'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'SM CIty Down Town'
     document.getElementById('yr-pic3').src = 'images/downtown.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML= 'Shopping mall in San Fernando City.'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "TPKIF NATURE'S FARM"
    document.getElementById('yr-pic4').src = 'images/tfk.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Nature'
    document.getElementById('ninu4').innerHTML= 'Natural farming embracing back to basic agriculture.'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'SM City Telebastagan'
   document.getElementById('yr-pic5').src = 'images/telebastagan.jpg'
   document.getElementById('hide5').style.color = 'orange'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML= 'Shopping mall in San Fernando City.'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Robinson Starmill'
 document.getElementById('yr-pic6').src = 'images/rbs.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'shopping'
 document.getElementById('ninu6').innerHTML= 'Shopping mall in San Fernando City'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Vista Mall'
document.getElementById('yr-pic7').src = 'images/vmsf.jpg'
document.getElementById('hide7').style.color = 'orange'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML = 'Shopping'
document.getElementById('ninu7').innerHTML= 'Shopping mall in San Fernando'


    }
     /*nature sports*/
    else if (localStorage.getItem('hi1') ==  "St. Jude Village Park" ) {
      document.getElementById('title-spts').innerHTML = "St. Jude Village Park"
      document.getElementById('yr-pic').src = 'images/jude.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Village hall in San Fernando City.'
      
      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Bren Z Guiao Sport Complex'
     document.getElementById('yr-pic2').src = 'images/brenz.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '3.5'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML= 'Sports Complex Gym in San Fernando'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = "TPKIF NATURE'S FARM"
     document.getElementById('yr-pic3').src = 'images/tfk.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML= 'Natural farming embracing back to basic agriculture.'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Aj Amboy Sports'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Sports'
    document.getElementById('ninu4').innerHTML= 'San Fernando Sports Complex'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Sindalan Sports Complex'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '3.9'
   document.getElementById('spotsz5').innerHTML = 'Sports'
   document.getElementById('ninu5').innerHTML= 'San Fernando Sports Complex'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Philippines Sports Perfomance Plus'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'orange'
 document.getElementById('rating6').innerHTML = '5.0'
 document.getElementById('spotsz6').innerHTML = 'Sports'
 document.getElementById('ninu6').innerHTML= 'San Fernando Sports Complex'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML = 'None'
document.getElementById('ninu7').innerHTML= 'None'


    }
     /*history shopping*/
    else if (localStorage.getItem('hi1') ==  "Sm City Downtown" ) {
      document.getElementById('title-spts').innerHTML = "Sm City Downtown"
      document.getElementById('yr-pic').src = 'images/downtown.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Shopping mall in San Fernando City.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Ocampo Hizon House'
     document.getElementById('yr-pic2').src = 'images/ocampo.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML= 'Village hall in San Fernando City'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sm City Pampanga'
     document.getElementById('yr-pic3').src = 'images/Smp.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML= ' Shopping Mall in San Fernando'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Metropolitan Cathedral San Fernando'
    document.getElementById('yr-pic4').src = 'images/metro.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML= 'Catholic cathedral in San Fernando City'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Robinson Starmill'
   document.getElementById('yr-pic5').src = 'images/rbs.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML= 'Shopping Mall in San Fernando'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Dayrit Cuyugan House'
 document.getElementById('yr-pic6').src = 'images/dayrit.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML= 'Historic House of San Fernando'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Vista mall'
document.getElementById('yr-pic7').src = 'images/vmsf.jpg'
document.getElementById('hide7').style.color = 'orange'
document.getElementById('rating7').innerHTML = '4.4'
document.getElementById('spotsz7').innerHTML = 'Shopping'
document.getElementById('ninu7').innerHTML= 'Historic House of San Fernando'


    }
     /*history sports*/
    else if (localStorage.getItem('hi1') ==  "Philippines Sports Performance" ) {
      document.getElementById('title-spts').innerHTML = "Philippines Sports Performance"
      document.getElementById('yr-pic').src = 'images/pspp.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating2').innerHTML = '5.0'
      document.getElementById('spotsz').innerHTML = ' Sport '
      document.getElementById('ninu').innerHTML= 'San Fernando Pampanga.'
      
       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Aj Amboy Sports Complex'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML= 'Village hall in San Fernando City'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sindalan Sports Complex'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '3.9'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML= ' San Fernando Sports Complex'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Bren Z Guiao Sport Complex'
    document.getElementById('yr-pic4').src = 'images/brenz.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '3.5'
    document.getElementById('spotsz4').innerHTML = 'Sports'
    document.getElementById('ninu4').innerHTML= 'Sports Complex of San Fernando'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML= ' None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML= '  None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML = ' None'
document.getElementById('ninu7').innerHTML= '  None'


}
     /*shopping sports*/
    else if (localStorage.getItem('hi1') ==  "Sm City Telabastagan" ) {
      document.getElementById('title-spts').innerHTML = "Sm City Telabastagan"
      document.getElementById('yr-pic').src = 'images/telebastagan.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating2').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Shopping mall in San Fernando City.' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Bren Z. Guiao Sports Complex'
     document.getElementById('yr-pic2').src = 'images/brenz.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating').innerHTML = '3.5'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML= 'Sports Complex of San Fernando'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'SM City Pampanga'
     document.getElementById('yr-pic3').src = 'images/Smp.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML= '  Shopping mall in San Fernando'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Aj Amboy Sports Complex'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML= 'San Fernando Sports Complex'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'SM City Downtown'
   document.getElementById('yr-pic5').src = 'images/downtown.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML= 'Shopping mall in San Fernando'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Vista Mall'
 document.getElementById('yr-pic6').src = 'images/vmsf.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML= ' Shopping mall in San Fernando'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Robinson Starmills'
document.getElementById('yr-pic7').src = 'images/rbs.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML = 'Shopping'
document.getElementById('ninu7').innerHTML= 'Shopping mall in San Fernando'


    }
     /*nature history shopping*/
    else if (localStorage.getItem('hi1') ==  "Heroes Hall- City Hall" ) {
      document.getElementById('title-spts').innerHTML = "Heroes Hall - City Hall"
      document.getElementById('yr-pic').src = 'images/heroes.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.6'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Government office in San Fernando City.' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sm City Pampanga'
     document.getElementById('yr-pic2').src = 'images/Smp.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML= 'Shopping mall in San Fernando'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'San Fernando City Hall'
     document.getElementById('yr-pic3').src = 'images/city.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML= 'Business center in San Fernando City'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Robinsons Starmills'
    document.getElementById('yr-pic4').src = 'images/rbs.jpg'
    document.getElementById('hide4').style.color = 'Shopping'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping mall in San Fernando'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Datu Bundalian House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.0'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML= 'Historic House of San Fernandoi'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Sm City Telebastagan'
 document.getElementById('yr-pic6').src = 'images/telebastagan.jpg'
 document.getElementById('hide6').style.color = 'Orange'
 document.getElementById('rating6').innerHTML = '4.4'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML= 'Shopping mall in San Fernando'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Leaning Tower of San Fernando'
document.getElementById('yr-pic7').src = 'images/lean.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML = 'History'
document.getElementById('ninu7').innerHTML= "Historical landmark in San Fernando City"


    }
     /*nature history sports*/
    else if (localStorage.getItem('hi1') ==  "Pampanga Capitol" ) {
      document.getElementById('title-spts').innerHTML = "Pampanga Capitol"
      document.getElementById('yr-pic').src = 'images/capitol.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '3.6'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Local government office in San Fernando City.' 

 /*day2*/
     document.getElementById('title-spots2').innerHTML = 'City Hall of Sanfernando'
     document.getElementById('yr-pic2').src = 'images/city.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.6'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML= 'Business Center in San Fernando'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Bren Z. Guiao'
     document.getElementById('yr-pic3').src = 'images/brenz.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '3.5'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML= 'Sports Complex in San Fernando'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Lazatin House'
    document.getElementById('yr-pic4').src = 'images/lzh.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.6'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML= 'Historical landmark in San Fernando City.'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Philippine Sports Performance Plus'
   document.getElementById('yr-pic5').src = 'images/pspp.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML= ' None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Sindalan Sports Complex'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'orange'
 document.getElementById('rating6').innerHTML = '4.5'
 document.getElementById('spotsz6').innerHTML = 'Sports'
 document.getElementById('ninu6').innerHTML= ' Sports Complex in San Fernando City'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Metropolitan Cathedral of Sanfernando'
document.getElementById('yr-pic7').src = 'images/metro.jpg'
document.getElementById('hide7').style.color = 'orange'
document.getElementById('rating7').innerHTML = '4.5'
document.getElementById('spotsz7').innerHTML = 'History'
document.getElementById('ninu7').innerHTML= 'Catholic cathedral in San Fernando City.'


    }
     /*nature shopping sports*/
    else if (localStorage.getItem('hi1') ==  "Robinson Starmills" ) {
      document.getElementById('title-spts').innerHTML = "Robinson Starmills"
      document.getElementById('yr-pic').src = 'images/rbs.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Shopping mall in San Fernando City.' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Philippine Sports Performance Plus'
     document.getElementById('yr-pic2').src = 'images/pspp.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '5.0'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML= 'Gym in San Fernando City'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sm City Pampanga'
     document.getElementById('yr-pic3').src = 'images/Smp.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML= 'Shopping mall in San Fernando'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Sm City Telebastagan'
    document.getElementById('yr-pic4').src = 'images/telebastagan.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML= 'Shopping Mall in San Fernando'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Bren Z Guiao Sport Complex'
   document.getElementById('yr-pic5').src = 'images/brenz.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '3.5'
   document.getElementById('spotsz5').innerHTML = 'Sports'
   document.getElementById('ninu5').innerHTML= 'Sports Complex in San Fernando'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Sindalan Sports Complex'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'orange'
 document.getElementById('rating6').innerHTML = '4.5'
 document.getElementById('spotsz6').innerHTML = 'Sports'
 document.getElementById('ninu6').innerHTML= 'Sports Complex in San Fernando'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Sm City Downtown'
document.getElementById('yr-pic7').src = 'images/downtown.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML = 'Shopping'
document.getElementById('ninu7').innerHTML= 'Shopping Mall in San Fernando'


    }
     /*history shopping sports*/
    else if (localStorage.getItem('hi1') ==  "Lazatin House" ) {
      document.getElementById('title-spts').innerHTML = "Lazatin House"
      document.getElementById('yr-pic').src = 'images/lzh.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.6'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'Historical landmark in San Fernando City.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Pampanga Capitol'
     document.getElementById('yr-pic2').src = 'images/capitol.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '3.6'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML= 'Local government office in San Fernando City'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'SM City Pampanga'
     document.getElementById('yr-pic3').src = 'images/smp.jpg'
     document.getElementById('hide3').style.color = 'Orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML= ' Shopping mall in San Fernando'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'City Hall of San Fernando'
    document.getElementById('yr-pic4').src = 'images/city.jpg'
    document.getElementById('hide4').style.color = 'Orange'
    document.getElementById('rating4').innerHTML = '4.6'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML= 'Business Center in San Fernando'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Bren Z Guiao Sports Complex'
   document.getElementById('yr-pic5').src = 'images/brenz.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '3.5'
   document.getElementById('spotsz5').innerHTML = 'Sports'
   document.getElementById('ninu5').innerHTML= 'Sports Complex in San Fernando'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Philippine Sports Performance Plus'
 document.getElementById('yr-pic6').src = 'images/pspp.jpg'
 document.getElementById('hide6').style.color = 'orange'
 document.getElementById('rating6').innerHTML = '5.0'
 document.getElementById('spotsz6').innerHTML = 'Sports'
 document.getElementById('ninu6').innerHTML= 'Gym in San Fernando City'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'SM City Telabastagan'
document.getElementById('yr-pic7').src = 'images/telebastagan.jpg'
document.getElementById('hide7').style.color = 'orange'
document.getElementById('rating7').innerHTML = '4.4'
document.getElementById('spotsz7').innerHTML = 'Shopping'
document.getElementById('ninu7').innerHTML= 'Shopping mall in San Fernando'


    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi1') ==  "Metro Cathedral of San fernando" ) {
      document.getElementById('title-spts').innerHTML = "Metro Cathedral of San fernando"
      document.getElementById('yr-pic').src = 'images/mcsf.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Catholic cathedral in San Fernando City.' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sm City telebastagan'
     document.getElementById('yr-pic2').src = 'images/telebastagan.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML= 'Shopping mall in San Fernando'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Bren Z. Guiao Sports Complex'
     document.getElementById('yr-pic3').src = 'images/brenz.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '3.5'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML= ' Sports Complex in San Fernando'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Lazatin House'
    document.getElementById('yr-pic4').src = 'images/lzh.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.g'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML= 'Historical landmark in San Fernando City'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Sm City Pampanga'
   document.getElementById('yr-pic5').src = 'images/Smp.jpg'
   document.getElementById('hide5').style.color = 'Orange'
   document.getElementById('rating5').innerHTML = '4,4'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML= ' Shopping mall in San Fernando'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Philippine Sports Performance Plus'
 document.getElementById('yr-pic6').src = 'images/pspp.jpg'
 document.getElementById('hide6').style.color = 'Orange'
 document.getElementById('rating6').innerHTML = '5.0'
 document.getElementById('spotsz6').innerHTML = 'Sports'
 document.getElementById('ninu6').innerHTML= ' Gym in San Fernando City'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Pampanga Capitol'
document.getElementById('yr-pic7').src = 'images/capitol.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '3.6'
document.getElementById('spotsz7').innerHTML = 'History'
document.getElementById('ninu7').innerHTML= ' Local government office in San Fernando City'


  }
}
/*GUAGUA*/
     else if (mapping == "Guagua, Pampanga") {
      document.getElementById('from').innerHTML = 'Guagua' 
        mapStay.innerHTML ='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20iguaguapampanga%20guagua%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz"" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20guagua%20pampanga%20guagua%20pampanga+(florida)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Guagua, Pampanga"
        tripPlace.innerHTML = "Trip to Guagua, Pampanga"
        bg.src = "guagua/Betis.jpg"
        place.innerHTML = "Guagua, Pampanga"
        nameX.innerHTML =  "Guagua, Pampanga"
        description.innerHTML ="Wawa was already a prosperous settlement when Spanish colonists took control of the town in the year 1561, from then on calling it Guagua, which is a Hispanised form of the original name. Indeed, archeological artifacts have been excavated in a nearby town which affirmed the existence of a prehistoric community in Guagua."
        pictures.src = "guagua/Betis.jpg"
        document.getElementById('things3').innerHTML = 'Market &emsp;•'


        document.getElementById('text1').value = localStorage.getItem('hi8')
        document.getElementById('text2').value = localStorage.getItem('hi9')
        document.getElementById('text3').value = localStorage.getItem('hi10')
        document.getElementById('text4').value = localStorage.getItem('hi11')
        document.getElementById('text5').value = localStorage.getItem('hi12')
        document.getElementById('text6').value = localStorage.getItem('hi13')
        document.getElementById('text7').value = localStorage.getItem('hi14')
        
         /*sports complex*/
    if (localStorage.getItem('hi8') == 'Ascomo Basketball Court' ) {
      document.getElementById('title-spts').innerHTML = 'Ascomo Basketball Court'
      document.getElementById('yr-pic').src = 'images/ascomo.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = 'Sports'
      document.getElementById('ninu').innerHTML= 'Sports Complex Basketball court in Ascomo Pampanga'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Betis Gymnasium'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'oranga'
     document.getElementById('rating').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML= 'Basketball Covered court'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'GL Body Gym'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.0'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Gym Fitness'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML= 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML= ' None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML= '  None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML = ' None'
document.getElementById('ninu7').innerHTML= '  None'


}
 /*2*/
 /*shopping*/
    
    else if  (localStorage.getItem('hi8') == 'Megamart guagua' ) {
      document.getElementById('title-spts').innerHTML = 'Megamart guagua'
      document.getElementById('yr-pic').src = 'images/mg.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '3.0'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Shopping mall in Guagua, Pampanga'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Primark Center Guagua'
     document.getElementById('yr-pic2').src = 'images/pc.png'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '5.0'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML='Shopping mall in Guagua, Pampanga' 
    
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Savemore Market Primark Guagua'
     document.getElementById('yr-pic3').src = 'images/savemore.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '3.9'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping Mall In  Guagua'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Robisons Easmart Megamart Guagua'
    document.getElementById('yr-pic4').src = 'images/robmart.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML= 'Grocery Store'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML= ' None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML= '  None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML = ' None'
document.getElementById('ninu7').innerHTML= '  None'


  }
    /*historical*/
    else if (localStorage.getItem('hi8') == 'None' ) {
      document.getElementById('title-spts').innerHTML = 'None'
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('rating').style.display = 'None'
      document.getElementById('spotsz').style.display = 'None'
      document.getElementById('ninu').style.display = 'None'
      document.getElementById('starting-hour').style.display = 'none'
      document.getElementById('hour3').style.display = 'none'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML= 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML= 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML= ' None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML= '  None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML = ' None'
document.getElementById('ninu7').innerHTML= '  None'



    }
    
    /*nature*/
    else if (localStorage.getItem('hi8') ==  "None" ) {
      document.getElementById('title-spts').innerHTML = "None"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'None'
      document.getElementById('rating').innerHTML = 'None'
      document.getElementById('spotsz').innerHTML = ' None '
      document.getElementById('ninu').innerHTML= 'None' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML= 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML= '  None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML= 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML= ' None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML= '  None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML = ' None'
document.getElementById('ninu7').innerHTML= '  None'


    }
    /*nature history*/
 else if (localStorage.getItem('hi8') == "None") {
      document.getElementById('title-spts').innerHTML = "None"
      document.getElementById('yr-pic').src = 'images/None.jpg'
      document.getElementById('hide').style.color = 'None'
      document.getElementById('rating').innerHTML = 'None'
      document.getElementById('spotsz').innerHTML = ' None '
      document.getElementById('ninu').innerHTML= 'None' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML= 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML= '  None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML= 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML= ' None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML= '  None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML = ' None'
document.getElementById('ninu7').innerHTML= '  None'


    }
     /*nature shopping*/
    else if (localStorage.getItem('hi8') ==  "Robinsons Easymart Megamart Guagua" ) {
      document.getElementById('title-spts').innerHTML = "Robinsons Easymart Megamart"
      document.getElementById('yr-pic').src = 'images/gre.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery store' 

   /*day2*/
     document.getElementById('title-spots2').innerHTML = "Primark Center Guagua"
     document.getElementById('yr-pic2').src = 'images/pc.png'
     document.getElementById('hide2').style.color = 'Orange'
     document.getElementById('rating2').innerHTML = '5.0'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML= 'Shopping Mall in Guagua'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML= '  None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML= 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML= ' None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML= '  None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML = ' None'
document.getElementById('ninu7').innerHTML= '  None'


    }
     /*nature sports*/
    else if (localStorage.getItem('hi8') ==  "Betis Gymnesium" ) {
      document.getElementById('title-spts').innerHTML = "Betis Gymnesium'"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = 'Sports'
      document.getElementById('ninu').innerHTML= 'Basketball Covered court.' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'GL Body Gym'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML= 'Guagua GYM Pampanga'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Ascomo Basketball Court'
     document.getElementById('yr-pic3').src = 'images/ascomo.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Ascomo Basketball Court'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = ''
    document.getElementById('rating4').innerHTML = ''
    document.getElementById('spotsz4').innerHTML = ''
    document.getElementById('ninu4').innerHTML= ''
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML= ' None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML= '  None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML = ' None'
document.getElementById('ninu7').innerHTML= '  None'



    }
     /*history shopping*/
    else if (localStorage.getItem('hi8') ==  "Primark Center guagua" ) {
      document.getElementById('title-spts').innerHTML = "Primark Center guagua"
      document.getElementById('yr-pic').src = 'images/pc.png'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '5.0'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Shopping mall in Guagua, Pampanga' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Robinson Easymart Guagua'
     document.getElementById('yr-pic2').src = 'images/robmart.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML= 'Grocery in Guagua'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Savemore'
     document.getElementById('yr-pic3').src = 'images/sm.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping in Guagua'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML= 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML= ' None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML= '  None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML = ' None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history sports*/
    else if (localStorage.getItem('hi8') ==  'GL Body GYM' ) {
      document.getElementById('title-spts').innerHTML = "Gym in Guagua"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = ' Sport '
      document.getElementById('ninu').innerHTML= 'Guagua GYM Pampanga.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Betis Gymnasium'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Basketball Covered Court'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Ascomo Basketball Court'
     document.getElementById('yr-pic3').src = 'images/ascomo.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Ascomo Covered Court'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML= 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML= ' None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML= '  None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML = ' None'
document.getElementById('ninu7').innerHTML= '  None'

    }
     /*shopping sports*/
    else if (localStorage.getItem('hi8') ==  "Primark Center" ) {
      document.getElementById('title-spts').innerHTML = "Primark Center Guagua"
      document.getElementById('yr-pic').src = 'images/pc.png'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '5.0'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Shopping mall in Guagua, Pampanga.' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Ascomo Basketball Court'
     document.getElementById('yr-pic2').src = 'images/ascomo.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Grocery in Guagua'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Savemore'
     document.getElementById('yr-pic3').src = 'images/sm.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping in Guagua'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Betis Gymnasium'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Sports'
    document.getElementById('ninu4').innerHTML = 'Basketball Covered Court'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Robinsons Easymart Guagua'
   document.getElementById('yr-pic5').src = 'images/robmart.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.0'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shoppinh in Guagua'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'GL BODY GYM'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.0'
 document.getElementById('spotsz6').innerHTML = 'Sports'
 document.getElementById('ninu6').innerHTML =  'Guagua GYM Pampanga'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history shopping*/
    else if (localStorage.getItem('hi8') ==  "Savemore Market Primark" ) {
      document.getElementById('title-spts').innerHTML = "Savemore Market Primark Guagua"
      document.getElementById('yr-pic').src = 'images/savemore.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '3.9'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Grocery store' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Robinsons Easymart Guagua'
     document.getElementById('yr-pic2').src = 'images/robmart.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping in Guagua'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Savemore Guagua'
     document.getElementById('yr-pic3').src = 'images/sm.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping in Guagua'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history sports*/
    else if (localStorage.getItem('hi8') ==  'Ascomo Sports Complex' ) {
      document.getElementById('title-spts').innerHTML = 'Ascomo Sports Complex'
      document.getElementById('yr-pic').src = 'images/ascomo.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = 'Sports'
      document.getElementById('ninu').innerHTML= 'Ascomo Covered Court.' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Betis Gymnasium'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Basketball Covered Court'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'GL BODY GYM'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.0'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Guagua GYM Pampanga'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature shopping sports*/
    else if (localStorage.getItem('hi8') ==  'Robinsons Easymart ' ) {
      document.getElementById('title-spts').innerHTML = "Robinsons Easymart "
      document.getElementById('yr-pic').src = 'images/rem.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery store.' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Ascomo Basketball Court'
     document.getElementById('yr-pic2').src = 'images/ascomo.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Ascomo Basketball Court'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Savemore Market Primark Guagua'
     document.getElementById('yr-pic3').src = 'images/robmart.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping in Guagua'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Betis Gymnasium'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'Sports'
    document.getElementById('ninu4').innerHTML = 'Basketball Covered Court'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Primark Center'
   document.getElementById('yr-pic5').src = 'images/pc.png'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Grocey in Guagua'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'GL BODY GYM'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.0'
 document.getElementById('spotsz6').innerHTML = 'Sports'
 document.getElementById('ninu6').innerHTML =  'Guagua GYM Pampanga'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history shopping sports*/
    else if (localStorage.getItem('hi8') ==  'Easymart Megamart Guagua') {
      document.getElementById('title-spts').innerHTML = "Easymart Megamart Guagua"
      document.getElementById('yr-pic').src = 'images/rem.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' shopping'
      document.getElementById('ninu').innerHTML= 'Grocery store' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Betis Gymnasium'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Basketball Covered Court'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Primark Center Guagua'
     document.getElementById('yr-pic3').src = 'images/pc.png'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Grocery in Guagua'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Ascomo Basketball Court'
    document.getElementById('yr-pic4').src = 'images/ascomo.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'Sports'
    document.getElementById('ninu4').innerHTML = 'Ascomo Basketball Court'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Savemore Market Primark Guagua'
   document.getElementById('yr-pic5').src = 'images/sm.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shoppinh in Guagua'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'GL Body Gym'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.0'
 document.getElementById('spotsz6').innerHTML = 'Sport'
 document.getElementById('ninu6').innerHTML =  'Guagua GYM Pampanga'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi8') ==  "Savemore Market Primark Guagua" ) {
      document.getElementById('title-spts').innerHTML = "Savemore Market Primark Guagua"
      document.getElementById('yr-pic').src = 'images/mcsf.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '3.9'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'In-store shopping · In-store pickup.' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Betis Gymnasium'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Spots'
     document.getElementById('ninu2').innerHTML = 'Basketball Covered Court'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Primark Center Guagua'
     document.getElementById('yr-pic3').src = 'images/pc.png'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Grocery in Guagua'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Ascomo Basketball Court'
    document.getElementById('yr-pic4').src = 'images/ascomo.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'Sports'
    document.getElementById('ninu4').innerHTML = 'Ascomo Covered Court'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Robinson Easymart Megamark Guagua'
   document.getElementById('yr-pic5').src = 'images/robmart.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping in Guagua'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'GL BODY GYM'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'Sports'
 document.getElementById('ninu6').innerHTML =  'Guagua GYM Pampanga'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


  }
}
/*florida*/
     
     else if (mapping == "Floridablanca, Pampanga") {
      document.getElementById('from').innerHTML = 'Florida' 
        mapStay.innerHTML ='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20floridablanca%20pampanga%20floridablanca%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20floridablanca%20pampanga%20floridablanca%20pampanga+(florida)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Floridablanca"
        tripPlace.innerHTML = "Trip to Floridablanca Pamp."
        bg.src = "florida/nabuclod.jpg"
        pictures.src = "florida/nabuclod.jpg"
        place.innerHTML = "Floridablanca, Pampanga"
        nameX.innerHTML = "Floridablanca, Pampanga"
        description.innerHTML = "Floridablanca was founded in 1823 at the site of a monastery. In the 1920s, the Pampanga Sugar Mill was built at Del Carmen in the 1920s. The area was the site of military bases of the Philippine Commonwealth Army and the Philippine Constabulary from 1942 to 1946."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi15')
        document.getElementById('text2').value = localStorage.getItem('hi16')
        document.getElementById('text3').value = localStorage.getItem('hi17')
        document.getElementById('text4').value = localStorage.getItem('hi18')
        document.getElementById('text5').value = localStorage.getItem('hi19')
        document.getElementById('text6').value = localStorage.getItem('hi20')
        document.getElementById('text7').value = localStorage.getItem('hi21')

        
         /*sports complex*/
    if (localStorage.getItem('hi15') == 'FLORIDABLANCA SPORTS CENTER' ) {
      document.getElementById('title-spts').innerHTML = 'FLORIDABLANCA SPORTS CENTER'
      document.getElementById('yr-pic').src = 'images/fbsc.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '5.0'
      document.getElementById('spotsz').innerHTML = ' Sports'
      document.getElementById('ninu').innerHTML= 'Basketball court in Floridablanca, Pampanga'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = ''
     document.getElementById('rating2').innerHTML = ''
     document.getElementById('spotsz2').innerHTML = ''
     document.getElementById('ninu2').innerHTML = ''
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = ''
    document.getElementById('rating4').innerHTML = ''
    document.getElementById('spotsz4').innerHTML = ''
    document.getElementById('ninu4').innerHTML = ''
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'
    

}
 /*2*/
     
 /*shopping*/
    
    else if  (localStorage.getItem('hi15') == 'Chuzon Supermarket' ) {
      document.getElementById('title-spts').innerHTML = 'Chuzon Supermarket'
      document.getElementById('yr-pic').src = 'images/chuzon.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery in Floridablanca'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Orange Supermarket'
     document.getElementById('yr-pic2').src = 'images/orange.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Grocery of Floridablanca'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*historical*/
    else if (localStorage.getItem('hi15') == 'Basa Air Base' ) {
      document.getElementById('title-spts').innerHTML = 'Basa Air Base'
      document.getElementById('yr-pic').src = 'images/bs.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = 'History'
      document.getElementById('spotsz').innerHTML = '4.5'
      document.getElementById('ninu').innerHTML = 'Basa Air Base is a barangay in the municipality of Floridablanca, in the province of Pampanga'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = ' Heritage San Jose Labrador'
     document.getElementById('yr-pic2').src = 'images/labrador.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historic of San Jose Church'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Bahay Na Puti Alvendia House'
     document.getElementById('yr-pic3').src = 'images/puti.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.0'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historic of Bahay na Puti Floridablabca'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'St. Joseph the Worker Parish'
    document.getElementById('yr-pic4').src = 'images/stj.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Churches of Floridablanca'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Bahay Kastila'
   document.getElementById('yr-pic5').src = 'images/kstl.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.0'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Histroy of Bahay in Floridablanca'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

      
    }
    /*nature*/
    else if (localStorage.getItem('hi15') ==  "Mawacat Falls Florida" ) {
      document.getElementById('title-spts').innerHTML = "Mawacat Falls"
      document.getElementById('yr-pic').src = 'images/mawacat.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Floridablanca Water Adventure'
      
      /*day2*/
      document.getElementById('title-spots2').innerHTML = 'Valdez Mini Eco Park'
      document.getElementById('yr-pic2').src = 'images/vldz.jpg'
      document.getElementById('hide2').style.color = 'Gray'
      document.getElementById('rating2').innerHTML = '4.0'
      document.getElementById('spotsz2').innerHTML = 'Nature'
      document.getElementById('ninu2').innerHTML = 'Ecopark in Floridablanca'
  /*day3*/
      document.getElementById('ttle-spts3').innerHTML = 'Nabuclod Floridablanca'
      document.getElementById('yr-pic3').src = 'florida/nabuclod.jpg'
      document.getElementById('hide3').style.color = 'Orange'
      document.getElementById('rating3').innerHTML = '4.5'
      document.getElementById('spotsz3').innerHTML = 'Nature'
      document.getElementById('ninu3').innerHTML = 'Nature Adventure in Floridablanca'
   /*day4*/
     document.getElementById('ttle-spts4').innerHTML = 'Tungab Lagoon'
     document.getElementById('yr-pic4').src = 'images/lagon.jpg'
     document.getElementById('hide4').style.color = 'Gray'
     document.getElementById('rating4').innerHTML = '4.4'
     document.getElementById('spotsz4').innerHTML = 'Nature'
     document.getElementById('ninu4').innerHTML = 'Water Adventure in Floridablanca'
  /*day5*/
    document.getElementById('ttle-spts5').innerHTML = 'Palakol River'
    document.getElementById('yr-pic5').src = 'images/pr.jpg'
    document.getElementById('hide5').style.color = 'Orange'
    document.getElementById('rating5').innerHTML = '4.4'
    document.getElementById('spotsz5').innerHTML = 'Nature'
    document.getElementById('ninu5').innerHTML = 'Nature Adventure in Floridablanca'
  /*day6*/
  document.getElementById('ttle-spts6').innerHTML = 'Pampanga Grapes Mini Farm'
  document.getElementById('yr-pic6').src = 'images/grapes.jpg'
  document.getElementById('hide6').style.color = 'Gray'
  document.getElementById('rating6').innerHTML = '4.2'
  document.getElementById('spotsz6').innerHTML = 'Nature'
  document.getElementById('ninu6').innerHTML =  'Mini Farm in Floridablanca'
 /*day7*/
 document.getElementById('ttle-spts7').innerHTML = 'None'
 document.getElementById('yr-pic7').src = 'images/usedata.jpg'
 document.getElementById('hide7').style.color = 'None'
 document.getElementById('rating7').innerHTML = 'None'
 document.getElementById('spotsz7').innerHTML =  'None'
 document.getElementById('ninu7').innerHTML = 'None'
 
 
    }
    /*nature history*/
 else if (localStorage.getItem('hi15') == "Mawacat Florida Falls") {
      document.getElementById('title-spts').innerHTML = "Mawacat Florida Falls"
      document.getElementById('yr-pic').src = 'images/mawacat.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Floridablanca Water Adventure' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Basa Air Base'
     document.getElementById('yr-pic2').src = 'images/bs.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'History in Floridablanca'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Nabuclod'
     document.getElementById('yr-pic3').src = 'florida/nabuclod.jpg'
     document.getElementById('hide3').style.color = 'Orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Adventure in Floridablanca'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "1876 Heritage San Jose Labrador Parish"
    document.getElementById('yr-pic4').src = 'images/labrador.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = History
    document.getElementById('ninu4').innerHTML = 'Churches of Floridablanca'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Palakol River'
   document.getElementById('yr-pic5').src = 'images/pr.jpg'
   document.getElementById('hide5').style.color = 'Orange'
   document.getElementById('rating5').innerHTML = '4.5'
   document.getElementById('spotsz5').innerHTML = 'Nature'
   document.getElementById('ninu5').innerHTML = 'Nature Adventure in Floridablanca'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Bahay Na Puti (Alvendia House)'
 document.getElementById('yr-pic6').src = 'images/puti.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.0'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'History of Bahay in Floridablanca'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Pampanga Grapes Mini Farm'
document.getElementById('yr-pic7').src = 'images/grapes.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'Nature'
document.getElementById('ninu7').innerHTML = 'Mini Farm in Floridablanca'


 }
     /*nature shopping*/
    else if (localStorage.getItem('hi15') == "Mawacat Falls") {
      document.getElementById('title-spts').innerHTML = 'Mawacat Florida Falls'
      document.getElementById('yr-pic').src = 'images/mawacat.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'Nature'
      document.getElementById('ninu').innerHTML= 'Floridablanca Water Adventure' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Chuzon Super Market'
     document.getElementById('yr-pic2').src = 'images/chuzon.jpg'
     document.getElementById('hide2').style.color = 'Orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping in Floridablanca '
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Nabuclod'
     document.getElementById('yr-pic3').src = 'florida/nabuclod.jpg'
     document.getElementById('hide3').style.color = 'Orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Nature in Floridablanca'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Orange Market"
    document.getElementById('yr-pic4').src = 'images/orange.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Grocery in Floridablanca'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Palakol River'
   document.getElementById('yr-pic5').src = 'images/pr.jpg'
   document.getElementById('hide5').style.color = 'orange'
   document.getElementById('rating5').innerHTML = '4.5'
   document.getElementById('spotsz5').innerHTML = 'Nature'
   document.getElementById('ninu5').innerHTML = 'Nature Adventure in Floridablanca'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Tungab Lagoon'
 document.getElementById('yr-pic6').src = 'images/lagon.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.4'
 document.getElementById('spotsz6').innerHTML = 'Nature'
 document.getElementById('ninu6').innerHTML =  'Nature Adventure in Floridablanca'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Pampanga Grapes Mini Farm'
document.getElementById('yr-pic7').src = 'images/grapes.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML = 'Nature'
document.getElementById('ninu7').innerHTML  =  'Mini Farm in Floridablanca'


 }
     /*nature sports*/
    else if (localStorage.getItem('hi15') ==  "Floridablanca Sports Complex" ) {
      document.getElementById('title-spts').innerHTML = "Floridablanca Sports Complex"
      document.getElementById('yr-pic').src = 'images/fbsc.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Sports '
      document.getElementById('ninu').innerHTML= 'Sport Complex in Floridablanca'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Valdez Mini Eco Park'
     document.getElementById('yr-pic2').src = 'images/vldz.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.0'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Mini Park in Floridablanca'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Nabuclod'
     document.getElementById('yr-pic3').src = 'florida/nabuclod.jpg'
     document.getElementById('hide3').style.color = 'Orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Nature Adventure in Floridablanca'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Gumain Dam"
    document.getElementById('yr-pic4').src = 'images/dum.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Nature'
    document.getElementById('ninu4').innerHTML = 'Natures view in Floridablanca'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Tungab Lagoon'
   document.getElementById('yr-pic5').src = 'images/lagon.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'Nature'
   document.getElementById('ninu5').innerHTML = 'Water Adventure in Floridablanca'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Palakol River'
 document.getElementById('yr-pic6').src = 'images/pr.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.4'
 document.getElementById('spotsz6').innerHTML = 'Nature'
 document.getElementById('ninu6').innerHTML =  'Nature Adventure in Floridablanca'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Pampanga Grapes Mini Farm'
document.getElementById('yr-pic7').src = 'images/grapes.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'Nature'
document.getElementById('ninu7').innerHTML = 'Mini Farm in Floridablanca'
 
    }
     /*history shopping*/
    else if (localStorage.getItem('hi15') ==  "Basa air base" ) {
      document.getElementById('title-spts').innerHTML = "Basa air Base"
      document.getElementById('yr-pic').src = 'images/bs.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'Basa Air Base is a barangay in the municipality of Floridablanca, in the province of Pampanga'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Chuzon'
     document.getElementById('yr-pic2').src = 'images/chuzon.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Grocery in Floridablanca'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = '1867 Heritage San jose Labrador church'
     document.getElementById('yr-pic3').src = 'images/labrador.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Churches in florida '
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Orange Market'
    document.getElementById('yr-pic4').src = 'images/orange.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Grocery in Floridablanca'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Bahay na Puti'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.0'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historic House of Floridablanca'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'ST.Joseph Parish Church'
 document.getElementById('yr-pic6').src = 'images/stj.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.4'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Churches of Floridablanca'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history sports*/
    else if (localStorage.getItem('hi15') ==  "Basa Air Base Floridablanca" ) {
      document.getElementById('title-spts').innerHTML = "Basa Air Base Floridablanca"
      document.getElementById('yr-pic').src = 'images/bs.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Basa Air Base is a barangay in the municipality of Floridablanca, in the province of Pampanga.'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Floridablanca Sports Center'
     document.getElementById('yr-pic2').src = 'images/fbsc.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Sports Basketball in Floridablanca'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Bahay na Puti'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.0'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historic House in Floridablanca'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "St. Joseph the Worker Parish"
    document.getElementById('yr-pic4').src = 'images/stj.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Churches of Floridablanca'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Bahay Kastilla'
   document.getElementById('yr-pic5').src = 'images/kstl.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historic House in Floridablanca'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = '1867 Heritage San Jose Labrador'
 document.getElementById('yr-pic6').src = 'images/labrador.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historic of Places in Floridablanca'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

 
    }
     /*shopping sports*/
    else if (localStorage.getItem('hi15') ==  "Floridablanca Chuzon Supermarket" ) {
      document.getElementById('title-spts').innerHTML = "Chuzon Supermarket"
      document.getElementById('yr-pic').src = 'images/chuzon.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery in Floridablanca, Pampanga.'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Floridablanca Sports Complex'
     document.getElementById('yr-pic2').src = 'images/fbsc.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Sports Basketball in Floridablanca'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Orange Supermarket'
     document.getElementById('yr-pic3').src = 'images/orange.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Grocery in Floridablanca'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = ''
    document.getElementById('rating4').innerHTML = ''
    document.getElementById('spotsz4').innerHTML = ''
    document.getElementById('ninu4').innerHTML = ''
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

 
    }
     /*nature history shopping*/
    else if (localStorage.getItem('hi15') ==  "1876 Heritage San Jose Labrador Parish Church" ) {
      document.getElementById('title-spts').innerHTML = "Heritage San Jose Labrador Church"
      document.getElementById('yr-pic').src = 'images/labrador.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Barangay San Jose, Floridablanca, Pampanga' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Chuzon Supermarket'
     document.getElementById('yr-pic2').src = 'images/chuzon.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Grocery in Floridablanca'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Mawacat Falls'
     document.getElementById('yr-pic3').src = 'images/mawacat.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Nature Adventure in Floridablanca'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Orange Supermarket"
    document.getElementById('yr-pic4').src = 'images/orange.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Grocery in Floridablanca'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Bahay Na Puti (Alvendia House)'
   document.getElementById('yr-pic5').src = 'images/puti.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House in Floridablanca'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML =  'St. Joseph the Worker Parish Church, Floridablanca'
 document.getElementById('yr-pic6').src = 'images/stj.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.4'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Churches in Floridablanca'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Bahay Na Kastilla'
document.getElementById('yr-pic7').src = 'images/kstl.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historic House of Floridablanca'

    }
     /*nature history sports*/ 
    else if (localStorage.getItem('hi15') ==  "Bahay Kastila" ) {
      document.getElementById('title-spts').innerHTML = "Bahay Kastila"
      document.getElementById('yr-pic').src = 'images/kstl.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Historic House in Floridablanca.' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Mawacat Falls'
     document.getElementById('yr-pic2').src = 'images/mawacat.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Water Adventure in Floridablanca'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Floridablanca Sport Complex'
     document.getElementById('yr-pic3').src = 'images/fbsc.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Basketball sports in Floridablanca'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "St. Joseph the Worker Parish Church, Floridablanca"
    document.getElementById('yr-pic4').src = 'images/stj.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Churches of Floridablanca'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Basa Air Base'
   document.getElementById('yr-pic5').src = 'images/bs.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historic Airbase in Floridablanca'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = '1867 Heritage San Jose Labrador Church'
 document.getElementById('yr-pic6').src = 'images/labrador.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.4'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Churches of Floridablanca'
/*day7*/
document.getElementById('ttle-spts7').innerHTML =  'Bahay na Puti(Alvendia House)'
document.getElementById('yr-pic7').src = 'images/puti.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historic House of Floridablanca'

    }
     /*nature shopping sports*/
    else if (localStorage.getItem('hi15') ==  'Orange Supermarket' ) {
      document.getElementById('title-spts').innerHTML = "Orange Supermarket "
      document.getElementById('yr-pic').src = 'images/orange.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery store in Floridablanca.' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Floridablanca Sports Complex'
     document.getElementById('yr-pic2').src = 'images/fbsc.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Basketball sports in Floridablanca'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Nabuclod'
     document.getElementById('yr-pic3').src = 'florida/nabuclod.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Nature Adventure in Floridablanca'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Chuzon Supermarket'
    document.getElementById('yr-pic4').src = 'images/chuzon.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Grocery in Floridablanca'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Tungab Lagoon'
   document.getElementById('yr-pic5').src = 'images/lagon.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'Nature'
   document.getElementById('ninu5').innerHTML = 'Water Adventure in Floridablanca'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Palakol River'
 document.getElementById('yr-pic6').src = 'images/pr.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'Nature'
 document.getElementById('ninu6').innerHTML =  'Nature Adventure in Floridablanca'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Mawacat Falls'
document.getElementById('yr-pic7').src = 'images/mawacat.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'Nature'
document.getElementById('ninu7').innerHTML = 'Water Adventure in Floridablanca'

    }
     /*history shopping sports*/
    else if (localStorage.getItem('hi15') ==  "St. Joseph the Worker Parish Church, Floridablanca" ) {
      document.getElementById('title-spts').innerHTML = "St. Joseph the Worker Parish Church, Floridablanca"
      document.getElementById('yr-pic').src = 'images/stj.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.6'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'Catholic church in Floridablanca, Pampanga' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Basa Air Base'
     document.getElementById('yr-pic2').src = 'images/bs.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historic of Airbase  in Floridablanca'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Bahay Kastila'
     document.getElementById('yr-pic3').src = 'images/kstl.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historic House in Floridablanca'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Floridablanca Sports Complex"
    document.getElementById('yr-pic4').src = 'images/fbsc.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Sports'
    document.getElementById('ninu4').innerHTML = 'Basketball sports in Floridablanca'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = '1867 Heritage San Jose Labrador Church'
   document.getElementById('yr-pic5').src = 'images/labrador.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Churches of Floridablanca'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Orange Supermarket'
 document.getElementById('yr-pic6').src = 'images/orange.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML =  'Grocery in Floridablanca'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Chuzon Supermarket'
document.getElementById('yr-pic7').src = 'images/chuzon.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'Shopping'
document.getElementById('ninu7').innerHTML = 'Grocery in Floridablanca'

    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi15') ==  "Palakol River" ) {
      document.getElementById('title-spts').innerHTML = "Palakol River"
      document.getElementById('yr-pic').src = 'images/pr.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Palakol Floridablanca River Adventure.' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Floridablanca Sports Center'
     document.getElementById('yr-pic2').src = 'images/fbsc.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Basketball in Floridablanca'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Nabuclod'
     document.getElementById('yr-pic3').src = 'florida/nabuclod.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Nature Adventure in Floridablanca'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Orange Supermarket"
    document.getElementById('yr-pic4').src = 'images/orange.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Grocery in Floridablanca'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Basa Air Base'
   document.getElementById('yr-pic5').src = 'images/bs.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = ' History'
   document.getElementById('ninu5').innerHTML = 'Historic of Airbase in Floridablanca'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Chuzon Supermarket'
 document.getElementById('yr-pic6').src = 'images/chuzon.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML =  'Grocery  in Floridablanca'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Bahay Kastilla'
document.getElementById('yr-pic7').src = 'images/kstl.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historic House of Floridablanca'


  }
      /*porac*/
}
     else if (mapping == "Porac, Pampanga") {
      document.getElementById('from').innerHTML = 'Porac' 
        mapStay.innerHTML= '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20porac%20pampanga%20porac%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20porac%20pampanga%20porac%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Porac, Pampanga"
        tripPlace.innerHTML = "Trip to Porac, Pampanga"
        bg.src = "porac/poracay.jpg"
        pictures.src = "porac/poracay.jpg"
        place.innerHTML = "Porac, Pampanga"
        nameX.innerHTML = "Porac, Pampanga"
        description.innerHTML="Porac was founded on October 31, 1594, upon acceptance by Fray Mateo Peralta in the Friar's Intermediate Chapter (recorded by Fray Gaspar de San Agustin, by saying Porac has its First Minister and Friar, Fray Mateo de Mendoza" 
        document.getElementById('things3').innerHTML = 'Market &emsp;•'
        document.getElementById('text1').value = localStorage.getItem('hi22')
        document.getElementById('text2').value = localStorage.getItem('hi23')
        document.getElementById('text3').value = localStorage.getItem('hi24')
        document.getElementById('text4').value = localStorage.getItem('hi25')
        document.getElementById('text5').value = localStorage.getItem('hi26')
        document.getElementById('text6').value = localStorage.getItem('hi27')
        document.getElementById('text7').value = localStorage.getItem('hi28')
      /*sports complex*/
    if (localStorage.getItem('hi22') == 'Jose Songco Sports Complex' ) {
      document.getElementById('title-spts').innerHTML = 'Jose Songco Sports Complex'
      document.getElementById('yr-pic').src = 'images/songco.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = 'Sports'
      document.getElementById('ninu').innerHTML= 'Basketball court in Porac, Pampanga'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


}
 /*2*/    
 /*shopping*/
    else if  (localStorage.getItem('hi22') == 'GT7 MALL' ) {
      document.getElementById('title-spts').innerHTML = 'GT7 MALL'
      document.getElementById('yr-pic').src = 'images/gt7.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Mini Mall in Porac' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'ORIGINAL BRANDED OUTLET '
     document.getElementById('yr-pic2').src = 'images/brand.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping in Porac'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'DANSA MART'
     document.getElementById('yr-pic3').src = 'images/dm.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Grocery in Porac'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML ='Puregold Porac'
    document.getElementById('yr-pic4').src = 'images/pg.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping Grocery in Porac'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*historical*/
    else if (localStorage.getItem('hi22') == 'The St. Catherine Church' ) {
      document.getElementById('title-spts').innerHTML = 'The St. Catherine Church'
      document.getElementById('yr-pic').src = 'images/cathrine.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'Church in Porac '

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Lorenzo Ancestral Home'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical Views in Porac'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Chapel Of The Virgin Of Sorrows'
     document.getElementById('yr-pic3').src = 'images/sorrows.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical Views in Porac'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'The Chapel in Pio'
    document.getElementById('yr-pic4').src = 'images/pio.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical Views in Porac'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Henson Family Ancestral House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical Views in Porac'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Ancestral House Of Felix Ayson'
 document.getElementById('yr-pic6').src = 'images/felix.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical Views in Porac'
/*day7*/
document.getElementById('ttle-spts7').innerHTML ='Gil Family Mansion'
document.getElementById('yr-pic7').src = 'images/gil.jpg'
document.getElementById('hide7').style.color = '4.1'
document.getElementById('rating7').innerHTML = 'Gray'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical Views in Porac'


      
    }
    /*nature*/
    else if (localStorage.getItem('hi22') ==  "Miyamit Falls" ) {
      document.getElementById('title-spts').innerHTML = "Miyamit Falls"
      document.getElementById('yr-pic').src = 'images/my.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Preserve Nature in Porac' 

        /*day2*/
     document.getElementById('title-spots2').innerHTML = "Sapang angka"
     document.getElementById('yr-pic2').src = 'images/angka.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Preserve Nature in Porac' 
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Dara Water Falls'
     document.getElementById('yr-pic3').src = 'images/drf.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML =  'Preserve Nature in Porac' 
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Ilog Camalig"
    document.getElementById('yr-pic4').src = 'images/camalig.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Nature'
    document.getElementById('ninu4').innerHTML = 'Preserve Nature in Porac' 
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML ='None'
document.getElementById('yr-pic7').src = 'images/'
document.getElementById('hide7').style.color ='None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML = 'None'
document.getElementById('ninu7').innerHTML = 'None'


      
    }
    /*nature history*/
 else if (localStorage.getItem('hi22') == "Dara Water Falls") {
      document.getElementById('title-spts').innerHTML = "Dara Water Falls"
      document.getElementById('yr-pic').src = 'images/drf.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Porac Water Adventure' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = "Lorenzo Ancestral Home"
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical Views in Porac' 
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Miyamit Falls'
     document.getElementById('yr-pic3').src = 'images/my.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML =  'Preserve Nature in Porac' 
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Henzon Family Ancestral Home'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical Views in Porac' 
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML =  "Ilog Camalig"
   document.getElementById('yr-pic5').src = 'images/camalig.jpg'
   document.getElementById('hide5').style.color = '4.3'
   document.getElementById('rating5').innerHTML = 'Gray'
   document.getElementById('spotsz5').innerHTML = 'Nature'
   document.getElementById('ninu5').innerHTML = 'Preserve Nature in Porac' 
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML =  'Sapang Angka'
 document.getElementById('yr-pic6').src = 'images/angka.jpg'
 document.getElementById('hide6').style.color = '4.4'
 document.getElementById('rating6').innerHTML = 'orange'
 document.getElementById('spotsz6').innerHTML = 'Nature'
 document.getElementById('ninu6').innerHTML =  'Preserve Nature in Porac' 
/*day7*/
document.getElementById('ttle-spts7').innerHTML ='Chapel Of The Virgin Of Sorrows'
document.getElementById('yr-pic7').src = 'images/ sorrows.jpg'
document.getElementById('hide7').style.color ='4.2'
document.getElementById('rating7').innerHTML = 'gray'
document.getElementById('spotsz7').innerHTML = 'History'
document.getElementById('ninu7').innerHTML = 'Historical Views in Porac'



      
    }
     /*nature shopping*/
    else if (localStorage.getItem('hi22') ==  "Dansa Mart" ) {
      document.getElementById('title-spts').innerHTML = "Dansa Mart"
      document.getElementById('yr-pic').src = 'images/dm.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery store in Porac' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML ='Dara Water Falls'
     document.getElementById('yr-pic2').src = 'images/drf.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = ' Nature '
     document.getElementById('ninu2').innerHTML = 'Preserve Nature in Porac' 
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML ='Puregold'
     document.getElementById('yr-pic3').src = 'images/pg.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = ' Shopping '
     document.getElementById('ninu3').innerHTML =  'Grocery store in Porac' 
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Sapang angka"
    document.getElementById('yr-pic4').src = 'images/angka.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = ' Nature '
    document.getElementById('ninu4').innerHTML = 'Preserve Nature in Porac'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML =  'GT7 Mall' 
   document.getElementById('yr-pic5').src = 'images/gt7.jpg'
   document.getElementById('hide5').style.color = '4.3'
   document.getElementById('rating5').innerHTML = 'Gray'
   document.getElementById('spotsz5').innerHTML =' Shopping '
   document.getElementById('ninu5').innerHTML =  'Grocery store in Porac'
 /*day6*/
  document.getElementById('ttle-spts6').innerHTML = "Ilog Camalig"
  document.getElementById('yr-pic6').src = 'images/camalig.jpg'
  document.getElementById('hide6').style.color = '4.4'
  document.getElementById('rating6').innerHTML = 'orange'
  document.getElementById('spotsz6').innerHTML = ' Nature'
  document.getElementById('ninu6').innerHTML =  'Preserve Nature in Porac' 
/*day7*/
document.getElementById('ttle-spts7').innerHTML ='Miyamit Falls'
document.getElementById('yr-pic7').src = 'images/my.jpg'
document.getElementById('hide7').style.color ='4.2'
document.getElementById('rating7').innerHTML = 'gray'
document.getElementById('spotsz7').innerHTML ='Nature'
document.getElementById('ninu7').innerHTML = 'Preserve Nature in Porac'


      
    }
     /*nature sports*/
    else if (localStorage.getItem('hi22') ==  "Sapang angka" ) {
      document.getElementById('title-spts').innerHTML = "Sapang angka"
      document.getElementById('yr-pic').src = 'images/angka.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = 'Nature'
      document.getElementById('ninu').innerHTML= 'Water Falls Adventure In Porac' 

      
      /*day2*/
     document.getElementById('title-spots2').innerHTML = "Miyamit Falls"
     document.getElementById('yr-pic2').src = 'images/my.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Preserve Nature in Porac'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Dara Water Falls'
     document.getElementById('yr-pic3').src = 'images/drf.jpg'
     document.getElementById('hide3').style.color = 'Orange'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Nature in Porac'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Ilog Camalig"
    document.getElementById('yr-pic4').src = 'images/camalig.jpg'
    document.getElementById('hide4').style.color = 'Orange'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Nature'
    document.getElementById('ninu4').innerHTML = 'nature In Porac'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Jose Songco Sports Complex'
   document.getElementById('yr-pic5').src = 'images/songco.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'Sports'
   document.getElementById('ninu5').innerHTML = 'Sports Complex in Porac'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history shopping*/
    else if (localStorage.getItem('hi22') ==  "Ancestral House of Felix Ayson" ) {
      document.getElementById('title-spts').innerHTML = "Ancestral House of Felix Ayson"
      document.getElementById('yr-pic').src = 'images/felix.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'History of Felix Ayson House' 


      /*day2*/
     document.getElementById('title-spots2').innerHTML = "GT7 Mall"
     document.getElementById('yr-pic2').src = 'images/gt7.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall In Porac'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML ='Lorenzo Ancestral Home'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical House in Porac'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML =  "Dansa Mart"
    document.getElementById('yr-pic4').src = 'images/dm.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Grocery Store in Porac'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'The St. Catherine Church'
   document.getElementById('yr-pic5').src = 'images/cathrine.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Churches in Porac'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Henzon Family Ancestral House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical House in Porac'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Puregold'
document.getElementById('yr-pic7').src = 'images/pg.jpg'
document.getElementById('hide7').style.color = 'orange'
document.getElementById('rating7').innerHTML = '4.5'
document.getElementById('spotsz7').innerHTML =  'Shopping'
document.getElementById('ninu7').innerHTML = 'shopping in Porac'

    }
     /*history sports*/
    else if (localStorage.getItem('hi22') ==  "Jose Songco Porac Sport Complex" ) {
      document.getElementById('title-spts').innerHTML = "Jose Songco Complex"
      document.getElementById('yr-pic').src = 'images/songco.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Sports '
      document.getElementById('ninu').innerHTML= 'Basksetball in Porac  Pampanga.' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML ='Henson Family Ancestral House'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical House in Porac'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Lorenzo Ancestral Home'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical House in Porac'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Chapel Of the Virgin of Sorrows'
    document.getElementById('yr-pic4').src = 'images/sorrows.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical Views in Porac'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Chapel in Pio'
   document.getElementById('yr-pic5').src = 'images/pio.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical in Porac'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'St. Catherine Church'
 document.getElementById('yr-pic6').src = 'images/cathrine.jpg'
 document.getElementById('hide6').style.color = 'orange'
 document.getElementById('rating6').innerHTML = '4.5'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Church in Porac'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Ancestral House of felix Ayson'
document.getElementById('yr-pic7').src = 'images/felix.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical House in Porac'


    }
     /*shopping sports*/
    else if (localStorage.getItem('hi22') ==  "Puregold Porac" ) {
      document.getElementById('title-spts').innerHTML = "Puregold Porac"
      document.getElementById('yr-pic').src = 'images/pg.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery in Porac, Pampanga.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = "Dansa Mart"
     document.getElementById('yr-pic2').src = 'images/dm.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Grocery store in Porac'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'GT7 MALL'
     document.getElementById('yr-pic3').src = 'images/gt7.jpg'
     document.getElementById('hide3').style.color = 'Orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping Mall In Porac'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Jose Songco Porac Sport Complex"
    document.getElementById('yr-pic4').src = 'images/songco.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'Sports'
    document.getElementById('ninu4').innerHTML = 'Sports Complex in Porac'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history shopping*/
    else if (localStorage.getItem('hi22') ==  "The Chapel in Pio" ) {
      document.getElementById('title-spts').innerHTML = "The Chapel in Pio"
      document.getElementById('yr-pic').src = 'images/pio.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Churches of Pio Porac Pampanga' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = "GT7 Mall"
     document.getElementById('yr-pic2').src = 'images/gt7.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall in Porac'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Dara Waterfalls'
     document.getElementById('yr-pic3').src = 'images/drf.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Water Adventure in Porac'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Saint Catherine Church"
    document.getElementById('yr-pic4').src = 'images/cathrine.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical Church in Porac'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Sapang Angka'
   document.getElementById('yr-pic5').src = 'images/angka.jpg'
   document.getElementById('hide5').style.color = 'Orange'
   document.getElementById('rating5').innerHTML = '4.5'
   document.getElementById('spotsz5').innerHTML = 'Nature'
   document.getElementById('ninu5').innerHTML = 'Nature In Porac'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Puregold Porac'
 document.getElementById('yr-pic6').src = 'images/pg.jpg'
 document.getElementById('hide6').style.color = 'orange'
 document.getElementById('rating6').innerHTML = '4.5'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML =  'Grocery in Porac'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Miyamit Falls'
document.getElementById('yr-pic7').src = 'images/my.jpg'
document.getElementById('hide7').style.color = 'Orange'
document.getElementById('rating7').innerHTML = '4.5'
document.getElementById('spotsz7').innerHTML =  'Nature'
document.getElementById('ninu7').innerHTML = 'Nature in Porac'


    }
     /*nature history sports*/
    else if (localStorage.getItem('hi22') ==  "Chapel Of the Virgin of Sorrows" ) {
      document.getElementById('title-spts').innerHTML = "Chapel Of the Virgin of Sorrows"
      document.getElementById('yr-pic').src = 'images/sorrows.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Historic Church in Porac Pampanga.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = "Miyamit Falls"
     document.getElementById('yr-pic2').src = 'images/my.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.6'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = "Nature's Adventure in Porac"
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Dara Water Falls'
     document.getElementById('yr-pic3').src = 'images/drf.jpg'
     document.getElementById('hide3').style.color = 'Orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = "Nature's adventure in Porac"
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "St. Catherine Church"
    document.getElementById('yr-pic4').src = 'images/cathrine.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Churches in Porac'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Chapel in PIO'
   document.getElementById('yr-pic5').src = 'images/pio.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical in Porac'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Gil Family Mansion'
 document.getElementById('yr-pic6').src = 'images/gil.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical House in Porac'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Jose Songco Sports Complex'
document.getElementById('yr-pic7').src = 'images/songco.jpg'
document.getElementById('hide7').style.color = 'Orange'
document.getElementById('rating7').innerHTML = '4.6'
document.getElementById('spotsz7').innerHTML =  'Sports'
document.getElementById('ninu7').innerHTML = 'Sports Complex in Porac'


    }
     /*nature shopping sports*/
    else if (localStorage.getItem('hi22') ==  'Miyamit Falls In Porac' ) {
      document.getElementById('title-spts').innerHTML = "Miyamit Falls In Porac "
      document.getElementById('yr-pic').src = 'images/my.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' Nature'
      document.getElementById('ninu').innerHTML= 'Waterfalls in Porac Pampanga.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = "Sapang angka"
     document.getElementById('yr-pic2').src = 'images/angka.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = "Nature's adventure in Porac"
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Dara Water Falls'
     document.getElementById('yr-pic3').src = 'images/drf.jpg'
     document.getElementById('hide3').style.color = 'Orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = "Nature's adventure in Porac"
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "GT7 Mall"
    document.getElementById('yr-pic4').src = 'images/gt7.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping Mall In Porac'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Jose Songco Sports Complex'
   document.getElementById('yr-pic5').src = 'images/songco.jpg'
   document.getElementById('hide5').style.color = 'orange'
   document.getElementById('rating5').innerHTML = '4.5'
   document.getElementById('spotsz5').innerHTML = 'Sports'
   document.getElementById('ninu5').innerHTML = 'Sports Complex in Porac'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Dansa Mart'
 document.getElementById('yr-pic6').src = 'images/dm.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.4'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML =  'Grocery store in Porac'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Puregold Porac'
document.getElementById('yr-pic7').src = 'images/pg.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.4'
document.getElementById('spotsz7').innerHTML =  'Shopping'
document.getElementById('ninu7').innerHTML = 'Grocery in Porac'



    }
     /*history shopping sports*/
    else if (localStorage.getItem('hi22') ==  "Gil Family Mansion" ) {
      document.getElementById('title-spts').innerHTML = "Gil Family Mansion"
      document.getElementById('yr-pic').src = 'images/gil.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'History of Gil Family House in Porac Pampanga' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = "GT7 Mall"
     document.getElementById('yr-pic2').src = 'images/gt7.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4..5'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall In Porac'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'The Chapel in PIO'
     document.getElementById('yr-pic3').src = 'images/pio.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical place in Porac'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Dansa Mart"
    document.getElementById('yr-pic4').src = 'images/dm.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Grocery in Porac'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Saint Catherine Church'
   document.getElementById('yr-pic5').src = 'images/cathrine.jpg'
   document.getElementById('hide5').style.color = 'orange'
   document.getElementById('rating5').innerHTML = '4.6'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical place in Porac'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Puregold Porac'
 document.getElementById('yr-pic6').src = 'images/pg.jpg'
 document.getElementById('hide6').style.color = 'Orange'
 document.getElementById('rating6').innerHTML = '4.5'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML =  'Grocery in Porac'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Jose Songco Sports Complex'
document.getElementById('yr-pic7').src = 'images/songco.jpg'
document.getElementById('hide7').style.color = 'Orange'
document.getElementById('rating7').innerHTML = '4.5'
document.getElementById('spotsz7').innerHTML =  'Sports'
document.getElementById('ninu7').innerHTML = 'Sports Complex in Porac'


    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi22') ==  "St.Catherine Parish Church Porac" ) {
      document.getElementById('title-spts').innerHTML = "St. Catherine Parish Church"
      document.getElementById('yr-pic').src = 'images/cathrine.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Church of Porac Pampanga.' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = "GT7 Mall"
     document.getElementById('yr-pic2').src = 'images/gt7.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall In Porac'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Jose Songco Sports Complex'
     document.getElementById('yr-pic3').src = 'images/songco.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Sports Complex in Porac'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Ilog Camalig"
    document.getElementById('yr-pic4').src = 'images/camalig.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Nature'
    document.getElementById('ninu4').innerHTML = "Nature's adventure in Porac"
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'The Chapel in pio'
   document.getElementById('yr-pic5').src = 'images/pio.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical place in Porac'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Puregold Porac'
 document.getElementById('yr-pic6').src = 'images/pg.jpg'
 document.getElementById('hide6').style.color = 'orange'
 document.getElementById('rating6').innerHTML = '4.5'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML =  'Grocery in Porac'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Miyamit Falls'
document.getElementById('yr-pic7').src = 'images/my.jpg'
document.getElementById('hide7').style.color = 'orange'
document.getElementById('rating7').innerHTML = '4.5'
document.getElementById('spotsz7').innerHTML =  'Nature'
document.getElementById('ninu7').innerHTML = "Nature's adventure in Porac"


    }
      }
      /*arayat*/
     else if (mapping == "Arayat, Pampanga") {
      document.getElementById('from').innerHTML = 'Arayat' 
        mapStay.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20arayat%20pampanga%20arayat%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML ='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20arayat%20pampanga%20arayat%20pampanga+(aRAYAT)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Arayat, Pampanga"
        tripPlace.innerHTML = "Trip to Arayat, Pampanga"
        bg.src = "arayat/arayat.jpg"
        pictures.src = "arayat/arayat.jpg"
        place.innerHTML = "Arayat, Pampanga"
        nameX.innerHTML = "Arayat, Pampanga"
        description.innerHTML = "Arayat, officially the Municipality of Arayat (Kapampangan: Balen ning Arayat; Tagalog: Bayan ng Arayat), is a 1st class municipality in the province of Pampanga in the Philippines. According to the 2020 census, it has a population of 144,875 people."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi29')
        document.getElementById('text2').value = localStorage.getItem('hi30')
        document.getElementById('text3').value = localStorage.getItem('hi31')
        document.getElementById('text4').value = localStorage.getItem('hi32')
        document.getElementById('text5').value = localStorage.getItem('hi33')
        document.getElementById('text6').value = localStorage.getItem('hi34')
        document.getElementById('text7').value = localStorage.getItem('hi35')

      /*sports complex*/
    if (localStorage.getItem('hi29') == 'Arayat Sports Complex' ) {
      document.getElementById('title-spts').innerHTML = 'Arayat Sports Complex'
      document.getElementById('yr-pic').src = 'images/asc.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = 'Sports'
      document.getElementById('ninu').innerHTML= 'Sports Complex in Arayat'


       /*day2*/
     document.getElementById('title-spots2').innerHTML = ''
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = ''
     document.getElementById('rating2').innerHTML = ''
     document.getElementById('spotsz2').innerHTML = ''
     document.getElementById('ninu2').innerHTML = ''
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = ''
    document.getElementById('rating4').innerHTML = ''
    document.getElementById('spotsz4').innerHTML = ''
    document.getElementById('ninu4').innerHTML = ''
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


 /*2*/
     
 /*shopping*/
    }
    else if  (localStorage.getItem('hi29') == 'GT7 MALL Arayat' ) {
      document.getElementById('title-spts').innerHTML = 'GT7 MALL Arayat'
      document.getElementById('yr-pic').src = 'images/gt7a.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Mini Mall in Arayat'

       /*day2*/
     document.getElementById('title-spots2').innerHTML ='588 Shopping Mall'
     document.getElementById('yr-pic2').src = 'images/588.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall In Arayat'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'City Mall Arayat'
     document.getElementById('yr-pic3').src = 'images/cma.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping Mall In Arayat'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = ''
    document.getElementById('rating4').innerHTML = ''
    document.getElementById('spotsz4').innerHTML = ''
    document.getElementById('ninu4').innerHTML = ''
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*historical*/
    else if (localStorage.getItem('hi29') == 'Santa Catalina De Alejandria Church' ) {
      document.getElementById('title-spts').innerHTML = 'Santa Catalina De Alejandria'
      document.getElementById('yr-pic').src = 'images/search.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'Church of Arayat Pampanga '

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'usedata'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

     
    }
    /*nature*/
    else if (localStorage.getItem('hi29') ==  "Gintung Pakpak" ) {
      document.getElementById('title-spts').innerHTML = "Gintung Pakpak"
      document.getElementById('yr-pic').src = 'images/pakpak.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Preserve Nature Eco Park in Arayat' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = "Bahay na Bato ng Balik sa Paraiso"
     document.getElementById('yr-pic2').src = 'images/Paraiso.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = "Nature's adventure in Arayat"
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*nature history*/
 else if (localStorage.getItem('hi29') == "Bahay na Bato ng Balik sa Paraiso") {
      document.getElementById('title-spts').innerHTML = "Bahay na Bato ng Balik sa Paraiso"
      document.getElementById('yr-pic').src = 'images/bb.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Nature in Arayat' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Santa Catalina De Alenzandria Church'
     document.getElementById('yr-pic2').src = 'images/Catalina.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Churches  in Arayat'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = "Gintung Pakpak"
     document.getElementById('yr-pic3').src = 'images/pakpak.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.6'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = "Nature's adventure in Arayat"
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature shopping*/
    else if (localStorage.getItem('hi29') ==  "City Mall Arayat" ) {
      document.getElementById('title-spts').innerHTML = "City Mall Arayat"
      document.getElementById('yr-pic').src = 'images/cma.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Mall in Arayat' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'GT7 Mall Arayat'
     document.getElementById('yr-pic2').src = 'images/gt7a.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall In Arayat'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = "Gintung Pakpak"
     document.getElementById('yr-pic3').src = 'images/pakpak.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.6'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = "Nature's adventure in Arayat "
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = '588 Shopping Mall'
    document.getElementById('yr-pic4').src = 'images/588.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = "Shopping Mall In Arayat"
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = "Bahay na Bato ng Balik sa Paraiso"
   document.getElementById('yr-pic5').src = 'images/paraiso.jpg'
   document.getElementById('hide5').style.color = 'orange'
   document.getElementById('rating5').innerHTML = '4.6'
   document.getElementById('spotsz5').innerHTML = 'Nature'
   document.getElementById('ninu5').innerHTML = "Nature's Adventure in Arayat"
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



    }
     /*nature sports*/
    else if (localStorage.getItem('hi29') ==  "Gintung Pakpak ning Arayat" ) {
      document.getElementById('title-spts').innerHTML = "Gintung Pakpak ning Arayat"
      document.getElementById('yr-pic').src = 'images/pakpak.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = 'Nature'
      document.getElementById('ninu').innerHTML= 'Nature in Arayat' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = "Bahay na Bato ng Balik sa Paraiso"
     document.getElementById('yr-pic2').src = 'images/paraiso.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.6'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = "Nature's adventure in Arayat"
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Arayat Sports Complex'
     document.getElementById('yr-pic3').src = 'images/asc.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Sports Complex in Arayat'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history shopping*/
    else if (localStorage.getItem('hi29') ==  "588 Shopping Mall" ) {
      document.getElementById('title-spts').innerHTML = "588 Shopping Mall"
      document.getElementById('yr-pic').src = 'images/588.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = 'Shopping Mall in Arayat'
      document.getElementById('ninu').innerHTML= 'Shopping Mall in Arayat' 

 /*day2*/
     document.getElementById('title-spots2').innerHTML = "City mall Arayat"
     document.getElementById('yr-pic2').src = 'images/cma.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall In Arayat'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'GT7 Mall'
     document.getElementById('yr-pic3').src = 'images/gt7a.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping Mall In Arayat'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Santa Catalina De Alezandria Church'
    document.getElementById('yr-pic4').src = 'images/Catalina.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical place in Arayat'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history sports*/
    else if (localStorage.getItem('hi29') ==   "Santa Catalina De Alezandria ning Arayat") {
      document.getElementById('title-spts').innerHTML =  "Santa Catalina De Alezandria ning Arayat"
      document.getElementById('yr-pic').src = 'images/Catalina.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = 'Historic'
      document.getElementById('ninu').innerHTML= 'Historical Place in Arayat.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = "Arayat Sports Complex"
     document.getElementById('yr-pic2').src = 'images/asc.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Sports Complex in Arayat'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*shopping sports*/
    else if (localStorage.getItem('hi29') ==  "Arayat Sports Complex co" ) {
      document.getElementById('title-spts').innerHTML = "Arayat Sports Complex"
      document.getElementById('yr-pic').src = 'images/asc.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Sports '
      document.getElementById('ninu').innerHTML= 'Sports Complex in Arayat.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = "588 Shopping Mall" 
     document.getElementById('yr-pic2').src = 'images/588.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall In Arayat'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'City Mall Arayat'
     document.getElementById('yr-pic3').src = 'images/cma.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping Mall In Arayat'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'GT7 Mall Arayat'
    document.getElementById('yr-pic4').src = 'images/gt7a.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping Mall In Arayat'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history shopping*/
    else if (localStorage.getItem('hi29') ==  "Bahay na Bato ng Balik sa Paraiso ning Arayat" ) {
      document.getElementById('title-spts').innerHTML = "Bahay na Bato ning Arayat"
      document.getElementById('yr-pic').src = 'images/bb.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Nature in Arayat' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = "Gintung Pakpak"
     document.getElementById('yr-pic2').src = 'images/pakpak.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.6'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = "Nature's Adventure in Arayat"
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'City Mall Arayat'
     document.getElementById('yr-pic3').src = 'images/cma.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping Mall In Arayat'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'GT7 Mall Arayat'
    document.getElementById('yr-pic4').src = 'images/gt7a.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping Mall In Arayat'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML ='588 Shopping Mall'
   document.getElementById('yr-pic5').src = 'images/588.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping Mall in Arayat'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history sports*/
    else if (localStorage.getItem('hi29') ==  "Arayat Gintung Pakpak" ) {
      document.getElementById('title-spts').innerHTML = "Arayat Gintung Pakpak"
      document.getElementById('yr-pic').src = 'images/pakpak.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Preserve Nature in Arayat Pampanga.' 
 /*day2*/
     document.getElementById('title-spots2').innerHTML = "Bahay na Bato ng Balik sa Paraiso"
     document.getElementById('yr-pic2').src = 'images/paraiso.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.6'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = "Nature's adventure in Arayat"
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Arayat Sports Complex'
     document.getElementById('yr-pic3').src = 'images/asc.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Sports Complex in Arayat'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Santa Catalina De Alejandria Church'
    document.getElementById('yr-pic4').src = 'images/catalina.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical place in Arayat'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature shopping sports*/
    else if (localStorage.getItem('hi29') ==  '588 Shopping Mall.' ) {
      document.getElementById('title-spts').innerHTML = "588 Shopping Mall "
      document.getElementById('yr-pic').src = 'images/588.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' Shopping'
      document.getElementById('ninu').innerHTML= 'Shopping Mall in Pampanga.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = "Bahay na Bato ng Balik sa Paraiso"
     document.getElementById('yr-pic2').src = 'images/paraiso.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.6'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = "Nature's adventure in Arayat"
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'GT7 Mall Arayat'
     document.getElementById('yr-pic3').src = 'images/gt7a.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping Mall In Arayat'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Gintung Pakpak'
    document.getElementById('yr-pic4').src = 'images/pakpak.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'Nature'
    document.getElementById('ninu4').innerHTML = "Nature's adventure in Arayat"
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Arayat Sports Complex'
   document.getElementById('yr-pic5').src = 'images/asc.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'Sports'
   document.getElementById('ninu5').innerHTML = 'Sports Complex in Arayat'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'City Mall Arayat'
 document.getElementById('yr-pic6').src = 'images/cma.jpg'
 document.getElementById('hide6').style.color = 'orange'
 document.getElementById('rating6').innerHTML = '4.5'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML =  'Shopping Mall In Arayat'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history shopping sports*/
    else if (localStorage.getItem('hi29') ==  "Sta. Catalina De Alejandria Arayat Church" ) {
      document.getElementById('title-spts').innerHTML = "Sta. Catalina De Alejandria Arayat"
      document.getElementById('yr-pic').src = 'images/search.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'Church in Arayat' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = "Arayat Sports Complex  "
     document.getElementById('yr-pic2').src = 'images/asc.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Sports Complex in Arayat'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'GT7 Mall Arayat '
     document.getElementById('yr-pic3').src = 'images/gt7a.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping Mall In Arayat'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = '588 Shopping Mall'
    document.getElementById('yr-pic4').src = 'images/588.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping Mall In Arayat'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'City Mall Arayat'
   document.getElementById('yr-pic5').src = 'images/cma.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping Mall in Arayat'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi29') ==  "Sta. Catalina De Alejandria of Arayat" ) {
      document.getElementById('title-spts').innerHTML = "Sta. Catalina De Alejandria Arayat"
      document.getElementById('yr-pic').src = 'images/search.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Church in Pampanga.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML =  "Bahay na Bato ng Balik sa Paraiso"
     document.getElementById('yr-pic2').src = 'images/paraiso.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.6'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = "Nature's adventure in Arayat"
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'City Mall Arayat'
     document.getElementById('yr-pic3').src = 'images/cma.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping Mall In Arayat'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML =  'Arayat Sports Complex'
    document.getElementById('yr-pic4').src = 'images/asc.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Sports'
    document.getElementById('ninu4').innerHTML = 'Sports Complex in Arayat'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'GT7 Mall Arayat'
   document.getElementById('yr-pic5').src = 'images/gt7a.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping Mall In Arayat'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Gintung Pakpak'
 document.getElementById('yr-pic6').src = 'images/pakpak.jpg'
 document.getElementById('hide6').style.color = 'orange'
 document.getElementById('rating6').innerHTML = '4.6'
 document.getElementById('spotsz6').innerHTML = 'Nature'
 document.getElementById('ninu6').innerHTML =  "Nature's adventure in Arayat"
/*day7*/
document.getElementById('ttle-spts7').innerHTML = '588 Shopping Mall'
document.getElementById('yr-pic7').src = 'images/588.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.4'
document.getElementById('spotsz7').innerHTML =  'Shopping'
document.getElementById('ninu7').innerHTML = 'Shopping Mall In Arayat '


    } 
      }
      /*apalit*/
     else if (mapping == "Apalit, Pampanga") {
      document.getElementById('from').innerHTML = 'Apalit'
        mapStay.innerHTML ='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20apalit%20pampanga%20apalit%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20apalit%20pampanga%20apalit%20pampanga+(apalit)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Apalit, Pampanga"
        tripPlace.innerHTML = "Trip to Apalit, Pampanga"
        bg.src = "apalit/butterfly.jpg"
        pictures.src ="apalit/butterfly.jpg"
        place.innerHTML = "Apalit, Pampanga"
        nameX.innerHTML =  "Apalit, Pampanga"
        description.innerHTML = "Apalit, officially the Municipality of Apalit (Kapampangan: Balen ning Apalit; Tagalog: Bayan ng Apalit), is a 1st class municipality in the province of Pampanga, Philippines. According to the 2020 census, it has a population of 117,160 people."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi36')
        document.getElementById('text2').value = localStorage.getItem('hi37')
        document.getElementById('text3').value = localStorage.getItem('hi38')
        document.getElementById('text4').value = localStorage.getItem('hi39')
        document.getElementById('text5').value = localStorage.getItem('hi40')
        document.getElementById('text6').value = localStorage.getItem('hi41')
        document.getElementById('text7').value = localStorage.getItem('hi42')
        /*sports complex*/
    if (localStorage.getItem('hi36') == 'None' ) {
      document.getElementById('title-spts').innerHTML = 'None'
      document.getElementById('yr-pic').src = 'images/not.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = 'None'
      document.getElementById('spotsz').innerHTML = 'None'
      document.getElementById('ninu').innerHTML= 'None'

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'




 /*2*/
     
 /*shopping*/
    }
  
  
    else if  (localStorage.getItem('hi36') == '365 Shopping Mart' ) {
      document.getElementById('title-spts').innerHTML = '365 Shopping Mart'
      document.getElementById('yr-pic').src = 'images/365apalit.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Mini Mall in Apalit'


       /*day2*/
     document.getElementById('title-spots2').innerHTML = '588 Shopping Mall '
     document.getElementById('yr-pic2').src = 'images/588.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall In Apalit'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Savemore Apalit'
     document.getElementById('yr-pic3').src = 'images/sm.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Grocery Shopping in Apalit'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Super 99'
    document.getElementById('yr-pic4').src = 'images/99.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Mini Shopping Mall in Apalit '
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Puregold Extra Apalit'
   document.getElementById('yr-pic5').src = 'images/gold.png'
   document.getElementById('hide5').style.color = 'orange'
   document.getElementById('rating5').innerHTML = '4.5'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Grocery Shopping in Apalit'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*historical*/
    else if (localStorage.getItem('hi36') == 'Church Of Apalit Historical Marker' ) {
      document.getElementById('title-spts').innerHTML = 'Church Of Apalit Historical Marker'
      document.getElementById('yr-pic').src = 'images/cp.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.6'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'Church of Apalit Pampanga '

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Pedro Espiritu Ancestral House'
     document.getElementById('yr-pic2').src = 'images/pedro.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical place in Apalit'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*nature*/
    else if (localStorage.getItem('hi36') ==  "Apalit Skate Park" ) {
      document.getElementById('title-spts').innerHTML = "Apalit Skate Park"
      document.getElementById('yr-pic').src = 'images/skate.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' Nature Park '
      document.getElementById('ninu').innerHTML= 'Preserve Nature in Apalit' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*nature history*/
 else if (localStorage.getItem('hi36') == "Church Of Apalit/ Church Complex of The St.Peter Apostle") {
      document.getElementById('title-spts').innerHTML = "St.Peter Apostle Church"
      document.getElementById('yr-pic').src = 'images/apostle.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'History Church of Apalit Pampanga' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Apalit Skate Park'
     document.getElementById('yr-pic2').src = 'images/skate.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Natures'
     document.getElementById('ninu2').innerHTML = "Nature's adventure Park in Apalit"
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML ='Pedro Espiritu Ancestral House'
     document.getElementById('yr-pic3').src = 'images/pedro.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical House in Apalit'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature shopping*/
    else if (localStorage.getItem('hi36') ==  "Puregold Extra Apalit" ) {
      document.getElementById('title-spts').innerHTML = "Puregold Extra Apalit"
      document.getElementById('yr-pic').src = 'images/gold.png'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery store in Porac' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = '365 Shopping Mart '
     document.getElementById('yr-pic2').src = 'images/365apalit.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mart in Apalit'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = "Apalit Skate Park"
     document.getElementById('yr-pic3').src = 'images/skate.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = "Nature's adventure Park in Apalit"
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = '588 Shopping Mall'
    document.getElementById('yr-pic4').src = 'images/588.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Mini Shopping Mall in Apalit'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Savemore Apalit'
   document.getElementById('yr-pic5').src = 'images/sm.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping Mall'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Super 99 '
 document.getElementById('yr-pic6').src = 'images/99.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML =  'Mini Shopping Mall in Apalit'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature sports*/
    else if (localStorage.getItem('hi36') ==  "Apalit Skate Park" ) {
      document.getElementById('title-spts').innerHTML = "Apalit Skate Park"
      document.getElementById('yr-pic').src = 'images/skate.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = 'Nature Park'
      document.getElementById('ninu').innerHTML= 'Park Adventure In Apalit Pampanga' 



       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'





    }
     /*history shopping*/
    else if (localStorage.getItem('hi36') ==  "Pedro Espiritu Ancestral House" ) {
      document.getElementById('title-spts').innerHTML = "Pedro Espiritu Ancestral House"
      document.getElementById('yr-pic').src = 'images/pedro.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'History of House ni Pedro Espiritu' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = '365 Shopping mart'
     document.getElementById('yr-pic2').src = 'images/365apalit.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall in Apalit'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Super 99'
     document.getElementById('yr-pic3').src = 'images/99.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Mini Shopping Mall in Apalit'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Church Complex of The St.Peter Apostle'
    document.getElementById('yr-pic4').src = 'images/apostle.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical Church in Apalit'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history sports*/
    else if (localStorage.getItem('hi36') == "Church of Apalit In Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Church of Apalit Historical Marker"
      document.getElementById('yr-pic').src = 'images/cp.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'History of Apalit Church' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Pedro Espirito Ancestral House'
     document.getElementById('yr-pic2').src = 'images/pedro.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'HIstorical House in Apalit'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*shopping sports*/
    else if (localStorage.getItem('hi36') ==  "Savemore Apalit" ) {
      document.getElementById('title-spts').innerHTML = "Savemore Apalit"
      document.getElementById('yr-pic').src = 'images/sm.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery in Apalit Pampanga.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = '588 Shopping Mall'
     document.getElementById('yr-pic2').src = 'images/588.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall In Apalit'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Super 99 '
     document.getElementById('yr-pic3').src = 'images/99.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Mini Shopping Mall in Apalit'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = '365 Shopping Mall'
    document.getElementById('yr-pic4').src = 'images/365apalit.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping Mall In Apalit'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Puregold Extra Apalit'
   document.getElementById('yr-pic5').src = 'images/gold.png'
   document.getElementById('hide5').style.color = 'orange'
   document.getElementById('rating5').innerHTML = '4.5'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Grocery Shopping in Apalit'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history shopping*/
    else if (localStorage.getItem('hi36') ==  "Super 99" ) {
      document.getElementById('title-spts').innerHTML = "Super 99"
      document.getElementById('yr-pic').src = 'images/99.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Market in Apalit Pampanga' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = '588 Shopping Mall'
     document.getElementById('yr-pic2').src = 'images/588.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall In Apalit'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Church Complex of St. Peter the Apostle '
     document.getElementById('yr-pic3').src = 'images/Apostle.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical Church in Apalit'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Pedro Espiritu Ancestral House'
    document.getElementById('yr-pic4').src = 'images/Pedro.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical House in Apalit'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML =  'Savemore Apalit'
   document.getElementById('yr-pic5').src = 'images/sm.jpg'
   document.getElementById('hide5').style.color = 'orange'
   document.getElementById('rating5').innerHTML = '4.5'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping Mall In Apalit'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Puregold Extra Apalit'
 document.getElementById('yr-pic6').src = 'images/gold.png'
 document.getElementById('hide6').style.color = 'orange'
 document.getElementById('rating6').innerHTML = '4.5'
 document.getElementById('spotsz6').innerHTML = ' Shopping '
 document.getElementById('ninu6').innerHTML =  'Grocery Shopping in Apalit'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = '365 Shopping Mall'
document.getElementById('yr-pic7').src = 'images/365apalit.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'Shopping'
document.getElementById('ninu7').innerHTML = 'Shopping Mall In Apalit'

    }
     /*nature history sports*/
    else if (localStorage.getItem('hi36') ==  "Pedro Espiritu House ning Apalit" ) {
      document.getElementById('title-spts').innerHTML = "Pedro Espiritu House ning Arayat"
      document.getElementById('yr-pic').src = 'images/pedro.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Historic of Pedro House in Apalit Pampanga.' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Church of Apalit/Church Complex of St. Peter the Apostle'
     document.getElementById('yr-pic2').src = 'images/apostle.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Churches in Apalit'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Savemore Apalit'
     document.getElementById('yr-pic3').src = 'images/sm.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '43'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Grocery in Apalit'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML ='Puregold Extra Apalit'
    document.getElementById('yr-pic4').src = 'images/gold.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping Grocery in Apalit'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = '365 Shopping Mall'
   document.getElementById('yr-pic5').src = 'images/365apalit.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping mall in Apalit'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = '588 Shopping Mall'
 document.getElementById('yr-pic6').src = 'images/588.jpg'
 document.getElementById('hide6').style.color = 'gry'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML =  'Shopping Mall In Apalit'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = "Super 99"
document.getElementById('yr-pic7').src = 'images/99.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'Shopping'
document.getElementById('ninu7').innerHTML = 'Shopping Mall in Apalit'


    }
     /*nature shopping sports*/
    else if (localStorage.getItem('hi36') ==  'Apalit Skate Park ning Apalit' ) {
      document.getElementById('title-spts').innerHTML = "Apalit Skate Park ning Apalit"
      document.getElementById('yr-pic').src = 'images/skate.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' Nature'
      document.getElementById('ninu').innerHTML= 'Park na Ning Arayat Pampanga.' 


      /*day2*/
     document.getElementById('title-spots2').innerHTML = '365 Shoppong Mart'
     document.getElementById('yr-pic2').src = 'images/365apalit.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping in Apalit'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = '588 Shopping Mall'
     document.getElementById('yr-pic3').src = 'images/588.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping mall in Apalit'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Savemore Apalit'
    document.getElementById('yr-pic4').src = 'images/sm.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping Grocery in Apalit'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Super99'
   document.getElementById('yr-pic5').src = 'images/99.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping in Apalit'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Puregold Extra Apalit'
 document.getElementById('yr-pic6').src = 'images/gold.png'
 document.getElementById('hide6').style.color = 'orange'
 document.getElementById('rating6').innerHTML = '4.5'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML =  'Shopping Grocery in Apalit'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history shopping sports*/
    else if (localStorage.getItem('hi36') ==  "588 Shopping Mall" ) {
      document.getElementById('title-spts').innerHTML = "588 Shopping Mall"
      document.getElementById('yr-pic').src = 'images/588.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = ' Shopping'
      document.getElementById('ninu').innerHTML= 'Mall in Apalit Pampanga'


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Church of Apalit/ Church Complex of St Peter the Apostol'
     document.getElementById('yr-pic2').src = 'images/apostle.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Churches of Apalit'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML =  'Pedro Espiritu Ancestral House'
     document.getElementById('yr-pic3').src = 'images/pedro.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historic House in Apalit'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = '365 Shopping Mart'
    document.getElementById('yr-pic4').src = 'images/365apalit.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping in Apalit'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Savemore Apalit'
   document.getElementById('yr-pic5').src = 'images/sm.jpg'
   document.getElementById('hide5').style.color = 'orange'
   document.getElementById('rating5').innerHTML = '4.5'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping Grocery in Apalit'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Puregold Extra Apalit'
 document.getElementById('yr-pic6').src = 'images/gold.png'
 document.getElementById('hide6').style.color = 'Orange'
 document.getElementById('rating6').innerHTML = '4.5'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML =  'Shopping Grocery in Apalit'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Apalit Skate Park'
document.getElementById('yr-pic7').src = 'images/skate.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'Nature'
document.getElementById('ninu7').innerHTML = 'Mini Park in Apalit'


    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi36') ==  "St. Peter The Apostle in Apalit" ) {
      document.getElementById('title-spts').innerHTML = "St. Peter The Apostle in Apalit"
      document.getElementById('yr-pic').src = 'images/cp.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Church of Apalit Pampanga.'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Pedro Espiritu Ancestral House'
     document.getElementById('yr-pic2').src = 'images/pedro.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Churches in Apalit'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = '365 Shopping Mall'
     document.getElementById('yr-pic3').src = 'images/365apalit.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping Mall in Apalit'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Savemore Apalit'
    document.getElementById('yr-pic4').src = 'images/sm.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping Grocery in Apalit'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Puregold Extra Apalit'
   document.getElementById('yr-pic5').src = 'images/gold.png'
   document.getElementById('hide5').style.color = 'orange'
   document.getElementById('rating5').innerHTML = '4.5'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping Grocery in Apalit'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Super99'
 document.getElementById('yr-pic6').src = 'images/99.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML =  'Shopping in Apalit'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = '588 Shopping Mall'
document.getElementById('yr-pic7').src = 'images/588.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'Shopping'
document.getElementById('ninu7').innerHTML = 'Shopping in Apalit'


    }
      }
      /*candaba*/
     else if (mapping == "Candaba, Pampanga") {
      document.getElementById('from').innerHTML = 'Candaba'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20candaba%20pampanga%20candaba%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20candaba%20pampanga%20candaba%20pampanga+(candaba)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Candaba, Pampanga"
        tripPlace.innerHTML = "Trip to Candaba, Pampanga"
        place.innerHTML = "Candaba, Pampanga"
        bg.src = "candaba/bird.jpg"
        nameX.innerHTML =   "Candaba, Pampanga"
        pictures.src = "candaba/bird.jpg"
        description.innerHTML = "Candaba represents the lowest point in Central Luzon Region of Luzon Island. The neighboring municipality of San Miguel (San Miguel de Mayumo) in Bulacan province used to be part of Candaba until San Miguel became a municipality itself."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        
        document.getElementById('text1').value = localStorage.getItem('hi43')
        document.getElementById('text2').value = localStorage.getItem('hi44')
        document.getElementById('text3').value = localStorage.getItem('hi45')
        document.getElementById('text4').value = localStorage.getItem('hi46')
        document.getElementById('text5').value = localStorage.getItem('hi47')
        document.getElementById('text6').value = localStorage.getItem('hi48')
        document.getElementById('text7').value = localStorage.getItem('hi49')
      
      /*sports complex*/
    if (localStorage.getItem('hi43') == 'None' ) {
      document.getElementById('title-spts').innerHTML = 'None'
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = 'None'
      document.getElementById('spotsz').innerHTML = 'None'
      document.getElementById('ninu').innerHTML= 'None'



 /*2*/

 /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



 /*shopping*/
    }
    else if  (localStorage.getItem('hi43') == 'Paligue Street Market' ) {
      document.getElementById('title-spts').innerHTML = 'Paligue Street Market'
      document.getElementById('yr-pic').src = 'images/cb.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Public Market In Candaba'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Puregold Candaba'
     document.getElementById('yr-pic2').src = 'images/silver.png'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Grocery in Candaba'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None' 
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*historical*/
    else if  (localStorage.getItem('hi43') == 'St.Andrew The Apostle Church') {
      document.getElementById('title-spts').innerHTML = 'St.Andrew The Apostle Church'
      document.getElementById('yr-pic').src = 'images/andrew.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Historic '
      document.getElementById('ninu').innerHTML= 'Historical Church in Candaba'

    


      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Reyes Ancestral House'
     document.getElementById('yr-pic2').src = 'images/reyes.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical House in Candaba'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Dela Cruz lugtu House'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical House in Candaba'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Torres House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical House in Candaba'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Castor Hous'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House in Candaba'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Alegria Alarcon House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical House in Candaba'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Lacanilao House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = '=Historical House in Candaba'


}
    /*nature*/
    else if (localStorage.getItem('hi43') ==  "Candaba Bird Sanctuary" ) {
      document.getElementById('title-spts').innerHTML = "Candaba Bird Sanctuary"
      document.getElementById('yr-pic').src = 'images/sanctuary.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Nature Park '
      document.getElementById('ninu').innerHTML= 'Preserve Nature in Candaba Pampanga' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Miss Earth Park, Candaba'
     document.getElementById('yr-pic2').src = 'images/earth.png'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*nature history*/
 else if (localStorage.getItem('hi43') == "Candaba Bird Sanctuary view") {
      document.getElementById('title-spts').innerHTML = "Candaba Bird Sanctuary"
      document.getElementById('yr-pic').src = 'images/sanctuary.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = 'Nature'
      document.getElementById('ninu').innerHTML= 'Nature in Candaba Pampanga' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Saint Andrew The Apostle Church'
     document.getElementById('yr-pic2').src = 'images/andrew.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical Church in Candaba'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Miss Earth Park, Candaba'
     document.getElementById('yr-pic3').src = 'images/earth.png'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Mini Park in Candaba'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Reyes Ancestral House'
    document.getElementById('yr-pic4').src = 'images/reyes.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical House in Candaba'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Tores House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House in Candaba'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Castor House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical House in Candaba'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Dela Cruz - Lugtu House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House in Candaba'


    }
     /*nature shopping*/
    else if (localStorage.getItem('hi43') ==  "Puregold Candaba" ) {
      document.getElementById('title-spts').innerHTML = "Puregold Candaba"
      document.getElementById('yr-pic').src = 'images/silver.png'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery store in Candaba Pampanga' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Miss Earth Park, Candaba'
     document.getElementById('yr-pic2').src = 'images/earth.png'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = "Nature's Park in Candaba"
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Paligue Street Market'
     document.getElementById('yr-pic3').src = 'images/paligue.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Street Market in Candaba'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML =  "Candaba Bird Sanctuary"
    document.getElementById('yr-pic4').src = 'images/sanctuary.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Nature'
    document.getElementById('ninu4').innerHTML = "Nature's adventure in Candaba"
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature sports*/
    else if (localStorage.getItem('hi43') ==  "Miss Earth Park Candaba" ) {
      document.getElementById('title-spts').innerHTML = "'Miss Earth Park, Candaba"
      document.getElementById('yr-pic').src = 'images/earth.png'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = 'Nature Park'
      document.getElementById('ninu').innerHTML= 'Park Adventure In Candaba Pampanga' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Candaba Bird Sanctuary'
     document.getElementById('yr-pic2').src = 'images/sanctuary.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = "Nature's adventure in Candaba"
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Candaba Arena'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.0'
     document.getElementById('spotsz3').innerHTML = 'sports'
     document.getElementById('ninu3').innerHTML = 'Sports Arena'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history shopping*/
    else if (localStorage.getItem('hi43') ==  "Torres House" ) {
      document.getElementById('title-spts').innerHTML = "Torres House"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'History of House ni Torres ' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Reyes Ancestral Church'
     document.getElementById('yr-pic2').src = 'images/reyes.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical Church In Candaba'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'St. Andrew the Apostle Church'
     document.getElementById('yr-pic3').src = 'images/andrew.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical Church in Candaba'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'castro house'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical House in Candaba'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Alegria Alarcon House House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.0'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical House in Candaba'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML =  'Lacanilao House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical House in Candaba'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Limjoco-Bautista House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical House in Candaba'


    }
     /*history sports*/
    else if (localStorage.getItem('hi43') == "Reyes Ancestral House" ) {
      document.getElementById('title-spts').innerHTML = "Reyes Ancestral House"
      document.getElementById('yr-pic').src = 'images/reyes.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Reyes History of Ancestral House ' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'St. Andrew Apostle Church'
     document.getElementById('yr-pic2').src = 'images/andrew.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical Church in Candaba'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Limjoco Bautista House'
     document.getElementById('yr-pic3').src = 'images/reyes.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical House in Candaba'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Torres  House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical House in Candaba'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML ='Alegria Alarcon House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.0'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical House in Candaba'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Castor House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical House in Candaba'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Lacanilao House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical House in Candaba'






    }
     /*shopping sports*/
    else if (localStorage.getItem('hi43') ==  "Puregold" ) {
      document.getElementById('title-spts').innerHTML = "Puregold"
      document.getElementById('yr-pic').src = 'images/silver.png'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery in Candaba Pampanga.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Paligue Street Market'
     document.getElementById('yr-pic2').src = 'images/paligue.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Street Market in Candaba'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history shopping*/
    else if (localStorage.getItem('hi43') ==  "Castor House" ) {
      document.getElementById('title-spts').innerHTML = "Castor House"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'History in Candaba Pampanga' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Paligue Street Market'
     document.getElementById('yr-pic2').src = 'images/andrew.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical Church in Candaba'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'St. Andrew The Apostle Church '
     document.getElementById('yr-pic3').src = 'images/paligue.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Street Market in Candaba'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'puregold'
    document.getElementById('yr-pic4').src = 'images/silver.png'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Grocery Shopping in Candaba'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Dela Cruz House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Torres House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical House in Candaba'
/*day7*/
document.getElementById('ttle-spts7').innerHTML =  'Lacanilao House '
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical House in Candaba'


    }
     /*nature history sports*/
    else if (localStorage.getItem('hi43') ==  "Bird Sanctuary in Candaba" ) {
      document.getElementById('title-spts').innerHTML = "Bird Sanctuary"
      document.getElementById('yr-pic').src = 'images/sanctuary.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = 'Nature'
      document.getElementById('ninu').innerHTML= 'Nature in Candaba Pampanga.' 
       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Miss Earth Park, Candaba'
     document.getElementById('yr-pic2').src = 'images/earth.png'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = "Nature's Park in Candaba"
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'St. Andrew the Apostle Church'
     document.getElementById('yr-pic3').src = 'images/andrew.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical Church in Candaba '
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML =  'Candaba Arena'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.0'
    document.getElementById('spotsz4').innerHTML = 'Sports'
    document.getElementById('ninu4').innerHTML = 'Sports Arena in Candaba'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Castor House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical House in Candaba'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Torres House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical House in Candaba'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Dela Cruz Lugtu House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical House in Candaba'





    }
     /*nature shopping sports*/
    else if (localStorage.getItem('hi43') ==  'Dela Cruz Lugtu House' ) {
      document.getElementById('title-spts').innerHTML = "Dela Cruz Lugtu House"
      document.getElementById('yr-pic').src = 'images/cruz.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' Nature'
      document.getElementById('ninu').innerHTML= 'Bale ng Dela Cruz keng Candaba Pampanga.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML ='Miss Earth Park, Candaba'
     document.getElementById('yr-pic2').src = 'images/earth.png'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = "Nature's Park in Candaba"
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Paligue Street Market'
     document.getElementById('yr-pic3').src = 'images/paligue.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Street Market in Candaba'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Puregold'
    document.getElementById('yr-pic4').src = 'images/silver.png'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Grocery Shopping in Candaba'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Candaba Arena'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.0'
   document.getElementById('spotsz5').innerHTML = 'Sports'
   document.getElementById('ninu5').innerHTML = 'Sports Arena in Candaba'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Candaba Bird Sanctuary'
 document.getElementById('yr-pic6').src = 'images/sanctuary.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'Nature'
 document.getElementById('ninu6').innerHTML =  "Nature's adventure in Candaba"
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'





    }
     /*history shopping sports*/
    else if (localStorage.getItem('hi43') ==  "Alegria Alarcon House" ) {
      document.getElementById('title-spts').innerHTML = "Alegria Alarcon House"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'House in Candaba Pampanga' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML =  'Paligue Street Market'
     document.getElementById('yr-pic2').src = 'images/paligue.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Street Market in Candaba'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML =  'St. Andrew The Apostle Church'
     document.getElementById('yr-pic3').src = 'images/andrew.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical Church in Candaba '
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Torres House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.0'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical House in Candaba'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Puregold'
   document.getElementById('yr-pic5').src = 'images/silver.png'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Grocery Shopping in Candaba'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Dela Cruz Lugtu House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical House in Candaba'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Castor House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical House in Candaba'





    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi43') ==  "Candaba ning Bird Sanctuary" ) {
      document.getElementById('title-spts').innerHTML = "Candaba Bird Sanctuary"
      document.getElementById('yr-pic').src = 'images/sanctuary.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'Nature'
      document.getElementById('ninu').innerHTML= 'Birds Nature.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Miss Earth Park, Candaba'
     document.getElementById('yr-pic2').src = 'images/earth.png'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = "Nature's Park in Candaba"
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Candaba Arena'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Sports Arena in Candaba'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Paligue Street Market'
    document.getElementById('yr-pic4').src = 'images/paligue.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Street Market in Candaba'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Puregold'
   document.getElementById('yr-pic5').src = 'images/silver.png'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4,4'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Grocery Shopping in Candaba'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'St. Andrew the Apostle Church'
 document.getElementById('yr-pic6').src = 'images/andrew.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical Church in Candaba'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Torres House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.0'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical House in Candaba'





    }  
      }
      /*macabebe*/
     else if (mapping == "Macabebe, Pampanga") {
      document.getElementById('from').innerHTML = 'Macabebe'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20macabebe%20pampanga%20macabebe%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20macabebe%20pampanga%20macabebe%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Macabebe, Pampanga"
        tripPlace.innerHTML = "Trip to Macabebe, Pamp"
        place.innerHTML = "Macabebe, Pampanga"
        bg.src = "macabebe/beach.png"
        pictures.src = "macabebe/beach.png"
        nameX.innerHTML =  "Macabebe, Pampanga"
        description.innerHTML = "Macabebe, an ancient town in the modern-day province of Pampanga, is intimately linked to the Pampanga River (Río Grande de la Pampanga). The town was named Macabebe because it is geographically situated along the shores (Pampangan: bebe; Tagalog: baybay) or banks of Río Grande de Pampanga. The town is sometimes referred to as Makabibe because of the abundance of corals and shells along the Río Grande in earlier times."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi50')
        document.getElementById('text2').value = localStorage.getItem('hi51')
        document.getElementById('text3').value = localStorage.getItem('hi52')
        document.getElementById('text4').value = localStorage.getItem('hi53')
        document.getElementById('text5').value = localStorage.getItem('hi54')
        document.getElementById('text6').value = localStorage.getItem('hi55')
        document.getElementById('text7').value = localStorage.getItem('hi56')
      
      /*sports complex*/
    if (localStorage.getItem('hi50') == 'None' ) {
      document.getElementById('title-spts').innerHTML = 'None'
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = 'None'
      document.getElementById('spotsz').innerHTML = 'None'
      document.getElementById('ninu').innerHTML= 'None'


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'







 /*2*/
     
 /*shopping*/
    }
    else if  (localStorage.getItem('hi50') == 'Watson Savemore Primark Macabebe' ) {
      document.getElementById('title-spts').innerHTML = 'Watson Savemore Primark'
      document.getElementById('yr-pic').src = 'images/prim.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Town Center Macabebe'


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Best Budget Macabebe'
     document.getElementById('yr-pic2').src = 'images/bd.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'shopping'
     document.getElementById('ninu2').innerHTML = 'shopping in macabebe'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

    }
    /*historical*/
    else if (localStorage.getItem('hi50') == 'St. Nicolas De Tolentino Parish Church' ) {
      document.getElementById('title-spts').innerHTML = 'St. Nicolas De Tolentino Parish'
      document.getElementById('yr-pic').src = 'images/nicolas.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = ' Historical '
      document.getElementById('ninu').innerHTML= 'Church in Macabebe'

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*nature*/
    else if (localStorage.getItem('hi50') ==  "Macabebe Beach" ) {
      document.getElementById('title-spts').innerHTML = "Macabebe Beach"
      document.getElementById('yr-pic').src = 'images/bitch.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Beach in Macabebe' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*nature history*/
 else if (localStorage.getItem('hi50') == "Saint Nicolas De Tolentino Church") {
      document.getElementById('title-spts').innerHTML = "Saint Nicolas De Tolentino Parish"
      document.getElementById('yr-pic').src = 'images/nicolas.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = 'Historical'
      document.getElementById('ninu').innerHTML= 'Church in Macabebe' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Macabebe Beach'
     document.getElementById('yr-pic2').src = 'images/beach.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Nature Adventure in Macabebe'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature shopping*/
    else if (localStorage.getItem('hi50') ==  "Best Budget Macabebe" ) {
      document.getElementById('title-spts').innerHTML = "Best Budget Macabebe"
      document.getElementById('yr-pic').src = 'images/more.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery store in Macabebe Pampanga' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = "Macabebe Beach"
     document.getElementById('yr-pic2').src = 'images/mcbeach.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Nature Adventure in Macabebe'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Savemore'
     document.getElementById('yr-pic3').src = 'images/sm.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Grocery in macabebe'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Watsons Macabebe'
    document.getElementById('yr-pic4').src = 'images/prim.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping in Macabebe'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


}
     /*nature sports*/
    else if (localStorage.getItem('hi50') ==  "Macabebe Beach In Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Macabebe Beach In Pampanga"
      document.getElementById('yr-pic').src = 'images/bitch.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = 'Nature'
      document.getElementById('ninu').innerHTML= 'Macabebe Beach in Pampanga' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



    }
     /*history shopping*/
    else if (localStorage.getItem('hi50') ==  "Primark Center Macabebe" ) {
      document.getElementById('title-spts').innerHTML = "Primark Center Macabebe"
      document.getElementById('yr-pic').src = 'images/prim.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = 'Shopping'
      document.getElementById('ninu').innerHTML= 'Shopping in Macabebe Pampanga ' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Saint Nicolas De Tolentino Church'
     document.getElementById('yr-pic2').src = 'images/nicolas.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'history'
     document.getElementById('ninu2').innerHTML = 'church of macabebe'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Best Budget Macabebe'
     document.getElementById('yr-pic3').src = 'images/bd.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'shopping'
     document.getElementById('ninu3').innerHTML = 'Grocery in macabebe'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history sports*/
    else if (localStorage.getItem('hi50') == "St. Nicolas De Tolentino Parish Church" ) {
      document.getElementById('title-spts').innerHTML = "St. Nicolas De Tolentino Parish Church"
      document.getElementById('yr-pic').src = 'images/nicolas.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'History Church in Macabebe Pampamga ' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'




    }
     /*shopping sports*/
    else if (localStorage.getItem('hi50') ==  "Primark Macabebe" ) {
      document.getElementById('title-spts').innerHTML = "Primark Macabebe"
      document.getElementById('yr-pic').src = 'images/prim.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery in Macabebe Pampanga.' 



       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'




    }
     /*nature history shopping*/
    else if (localStorage.getItem('hi50') ==  "Sta. Monica Parish Church" ) {
      document.getElementById('title-spts').innerHTML = "Sta. Monica Parish Church"
      document.getElementById('yr-pic').src = 'images/monica.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'History Churches In Macabebe Pampanga' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Primark Macabebe'
     document.getElementById('yr-pic2').src = 'images/Prim.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'shopping'
     document.getElementById('ninu2').innerHTML = 'grocery in macabebe'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML ='San Nicolas De Tolentino Church'
     document.getElementById('yr-pic3').src = 'images/nicolas.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'history'
     document.getElementById('ninu3').innerHTML = 'church in macabebe'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Best Budget Macabebe'
    document.getElementById('yr-pic4').src = 'images/bd.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Grocery in Macabebe'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history sports*/
    else if (localStorage.getItem('hi50') ==  "Beach in Macabebe Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Beach in Macabebe Pampanga"
      document.getElementById('yr-pic').src = 'images/bitch.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = 'Nature'
      document.getElementById('ninu').innerHTML= 'Nature Water in Macabeb  In Pampanga.' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sta. Monica Parish Church'
     document.getElementById('yr-pic2').src = 'images/monica.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'history'
     document.getElementById('ninu2').innerHTML = 'church in macabebe'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'





    }
     /*nature shopping sports*/
    else if (localStorage.getItem('hi50') ==  'Best Budget Macabebe In Pampanga' ) {
      document.getElementById('title-spts').innerHTML = "Best Budget Macabebe In Pampanga"
      document.getElementById('yr-pic').src = 'images/more.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' Nature'
      document.getElementById('ninu').innerHTML= 'Grocery Shopping in Macabebe.'

        /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Watson Savemore'
     document.getElementById('yr-pic2').src = 'images/prim.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'shopping'
     document.getElementById('ninu2').innerHTML = 'shopping store in Macabebe'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Macabebe Beach'
     document.getElementById('yr-pic3').src = 'images/mcbeach.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Nature beach in macabebe'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



    }
     /*history shopping sports*/
    else if (localStorage.getItem('hi50') ==  "Sta. Monica Parish Church In Macabebe" ) {
      document.getElementById('title-spts').innerHTML = "Sta. Monica Parish Church"
      document.getElementById('yr-pic').src = 'images/monica.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'History Church In Macabebe Pampanga' 
       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Watson Savemore Primark Macabebe'
     document.getElementById('yr-pic2').src = 'images/prim.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'shopping'
     document.getElementById('ninu2').innerHTML = 'shopping in macabebe'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Best Budget Macabebe'
     document.getElementById('yr-pic3').src = 'images/bd.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'shopping'
     document.getElementById('ninu3').innerHTML = 'shopping in macabebe'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Saint Nicolas De Tolentino Parish Church'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'history'
    document.getElementById('ninu4').innerHTML = 'history in macabebe'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'





    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi50') ==  "Church of St.Nicolas De Tolentino Parish " ) {
      document.getElementById('title-spts').innerHTML = "Church of St.Nicolas De Tolentino"
      document.getElementById('yr-pic').src = 'images/nicolas.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Church In Macabebe Pampanga.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Macabebe Beach'
     document.getElementById('yr-pic2').src = 'images/mcbeach.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'beach in macabebe'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Watson Savemore Primark Macabebe'
     document.getElementById('yr-pic3').src = 'images/prim.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'shopping'
     document.getElementById('ninu3').innerHTML = 'shopping in macabebe'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Best Budget Macabebe'
    document.getElementById('yr-pic4').src = 'images/bd.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'shopping'
    document.getElementById('ninu4').innerHTML = 'shopping in macabebe'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None' 




    }    
      }
      /*sasmuan*/
     else if (mapping == "Sasmuan, Pampanga") {
      document.getElementById('from').innerHTML = 'Sasmuan'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20sasmuan%20pampanga%20sasmuanpampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"id="gmapz"" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20sasmuan%20pampanga%20sasmuan%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Sasmuan, Pampanga"
        tripPlace.innerHTML = "Trip to Sasmuan, Pampanga"
        place.innerHTML = "Sasmuan, Pampanga"
        bg.src = "samuan/sasmuan.jpg"
        pictures.src = "samuan/sasmuan.jpg"
        nameX.innerHTML =  "Sasmuan, Pampanga"
        description.innerHTML = "The town's former name in Spanish was Sexmoán, as was initially transcribed by Spanish friars. In Spanish, the letter <x> used to be pronounced as a voiceless postalveolar fricative /ʃ/, identical to the digraph <sh> in English. It was derived from the ancient Kapampangan rootword sasmo, which means to meet, according to a 17th-century Kapampangan dictionary. "
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi57')
        document.getElementById('text2').value = localStorage.getItem('hi58')
        document.getElementById('text3').value = localStorage.getItem('hi59')
        document.getElementById('text4').value = localStorage.getItem('hi60')
        document.getElementById('text5').value = localStorage.getItem('hi61')
        document.getElementById('text6').value = localStorage.getItem('hi62')
        document.getElementById('text7').value = localStorage.getItem('hi63')
      
         /*sports complex*/
    if (localStorage.getItem('hi57') == 'Sasmuan Basketball Court' ) {
      document.getElementById('title-spts').innerHTML = 'Sasmuan Basketball Court '
      document.getElementById('yr-pic').src = 'images/court.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = 'Sports'
      document.getElementById('ninu').innerHTML= 'Basketball  In Sasmuan '



       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


 /*2*/
     
 /*shopping*/
    }
    else if  (localStorage.getItem('hi57') == 'Alfamart' ) {
      document.getElementById('title-spts').innerHTML = 'Alfamart'
      document.getElementById('yr-pic').src = 'images/mart.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery In Sasmuan'
       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*historical*/
    else if (localStorage.getItem('hi57') == 'San Lucia Parish Church' ) {
      document.getElementById('title-spts').innerHTML = 'San Luicia Parish Church'
      document.getElementById('yr-pic').src = 'images/lucia.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = ' Historical '
      document.getElementById('ninu').innerHTML= 'Church in Sasmuan Pampanga'


     /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sasmuan Town Hall'
     document.getElementById('yr-pic2').src = 'images/th.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historical'
     document.getElementById('ninu2').innerHTML = 'historical in sasmuan'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'St. Monica Port'
     document.getElementById('yr-pic3').src = 'images/st.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Historical'
     document.getElementById('ninu3').innerHTML = 'Historical in sasmuan'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Don Monico Mercado Monument'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'Historical'
    document.getElementById('ninu4').innerHTML = 'historical in sasmuan'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Diosdado Macapagal Monument'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'Historical'
   document.getElementById('ninu5').innerHTML = 'historical in sasmuan'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Magpayo Residence'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'Historical'
 document.getElementById('ninu6').innerHTML =  'historical'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Laus Residence'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4,1'
document.getElementById('spotsz7').innerHTML =  'historical'
document.getElementById('ninu7').innerHTML = 'Historical in sasmuan'


    }
    /*nature*/
    else if (localStorage.getItem('hi57') ==  "Bangkung Malapad " ) {
      document.getElementById('title-spts').innerHTML = "Bangkung Malapad Bird Watching Site"
      document.getElementById('yr-pic').src = 'images/malapad.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Nature site in Sasmuan' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = ' Bird Watching Site'
     document.getElementById('yr-pic2').src = 'images/malapad.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'nature in sasmuan'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sasmuan River'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Nature in sasmuan'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*nature history*/
 else if (localStorage.getItem('hi57') == "sasmuan Town HallS") {
      document.getElementById('title-spts').innerHTML = "Sasmuan Town Hall"
      document.getElementById('yr-pic').src = 'images/th.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = 'Historical'
      document.getElementById('ninu').innerHTML= 'Town Hall of Sasmuan' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Bangkung Malapad Bird Watching Site"'
     document.getElementById('yr-pic2').src = 'images/malapad.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'nature'
     document.getElementById('ninu2').innerHTML = ' nature in sasmuan'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sasmuan River'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Nature in sasmuan'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'San Lucia Parish Church'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'history'
    document.getElementById('ninu4').innerHTML = 'history in sasmuan'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'St. Monica Port'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'history in sasmuan'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Don Monico Mercado Monument'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'history'
 document.getElementById('ninu6').innerHTML =  'history in sasmuan'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Diosdado Macapagal Monument'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'history'
document.getElementById('ninu7').innerHTML = 'history in sasmuan'


    }
     /*nature shopping*/
    else if (localStorage.getItem('hi57') ==  "Sasmuan River" ) {
      document.getElementById('title-spts').innerHTML = "Sasmuan River"
      document.getElementById('yr-pic').src = 'images/river.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' Nature'
      document.getElementById('ninu').innerHTML= 'River of Sasmuan Pampanga' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Alfamart'
     document.getElementById('yr-pic2').src = 'images/alfa.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'shopping'
     document.getElementById('ninu2').innerHTML = 'shopping in sasmuan'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Bangkung Malapad Bird Watching Site'
     document.getElementById('yr-pic3').src = 'images/malapad.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Nature in sasmuan'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature sports*/
    else if (localStorage.getItem('hi57') ==  "Sasmuan Basketball Court In Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Sasmuan Basketball Court"
      document.getElementById('yr-pic').src = 'images/court.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = 'Sports'
      document.getElementById('ninu').innerHTML= 'Sasmuan Sport Complex Pampanga' 
       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Bangkung Malapad Bird Site'
     document.getElementById('yr-pic2').src = 'images/malapad.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Nature in sasmuan'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sasmuan River'
     document.getElementById('yr-pic3').src = 'images/river.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Nature in sasmuan'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history shopping*/
    else if (localStorage.getItem('hi57') ==  "La Rambla" ) {
      document.getElementById('title-spts').innerHTML = "La Rambla"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = 'Shopping'
      document.getElementById('ninu').innerHTML= 'Shopping in Sasmuan Pampanga ' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sasmuan Town Hall'
     document.getElementById('yr-pic2').src = 'images/th.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'history'
     document.getElementById('ninu2').innerHTML = 'history in sasmuan'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'San Lucia Parish Church'
     document.getElementById('yr-pic3').src = 'images/st.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'history'
     document.getElementById('ninu3').innerHTML = 'history in sasmuan'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Don Monico Mercado Monument'
    document.getElementById('yr-pic4').src = 'images/dmm.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'history'
    document.getElementById('ninu4').innerHTML = 'history in sasmuan'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Riverside Arcade'
   document.getElementById('yr-pic5').src = 'images/river.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'shopping'
   document.getElementById('ninu5').innerHTML = 'shopping in sasmuan'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'St. Monica Port'
 document.getElementById('yr-pic6').src = 'images/monica.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'history'
 document.getElementById('ninu6').innerHTML =  'Historical Church in Sasmuan'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Diosdado Macapagal Monument'
document.getElementById('yr-pic7').src = 'images/dado.png'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'history'
document.getElementById('ninu7').innerHTML = 'History in Sasmuan'


    }
     /*history sports*/
    else if (localStorage.getItem('hi57') == "Diosdado Macapagal Monument" ) {
      document.getElementById('title-spts').innerHTML = "Diosdado Macapagal Monument"
      document.getElementById('yr-pic').src = 'images/dado.png'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Monument in Sasmuan Pampamga ' 




       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sta. Lucia Parish Church'
     document.getElementById('yr-pic2').src = 'images/lucia.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'history'
     document.getElementById('ninu2').innerHTML = 'Church in Sasmuan'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sasmuan Basketball Court'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'sports'
     document.getElementById('ninu3').innerHTML = 'Covered court in Sasmuan'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Magpayo Residence'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'history'
    document.getElementById('ninu4').innerHTML = 'Historical House in Sasmuan'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Laus Residence'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'history'
   document.getElementById('ninu5').innerHTML = 'Historical House in Sasmuan'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Miranda Ancestral House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical House in Sasmuan'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Sasmuan Town Hall'
document.getElementById('yr-pic7').src = 'images/th.jpg'
document.getElementById('hide7').style.color = 'orange'
document.getElementById('rating7').innerHTML = '4.4'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Sasmuan Town Hall'


    }
     /*shopping sports*/
    else if (localStorage.getItem('hi57') ==  "Alfamart In Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Alfamart In Pampanga"
      document.getElementById('yr-pic').src = 'images/prime.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery in Sasmuan Pampanga.' 



       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sasmuan Basketball Court'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Basketball Court in Sasmuan pampanga'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history shopping*/
    else if (localStorage.getItem('hi57') ==  "St. Monica Port" ) {
      document.getElementById('title-spts').innerHTML = "St. Monica Port"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'History Churches In Macabebe Pampanga' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sta. Lucia Parish Church'
     document.getElementById('yr-pic2').src = 'images/lucia.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Church in sasmuan'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sasmuan Town Hall'
     document.getElementById('yr-pic3').src = 'images/th.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Town Hall in sasmuan'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Laus Residence'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical house in sasmuan'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Magpayo Residence'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical house in sasmuan'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Diosdado Macapagal Monument'
 document.getElementById('yr-pic6').src = 'images/dado.png'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.0'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'diosdado monument'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Alfamart'
document.getElementById('yr-pic7').src = 'images/alfa.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'shopping'
document.getElementById('ninu7').innerHTML = 'Grocery in sasmuan'

    }
     /*nature history sports*/
    else if (localStorage.getItem('hi57') ==  "Laus Residence" ) {
      document.getElementById('title-spts').innerHTML = "Laus Residence"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = 'Historical'
      document.getElementById('ninu').innerHTML= 'Historical House in Sasmuan Pampanga.' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sasmuan River'
     document.getElementById('yr-pic2').src = 'images/river.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'nature'
     document.getElementById('ninu2').innerHTML = 'nature river in Sasmuan'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sasmuan Basketball Court'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'sports'
     document.getElementById('ninu3').innerHTML = 'Covered court in Sasmuan'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Sta. Lucia Parish Church'
    document.getElementById('yr-pic4').src = 'images/lucia.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Church in sasmuan'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Sasmuan Town Hall'
   document.getElementById('yr-pic5').src = 'images/th.jpg'
   document.getElementById('hide5').style.color = 'orange'
   document.getElementById('rating5').innerHTML = '4.5'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Town Hall in sasmuan'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Bangkung Malapad Bird Site'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'Nature'
 document.getElementById('ninu6').innerHTML =  'Bird Watching site'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Miranda Ancestral House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House in Sasmuan'


    }
     /*nature shopping sports*/
    else if (localStorage.getItem('hi57') ==   "Sasmuan River Pampanga." ) {
      document.getElementById('title-spts').innerHTML = "Sasmuan River"
      document.getElementById('yr-pic').src = 'images/river.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' Nature'
      document.getElementById('ninu').innerHTML= 'River In Sasmuan Pampanga.' 



       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Bangkung Malapad Bird Site'
     document.getElementById('yr-pic2').src = 'images/malapad.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Natures'
     document.getElementById('ninu2').innerHTML = 'Bird Watching Site'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML ='Alfamart'
     document.getElementById('yr-pic3').src = 'images/alfa.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping Mart in Sasmuan '
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Sasmuan Basketball Court'
    document.getElementById('yr-pic4').src = 'images/sbasket.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Sports'
    document.getElementById('ninu4').innerHTML = 'Covered Court in Sasmuan'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history shopping sports*/
    else if (localStorage.getItem('hi57') ==  "Magpayo Residence" ) {
      document.getElementById('title-spts').innerHTML = "Magpayo Residence"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Historic Sasmuan Pampanga' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Alfamart'
     document.getElementById('yr-pic2').src = 'images/alfa.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mart in Sasmuan'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML ='Sta. Lucia Parish Church'
     document.getElementById('yr-pic3').src = 'images/lucia.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical Church in Sasmuan'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Sta. Monica Parish Port'
    document.getElementById('yr-pic4').src = 'images/monica.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical Church in Sasmuan'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Sasmuan Town Hall'
   document.getElementById('yr-pic5').src = 'images/th.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical place in Sasmuan'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Diosdado Macapagal Monument'
 document.getElementById('yr-pic6').src = 'images/dado.png'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.0'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical place in Sasmuan'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Sasmuan Basketball Court'
document.getElementById('yr-pic7').src = 'images/sbasket.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'Sports'
document.getElementById('ninu7').innerHTML = 'Covered court in Sasmuan'


    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi57') ==   "Bird Watching Site In Sasmuan  ") {
      document.getElementById('title-spts').innerHTML = "Bird Watching Site"
      document.getElementById('yr-pic').src = 'images/malapad.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'Nature'
      document.getElementById('ninu').innerHTML= 'Relaxing Bird Watching in Sasmuan.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sasmuan River'
     document.getElementById('yr-pic2').src = 'images/river.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'River adventure in Sasmuan '
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sasmuan Town Hall'
     document.getElementById('yr-pic3').src = 'images/th.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical place in Sasmuan'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Sasmuan Basketball Court'
    document.getElementById('yr-pic4').src = 'images/sbasket.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'Sports'
    document.getElementById('ninu4').innerHTML = 'Covered court in Sasmuan'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Alfamart'
   document.getElementById('yr-pic5').src = 'images/alfa.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping Mart in Sasmuan'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Sta. Lucia Parish Church'
 document.getElementById('yr-pic6').src = 'images/lucia.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical Church in Sasmuan'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Sta. Monica Port'
document.getElementById('yr-pic7').src = 'images/monica.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical place in Sasmuan'

    }    
 
      }
      /*san luis*/
     else if (mapping == "San Luis, Pampanga") {
      document.getElementById('from').innerHTML = 'San luis'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20san%20luis%20pampanga%20san%20luis%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20san%20luis%20pampanga%20san%20luis%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to San Luis, Pampanga"
        tripPlace.innerHTML = "Trip to San Luis, Pampanga"
        place.innerHTML = "San Luis, Pampanga"
        pictures.src = "sanluis/town.jpg"
        bg.src = "sanluis/town.jpg"
        nameX.innerHTML =  "San Luis, Pampanga"
        description.innerHTML = "San Luis, officially the Municipality of San Luis (Kapampangan: Balen ning San Luis; Tagalog: Bayan ng San Luis), is a 3rd class municipality in the province of Pampanga, Philippines. According to the 2020 census, it had a population of 58,551 people."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi64')
        document.getElementById('text2').value = localStorage.getItem('hi65')
        document.getElementById('text3').value = localStorage.getItem('hi66')
        document.getElementById('text4').value = localStorage.getItem('hi67')
        document.getElementById('text5').value = localStorage.getItem('hi68')
        document.getElementById('text6').value = localStorage.getItem('hi69')
        document.getElementById('text7').value = localStorage.getItem('hi70')

        /*sports complex*/
    if (localStorage.getItem('hi64') == 'San Luis Sports Complex' ) {
      document.getElementById('title-spts').innerHTML = 'San Luis Sports Complex'
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = 'Sports'
      document.getElementById('ninu').innerHTML= 'Basketball Court In San Luis '


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


 /*2*/
     
 /*shopping*/
    }
    else if  (localStorage.getItem('hi64') == 'Old San Luis Public Market' ) {
      document.getElementById('title-spts').innerHTML = 'Old San Luis Public Market'
      document.getElementById('yr-pic').src = 'images/old.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Public Market In San Luis Pampanga'


       /*day2*/
     document.getElementById('title-spots2').innerHTML = ''
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = ''
     document.getElementById('rating2').innerHTML = ''
     document.getElementById('spotsz2').innerHTML = ''
     document.getElementById('ninu2').innerHTML = ''
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = ''
    document.getElementById('rating4').innerHTML = ''
    document.getElementById('spotsz4').innerHTML = ''
    document.getElementById('ninu4').innerHTML = ''
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*historical*/
    else if (localStorage.getItem('hi64') == 'St. Aloysuis Parish Church' ) {
      document.getElementById('title-spts').innerHTML = 'St. Aloysuis Parish Church'
      document.getElementById('yr-pic').src = 'images/aloy.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = ' Historical '
      document.getElementById('ninu').innerHTML= 'Church in San Luis Pampanga'


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Bulanadi House'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical House in San luis'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Felipe Carlos House'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical House in San luis'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Loreto Punzalan House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical House in San luis'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

      
    }
    /*nature*/
    else if (localStorage.getItem('hi64') ==  "San Luis Park" ) {
      document.getElementById('title-spts').innerHTML = "San Luis Park"
      document.getElementById('yr-pic').src = 'images/luis.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Nature'
      document.getElementById('ninu').innerHTML= 'Nature In San Luis In Pampanga' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = ''
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = ''
     document.getElementById('rating2').innerHTML = ''
     document.getElementById('spotsz2').innerHTML = ''
     document.getElementById('ninu2').innerHTML = ''
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = ''
    document.getElementById('rating4').innerHTML = ''
    document.getElementById('spotsz4').innerHTML = ''
    document.getElementById('ninu4').innerHTML = ''
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*nature history*/
 else if (localStorage.getItem('hi64') == "Bulanadi House") {
      document.getElementById('title-spts').innerHTML = "Bulanadi House"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = 'Historical'
      document.getElementById('ninu').innerHTML= 'History of Bulanadi House in San Luis' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = "San Luis Park"
     document.getElementById('yr-pic2').src = 'images/luis.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Nature Park in San luis'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Felipe Carlos House'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical House in San luis'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Loreto Punzalan House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical House in  San luis'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'St. Aloysuis Parish Church'
   document.getElementById('yr-pic5').src = 'images/aloy.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Churches in San luis'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature shopping*/
    else if (localStorage.getItem('hi64') ==  "Old San Luis Public Market In Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Old San Luis Public Markets"
      document.getElementById('yr-pic').src = 'images/old.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' Shopping'
      document.getElementById('ninu').innerHTML= 'Market in San Luis Pampanga'


       /*day2*/
     document.getElementById('title-spots2').innerHTML = "San Luis Park"
     document.getElementById('yr-pic2').src = 'images/luis.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Nature Park in San luis'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = ''
    document.getElementById('rating4').innerHTML = ''
    document.getElementById('spotsz4').innerHTML = ''
    document.getElementById('ninu4').innerHTML = ''
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature sports*/
    else if (localStorage.getItem('hi64') ==  "San Luis Park In Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "San Luis Park In Pampanga"
      document.getElementById('yr-pic').src = 'images/luis.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = 'Nature'
      document.getElementById('ninu').innerHTML= 'Nature Park Pampanga' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = "San Luis Sport Complex"
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Basketball Covered in San luis'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = ''
    document.getElementById('rating4').innerHTML = ''
    document.getElementById('spotsz4').innerHTML = ''
    document.getElementById('ninu4').innerHTML = ''
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history shopping*/
    else if (localStorage.getItem('hi64') ==  "Felipe Carlos House" ) {
      document.getElementById('title-spts').innerHTML = "Felipe Carlos House"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = 'Historic'
      document.getElementById('ninu').innerHTML= 'Historic of Felipe House in Pampanga ' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Old San Luis Public Market'
     document.getElementById('yr-pic2').src = 'images/old.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Public Market in San luis'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Bulanadi House'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical House in San luis'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'St.Aloysius Parish Church'
    document.getElementById('yr-pic4').src = 'images/aloy.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Churches in San luis'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Loreto Punzalan House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.0'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House in San luis'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history sports*/
    else if (localStorage.getItem('hi64') == "Loreto Punzalan House" ) {
      document.getElementById('title-spts').innerHTML = "Loreto Punzalan House"
      document.getElementById('yr-pic').src = 'images/usedata.png'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Historical House in Pampamga ' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'St. Aloysius Parish Church'
     document.getElementById('yr-pic2').src = 'images/aloy.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Churches in San luis'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Bulanadi House'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical House IN San luis'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Felipe Carlos House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical House in San luis'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'San Luis Sports Complex'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'Sports'
   document.getElementById('ninu5').innerHTML = 'Basketball Covered Cover in San luis '
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*shopping sports*/
    else if (localStorage.getItem('hi64') ==  "San Luis Public Market" ) {
      document.getElementById('title-spts').innerHTML = "San Luis Public Market"
      document.getElementById('yr-pic').src = 'images/old.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Market in San Luis Pampanga.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history shopping*/
    else if (localStorage.getItem('hi64') ==  "St. Aloysius Parish Church" ) {
      document.getElementById('title-spts').innerHTML = "St. Aloysius Parish Church"
      document.getElementById('yr-pic').src = 'images/aloy.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Church of San Luis Pampanga' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Old San Luis Public Market'
     document.getElementById('yr-pic2').src = 'images/old.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Public Market in San Luis'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Bulanadi House'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historic House in San Luis'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Loreto Punzalan House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historic House in San Luis'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Felipe Carlos House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historic House in San Luis'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



    }
     /*nature history sports*/
    else if (localStorage.getItem('hi64') ==  "Loreto Punzalan House In Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Loreto Punzalan House In Pampanga"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = 'Historical'
      document.getElementById('ninu').innerHTML= 'Historical House in San Luis Pampanga.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'San Luis Park'
     document.getElementById('yr-pic2').src = 'images/luis.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Park In San Luis'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'San Luis Sports Complex'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Sports in San Luis'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML ='St. Aloysius Parish Church'
    document.getElementById('yr-pic4').src = 'images/aloy.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Church in San Luis'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Bulanadi House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historic House in San Luis'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Felipe Carlos House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = '4.1'
 document.getElementById('rating6').innerHTML = 'Gray'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historic House in San Luis'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature shopping sports*/
    else if (localStorage.getItem('hi64') ==  'San Luis Basketball Court' ) {
      document.getElementById('title-spts').innerHTML = "San Luis Basketball Court"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = 'Sports'
      document.getElementById('ninu').innerHTML= 'Basketball Court In San Luis Pampanga.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Old San Luis Public Market'
     document.getElementById('yr-pic2').src = 'images/old.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Public Market in San Luis'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'San Luis Park'
     document.getElementById('yr-pic3').src = 'images/luis.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Park in San Luis'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history shopping sports*/
    else if (localStorage.getItem('h64') ==  "St.Aloysius Church San luis Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "St.Aloysius Church San luis Pampanga"
      document.getElementById('yr-pic').src = 'images/aloy.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Pampanga Church In San Luis' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Old San Luis Public Market'
     document.getElementById('yr-pic2').src = 'images/old.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Public Market in San Luis'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'San Luis Sport Complex'
     document.getElementById('yr-pic3').src = 'images/luis.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Sports in San Luis'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Bulanadi House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historic House in San Luis'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Loreto Punzalan House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historic House in san Luis'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Felipe Carlos House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historic House In San luis'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi64') ==  "Church of San Luis Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Church of San Luis Pampanga"
      document.getElementById('yr-pic').src = 'images/aloy.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'Nature'
      document.getElementById('ninu').innerHTML= 'San Luis Church Pampanga.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Old San Luis Public Market'
     document.getElementById('yr-pic2').src = 'images/old.jpg'
     document.getElementById('hide2').style.color = 'Orange'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Public Marketb in San Luis'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'San Luis Sports Complex'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Sports Center in San Luis'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'San Luis Park'
    document.getElementById('yr-pic4').src = 'images/luis.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'Nature'
    document.getElementById('ninu4').innerHTML = 'Park in San Luis'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Felipe Carlos House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historic House in san Luis'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Bulanadi House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historic House in San Luis'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Loreto Punzalan House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historic House In San Luis'

    }  
      }
      /*san simon*/
     else if (mapping == "San Simon, Pampanga") {
      document.getElementById('from').innerHTML = 'San Simon'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20san%20simon%20%20pampanga%20san%20simon%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20san%20simon%20pampanga%20san%20simon%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to San Simon, Pamp"
        tripPlace.innerHTML = "Trip to San Simon, Pampanga"
        place.innerHTML = "San Simon, Pampanga"
          bg.src = "sansimon/sansimon.jpg"
          pictures.src =  "sansimon/sansimon.jpg"
          nameX.innerHTML =   "San Simon, Pampanga"
        description.innerHTML = "The village was located between the towns of San Luis in the north and Apalit in the south. As the population of the village kept on growing, the village leaders of that time petitioned to consolidate the village and portions of the towns of San Luis and Apalit, to form an independent pueblo."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi71')
        document.getElementById('text2').value = localStorage.getItem('hi72')
        document.getElementById('text3').value = localStorage.getItem('hi73')
        document.getElementById('text4').value = localStorage.getItem('hi74')
        document.getElementById('text5').value = localStorage.getItem('hi75')
        document.getElementById('text6').value = localStorage.getItem('hi76')
        document.getElementById('text7').value = localStorage.getItem('hi77')

        /*sports complex*/
    if (localStorage.getItem('hi71') == 'San Simon Covered Court Pampanga' ) {
      document.getElementById('title-spts').innerHTML = 'San Simon Covered Court'
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = 'Sports'
      document.getElementById('ninu').innerHTML= 'Basketball Court In San Simon '


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


 /*2*/
     
 /*shopping*/
    }
    else if  (localStorage.getItem('hi71') == 'San Simon Public Market' ) {
      document.getElementById('title-spts').innerHTML = 'San Simon Public Market'
      document.getElementById('yr-pic').src = 'images/simon.png'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Public Market In San Simon Pampanga'



       /*day2*/
     document.getElementById('title-spots2').innerHTML = ''
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = ''
     document.getElementById('rating2').innerHTML = ''
     document.getElementById('spotsz2').innerHTML = ''
     document.getElementById('ninu2').innerHTML = ''
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = ''
    document.getElementById('rating4').innerHTML = ''
    document.getElementById('spotsz4').innerHTML = ''
    document.getElementById('ninu4').innerHTML = ''
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*historical*/
    else if (localStorage.getItem('hi71') == 'Nuestra Seniora Del Pilar Parish Church In Pampanga' ) {
      document.getElementById('title-spts').innerHTML = 'Nuestra Seniora Del Pilar Church'
      document.getElementById('yr-pic').src = 'images/nuestra.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.8'
      document.getElementById('spotsz').innerHTML = ' Historical '
      document.getElementById('ninu').innerHTML= 'Church in San Simon Pampanga'



       /*day2*/
     document.getElementById('title-spots2').innerHTML = ''
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = ''
     document.getElementById('rating2').innerHTML = ''
     document.getElementById('spotsz2').innerHTML = ''
     document.getElementById('ninu2').innerHTML = ''
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = ''
    document.getElementById('rating4').innerHTML = ''
    document.getElementById('spotsz4').innerHTML = ''
    document.getElementById('ninu4').innerHTML = ''
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

      
    }
    /*nature*/
    else if (localStorage.getItem('hi71') ==  "San Jose Poblacion Plaza" ) {
      document.getElementById('title-spts').innerHTML = "San Jose Poblacion Plaza"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Shopping'
      document.getElementById('ninu').innerHTML= 'San Simon Plaza' 



       /*day2*/
     document.getElementById('title-spots2').innerHTML = ''
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = ''
     document.getElementById('rating2').innerHTML = ''
     document.getElementById('spotsz2').innerHTML = ''
     document.getElementById('ninu2').innerHTML = ''
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = ''
    document.getElementById('rating4').innerHTML = ''
    document.getElementById('spotsz4').innerHTML = ''
    document.getElementById('ninu4').innerHTML = ''
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*nature history*/
 else if (localStorage.getItem('hi71') == "Nuestra Seniora Del Pilar Parish") {
      document.getElementById('title-spts').innerHTML = "Nuestra Seniora Del Pilar Church"
      document.getElementById('yr-pic').src = 'images/nuestra.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = 'Historical'
      document.getElementById('ninu').innerHTML= 'Church in San Simon' 




       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'San Jose Poblacion Plaza'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Nature in san Jose Poblacion Plaza'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature shopping*/
    else if (localStorage.getItem('hi71') ==  "San Simon Public Market" ) {
      document.getElementById('title-spts').innerHTML = "San Simon Public Market"
      document.getElementById('yr-pic').src = 'images/simon.png'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' Shopping'
      document.getElementById('ninu').innerHTML= 'Market in San Simon Pampanga'



       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'San Jose Poblacion Plaza'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'San Jose Poblacion Plaza in San Simon'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

 
    }
     /*nature sports*/
    else if (localStorage.getItem('hi71') ==  "San Simon Covered Court" ) {
      document.getElementById('title-spts').innerHTML = "San Simon Covered court"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = 'Sports'
      document.getElementById('ninu').innerHTML= 'San Simon Basketball Court' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = "San Simon Sport Complex"
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.0'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Basketball Court in San simon'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history shopping*/
    else if (localStorage.getItem('hi71') ==  "Nuestra Seniora Del Pilar" ) {
      document.getElementById('title-spts').innerHTML = "Nuestra Seniora Del Pilar"
      document.getElementById('yr-pic').src = 'images/nuestra.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = 'Historic'
      document.getElementById('ninu').innerHTML= 'Church in San Simon ' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'San Simon Public Market'
     document.getElementById('yr-pic2').src = 'images/simon.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Supermarket in San Simon'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history sports*/
    else if (localStorage.getItem('hi71') == "Nuestra Señora Del Pilar Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Nuestra Señora Del Pilar Church"
      document.getElementById('yr-pic').src = 'images/nuestra.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Church in San Simon ' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*shopping sports*/
    else if (localStorage.getItem('hi71') ==  "San Simon Public Market Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "San Simon Public Market"
      document.getElementById('yr-pic').src = 'images/simon.png'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Public Market In San Simon Pampanga.' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }


     /*nature history shopping*/
    else if (localStorage.getItem('hi71') ==  "Nuestra Señora Del Pilar Parish Church Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Nuestra Señora Del Pilar Church"
      document.getElementById('yr-pic').src = 'images/nuestra.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = 'Historic'
      document.getElementById('ninu').innerHTML= 'Church in San Simon' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'San Simon Public Market'
     document.getElementById('yr-pic2').src = 'images/simon.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Public Market in San Simon'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history sports*/
    else if (localStorage.getItem('hi71') ==  "San Jose Poblacion Plaza San Simon" ) {
      document.getElementById('title-spts').innerHTML = "San Jose Poblacion Plaza"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = 'Shopping'
      document.getElementById('ninu').innerHTML= 'San Simon Plaza.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'San Simon Covered Court'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Basketball Covered in San simon'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Nuestra Señora Del Pilar Parish Church'
     document.getElementById('yr-pic3').src = 'images/nuestra.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Churches in San Simon'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature shopping sports*/
    else if (localStorage.getItem('hi71') ==  'San Simon Public Market of Pampanga' ) {
      document.getElementById('title-spts').innerHTML = "San Simon Public Market"
      document.getElementById('yr-pic').src = 'images/simon.png'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = 'Shopping'
      document.getElementById('ninu').innerHTML= 'Public Market of San Simon.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'San Jose Poblacion Plaza'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Basketball Covered in San simon'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'San Simon Covered Court'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Basketball Covered in San simon '
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history shopping sports*/
    else if (localStorage.getItem('h71') =='Pampanga market in San Simon') {
      document.getElementById('title-spts').innerHTML = "Pampanga market in San Simon"
      document.getElementById('yr-pic').src = 'images/simon.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = 'Historic'
      document.getElementById('ninu').innerHTML= 'San Simon Public Market in Pampanga' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Nuestra Señora Del Pilar Parish Pampanga'
     document.getElementById('yr-pic2').src = 'images/nuestra.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Churches of San Simon'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Covered Court of San Simon'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('spotsz3').innerHTML = '4.1'
     document.getElementById('ninu3').innerHTML = 'Basketball Covered in San simon'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi71') ==  "Pampanga San Jose Poblacion Plaza In San Simon" ) {
      document.getElementById('title-spts').innerHTML = "San Jose Plaza in San Simon Pampanga"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'Nature'
      document.getElementById('ninu').innerHTML= 'San Simon Plaza in Pampanga.' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'San Simon Covered Court'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Basketball court in San simon '
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'San Simon Public Market'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Supermarket in San Simon'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Nuestra Señora Del Pilar Parish Church'
    document.getElementById('yr-pic4').src = 'images/nuestra.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Churches in San Simon'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



    }  
      }
      /*mexico pampanga*/
     else if (mapping == "Mexico, Pampanga") {
      document.getElementById('from').innerHTML = 'Mexico'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20mexico%20%20pampanga%20mexico%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
         mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20mexico%20pampanga%20mexico%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Mexico, Pampanga"
        tripPlace.innerHTML = "Trip to Mexico, Pampanga"
        bg.src = "mexico/lakeshore.jpg"
        pictures.src =  "mexico/lakeshore.jpg"
        place.innerHTML = "Mexico, Pampanga"
        nameX.innerHTML =  "Mexico, Pampanga"
        description.innerHTML = "According to folk etymology, the original pre-Hispanic name of the village was purportedly Masicu or Maca-sicu, which the Spaniards spelled as 'México'. It is claimed that this was a reference to an abundance of chico trees. However chico trees are not endemic to the Philippines and were introduced by the Spaniards from what is now Mexico (Country)."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi78')
        document.getElementById('text2').value = localStorage.getItem('hi79')
        document.getElementById('text3').value = localStorage.getItem('hi80')
        document.getElementById('text4').value = localStorage.getItem('hi81')
        document.getElementById('text5').value = localStorage.getItem('hi82')
        document.getElementById('text6').value = localStorage.getItem('hi83')
        document.getElementById('text7').value = localStorage.getItem('hi84')

            /*sports complex*/
    if (localStorage.getItem('hi78') == 'Oakland ClubHouse At Beverly Place Pampanga' ) {
      document.getElementById('title-spts').innerHTML = 'Oakland ClubHouse At Beverly Place'
      document.getElementById('yr-pic').src = 'images/bp.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = 'Sports'
      document.getElementById('ninu').innerHTML= 'Basketball court in Porac, Pampanga'


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

 /*2*/
     
 /*shopping*/
    }
    else if  (localStorage.getItem('hi78') == 'Primark Center Mexico' ) {
      document.getElementById('title-spts').innerHTML = 'Primark Center Mexico'
      document.getElementById('yr-pic').src = 'images/pm.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Mini Mall in Mexico Pampanga'

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

    }
    /*historical*/
    else if (localStorage.getItem('hi78') == 'Sanchez House' ) {
      document.getElementById('title-spts').innerHTML = 'Sanchez House'
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'Historic of Sanchez House in Pampanga'


       /*day2*/
     document.getElementById('title-spots2').innerHTML ='Henzon Lazatin House'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical House in Mexico'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML ='Henzon (Felipe) House'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical House in Mexico'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML ='Ayson Lorenzo House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical House in Mexico'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML ='Ocampo House'
   document.getElementById('yr-pic5').src = 'images/ocampo.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House in Mexico'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML ='Panlilio Julian House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical House in Mexico'
/*day7*/
document.getElementById('ttle-spts7').innerHTML ='Panlilio (Antonio House)'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House in Mexico'

    }
    /*nature*/
    else if (localStorage.getItem('hi78') ==  "Lakeshore Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Lakeshore Mexico Pampanga"
      document.getElementById('yr-pic').src = 'images/lm.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Preserve Nature in Mexico Pampanga' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*nature history*/
 else if (localStorage.getItem('hi78') == "Gozun House") {
      document.getElementById('title-spts').innerHTML = "Gozun House"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= '  Historic of Gozuns House in Mexico Pampanga' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = "Lakeshore Pampanga"
     document.getElementById('yr-pic2').src = 'images/lm.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Natures'
     document.getElementById('ninu2').innerHTML = 'Nature Adventure in Mexico'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sanchez House'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.0'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical House in Mexico'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML =  'Henson Lazatin House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical House in Mexico'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Ocampo House'
   document.getElementById('yr-pic5').src = 'images/ocampo.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House in Mexico'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Saint Monica Parish Church'
 document.getElementById('yr-pic6').src = 'images/monica.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Churches in Mexico'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Henzon Lorenzo House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.0'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House in Mexico'


    }
     /*nature shopping*/
    else if (localStorage.getItem('hi78') ==  "Primark Center Mexico In Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "'Primark Center Mexico In Pampanga"
      document.getElementById('yr-pic').src = 'images/pm.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery store in Mexico Pampanga' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = "Lakeshore Pampanga"
     document.getElementById('yr-pic2').src = 'images/lm.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Nature  Adventure in Mexico'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature sports*/
    else if (localStorage.getItem('hi78') ==  "Oakland Clubhouse in Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Oakland Clubhouse in Pampanga"
      document.getElementById('yr-pic').src = 'images/bp.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = 'Sports'
      document.getElementById('ninu').innerHTML= 'Adventure In Mexico Pampanga' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Lakeshore Pampanga'
     document.getElementById('yr-pic2').src = 'images/lm.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Nature Adventure in Mexico'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history shopping*/
    else if (localStorage.getItem('hi78') == "Hizon Felipe Heritage House" ) {
      document.getElementById('title-spts').innerHTML = "Hizon Felipe Heritage House"
      document.getElementById('yr-pic').src = 'images/hizon.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'History of Hizon Felipe Heritage House' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Primark Center Mexico'
     document.getElementById('yr-pic2').src = 'images/pm.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping in Mexico'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Henzon Lazatin House'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical House in Mexico'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Ayson Lorenzo House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical House in Mexico'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Ocampo House'
   document.getElementById('yr-pic5').src = 'images/ocampo.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House in Mexico'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Panlilio Julian House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical House in Mexico'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Sanchez House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House in Mexico'


    }
     /*history sports*/
    else if (localStorage.getItem('hi78') ==  "Sta Monica Parish Church Mexico Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Sta Monica Parish Church Mexico"
      document.getElementById('yr-pic').src = 'images/monica.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'Historic'
      document.getElementById('ninu').innerHTML= 'Church of Mexico Pampanga.'

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Gozun House'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray '
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'History in Mexico'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sanchez House'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'History in Mexico'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Henson Lazatin House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'History in Mexico'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'St.Benedictine Monastery'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'History in Mexico'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Hizon Lorenzo House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'history in mexico'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Oakland ClubHouse At Beverly Place'
document.getElementById('yr-pic7').src = 'images/bp.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'Sports'
document.getElementById('ninu7').innerHTML = 'Sports in Mexico'


    }
     /*shopping sports*/
    else if (localStorage.getItem('hi78') ==  "Mexico Primark Center Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Mexico Primark Center Pampanga"
      document.getElementById('yr-pic').src = 'images/pm.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'Shopping'
      document.getElementById('ninu').innerHTML= 'Grocery in Mexico, Pampanga.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Oakland ClubHouse At Beverly Place'
     document.getElementById('yr-pic2').src = 'images/bp.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Sports in Mexico'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history shopping*/
    else if (localStorage.getItem('hi78') ==  "Primark Center Mexico Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Primark Center In Mexico"
      document.getElementById('yr-pic').src = 'images/pm.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = 'Shopping'
      document.getElementById('ninu').innerHTML= 'Shopping of Mexico Pampanga' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sto. Monica Parish Church'
     document.getElementById('yr-pic2').src = 'images/monica.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'History in Mexico'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'St. Benedictine Monastery'
     document.getElementById('yr-pic3').src = 'images/monastery.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'History in Mexico'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'San Jose Matulid Chapel'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'History in mexico'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Reyes House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'History in Mexico'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Henzon Lazatin House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'history'
 document.getElementById('ninu6').innerHTML =  'history in mexico'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Ocampo House'
document.getElementById('yr-pic7').src = 'images/ocampo.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'History in Mexico'


    }
     /*nature history sports*/
    else if (localStorage.getItem('hi78') ==  "San Jose Matulid Chapel In Mexico Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "San Jose Matulid Chapel In Mexico"
      document.getElementById('yr-pic').src = 'images/matulid.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Historic Church in Mexico Pampanga.' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Oakland ClubHouse At Beverly Place'
     document.getElementById('yr-pic2').src = 'images/bp.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'sports'
     document.getElementById('ninu2').innerHTML = 'Sports in Mexico'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sta. Monica Parish Church'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'History in Mexico'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Lakeshore Pampanga'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Nature'
    document.getElementById('ninu4').innerHTML = 'Nature in Mexico'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Reyes House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'History in Mexico'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Henson Lazatin House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'History in Mexico'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Reyes Heritage House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'History in Mexico'


    }

     /*nature shopping sports*/
    else if (localStorage.getItem('hi78') ==  'Mexico Lakeshore Pampanga' ) {
      document.getElementById('title-spts').innerHTML = "Mexico Lakeshore Pampanga"
      document.getElementById('yr-pic').src = 'images/lm.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' Nature'
      document.getElementById('ninu').innerHTML= 'Mexico Pampanga' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Oakland Clubhouse at Beverly Place'
     document.getElementById('yr-pic2').src = 'images/bp.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Sports in Mexico'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Primark Center Mexico'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping in Mexico'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
   
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



    }
     /*history shopping sports*/
    else if (localStorage.getItem('hi78') ==  "St. Benedictine Monastery" ) {
      document.getElementById('title-spts').innerHTML = "St. Benedictine Monastery"
      document.getElementById('yr-pic').src = 'images/monastery.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.0'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'History of Church of St.Benedictine' 

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Primark Center Mexico'
     document.getElementById('yr-pic2').src = 'images/pm.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping in Mexico'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sta. Monica Parish Church'
     document.getElementById('yr-pic3').src = 'images/monica.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'History in Mexico'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'San Jose Matulid Chapel'
    document.getElementById('yr-pic4').src = 'images/matulid.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'History in Mexico'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'St. Benedictine Monastery'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'History in Mexico'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Reyes House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical House in Mexico'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Henson Lazatin House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House in Mexico'


    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi78') ==  "Reyes House in Mexico Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Reyes House In Mexico Pampanga"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Historic of Reyes House Pampanga.'

       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Oakland Club House at Beverly Place'
     document.getElementById('yr-pic2').src = 'images/bp.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Sports in Mexico'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Primark Center Mexico'
     document.getElementById('yr-pic3').src = 'images/pm.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping in Mexico'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Sta. monica Parish Church'
    document.getElementById('yr-pic4').src = 'images/monica.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'History in Mexico'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'San Jose Matulid Chapel'
   document.getElementById('yr-pic5').src = 'images/matulid.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'History in Mexico'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Lakeshore Pampanga'
 document.getElementById('yr-pic6').src = 'images/lm.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'Nature'
 document.getElementById('ninu6').innerHTML =  'Nature in Mexico'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Ocampo House'
document.getElementById('yr-pic7').src = 'images/ocampo.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'History in Mexico'

      }
    }
      /*minalin*/
     else if (mapping == "Minalin, Pampanga") {
      document.getElementById('from').innerHTML = 'Minalin'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20minalin%20%20pampanga%20minalin%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20minalin%20pampanga%20minalin%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Minalin, Pampanga"
        tripPlace.innerHTML = "Trip to Minalin, Pampanga"
        pictures.src =  "minalin/sunset.jpg"
        place.innerHTML = "Minalin, Pampanga"
        bg.src = "minalin/sunset.jpg"
        nameX.innerHTML =  "Minalin, Pampanga"
        description.innerHTML = "The town is known for its 400-year-old church, the Santa Monica Parish Church, with its unique design that incorporates pre-colonial architectural motif alongside its European Catholic iconography.[5] Minalin is also known for its Aguman Sanduk New Year's Celebration, where in which the town's straight men dress up as beauty queens and ride through town on festive floats."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi85')
        document.getElementById('text2').value = localStorage.getItem('hi86')
        document.getElementById('text3').value = localStorage.getItem('hi87')
        document.getElementById('text4').value = localStorage.getItem('hi88')
        document.getElementById('text5').value = localStorage.getItem('hi89')
        document.getElementById('text6').value = localStorage.getItem('hi90')
        document.getElementById('text7').value = localStorage.getItem('hi91')

          /*sports complex*/
    if (localStorage.getItem('hi85') == 'None' ) {
      document.getElementById('title-spts').innerHTML = 'None'
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = 'None'
      document.getElementById('spotsz').innerHTML = 'None'
      document.getElementById('ninu').innerHTML= 'None'

 /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'




 /*2*/
     
 /*shopping*/
    }
    else if  (localStorage.getItem('hi85') == 'Alfamart' ) {
      document.getElementById('title-spts').innerHTML = 'Alfamart in Minalin '
      document.getElementById('yr-pic').src = 'images/mart.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Mini Mall in Minalin Pampanga'



       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*historical*/
    else if (localStorage.getItem('hi85') == "Sta. Monica Parish Church/San Nicolas Minalin Pampanga" ) {
      document.getElementById('title-spts').innerHTML = 'Sta.Monica / San nicolas Minalin'
      document.getElementById('yr-pic').src = 'images/smc.png'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'Churches in Minalin'



       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

      
    }
    /*nature*/
    else if (localStorage.getItem('hi85') ==  "Sunset Park" ) {
      document.getElementById('title-spts').innerHTML = "Sunset Park"
      document.getElementById('yr-pic').src = 'images/sp.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Nature Park in Minalin Pampanga'



       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

 
    }
    /*nature history*/
 else if (localStorage.getItem('hi85') == "Sunset Park In Minalin Pampanga") {
      document.getElementById('title-spts').innerHTML = "Sunset Park In Minalin Pampanga"
      document.getElementById('yr-pic').src = 'images/sp.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Minalin Nature Park Pampanga' 



       /*day2*/
     document.getElementById('title-spots2').innerHTML = "Sta Monica Church/San Nicolas Minalin"
     document.getElementById('yr-pic2').src = 'images/smc.png'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Churches in Minalin'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature shopping*/
    else if (localStorage.getItem('hi85') ==  "Minalin Alfamart" ) {
      document.getElementById('title-spts').innerHTML = "Minalin Alfamart in Pampanga"
      document.getElementById('yr-pic').src = 'images/alfa.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'Shopping'
      document.getElementById('ninu').innerHTML= 'Grocery store in Minalin Pampanga' 



       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sunset Park'
     document.getElementById('yr-pic2').src = 'images/sp.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Nature Park in Minalin'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature sports*/
    else if (localStorage.getItem('hi85') ==  "Minalin Sunset Park" ) {
      document.getElementById('title-spts').innerHTML = "Minalin Sunset Park Pampanga"
      document.getElementById('yr-pic').src = 'images/sp.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = 'Nature'
      document.getElementById('ninu').innerHTML= 'Adventure In Minalin Pampanga' 



       /*day2*/
     document.getElementById('title-spots2').innerHTML = ''
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'





    }
     /*history shopping*/
    else if (localStorage.getItem('hi85') ==  "Pampanga Minalin Alfamart" ) {
      document.getElementById('title-spts').innerHTML = "Pampanga Minalin Alfamart"
      document.getElementById('yr-pic').src = 'images/alfa.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = 'Shopping'
      document.getElementById('ninu').innerHTML= 'Shopping in Minalin' 



       /*day2*/
     document.getElementById('title-spots2').innerHTML = "Sta Monica Church/San Nicolas Minalin"
     document.getElementById('yr-pic2').src = 'images/smc.png'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Churches in Minalin'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history sports*/
    else if (localStorage.getItem('hi85') ==  "Sta.Monica/Nicolas Minalin Pampanga" ){
      document.getElementById('title-spts').innerHTML = 'Sta.Monica/Nicolas Minalin Pampanga'
      document.getElementById('yr-pic').src = 'images/smc.png'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Churches in Minalin.'


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



    }
     /*shopping sports*/
    else if (localStorage.getItem('hi85') ==  "Minalin Alfamart in Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Minalin Alfamart"
      document.getElementById('yr-pic').src = 'images/alfa.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'Shopping'
      document.getElementById('ninu').innerHTML= 'Grocery In Minalin' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history shopping*/
    else if (localStorage.getItem('hi85') == "Alfamart In Minalin Pampanga") {
      document.getElementById('title-spts').innerHTML = "Alfamart Minalin Pampanga"
      document.getElementById('yr-pic').src = 'images/mart.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'Shopping'
      document.getElementById('ninu').innerHTML= 'Shopping of Minalin Pampanga' 
       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sunset Park'
     document.getElementById('yr-pic2').src = 'images/sp.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Nature Park in Minalin'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sta.Monica/Nicolas Minalin Pampanga'
     document.getElementById('yr-pic3').src = 'images/smc.png'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Churches in Minalin'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history sports*/
    else if (localStorage.getItem('hi85') ==  "Sunset Park Minalin" ) {
      document.getElementById('title-spts').innerHTML = "Sunset Park"
      document.getElementById('yr-pic').src = 'images/sp.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Nature'
      document.getElementById('ninu').innerHTML= 'Adventure In Minalin Pampanga.' 




       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sta.Monica/Nicolas Minalin Pampanga'
     document.getElementById('yr-pic2').src = 'images/smc.png'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Churches in Minalin'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'





    }
     /*nature shopping sports*/
    else if (localStorage.getItem('hi85') ==  'Minalin Pampanga Sunset Park' ) {
      document.getElementById('title-spts').innerHTML = "Sunset Park"
      document.getElementById('yr-pic').src = 'images/sp.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Nature'
      document.getElementById('ninu').innerHTML= 'Adventure In Minalin Pampanga' 



       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Alfamart'
     document.getElementById('yr-pic2').src = 'images/alfa.jpg'
     document.getElementById('hide2').style.color = 'Orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Grocery in Minalin'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'





    }
     /*history shopping sports*/
    else if (localStorage.getItem('hi85') ==   "Alfamart ning Minalin Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Alfamart"
      document.getElementById('yr-pic').src = 'images/alfa.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Shopping'
      document.getElementById('ninu').innerHTML= 'Grocery in Minalin Pampanga' 


       /*day2*/
     document.getElementById('title-spots2').innerHTML = 'St.Monica Church Minalin'
     document.getElementById('yr-pic2').src = 'images/smc.png'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'





    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi85') ==  "Sta. Monica Parish Church/San Nicolas" ) {
      document.getElementById('title-spts').innerHTML = "Sta. Monica Parish Church Minalin"
      document.getElementById('yr-pic').src = 'images/smc.png'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.7'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Historic Church Minalin Pampanga.' 


      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Alfamart'
     document.getElementById('yr-pic2').src = 'images/alfa.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Grocery in Minalin Pampanga'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sunset Park'
     document.getElementById('yr-pic3').src = 'images/sp.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Sunset Park Minalin'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


      }
     }
      /*santa rita*/
     else if (mapping == "Santa Rita, Pampanga") {
      document.getElementById('from').innerHTML = 'Santa Rita'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20sta%20rita%20%20pampanga%20sta%20rita%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20santa%20rita%20pampanga%20santa%20rita%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Santa Rita, Pampanga"
        tripPlace.innerHTML = "Trip to Santa Rita, Pampanga"
        bg.src = "starita/ecopark.jpg"
        pictures.src =  "starita/ecopark.jpg"
        place.innerHTML = "Santa Rita, Pampanga"
        nameX.innerHTML = "Santa Rita, Pampanga"
        description.innerHTML = "In 1697, the town started as a settlement at a place called Gasac, now Barangay San Isidro. Sta Rita was expanded to a wide territory which is now Barangays San Vicente, San Matias, Santa Monica, San Agustin and San Juan. Due to Hispanicization, Sta Rita was referred to as Santa Rita de Lele or neighboring Santa Rita and Santa Rita Baculud."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi92')
        document.getElementById('text2').value = localStorage.getItem('hi93')
        document.getElementById('text3').value = localStorage.getItem('hi94')
        document.getElementById('text4').value = localStorage.getItem('hi95')
        document.getElementById('text5').value = localStorage.getItem('hi96')
        document.getElementById('text6').value = localStorage.getItem('hi97')
        document.getElementById('text7').value = localStorage.getItem('hi98')

        /*sports complex*/
    if (localStorage.getItem('hi92') == 'Becuran Sports Complex' ) {
      document.getElementById('title-spts').innerHTML = 'Sports Complex in Sta.rita Pampanga '
      document.getElementById('yr-pic').src = 'images/bc.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = 'Sports'
      document.getElementById('ninu').innerHTML= 'Basketball Complex in Sta Rita Pampanga'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


 /*2*/
     
 /*shopping*/
    }
    else if  (localStorage.getItem('hi92') == 'Alfamart Sta Rita Pampanga') {
      document.getElementById('title-spts').innerHTML = 'Alfamart Sta rita Pampanga'
      document.getElementById('yr-pic').src = 'images/alfa.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = 'Shopping'
      document.getElementById('ninu').innerHTML= 'Mini Grocery in Sta rita Pampanga'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*historical*/
    else if (localStorage.getItem('hi92') == 'Santa Rita Parish Church' ) {
      document.getElementById('title-spts').innerHTML = 'Santa Rita Parish Church'
      document.getElementById('yr-pic').src = 'images/rita.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'History of Church Sta.rita Pampanga '
      
      /*day2*/
     document.getElementById('title-spots2').innerHTML = "Maglalang Ancestral House"
     document.getElementById('yr-pic2').src = 'images/maglalang.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historic House in Sta Rita'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Carpio Ancestral House'
     document.getElementById('yr-pic3').src = 'images/carpio.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical House in Sta Rita'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Dominican Convent"
    document.getElementById('yr-pic4').src = 'images/dominic.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'historical House in Sta Rita'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = "Guanzon Ancestral House"
   document.getElementById('yr-pic5').src = 'images/guanzon.jpg'
   document.getElementById('hide5').style.color = 'orange'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House in Sta Rita'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = "Pineda Ancestral House"
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical House in Sta Rita'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = "Carlos Laxamana Ancestral House"
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House in Sta Rita'


    }
    /*nature*/
    else if (localStorage.getItem('hi92') ==  "Santa Rita Eco Park" ) {
      document.getElementById('title-spts').innerHTML = "Santa Rita Eco Park"
      document.getElementById('yr-pic').src = 'images/ep.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Nature Eco Park in Sta Rita Pampanga' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*nature history*/
 else if (localStorage.getItem('hi92') == "Pineda Ancestral House ") {
      document.getElementById('title-spts').innerHTML = "Pineda Ancestral House "
      document.getElementById('yr-pic').src = 'images/pineda.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Historic Of Pineda House' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Santa Rita Eco Park'
     document.getElementById('yr-pic2').src = 'images/ep.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Nature Park in Sta Rita'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Carpio Ancestral House'
     document.getElementById('yr-pic3').src = 'images/carpio.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'history'
     document.getElementById('ninu3').innerHTML = 'Historic House in Sta Rita'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Maglalang Ancestral House'
    document.getElementById('yr-pic4').src = 'images/maglalang.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historic House in Sta Rita'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Guanzon Ancestral House'
   document.getElementById('yr-pic5').src = 'images/guanzon.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'history'
   document.getElementById('ninu5').innerHTML = 'Historical House in Sta Rita'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Dominican Convent'
 document.getElementById('yr-pic6').src = 'images/dominic.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical in Sta Rita'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Miranda Ancestral House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House in Sta Rita'


    }
     /*nature shopping*/
    else if (localStorage.getItem('hi92') ==  "Eco Park" ) {
      document.getElementById('title-spts').innerHTML = "Eco Park Sta.rita Pampanga"
      document.getElementById('yr-pic').src = 'images/ep.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.3'
      document.getElementById('spotsz').innerHTML = 'Nature'
      document.getElementById('ninu').innerHTML= ' Park Adventure in Sta rita Pampanga' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Alfamart'
     document.getElementById('yr-pic2').src = 'images/alfa.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Mini Grocery in Sta. Rita'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature sports*/
    else if (localStorage.getItem('hi92') ==  "Becuran Sports Complex in Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Becuran Sports Complex Pampanga"
      document.getElementById('yr-pic').src = 'images/bc.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = 'Sports'
      document.getElementById('ninu').innerHTML= 'Sports Complex in Sta rita Pampanga' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Santa Rita Eco Park'
     document.getElementById('yr-pic2').src = 'images/ep.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Park in Sta. Rita'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history shopping*/
    else if (localStorage.getItem('hi92') ==  "Dominican Convent" ) {
      document.getElementById('title-spts').innerHTML = "Dominican Convent Sta rita"
      document.getElementById('yr-pic').src = 'images/dominic.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Dominican Sta rita Pampanga' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Alfamart'
     document.getElementById('yr-pic2').src = 'images/alfa.jpg'
     document.getElementById('hide2').style.color = 'Orange'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping in Sta. Rita'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Maglalang Ancestral House'
     document.getElementById('yr-pic3').src = 'images/maglalang.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical House in Sta. Rita'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Guanzon Ancestral House'
    document.getElementById('yr-pic4').src = 'images/guanzon.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical House in Sta. Rita'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Santa Rita Parish Church'
   document.getElementById('yr-pic5').src = 'images/rita.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historic Church in Sta Rita'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML ='De Castro Ancestral House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical House in Sta. Rita'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Pineda Ancestral House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House in Sta. Rita'


    }
     /*history sports*/
    else if (localStorage.getItem('hi92') ==  "Carpio Ancestral House" ){
      document.getElementById('title-spts').innerHTML = "Carpio House in Sta Rita Pampanga"
      document.getElementById('yr-pic').src = 'images/carpio.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Carpio House In Pampanga.'


      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Gosioco Ancestral House'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical House in Sta Rita'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Pineda Ancestral House'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical House in Sta Rita'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Dominican Convent'
    document.getElementById('yr-pic4').src = 'images/dominic.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical House in Sta Rita'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Sta.rita Parish Church'
   document.getElementById('yr-pic5').src = 'images/rita.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House in Sta Rita'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Becuran Sports Complex'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'Sports'
 document.getElementById('ninu6').innerHTML =  'Covered court in Sta Rita'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Reliquary of Saint Rita De Cascia'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House In Sta Rita'



    }
     /*shopping sports*/
    else if (localStorage.getItem('hi92') ==  "Alfamart in Sta Rita Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Alfamart"
      document.getElementById('yr-pic').src = 'images/alfa.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'Shopping'
      document.getElementById('ninu').innerHTML= 'Grocery In Sta Rita' 

  

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history shopping*/
    else if (localStorage.getItem('hi92') ==  "Reliquary of Saint Rita De Cascia" ) {
      document.getElementById('title-spts').innerHTML = "Saint Rita De Cascia Pampanga"
      document.getElementById('yr-pic').src = 'images/cascia.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Historic of Pampanga' 



      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sta. Rita Parish Church'
     document.getElementById('yr-pic2').src = 'images/rita.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical House In Sta Rita Pampanga'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Dominican Convent '
     document.getElementById('yr-pic3').src = 'images/dominic.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical Place in Sta Rita Pampanga'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'De Castro Ancestral House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical House In Sta Rita'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Alfamart'
   document.getElementById('yr-pic5').src = 'images/alfa.jpg'
   document.getElementById('hide5').style.color = 'Orange'
   document.getElementById('rating5').innerHTML = '4.5'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Grocery In Sta Rita'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Miguela Aguilus Ancestral House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical House In Sta Rita Pampanga'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Carpio Ancestral House'
document.getElementById('yr-pic7').src = 'images/carpio.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House In Sta Rita Pampanga'


    }
     /*nature history sports*/
    else if (localStorage.getItem('hi92') ==  "Maglalang House Santa Rita Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Maglalang Ancestral House"
      document.getElementById('yr-pic').src = 'images/mags.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'Historic of House in Sta Rita.' 



      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sta. Rita Parish Church'
     document.getElementById('yr-pic2').src = 'images/rita.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical Church In Sta Rita Pampanga'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Becuran Sports Complex'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Covered Court in Sta Rita Pampanga'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Reliquary of Saint Rita De Cascia'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical Place In Sta Rita Pampanga'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Carlos Laxamana Ancestral House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House In Sta Rita Pampanga'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Maglalang Ancestral House Santa rita'
 document.getElementById('yr-pic6').src = 'images/maglalang.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical Place In Sta Rita Pampanga'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Miguela Aguilus Ancestral House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical Place In Sta Rita Pampanga'


    }
     /*nature shopping sports*/
    else if (localStorage.getItem('hi92') ==  'Pampanga Eco Park Sta Rita' ) {
      document.getElementById('title-spts').innerHTML = "Pampanga Eco Park Sta Rita"
      document.getElementById('yr-pic').src = 'images/ep.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Nature'
      document.getElementById('ninu').innerHTML= 'Adventure In Sta Rita Pampanga' 




      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Becuran Sports Complex'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Covered Court In Sta Rita Pampanga'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Alfamart'
     document.getElementById('yr-pic3').src = 'images/alfa.jpg'
     document.getElementById('hide3').style.color = 'Orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Grocery In Sta Rita Pampanga'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*history shopping sports*/
    else if (localStorage.getItem('hi92') ==  "Guanzon Ancestral House" ) {
      document.getElementById('title-spts').innerHTML = "Guanzon Ancestral House"
      document.getElementById('yr-pic').src = 'images/guanzon.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Historic of Guanzon House' 



      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Alfamart'
     document.getElementById('yr-pic2').src = 'images/alfa.jpg'
     document.getElementById('hide2').style.color = 'Orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Grocery In Sta Rita Pampanga'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sta. Rita Parish Church'
     document.getElementById('yr-pic3').src = 'images/rita.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical House In Sta Rita Pampanga'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Reliquary Of Saint Rita De Cascia'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical Places In Sta Rita Pampanga'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Carpio Ancestral House'
   document.getElementById('yr-pic5').src = 'images/carpio.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House In Sta Rita Pampanga'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Miranda Ancestral House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical House In Sta Rita Pampanga'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Becuran Sports Complex'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'Sports'
document.getElementById('ninu7').innerHTML = 'Covered Court In Sta Rita Pampanga'


    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi92') ==  "Pampanga Sta. Rita Parish Church" ) {
      document.getElementById('title-spts').innerHTML = "Pampanga Sta. Rita Parish Church"
      document.getElementById('yr-pic').src = 'images/rita.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.7'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Church Sta. rita Pampanga.' 



      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Becuran Sports Complex'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Covered Court In Sta Rita Pampanga'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Alfamart'
     document.getElementById('yr-pic3').src = 'images/alfa.jpg'
     document.getElementById('hide3').style.color = 'Orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Grocery in Sta Rita Pampanga'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Santa Rita Eco Park'
    document.getElementById('yr-pic4').src = 'images/ep.jpg'
    document.getElementById('hide4').style.color = 'Orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'Nature'
    document.getElementById('ninu4').innerHTML = 'Nature Park In Sta Rita'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Reliquary of Saint Rita de Cascia'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical Places In Sta Rita Pampanga'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Miguel Aguilus Ancestral House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical House In Sta Rita Pampanga'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Carpio Ancestral House'
document.getElementById('yr-pic7').src = 'images/carpio.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House In Sta Rita Pampanga'


      }
      }
      /*santo tomas*/
     else if (mapping == "Santo Tomas, Pampanga") {
      document.getElementById('from').innerHTML = 'Santo tomas'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20santo%20toMAS%20%20pampanga%20santo%20tomas%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20santo%20tomas%20pampanga%20santo%20tomas%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Santo Tomas, Pampanga"
        tripPlace.innerHTML = "Trip to Santo Tomas, Pampanga"
        bg.src = "santotomas/santotomas.jpg"
        pictures.src =  "santotomas/santotomas.jpg"
        place.innerHTML = "Santo Tomas, Pampanga"
        nameX.innerHTML =  "Santo Tomas, Pampanga"
        description.innerHTML = "The town's name is derived from Baliwag ('tardy' in Spanish) a reference to local habit of arriving late for Mass. Baliwag, whose original name was Santo Tomas, had its Patron, St. Thomas the Apostle. He is also called Doubting Thomas or Didymus (meaning 'twin,' as does 'Thomas' in Aramaic) and was one of the Twelve Apostles of Jesus. "
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi09')
        document.getElementById('text2').value = localStorage.getItem('hi100')
        document.getElementById('text3').value = localStorage.getItem('hi101')
        document.getElementById('text4').value = localStorage.getItem('hi102')
        document.getElementById('text5').value = localStorage.getItem('hi103')
        document.getElementById('text6').value = localStorage.getItem('hi104')
        document.getElementById('text7').value = localStorage.getItem('hi105')

          /*sports complex*/
    if (localStorage.getItem('hi09') == 'None' ) {
      document.getElementById('title-spts').innerHTML = 'None'
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'None'
      document.getElementById('rating').innerHTML = 'None'
      document.getElementById('spotsz').innerHTML = 'None'
      document.getElementById('ninu').innerHTML= 'None'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



 /*2*/
     
 /*shopping*/
    }
    else if  (localStorage.getItem('hi09') == 'Robinsons Easymart Sto.Tomas Pampanga' ) {
      document.getElementById('title-spts').innerHTML = 'Robinsons Easymart Sto tomas'
      document.getElementById('yr-pic').src = 'images/robmart.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery of Sto tomas Pampanga'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

    }
    /*historical*/
    else if (localStorage.getItem('hi09') == 'Santo Nino Teracota Retablo' ) {
      document.getElementById('title-spts').innerHTML = 'Santo Nino Teracota Retablo'
      document.getElementById('yr-pic').src = 'images/cota.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'Church of Santo Tomas'


      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

      
    }
    /*nature*/
    else if (localStorage.getItem('hi09') ==  "Pampanga Pottery and Agri tourism Park" ) {
      document.getElementById('title-spts').innerHTML = "Pottery and Agri tourism Park"
      document.getElementById('yr-pic').src = 'images/pasu.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Agri Tourism '
      document.getElementById('ninu').innerHTML= 'Nature in Sto tomas' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
    /*nature history*/
 else if (localStorage.getItem('hi09') == "St. Nino Teracota Retablo In Pampanga") {
      document.getElementById('title-spts').innerHTML = "St. Nino Teracota Retablo"
      document.getElementById('yr-pic').src = 'images/cota.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Sto. Tomas Church' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Pampanga Pottery Agri Tourism Park'
     document.getElementById('yr-pic2').src = 'images/pasu.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'agricultural Park in San tomas'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

    }
     /*nature shopping*/
    else if (localStorage.getItem('hi09') ==  "Robinson Easy Mart" ) {
      document.getElementById('title-spts').innerHTML = "Robinsons Easymart Sto tomas"
      document.getElementById('yr-pic').src = 'images/robmart.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = 'Shopping'
      document.getElementById('ninu').innerHTML= 'Grocery of Sto tomas Pampanga' 
      


      /*day2*/
     document.getElementById('title-spots2').innerHTML = "Pampanga Pottery, and Agritousim Park"
     document.getElementById('yr-pic2').src = 'images/pasu.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'agricultural Park in San Tomas '
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature sports*/
    else if (localStorage.getItem('hi09') ==  "Pampanga Pottery, and Agritourism Park Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Pottery and Agri Tourism Park"
      document.getElementById('yr-pic').src = 'images/pasu.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'Agri Tourism'
      document.getElementById('ninu').innerHTML= 'Nature in Sto tomas'

/*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



    }
     /*history shopping*/
    else if (localStorage.getItem('hi09') ==  "Sto. niño Teracota Retablo" ) {
      document.getElementById('title-spts').innerHTML = "St. Nino Teracota Retablo"
      document.getElementById('yr-pic').src = 'images/cota.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Church of Santo Tomas' 


      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Robinsons Easymart Sto. Tomas Pampanga'
     document.getElementById('yr-pic2').src = 'images/robmart.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall in Santo Tomas'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

    }
     /*history sports*/
    else if (localStorage.getItem('hi09') ==  'Sto Niño Terracota Retablo' ){
      document.getElementById('title-spts').innerHTML = "None"
      document.getElementById('yr-pic').src = 'images/usedata.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'None'
      document.getElementById('ninu').innerHTML= 'None.'
      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



    }
     /*shopping sports*/
    else if (localStorage.getItem('hi09') ==  "Easymart Robinson Sto tomas Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "Robinsons Easymart Sto tomas"
      document.getElementById('yr-pic').src = 'images/robmart.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = 'Shopping'
      document.getElementById('ninu').innerHTML= 'Grocery of Sto tomas Pampanga.' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



    }
     /*nature history shopping*/
    else if (localStorage.getItem('hi09') ==  "Sto. Niño Terracota Retablo Santo Tomas" ) {
      document.getElementById('title-spts').innerHTML = "St. Nino Teracota Retablo"
      document.getElementById('yr-pic').src = 'images/cota.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'History'
      document.getElementById('ninu').innerHTML= 'Church of Santo Tomas' 

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Robinson Easymart Sto. Tomas Pampanga'
     document.getElementById('yr-pic2').src = 'images/Robin.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mart in Santo Tomas'
 /*day3*/ 
     document.getElementById('ttle-spts3').innerHTML = 'Pampanga Pottery and Agri tourism Park'
     document.getElementById('yr-pic3').src = 'images/pasu.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Agri Tourism'
     document.getElementById('ninu3').innerHTML = 'Agri Tourism in Santo Tomas'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


    }
     /*nature history sports*/
    else if (localStorage.getItem('hi09') ==  "Pampanga Pottery, and Agritourism Park San Tomas" ) {
      document.getElementById('title-spts').innerHTML = "Pottery and Agri Tourism Park"
      document.getElementById('yr-pic').src = 'images/pasu.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' Agri Tourism'
      document.getElementById('ninu').innerHTML= 'Nature in Sto tomas.' 


      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Sto. niño Terracota Retablo'
     document.getElementById('yr-pic2').src = 'images/nino.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



    }
     /*nature shopping sports*/
    else if (localStorage.getItem('hi09') ==  'Pampanga Agri tourism Park Santo tomas' ) {
      document.getElementById('title-spts').innerHTML = "Robinsons Easymart Sto tomas"
      document.getElementById('yr-pic').src = 'images/robmart.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping'
      document.getElementById('ninu').innerHTML= 'Grocery of Sto tomas Pampanga' 


      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Pampanga Pottery, and Agritousim Park'
     document.getElementById('yr-pic2').src = 'images/pasu.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'agricultural Park in San Tomas'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



    }
     /*history shopping sports*/
    else if (localStorage.getItem('hi09') ==  "Sto. Niño Terracota Retablo Sn. Tomas" ) {
      document.getElementById('title-spts').innerHTML = "St. Nino Teracota Retablo"
      document.getElementById('yr-pic').src = 'images/cota.jpg'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' None'
      document.getElementById('ninu').innerHTML= 'Church of Santo Tomas' 



      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Robinsons Easymart Santo Tomas Pampanga'
     document.getElementById('yr-pic2').src = 'images/robin.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mart in Santo Tomas'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi09') ==  "Pampanga Agri tourism Park Santo Tomas" ) {
      document.getElementById('title-spts').innerHTML = "Pottery and Agri Tourism Park"
      document.getElementById('yr-pic').src = 'images/pasu.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = 'Agri Tourism'
      document.getElementById('ninu').innerHTML= 'Nature in Sto tomas'

      /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Robinsons Easymart Sto. Tomas Pampanga '
     document.getElementById('yr-pic2').src = 'images/robin.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mart in Santo Tomas'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



      }
    }
    /*santa ana*/
     else if (mapping == "Santa Ana, Pampanga") {
      document.getElementById('from').innerHTML = 'Santa Ana'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20santa%20ana%20%20pampanga%20santa%20ana%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20santa%20ana%20pampanga%20santa%20ana%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Santa Ana, Pampanga"
        tripPlace.innerHTML = "Trip to Santa Ana, Pamp"
        bg.src = "staana/church.jpg"
        pictures.src =  "staana/church.jpg"
        place.innerHTML = "Santa Ana, Pampanga"
        nameX.innerHTML = "Santa Ana, Pampanga"
        description.innerHTML =  "Santa Ana, officially the Municipality of Santa Ana (Kapampangan: Balen ning Santa Ana; Tagalog: Bayan ng Santa Ana), is a 3rd class municipality in the province of Pampanga, Philippines. According to the 2020 census, it has a population of 61,537 people."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi106')
        document.getElementById('text2').value = localStorage.getItem('hi107')
        document.getElementById('text3').value = localStorage.getItem('hi108')
        document.getElementById('text4').value = localStorage.getItem('hi109')
        document.getElementById('text5').value = localStorage.getItem('hi110')
        document.getElementById('text6').value = localStorage.getItem('hi111')
        document.getElementById('text7').value = localStorage.getItem('hi112')

        /*sports complex*/
        if (localStorage.getItem('106') == 'None' ) {
          document.getElementById('title-spts').innerHTML = 'None'
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'Gray'
          document.getElementById('rating').innerHTML = 'None'
          document.getElementById('spotsz').innerHTML = 'None'
          document.getElementById('ninu').innerHTML= 'None'

/*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



    

     /*2*/
         
     /*shopping*/
        }
        else if  (localStorage.getItem('hi106') == 'Xiaoo clothing' ) {
          document.getElementById('title-spts').innerHTML = 'Xiaoo clothing'
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'gray'
          document.getElementById('rating').innerHTML = '4.'
          document.getElementById('spotsz').innerHTML = ' Shopping '
          document.getElementById('ninu').innerHTML= 'Clothing store in Santa Ana, Pampanga'

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

        }
        /*historical*/
        else if (localStorage.getItem('hi106') == 'Ang simbahan ng Sta Ana' ) {
          document.getElementById('title-spts').innerHTML = 'Ang Simbahan ng Sta Ana'
          document.getElementById('yr-pic').src = 'images/ana.jpg'
          document.getElementById('hide').style.color = 'orange'
          document.getElementById('rating').innerHTML = '4.5'
          document.getElementById('spotsz').innerHTML = ' History'
          document.getElementById('ninu').innerHTML= 'Church of Sta.Ana'

          /*day2*/
     document.getElementById('title-spots2').innerHTML =  "Aliwalas Family House"
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical House in San Ana'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = "Engineer Pedro Montoya House"
     document.getElementById('yr-pic3').src = 'images/pedro.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical House in Santa Ana'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

          
        }
        /*nature*/
        else if (localStorage.getItem('hi106') ==  "None" ) {
          document.getElementById('title-spts').innerHTML = "None"
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'Orange'
          document.getElementById('rating').innerHTML = '4.5'
          document.getElementById('spotsz').innerHTML = 'None'
          document.getElementById('ninu').innerHTML= 'None' 


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



        }
        /*nature history*/
     else if (localStorage.getItem('hi106') == "Aliwalas Family House") {
          document.getElementById('title-spts').innerHTML = "Aliwalas Family House"
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'Gray'
          document.getElementById('rating').innerHTML = '4.2'
          document.getElementById('spotsz').innerHTML = 'History'
          document.getElementById('ninu').innerHTML= 'Historic Aliwalas House In Sta.ana' 

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Engineer Pedro Montoya House'
     document.getElementById('yr-pic2').src = 'images/pedro.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical House in Santa Ana'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



        }
         /*nature shopping*/
        else if (localStorage.getItem('hi106') ==  'Sta Ana Xiaoo Clothing Pampanga' ) {
          document.getElementById('title-spts').innerHTML = 'Sta Ana Xiaoo Clothing Pampanga'
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'Gray'
          document.getElementById('rating').innerHTML = '4.3'
          document.getElementById('spotsz').innerHTML = 'Shopping'
          document.getElementById('ninu').innerHTML= 'Shopping in Santa Ana'


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


 
        }
         /*nature sports*/
        else if (localStorage.getItem('hi106') ==  "None" ) {
          document.getElementById('title-spts').innerHTML = "None"
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'Orange'
          document.getElementById('rating').innerHTML = '4.4'
          document.getElementById('spotsz').innerHTML = 'None'
          document.getElementById('ninu').innerHTML= 'None' 

/*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



        }
         /*history shopping*/
        else if (localStorage.getItem('hi106') ==  "Engineer Pedro Montoya House" ) {
          document.getElementById('title-spts').innerHTML = "Engineer Pedro Montoya House"
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'Gray'
          document.getElementById('rating').innerHTML = '4.1'
          document.getElementById('spotsz').innerHTML = 'History'
          document.getElementById('ninu').innerHTML= 'Historic of Pedro House' 


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Aliwalas Family House'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical House in Santa Ana'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Ang Simbahan ng St. Ana'
     document.getElementById('yr-pic3').src = 'images/st.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical Church in Stana Ana'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Xiaoo Clothing'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping in Santa Ana'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

        }
         /*history sports*/
        else if (localStorage.getItem('hi106') ==  "Ang Simbahan ng Santa Ana in Pampanga" ) {
          document.getElementById('title-spts').innerHTML = "Simbahan ng Santa Ana Pampanga"
          document.getElementById('yr-pic').src = 'images/ana.jpg'
          document.getElementById('hide').style.color = 'orange'
          document.getElementById('rating').innerHTML = '4.5'
          document.getElementById('spotsz').innerHTML = 'Historic'
          document.getElementById('ninu').innerHTML= 'Church of Santa Ana Pampanga.'

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Aliwalas Family House'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical House in Santa Ana'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Engineer Pedro Montoya House'
     document.getElementById('yr-pic3').src = 'images/pedro.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical House in Santa Ana'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



        }
         /*shopping sports*/
        else if (localStorage.getItem('hi106') ==  "Xiaoo Clothing Shop" ) {
          document.getElementById('title-spts').innerHTML = "c"
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'Orange'
          document.getElementById('rating').innerHTML = '4.5'
          document.getElementById('spotsz').innerHTML = 'Shopping'
          document.getElementById('ninu').innerHTML= 'Shopping In Santa Ana' 


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



        }
         /*nature history shopping*/
        else if (localStorage.getItem('hi106') ==  "Eng. Pedro Montoya House" ) {
          document.getElementById('title-spts').innerHTML = "Engineer Pedro Montoya House"
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'orange'
          document.getElementById('rating').innerHTML = '4.4'
          document.getElementById('spotsz').innerHTML = 'Historic'
          document.getElementById('ninu').innerHTML= 'Historical House ' 


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Xiaoo Clothing'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping in Santa Ana'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Aliwalas Family House'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical House in Santa Ana'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML =  'Ang Simbahan ng Santa Ana '
    document.getElementById('yr-pic4').src = 'images/st.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical Church in Santa Ana'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



        }
         /*nature history sports*/
        else if (localStorage.getItem('hi106') ==  "Ang Simbahan ning Santa Ana" ) {
          document.getElementById('title-spts').innerHTML = "Ang Simbahan ng Sta Ana"
          document.getElementById('yr-pic').src = 'images/ana.jpg'
          document.getElementById('hide').style.color = 'orange'
          document.getElementById('rating').innerHTML = '4.5'
          document.getElementById('spotsz').innerHTML = ' History'
          document.getElementById('ninu').innerHTML= 'Church of Santa Ana Pampanga.' 

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Aliwalas Family House'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical House in Santa Ana'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML =  'Engineer Pedro Montoya House'
     document.getElementById('yr-pic3').src = 'images/pedro.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical House in Santa Ana'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



        }
         /*nature shopping sports*/
        else if (localStorage.getItem('hi106') ==  'Xiaoo Clothing Sta. Ana' ) {
          document.getElementById('title-spts').innerHTML = "Xiaoo Clothing Shop"
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'orange'
          document.getElementById('rating').innerHTML = '4.5'
          document.getElementById('spotsz').innerHTML = ' Shopping'
          document.getElementById('ninu').innerHTML= 'Shopping In Santa Ana' 

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



        }
         /*history shopping sports*/
        else if (localStorage.getItem('hi106') ==  "Aliwalas Family House Sta. Ana" ) {
          document.getElementById('title-spts').innerHTML = "Aliwalas Family House"
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'gray'
          document.getElementById('rating').innerHTML = '4.2'
          document.getElementById('spotsz').innerHTML = ' History'
          document.getElementById('ninu').innerHTML= 'Historic Aliwalas House In Sta.ana' 

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Ang Simbahan ng Santa Ana'
     document.getElementById('yr-pic2').src = 'images/st.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical House in Santa Ana'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Xiaoo Clothing'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping in Santa Ana'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Engineer Pedro Montoya House'
    document.getElementById('yr-pic4').src = 'images/pedro.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical House in Santa Ana'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



        }
         /*nature history shopping sports*/
        else if (localStorage.getItem('hi106') ==  "Ang Simbahan ng Sta. Ana Pampanga" ){
          document.getElementById('title-spts').innerHTML = "Ang Simbahan ng Sta. Ana"
          document.getElementById('yr-pic').src = 'images/ana.jpg'
          document.getElementById('hide').style.color = 'Orange'
          document.getElementById('rating').innerHTML = '4.5'
          document.getElementById('spotsz').innerHTML = 'History'
          document.getElementById('ninu').innerHTML= 'Church of Santa Ana Pampanga.' 


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Xiaoo Clothing'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping in Santa Ana'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML =  'Aliwalas Family House'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical House in Santa Ana'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Engineer Pedro Montoya House'
    document.getElementById('yr-pic4').src = 'images/pedro.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical House in Santa Ana'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



          }
    }
      /*magalang*/
     else if (mapping == "Magalang, Pampanga") {
      document.getElementById('from').innerHTML = 'Magalang'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20magalang%20%20pampanga%20magalangpampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML ='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20magalang%20pampanga%20magalang%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Magalang, Pampanga"
        tripPlace.innerHTML = "Trip to Magalang, Pampanga"
        bg.src = "magalang/balebatu.jpg"
        pictures.src =  "magalang/balebatu.jpg"
        place.innerHTML = "Magalang, Pampanga"
        nameX.innerHTML = "Magalang, Pampanga"
        description.innerHTML = "Magalang was mentioned as visita of the nearby town of Arayat on December 29, 1598. On April 30, 1605, it was separated by the Augustinians from Arayat and attained township status due to the bajo de la campana system. Augustinians appointed Fr. Gonzalo de Salazar, OSA as the first pastor."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi113')
        document.getElementById('text2').value = localStorage.getItem('hi114')
        document.getElementById('text3').value = localStorage.getItem('hi115')
        document.getElementById('text4').value = localStorage.getItem('hi116')
        document.getElementById('text5').value = localStorage.getItem('hi117')
        document.getElementById('text6').value = localStorage.getItem('hi118')
        document.getElementById('text7').value = localStorage.getItem('hi119')

         /*sports complex*/
         if (localStorage.getItem('hi113') == 'Bren Z Guiao Magalang Sports Complex' ) {
          document.getElementById('title-spts').innerHTML = 'Bren Z Guiao Magalang Sports Complex'
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'Gray'
          document.getElementById('rating').innerHTML = '4.3'
          document.getElementById('spotsz').innerHTML = 'Sports'
          document.getElementById('ninu').innerHTML= 'Sports Complex Magalang'


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

     /*2*/
         
     /*shopping*/
        }
        else if  (localStorage.getItem('hi113') == 'Pure Gold Magalang' ) {
          document.getElementById('title-spts').innerHTML = 'Pure Gold Magalang'
          document.getElementById('yr-pic').src = 'images/pgm.jpg'
          document.getElementById('hide').style.color = 'gray'
          document.getElementById('rating').innerHTML = '4.2'
          document.getElementById('spotsz').innerHTML = ' Shopping '
          document.getElementById('ninu').innerHTML= 'Supermarket'

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'INDU'
     document.getElementById('yr-pic2').src = 'images/duin.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping in Magalang'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ''
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


        }
        /*historical*/
        else if (localStorage.getItem('hi113') == 'Church  Of Magalang' ) {
          document.getElementById('title-spts').innerHTML = 'Ang Simbahan ng Magalang'
          document.getElementById('yr-pic').src = 'images/magalang.jpg'
          document.getElementById('hide').style.color = 'orange'
          document.getElementById('rating').innerHTML = '4.7'
          document.getElementById('spotsz').innerHTML = ' History'
          document.getElementById('ninu').innerHTML= 'Church of Magalang'

          /*day2*/
     document.getElementById('title-spots2').innerHTML = "Hileograph Towers"
     document.getElementById('yr-pic2').src = 'images/twr.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical place in Magalang'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = "Magalang Municipal Hall"
     document.getElementById('yr-pic3').src = 'images/magalangth.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical place in Santa Ana'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Rivera House"
    document.getElementById('yr-pic4').src = 'images/rivera.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical House in Magalang'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = "Gueco House"
   document.getElementById('yr-pic5').src = 'images/gco.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical House in Magalang'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = "Morales House"
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical House in Magalang'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = "Luciano House"
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical House in Magalang'

          
        }
        /*nature*/
        else if (localStorage.getItem('hi113') ==  "None" ) {
          document.getElementById('title-spts').innerHTML = "None"
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'None'
          document.getElementById('rating').innerHTML = 'None'
          document.getElementById('spotsz').innerHTML = 'None'
          document.getElementById('ninu').innerHTML= 'None' 


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



        }
        /*nature history*/
     else if (localStorage.getItem('hi113') == "Magalang Municipal Hall") {
          document.getElementById('title-spts').innerHTML = "Magalang Municipal Hall"
          document.getElementById('yr-pic').src = 'images/hall.jpg'
          document.getElementById('hide').style.color = 'Gray'
          document.getElementById('rating').innerHTML = '4.2'
          document.getElementById('spotsz').innerHTML = 'History'
          document.getElementById('ninu').innerHTML= 'Magalang Town Hall' 



          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Gueco House'
     document.getElementById('yr-pic2').src = 'images/gco.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical House in Magalang'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Morales House'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical House in Magalang'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Luciano House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Church of Magalang'
   document.getElementById('yr-pic5').src = 'images/search.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical House in Magalang'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Hileograph Towers'
 document.getElementById('yr-pic6').src = 'images/twr.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical House in Magalang'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Rivera House'
document.getElementById('yr-pic7').src = 'images/rivera.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical House in Magalang'



        }
         /*nature shopping*/
        else if (localStorage.getItem('hi113') ==  'INDU Clothing' ) {
          document.getElementById('title-spts').innerHTML = "INDU Magalang Clothing"
          document.getElementById('yr-pic').src = 'images/duin.jpg'
          document.getElementById('hide').style.color = 'Gray'
          document.getElementById('rating').innerHTML = '4.3'
          document.getElementById('spotsz').innerHTML = 'Shopping'
          document.getElementById('ninu').innerHTML= 'Clothing in Magalang' 

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Puregold'
     document.getElementById('yr-pic2').src = 'images/pgm.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Grocery Shopping in Magalang'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



        }
         /*nature sports*/
        else if (localStorage.getItem('hi113') ==  'Bren Z Guiao Magalang Sports Complex') {
          document.getElementById('title-spts').innerHTML = "Bren Z. Guiao Magalang Sports Complex"
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'Orange'
          document.getElementById('rating').innerHTML = '4.4'
          document.getElementById('spotsz').innerHTML = 'Sports'
          document.getElementById('ninu').innerHTML= 'Sports Complex in Magalang' 

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



        }
         /*history shopping*/
        else if (localStorage.getItem('hi113') ==  '1Hileograph Towers' ) {
          document.getElementById('title-spts').innerHTML = "Hileograph Towers"
          document.getElementById('yr-pic').src = 'images/twr.jpg'
          document.getElementById('hide').style.color = 'Gray'
          document.getElementById('rating').innerHTML = '4.1'
          document.getElementById('spotsz').innerHTML = 'Historic'
          document.getElementById('ninu').innerHTML= 'HIstorical Tower of Magalang' 


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Church of Magalang'
     document.getElementById('yr-pic2').src = 'images/search.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical Church in Magalang'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Magalang Municipial Hall'
     document.getElementById('yr-pic3').src = 'images/magalangth.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Municipal Hall In Magalang'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Puregold'
    document.getElementById('yr-pic4').src = 'images/pgm.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Grocery Shopping in Magalang'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'INDU'
   document.getElementById('yr-pic5').src = 'images/duin.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping in Magalang'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Rivera House'
 document.getElementById('yr-pic6').src = 'images/rivera.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical House in Magalang'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Gueco House'
document.getElementById('yr-pic7').src = 'images/gco.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical House in Magalang'


        }
         /*history sports*/
        else if (localStorage.getItem('hi113') ==  '1Gueco House' ) {
          document.getElementById('title-spts').innerHTML = "Gueco House"
          document.getElementById('yr-pic').src = 'images/gco.jpg'
          document.getElementById('hide').style.color = 'orange'
          document.getElementById('rating').innerHTML = '4.5'
          document.getElementById('spotsz').innerHTML = 'Historic'
          document.getElementById('ninu').innerHTML= 'Ancestral house in Magalang.'


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Church of Magalang'
     document.getElementById('yr-pic2').src = 'images/search.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical Church in Magalang'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Bren Z Guiao Magalang Sports Complex'
     document.getElementById('yr-pic3').src = 'images/brenz.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Sports Complex in Magalang'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Rivera House'
    document.getElementById('yr-pic4').src = 'images/rivera.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical House in Magalang'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Heliograph Towers'
   document.getElementById('yr-pic5').src = 'images/twr.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical place in Magalang'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Magalang Municipal Hall'
 document.getElementById('yr-pic6').src = 'images/magalangth.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical place in Magalang'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Morales House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical House in Magalang'


        }
         /*shopping sports*/
        else if (localStorage.getItem('hi113') ==  "1Puregold Magalang" ) {
          document.getElementById('title-spts').innerHTML = "Puregold Magalang"
          document.getElementById('yr-pic').src = 'images/pgm.jpg'
          document.getElementById('hide').style.color = 'Orange'
          document.getElementById('rating').innerHTML = '4.5'
          document.getElementById('spotsz').innerHTML = 'Shopping'
          document.getElementById('ninu').innerHTML= 'shopping in Magalang' 

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'INDU'
     document.getElementById('yr-pic2').src = 'images/duin.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping in Magalang'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Bren Z. Guiao  Sports Complex'
     document.getElementById('yr-pic3').src = 'images/brenz.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Sports Complex in Magalang'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

        }
         /*nature history shopping*/
        else if (localStorage.getItem('hi113') ==  "1Rivera House" ) {
          document.getElementById('title-spts').innerHTML = "Rivera House"
          document.getElementById('yr-pic').src = 'images/rivera.jpg'
          document.getElementById('hide').style.color = 'orange'
          document.getElementById('rating').innerHTML = '4.4'
          document.getElementById('spotsz').innerHTML = 'Historic'
          document.getElementById('ninu').innerHTML= 'Historical House ' 

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'INDU'
     document.getElementById('yr-pic2').src = 'images/duin.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping in Magalang'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Heliograph Towers'
     document.getElementById('yr-pic3').src = 'images/twr.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical place in Magalang'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Magalang Municipal Hall'
    document.getElementById('yr-pic4').src = 'images/magalangth.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical place in Magalang'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Gueco House'
   document.getElementById('yr-pic5').src = 'images/gco.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical House in Magalang'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Church of Magalang'
 document.getElementById('yr-pic6').src = 'images/search.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical Church in Magalang'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Morales House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical House in Magalang'



        }
         /*nature history sports*/
        else if (localStorage.getItem('hi113') ==  '1Morales House' ) {
          document.getElementById('title-spts').innerHTML = "Morales House"
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'orange'
          document.getElementById('rating').innerHTML = '4.5'
          document.getElementById('spotsz').innerHTML = ' Historic'
          document.getElementById('ninu').innerHTML= 'Historical House.' 

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Church Of Magalang'
     document.getElementById('yr-pic2').src = 'images/search.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical Church in Magalang'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Heliograph Towers'
     document.getElementById('yr-pic3').src = 'images/twr.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical Place in Magalang'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Magalang Municipal Hall'
    document.getElementById('yr-pic4').src = 'images/magalangth.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical place in Magalang'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Rivera House'
   document.getElementById('yr-pic5').src = 'images/rivera.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical House in Magalang'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Gueco House'
 document.getElementById('yr-pic6').src = 'images/gco.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical House in Magalang'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Bren Z. Guiao Sports Complex'
document.getElementById('yr-pic7').src = 'images/brenz.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'Sports'
document.getElementById('ninu7').innerHTML = 'Sports Complex in Magalang'



        }
         /*nature shopping sports*/
        else if (localStorage.getItem('hi113') ==  '2Puregold Magalang' ) {
          document.getElementById('title-spts').innerHTML = "Puregold Magalang"
          document.getElementById('yr-pic').src = 'images/pgm.jpg'
          document.getElementById('hide').style.color = 'orange'
          document.getElementById('rating').innerHTML = '4.5'
          document.getElementById('spotsz').innerHTML = ' Shopping'
          document.getElementById('ninu').innerHTML= 'Shopping In Magalang'

          /*day2*/
     document.getElementById('title-spots2').innerHTML ='Bren Z Guiao Magalang Sports Complex'
     document.getElementById('yr-pic2').src = 'images/brenz.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Sports'
     document.getElementById('ninu2').innerHTML = 'Sports Complex in Magalang'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'INDU'
     document.getElementById('yr-pic3').src = 'images/duin.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping in Magalang'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


 
        }
         /*history shopping sports*/
        else if (localStorage.getItem('hi113') ==  '1Magalang Municipal Hall' ) {
          document.getElementById('title-spts').innerHTML = "Magalang Municipal Hall"
          document.getElementById('yr-pic').src = 'images/hall.jpg'
          document.getElementById('hide').style.color = 'gray'
          document.getElementById('rating').innerHTML = '4.2'
          document.getElementById('spotsz').innerHTML = ' History'
          document.getElementById('ninu').innerHTML= 'Town Hall Magalang ' 

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Church of Magalang'
     document.getElementById('yr-pic2').src = 'images/search.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical Church in Magalang'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = ' Bren Z. Guiao Magalang Sports Complex'
     document.getElementById('yr-pic3').src = 'images/brenz.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Sports'
     document.getElementById('ninu3').innerHTML = 'Sports Complex in Magalang'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Puregold Magalang'
    document.getElementById('yr-pic4').src = 'images/pgm.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Sports Complex in Magalang'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'INDU'
   document.getElementById('yr-pic5').src = 'images/duin.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping in Magalang'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Heliograph Towers'
 document.getElementById('yr-pic6').src = 'images/twr.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical place in Magalang'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Rivera House'
document.getElementById('yr-pic7').src = 'images/rivera.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical House in Magalang'


        }
         /*nature history shopping sports*/
        else if (localStorage.getItem('hi113') ==  '2Heliograph Towers' ){
          document.getElementById('title-spts').innerHTML = 'Heliograph Towers'
          document.getElementById('yr-pic').src = 'images/twr.jpg'
          document.getElementById('hide').style.color = 'Orange'
          document.getElementById('rating').innerHTML = '4.5'
          document.getElementById('spotsz').innerHTML = 'History'
          document.getElementById('ninu').innerHTML= 'Historical Tower in Magalang .' 


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Puregold Magalang'
     document.getElementById('yr-pic2').src = 'images/pgm.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Grocery Shopping in Magalang'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'INDU'
     document.getElementById('yr-pic3').src = 'images/duin.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping in Magalang'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Church of Magalang'
    document.getElementById('yr-pic4').src = 'images/search.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical Church in Magalang'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Bren Z. Guiao Magalang Sports Complex'
   document.getElementById('yr-pic5').src = 'images/brenz.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'Sports'
   document.getElementById('ninu5').innerHTML = 'Sports Complex in Magalang'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Magalang Municipal Hall'
 document.getElementById('yr-pic6').src = 'images/magalangth.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical Place in Magalang '
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Rivera House'
document.getElementById('yr-pic7').src = 'images/rivera.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical House in Magalang'



          }
      }
      /*mabalacat*/
     else if (mapping == "Mabalacat, Pampanga") {
      document.getElementById('from').innerHTML = 'Mabalacat'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20mabalacat%20pampanga%20mabalacat%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20mabalacat%20pampanga%20mabalacat%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Mabalacat, Pampanga"
        tripPlace.innerHTML = "Trip to Mabalacat, Pampanga"
        place.innerHTML = "Mabalacat, Pampanga"
        pictures.src = "mabalacat/mabalacat.jpg"
        bg.src = "mabalacat/mabalacat.jpg"
        nameX.innerHTML = "Mabalacat, Pampanga"
        description.innerHTML = "Mabalacat has a land area of 83.18 square kilometres (32.12 sq mi). It is 93 kilometres (58 mi) from Manila, 10 kilometres (6.2 mi) from Angeles, and 27 kilometres (17 mi) from the provincial capital, San Fernando."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'
        document.getElementById('text1').value = localStorage.getItem('hi120')
        document.getElementById('text2').value = localStorage.getItem('hi121')
        document.getElementById('text3').value = localStorage.getItem('hi122')
        document.getElementById('text4').value = localStorage.getItem('hi123')
        document.getElementById('text5').value = localStorage.getItem('hi124')
        document.getElementById('text6').value = localStorage.getItem('hi125')
        document.getElementById('text7').value = localStorage.getItem('hi126')

          /*sports */
          if (localStorage.getItem('hi120') == 'None' ) {
            document.getElementById('title-spts').innerHTML = 'None'
            document.getElementById('yr-pic').src = 'images/usedata.jpg'
            document.getElementById('hide').style.color = 'gray'
            document.getElementById('rating').innerHTML = 'None'
            document.getElementById('spotsz').innerHTML = 'None'
            document.getElementById('ninu').innerHTML= 'None'

            /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



       /*2*/
           
       /*shopping*/
          }
          else if  (localStorage.getItem('hi120') == 'City Mall Dau' ) {
            document.getElementById('title-spts').innerHTML = 'City Mall Dau'
            document.getElementById('yr-pic').src = 'images/malldau.jpeg'
            document.getElementById('hide').style.color = 'gray'
            document.getElementById('rating').innerHTML = '4.2'
            document.getElementById('spotsz').innerHTML = ' Shopping '
            document.getElementById('ninu').innerHTML= 'City Mall Dau Mabalacat'

            /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Puregold Dau'
     document.getElementById('yr-pic2').src = 'images/pgd.jpg'
     document.getElementById('hide2').style.color = 'Orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping/Grocery in Mabalacat'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


          }
          /*historical*/
          else if (localStorage.getItem('hi120') == "House of Don Marcos Santos" ) {
            document.getElementById('title-spts').innerHTML = 'House of Don Marcos Santos'
            document.getElementById('yr-pic').src = 'images/usedata.jpg'
            document.getElementById('hide').style.color = 'orange'
            document.getElementById('rating').innerHTML = '4.7'
            document.getElementById('spotsz').innerHTML = ' History'
            document.getElementById('ninu').innerHTML= 'Historical House in Mabalacat'

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Our Lady of Grace Parish'
     document.getElementById('yr-pic2').src = 'images/our.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Church in Mabalacat'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Kamikaze Is Air Field'
     document.getElementById('yr-pic3').src = 'images/kmkz.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Mabalacat Air Field'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Ernesto Dela Cruz Ancestral House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'Orange'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical House in Mabalacat'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Morales Ancestral Mansion'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical house In Mabalacat'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Mabalacat Train Station'
 document.getElementById('yr-pic6').src = 'images/trn.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historic Train Station'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Clark White House'
document.getElementById('yr-pic7').src = 'images/whitehouse.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House In Mabalacat'


            }
          /*nature*/
          else if (localStorage.getItem('hi120') ==  'Haduan Falls' ) {
            document.getElementById('title-spts').innerHTML = 'Haduan Falls'
            document.getElementById('yr-pic').src = 'images/haduan.jpg'
            document.getElementById('hide').style.color = 'orange'
            document.getElementById('rating').innerHTML = '4.5'
            document.getElementById('spotsz').innerHTML = 'Nature'
            document.getElementById('ninu').innerHTML= 'Falls in Mabalacat Pampanga' 

            /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


          }
          /*nature history*/
       else if (localStorage.getItem('hi120') == 'Mabalacat Train Station') {
            document.getElementById('title-spts').innerHTML = 'Mabalacat Train Station'
            document.getElementById('yr-pic').src = 'images/trn.jpg'
            document.getElementById('hide').style.color = 'Gray'
            document.getElementById('rating').innerHTML = '4.2'
            document.getElementById('spotsz').innerHTML = 'History'
            document.getElementById('ninu').innerHTML= 'Train Station in Mabalacat' 

            /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Haduan Falls'
     document.getElementById('yr-pic2').src = 'images/haduan.jpg'
     document.getElementById('hide2').style.color = 'Orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Mabalacat Falls'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'House Of Don Marcos Santos'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historic House in Mabalacat'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Our Lady Of Grace Parish'
    document.getElementById('yr-pic4').src = 'images/our.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical Church in Mabalacat'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Ernesto Dela Cruz Ancestral House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '43'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House in Mabalacat'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Clark White House'
 document.getElementById('yr-pic6').src = 'images/whitehouse.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical House in Mabalacat'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Kamikaze West Air Field'
document.getElementById('yr-pic7').src = 'images/kmkz.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Mabalacat Air Field'


          }
           /*nature shopping*/
          else if (localStorage.getItem('hi120') ==  '1City Mall Dau' ) {
            document.getElementById('title-spts').innerHTML = 'City Mall Dau'
            document.getElementById('yr-pic').src = 'images/malldau.jpeg'
            document.getElementById('hide').style.color = 'Gray'
            document.getElementById('rating').innerHTML = '4.3'
            document.getElementById('spotsz').innerHTML = 'Shopping'
            document.getElementById('ninu').innerHTML= 'City Mall Dau Mabalacat' 

            /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Haduan Falls'
     document.getElementById('yr-pic2').src = 'images/haduan.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Mabalacat Falls'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Puregold Dau'
     document.getElementById('yr-pic3').src = 'images/pgd.jpg'
     document.getElementById('hide3').style.color = 'Orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping/Grocery in Mabalacat '
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


          }
           /*nature sports*/
          else if (localStorage.getItem('hi120') ==  '2Haduan Falls') {
            document.getElementById('title-spts').innerHTML = 'Mabalacat Haduan Falls'
            document.getElementById('yr-pic').src = 'images/haduan.jpg'
            document.getElementById('hide').style.color = 'Orange'
            document.getElementById('rating').innerHTML = '4.4'
            document.getElementById('spotsz').innerHTML = 'Nature'
            document.getElementById('ninu').innerHTML= 'Falls In Mabalacat' 

            /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'





          }
           /*history shopping*/
          else if (localStorage.getItem('hi120') ==  'Our Lady of Grace Parish' ) {
            document.getElementById('title-spts').innerHTML = 'Our Lady of Grace Parish'
            document.getElementById('yr-pic').src = 'images/our.jpg'
            document.getElementById('hide').style.color = 'Gray'
            document.getElementById('rating').innerHTML = '4.1'
            document.getElementById('spotsz').innerHTML = 'Historic'
            document.getElementById('ninu').innerHTML= 'Historical Church of Mabalacat' 

            /*day2*/
     document.getElementById('title-spots2').innerHTML = 'City Mall of Dau'
     document.getElementById('yr-pic2').src = 'images/malldau.jpeg'
     document.getElementById('hide2').style.color = 'Orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Mall in Mabalacat'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'One North Mall in Mabalacat'
     document.getElementById('yr-pic3').src = 'images/1north.jpg'
     document.getElementById('hide3').style.color = 'Orange'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping Mall in Mabalacat'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Kamikaze Is Air Field'
    document.getElementById('yr-pic4').src = 'images/kmkz.jpg'
    document.getElementById('hide4').style.color = 'Orange'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Mabalacat Air Field'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Ernesto Dela Cruz Ancestral House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House in Mabalacat'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Morales Ancestral Mansion'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical House in Mabalacat'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Mabalacat Train Station'
document.getElementById('yr-pic7').src = 'images/trn.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


          }
           /*history sports*/
          else if (localStorage.getItem('hi120') ==  'Kamizake East Airfield' ) {
            document.getElementById('title-spts').innerHTML = 'Kamizake East Airfield'
            document.getElementById('yr-pic').src = 'images/kmkz.jpg'
            document.getElementById('hide').style.color = 'orange'
            document.getElementById('rating').innerHTML = '4.5'
            document.getElementById('spotsz').innerHTML = 'Historic'
            document.getElementById('ninu').innerHTML= 'Airfield In Mabalacat'

            /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Artillery Memorial'
     document.getElementById('yr-pic2').src = 'images/memo.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Memorial in Mabalacat'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Our Lady of Grace Parish'
     document.getElementById('yr-pic3').src = 'images/our.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical Church in Mabalacat'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'House Don of Marcos Santos House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical House in Mabalacat'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Ernesto Dela Cruz Ancestral House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'Histrory'
   document.getElementById('ninu5').innerHTML = 'Historical House in Mabalacat'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Mabalacat Train Station'
 document.getElementById('yr-pic6').src = 'images/trn.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.0'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical Place in Mabalacat'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Clark White House'
document.getElementById('yr-pic7').src = 'images/whitehouse.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House in Mabalacat'



          }
           /*shopping sports*/
          else if (localStorage.getItem('hi120') ==  'One North Mall in Mabalacat' ) {
            document.getElementById('title-spts').innerHTML = 'One North Mall '
            document.getElementById('yr-pic').src = 'images/1north.jpg'
            document.getElementById('hide').style.color = 'Orange'
            document.getElementById('rating').innerHTML = '4.5'
            document.getElementById('spotsz').innerHTML = 'Shopping'
            document.getElementById('ninu').innerHTML= 'shopping in Mabalacat' 

            /*day2*/
     document.getElementById('title-spots2').innerHTML = 'City Mall Dau'
     document.getElementById('yr-pic2').src = 'images/malldau.jpeg'
     document.getElementById('hide2').style.color = 'Orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall in Mabalacat'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML =  'Puregold Dau'
     document.getElementById('yr-pic3').src = 'images/pgd.jpg'
     document.getElementById('hide3').style.color = 'Orange'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping/Grocery in Mabalacat'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



          }
           /*nature history shopping*/
          else if (localStorage.getItem('hi120') ==  'Clark Museum' ) {
            document.getElementById('title-spts').innerHTML = 'Clark Museum'
            document.getElementById('yr-pic').src = 'images/msm.jpg'
            document.getElementById('hide').style.color = 'orange'
            document.getElementById('rating').innerHTML = '4.4'
            document.getElementById('spotsz').innerHTML = 'Historic'
            document.getElementById('ninu').innerHTML= 'Museum in Mabalacat Pampanga ' 

            /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Haduan Falls'
     document.getElementById('yr-pic2').src = 'images/haduan.jpg'
     document.getElementById('hide2').style.color = 'Orange'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Mabalacat Falls'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'City Mall Dau'
     document.getElementById('yr-pic3').src = 'images/malldau.jpeg'
     document.getElementById('hide3').style.color = 'Orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping Mall in Mabalacat'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Mabalacat Train Station'
    document.getElementById('yr-pic4').src = 'images/trn.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical Place in Mabalacat'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML ='Puregold Dau'
   document.getElementById('yr-pic5').src = 'images/pgd.jpg'
   document.getElementById('hide5').style.color = 'Orange'
   document.getElementById('rating5').innerHTML = '4.5'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping/Grocery in Mabalacat'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Kamikaze East Airfield'
 document.getElementById('yr-pic6').src = 'images/kmkz.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Mabalacat Air Field'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'One North Mall in Mabalacat'
document.getElementById('yr-pic7').src = 'images/1north.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'Shopping'
document.getElementById('ninu7').innerHTML = 'Shopping Mall In Mabalacat'


          }
           /*nature history sports*/
          else if (localStorage.getItem('hi120') ==  'Clark White House' ) {
            document.getElementById('title-spts').innerHTML = 'Clark White House'
            document.getElementById('yr-pic').src = 'images/whitehouse.jpg'
            document.getElementById('hide').style.color = 'orange'
            document.getElementById('rating').innerHTML = '4.5'
            document.getElementById('spotsz').innerHTML = ' Historic'
            document.getElementById('ninu').innerHTML= 'Historical House Pampanga.' 

            /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Haduan Falls'
     document.getElementById('yr-pic2').src = 'images/haduan.jpg'
     document.getElementById('hide2').style.color = 'Orange'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Nature'
     document.getElementById('ninu2').innerHTML = 'Mabalacat Falls'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Our Lady of Grace'
     document.getElementById('yr-pic3').src = 'images/our.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical Church in Mabalacat'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Clark Museum'
    document.getElementById('yr-pic4').src = 'images/msm.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Mabalacat Museum'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Ernesto Dela Cruz Ancestral House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House in Mabalacat'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML =  'Mabalacat Train Station'
 document.getElementById('yr-pic6').src = 'images/trn.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical Place in Mabalacat'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Kamikaze East Airfield'
document.getElementById('yr-pic7').src = 'images/kmkz.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Mabalacat Air Field'



          }
           /*nature shopping sports*/
          else if (localStorage.getItem('hi120') ==  'One north Mall' ) {
            document.getElementById('title-spts').innerHTML = "One north Mall"
            document.getElementById('yr-pic').src = 'images/1north.jpg'
            document.getElementById('hide').style.color = 'orange'
            document.getElementById('rating').innerHTML = '4.5'
            document.getElementById('spotsz').innerHTML = ' Shopping'
            document.getElementById('ninu').innerHTML= 'Shopping In Mabalacat' 

            /*day2*/
     document.getElementById('title-spots2').innerHTML = 'City Mall Dau'
     document.getElementById('yr-pic2').src = 'images/malldau.jpeg'
     document.getElementById('hide2').style.color = 'Orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall in Mabalacat'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Puregold Dau'
     document.getElementById('yr-pic3').src = 'images/pgd.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping/Grocery in Mabalacat'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



          }
           /*history shopping sports*/
          else if (localStorage.getItem('hi120') ==  'Goddess of Peace Shrine' ) {
            document.getElementById('title-spts').innerHTML = 'Goddess of Peace Shrine'
            document.getElementById('yr-pic').src = 'images/shrine.jpg'
            document.getElementById('hide').style.color = 'gray'
            document.getElementById('rating').innerHTML = '4.2'
            document.getElementById('spotsz').innerHTML = ' History'
            document.getElementById('ninu').innerHTML= 'Historical in Mabalacat' 

            /*day2*/
     document.getElementById('title-spots2').innerHTML ='City Mall DAU'
     document.getElementById('yr-pic2').src = 'images/malldau.jpeg'
     document.getElementById('hide2').style.color = 'Orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall in Mabalacat'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Kamikaze East Airfield'
     document.getElementById('yr-pic3').src = 'images/kmkz.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Mabalacat Air Field'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Puregold Dau'
    document.getElementById('yr-pic4').src = 'images/pgd.jpg'
    document.getElementById('hide4').style.color = 'Orange'
    document.getElementById('rating4').innerHTML = '4.4'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping/Grocery in Mabalacat'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Clark White House'
   document.getElementById('yr-pic5').src = 'images/whitehouse.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House in Mabalacat'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'One North Mall in Mabalacat'
 document.getElementById('yr-pic6').src = 'images/1north.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML =  'Shopping Mall in Mabalacat'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Our lady of Church Parish'
document.getElementById('yr-pic7').src = 'images/our.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical Church in Mabalacat'



          }
           /*nature history shopping sports*/
          else if (localStorage.getItem('hi120') ==  'Artillery Memorial' ){
            document.getElementById('title-spts').innerHTML = 'Artillery Memorial'
            document.getElementById('yr-pic').src = 'images/memo.jpg'
            document.getElementById('hide').style.color = 'Orange'
            document.getElementById('rating').innerHTML = '4.5'
            document.getElementById('spotsz').innerHTML = 'History'
            document.getElementById('ninu').innerHTML= 'Historical Memorial Mabalacat.' 

            /*day2*/
     document.getElementById('title-spots2').innerHTML = 'City Mall DAU'
     document.getElementById('yr-pic2').src = 'images/malldau.jpg'
     document.getElementById('hide2').style.color = 'Orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall in Mabalacat'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Haduan Falls'
     document.getElementById('yr-pic3').src = 'images/haduan.jpg'
     document.getElementById('hide3').style.color = 'Orange'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Nature'
     document.getElementById('ninu3').innerHTML = 'Mabalacat Falls'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Our Lady of Grace Parish'
    document.getElementById('yr-pic4').src = 'images/our.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical Church in Mabalacat'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML =  'Clark White House'
   document.getElementById('yr-pic5').src = 'images/whitehouse.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical Place in Mabalacat'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML ='Kamikaze East Airfield'
 document.getElementById('yr-pic6').src = 'images/kmkz.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical Place in Mabalacat'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Mabalacat Train Station'
document.getElementById('yr-pic7').src = 'images/trn.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical Place in Mabalacat'



            }
      }
      /*bacolor*/
     else if (mapping =="Bacolor, Pampanga") {
      document.getElementById('from').innerHTML = 'Bacolor'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20bacolor%20pampanga%20bacolor%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20bacolor%20pampanga%20bacolor%20pampanga+(bacolor)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Bacolor, Pampanga"
        tripPlace.innerHTML = "Trip to Bacolor, Pampanga"
        place.innerHTML = "Bacolor, Pampanga"
        bg.src ="bacolor/bacolor-church.jpg"
        pictures.src = "bacolor/bacolor-church.jpg"
        nameX.innerHTML =  "Bacolor, Pampanga"
        description.innerHTML = "Don Guillermo Manabat, a rich landlord, is believed to be the founder of Bacolor in 1574.[7] Historical records show that Bacolor has been in existence as a proposed settlement as early as 1571, the same year Manila was founded by the Spanish."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi127')
        document.getElementById('text2').value = localStorage.getItem('hi128')
        document.getElementById('text3').value = localStorage.getItem('hi129')
        document.getElementById('text4').value = localStorage.getItem('hi130')
        document.getElementById('text5').value = localStorage.getItem('hi131')
        document.getElementById('text6').value = localStorage.getItem('hi132')
        document.getElementById('text7').value = localStorage.getItem('hi133')

        /*sports */
        if (localStorage.getItem('hi127') == 'None' ) {
          document.getElementById('title-spts').innerHTML = 'None'
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'None'
          document.getElementById('rating').innerHTML = 'None'
          document.getElementById('spotsz').innerHTML = 'None'
          document.getElementById('ninu').innerHTML= 'None'


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



     /*2*/
         
     /*shopping*/
        }
        else if  (localStorage.getItem('hi127') == 'None' ) {
          document.getElementById('title-spts').innerHTML = 'None'
          document.getElementById('yr-pic').src = 'images/usedata.jpeg'
          document.getElementById('hide').style.color = 'None'
          document.getElementById('rating').innerHTML = 'None'
          document.getElementById('spotsz').innerHTML = 'None'
          document.getElementById('ninu').innerHTML= 'None'


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'




        }
        /*historical*/
        else if (localStorage.getItem('hi127') == "St. Guillermo Parish Church" ) {
          document.getElementById('title-spts').innerHTML = "St. Guillermo Parish Church"
          document.getElementById('yr-pic').src = 'images/guillermo.jpg'
          document.getElementById('hide').style.color = 'orange'
          document.getElementById('rating').innerHTML = '4.7'
          document.getElementById('spotsz').innerHTML = ' History'
          document.getElementById('ninu').innerHTML= 'Historical Church in Bacolor'


          /*day2*/
     document.getElementById('title-spots2').innerHTML = "Our Lady Of Lourdes Shrine"
     document.getElementById('yr-pic2').src = 'images/shrines.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical Church in Bacolor'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = "Don Honorio Ventura State University"
     document.getElementById('yr-pic3').src = 'images/dhvsu.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical School in Bacolor'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Judge De Jesus Ancestral House"
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.0'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical House in Bacolor'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = "Rodriguez Ancestral House"
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.0'
   document.getElementById('spotsz5').innerHTML = ' History'
   document.getElementById('ninu5').innerHTML = ' Historic House in Bacolor'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML =  "Joven's Ancestral House"
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.0'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical House in Bacolor'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = "De Leon's House"
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.0'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House in Bacolor'

          
        }
        /*nature*/
        else if (localStorage.getItem('hi127') ==  'None' ) {
          document.getElementById('title-spts').innerHTML = 'None'
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'None'
          document.getElementById('rating').innerHTML = 'None'
          document.getElementById('spotsz').innerHTML = 'None'
          document.getElementById('ninu').innerHTML= 'None' 


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



        }
        /*nature history*/
     else if (localStorage.getItem('hi127') == 'Don Honoria Ventura State University') {
          document.getElementById('title-spts').innerHTML = 'Don Honoria Ventura State University'
          document.getElementById('yr-pic').src = 'images/dhvsu.jpg'
          document.getElementById('hide').style.color = 'orange'
          document.getElementById('rating').innerHTML = '4.5'
          document.getElementById('spotsz').innerHTML = 'History'
          document.getElementById('ninu').innerHTML= 'University in Bacolor'

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'San GUillermo Parish Church'
     document.getElementById('yr-pic2').src = 'images/guillermo.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical Churches in Bacolor'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Judge De Jesus Ancestral House'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.0'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical House In Bacolor'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Joven's House"
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'Gray'
    document.getElementById('rating4').innerHTML = '4.0'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical House in Bacolor'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Simon De Anda Monument'
   document.getElementById('yr-pic5').src = 'images/anda.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical place in Bacolor'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML =  'Pablo Angeles David Monument'
 document.getElementById('yr-pic6').src = 'images/jcc.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.0'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical place in Bacolor'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Death March Marker'
document.getElementById('yr-pic7').src = 'images/match.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.0'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical place in Bacolor'


 
        }
         /*nature shopping*/
        else if (localStorage.getItem('hi127') ==  'None' ) {
          document.getElementById('title-spts').innerHTML = 'None'
          document.getElementById('yr-pic').src = 'images/usedata.jpeg'
          document.getElementById('hide').style.color = 'None'
          document.getElementById('rating').innerHTML = 'None'
          document.getElementById('spotsz').innerHTML = 'None'
          document.getElementById('ninu').innerHTML= 'None' 




          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



        }
         /*nature sports*/
        else if (localStorage.getItem('hi127') ==  'None') {
          document.getElementById('title-spts').innerHTML = 'None'
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'None'
          document.getElementById('rating').innerHTML = 'None'
          document.getElementById('spotsz').innerHTML = 'None'
          document.getElementById('ninu').innerHTML= 'None' 


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



        }
         /*history shopping*/
        else if (localStorage.getItem('hi127') ==  'Our Lady of Lourdes Shrine' ) {
          document.getElementById('title-spts').innerHTML = 'Our Lady of Lourdes Shrine'
          document.getElementById('yr-pic').src = 'images/shrines.jpg'
          document.getElementById('hide').style.color = 'orange'
          document.getElementById('rating').innerHTML = '4.7'
          document.getElementById('spotsz').innerHTML = 'Historic'
          document.getElementById('ninu').innerHTML= 'Catholic church in Bacolor'

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'St. Guillermo Parish Church'
     document.getElementById('yr-pic2').src = 'images/guillermo.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Churches in Bacolor'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Don Honorio Ventura State University'
     document.getElementById('yr-pic3').src = 'images/dhvsu.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical School in Bacolor'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Judge De Jesus Ancestral House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.0'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical House in Bacolor'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Rodriguez Ancestral House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.0'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House in Bacolor'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML =  'Jovens Ancestral House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.0'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical House in Bacolor'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'De Leons House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'Gray'
document.getElementById('rating7').innerHTML = '4.0'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House in Bacolor'


 
        }
         /*history sports*/
        else if (localStorage.getItem('hi127') ==  'Simon De Anda Monument' ) {
          document.getElementById('title-spts').innerHTML = 'Simon De Anda Monument'
          document.getElementById('yr-pic').src = 'images/anda.jpg'
          document.getElementById('hide').style.color = 'gray'
          document.getElementById('rating').innerHTML = '4.3'
          document.getElementById('spotsz').innerHTML = 'Historic'
          document.getElementById('ninu').innerHTML= 'Historic House in Bacolor'


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Our Lady of Lourdes Shrine'
     document.getElementById('yr-pic2').src = 'images/our.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical Church in Bacolor'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Don Honorio Ventura State University'
     document.getElementById('yr-pic3').src = 'images/dhvsu.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical School in Bacolor'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'San Guillermo Parish Church'
    document.getElementById('yr-pic4').src = 'images/guillermo.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical Church in Bacolor'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Jovens House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House in Bacolor'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Deleon House'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical House in Bacolor'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Judge De Jesus Ancestral House '
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House in Bacolor'

        }
         /*shopping sports*/
        else if (localStorage.getItem('hi127') ==  'None' ) {
          document.getElementById('title-spts').innerHTML = 'None '
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'None'
          document.getElementById('rating').innerHTML = 'None'
          document.getElementById('spotsz').innerHTML = 'None'
          document.getElementById('ninu').innerHTML= 'None' 


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



        }
         /*nature history shopping*/
        else if (localStorage.getItem('hi127') ==  '1Don Honorio Ventura State University' ) {
          document.getElementById('title-spts').innerHTML = 'Don Honorio Ventura State University'
          document.getElementById('yr-pic').src = 'images/dhvsu.jpg'
          document.getElementById('hide').style.color = 'orange'
          document.getElementById('rating').innerHTML = '4.5'
          document.getElementById('spotsz').innerHTML = 'Historic'
          document.getElementById('ninu').innerHTML= 'University in Bacolor '


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Our Lady of Lourdes Shrine'
     document.getElementById('yr-pic2').src = 'images/our.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical House in Bacolor'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'San Guillermo Parish Church'
     document.getElementById('yr-pic3').src = 'images/guillermo.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical Church in Bacolor'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Juan Crisostomo Caballa Soto Monument'
    document.getElementById('yr-pic4').src = 'images/jcc.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical place in Bacolor'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'De Leons House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'Gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical House in Bacolor'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Pablo Angeles David Monument'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.0'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical place in Bacolor'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Death March Marker'
document.getElementById('yr-pic7').src = 'images/match.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical place in Bacolor'


 
        }
         /*nature history sports*/
        else if (localStorage.getItem('hi127') ==  'Juan Crisostomo Caballa Soto Monument' ) {
          document.getElementById('title-spts').innerHTML = 'Juan Crisostomo Monument'
          document.getElementById('yr-pic').src = 'images/jcc.jpg'
          document.getElementById('hide').style.color = 'orange'
          document.getElementById('rating').innerHTML = '4.5'
          document.getElementById('spotsz').innerHTML = ' Historic'
          document.getElementById('ninu').innerHTML= 'Historical landmark in Bacolor.' 
          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'San Guillermo Parish Church'
     document.getElementById('yr-pic2').src = 'images/guillermo.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical Church in Bacolor'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Our Lady Of Lourdes Shrine'
     document.getElementById('yr-pic3').src = 'images/our.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Museo De Bacolor'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical place in Bacolor'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML =  'Parish Museum'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical place in Bacolor'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Don Honorio Ventura State University'
 document.getElementById('yr-pic6').src = 'images/dhvsu.jpg'
 document.getElementById('hide6').style.color = 'orange'
 document.getElementById('rating6').innerHTML = '4.5'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical School in Bacolor'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Death March Marker'
document.getElementById('yr-pic7').src = 'images/match.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.1'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical place in Bacolor'



        }
         /*nature shopping sports*/
        else if (localStorage.getItem('hi127') ==  'None' ) {
          document.getElementById('title-spts').innerHTML = "None"
          document.getElementById('yr-pic').src = 'images/usedata.jpg'
          document.getElementById('hide').style.color = 'None'
          document.getElementById('rating').innerHTML = 'None'
          document.getElementById('spotsz').innerHTML = 'None'
          document.getElementById('ninu').innerHTML= 'None' 


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

        }
         /*history shopping sports*/
        else if (localStorage.getItem('hi127') ==  '2Our Lady of Lourdes Shrine' ) {
          document.getElementById('title-spts').innerHTML = 'Our Lady of Lourdes Shrine'
          document.getElementById('yr-pic').src = 'images/shrines.jpg'
          document.getElementById('hide').style.color = 'orange'
          document.getElementById('rating').innerHTML = '4.7'
          document.getElementById('spotsz').innerHTML = ' History'
          document.getElementById('ninu').innerHTML= 'Catholic church in Bacolor'

              /*day2*/
     document.getElementById('title-spots2').innerHTML = 'San Guillermo Parish Church'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Death March Marker'
     document.getElementById('yr-pic3').src = 'images/match.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical place in Bacolor'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Don Honorio Ventura State University'
    document.getElementById('yr-pic4').src = 'images/dhvsu.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical School in Bacolor'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Juan Crisostomo Caballa Soto Monument'
   document.getElementById('yr-pic5').src = 'images/jcc.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical place in Bacolor'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Museo De Bacolor'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical place in Bacolor'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'De Leons House'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4,1'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical House in Bacolor' 


         


        }
         /*nature history shopping sports*/
        else if (localStorage.getItem('hi127') ==  'San Guillermo Parish Church' ){
          document.getElementById('title-spts').innerHTML = 'San Guillermo Parish Church'
          document.getElementById('yr-pic').src = 'images/guillermo.jpg'
          document.getElementById('hide').style.color = 'Orange'
          document.getElementById('rating').innerHTML = '4.7'
          document.getElementById('spotsz').innerHTML = 'History'
          document.getElementById('ninu').innerHTML= 'Historical Church in Bacolor.' 


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Don Honorio Ventura State University'
     document.getElementById('yr-pic2').src = 'images/dhvsu.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical School in Bacolor'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Our Lady of Lourdes Shrine'
     document.getElementById('yr-pic3').src = 'images/our.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical Church in Bacolor'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'De Leons House'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical place in Bacolor'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Museo De Bacolor'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical place in Bacolor'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Juan Crisostomo Caballa Soto Monument'
 document.getElementById('yr-pic6').src = 'images/jcc.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical place in Bacolor'
/*day7*/
document.getElementById('ttle-spts7').innerHTML =  'Death March Marker'
document.getElementById('yr-pic7').src = 'images/match.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical place in Bacolor'
          }
      }

      /*angeles*/
     else if ((mapping =="Angeles, Pampanga") || (mapping =="Angeles,Pampanga")) {
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20angeles%20pampanga%20angeles%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz"src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20angeles%20angeles%20city+(angeles)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Angeles, Pampanga"
      tripPlace.innerHTML = "Trip to Angeles, Pampanga"
      bg.src ="angeles/aqua.jpg"
      pictures.src = "angeles/aqua.jpg"
      place.innerHTML = "Angeles, Pampanga"
      nameX.innerHTML =  "Angeles, Pampanga"
      description.innerHTML = "In 1796, the gobernadorcillo or town head of San Fernando, Don Ángel Pantaleón de Miranda, and his wife, Doña Rosalía de Jesús, along with some followers, staked out a new settlement, which they named Culiát because of the abundance of vines (Gnetum indicum)[5] of that name in the area."
      document.getElementById('things3').innerHTML = 'Market &emsp;•'

      document.getElementById('text1').value = localStorage.getItem('hi134')
      document.getElementById('text2').value = localStorage.getItem('hi135')
      document.getElementById('text3').value = localStorage.getItem('hi136')
      document.getElementById('text4').value = localStorage.getItem('hi137')
      document.getElementById('text5').value = localStorage.getItem('hi138')
      document.getElementById('text6').value = localStorage.getItem('hi139')
      document.getElementById('text7').value = localStorage.getItem('hi140')

      /*sports */
      if (localStorage.getItem('hi134') == '1Auf Gymnasium' ) {
        document.getElementById('title-spts').innerHTML = 'Auf Gymnasium in Angeles'
        document.getElementById('yr-pic').src = 'images/auf.jpg'
        document.getElementById('hide').style.color = 'gray'
        document.getElementById('rating').innerHTML = '4.2'
        document.getElementById('spotsz').innerHTML = 'Sports'
        document.getElementById('ninu').innerHTML= 'Angeles Gymnasium'

        /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

      }

   /*2*/
       
   /*shopping*/
      
      else if  (localStorage.getItem('hi134') == 'SM Clark' ) {
        document.getElementById('title-spts').innerHTML = 'SM City Clark'
        document.getElementById('yr-pic').src = 'images/clark.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = 'Shopping'
        document.getElementById('ninu').innerHTML= 'Shopping Mall In Clark'
        /*day2*/
     document.getElementById('title-spots2').innerHTML =  'Clark Cityfront'
     document.getElementById('yr-pic2').src = 'images/front.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping in Angeles'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = "Robinson's Place Balibago"
     document.getElementById('yr-pic3').src = 'images/sons.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping in Angeles'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML ='Marquee Mall'
    document.getElementById('yr-pic4').src = 'images/marquee.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping in Angeles'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Nepo Mart'
   document.getElementById('yr-pic5').src = 'images/Nmart.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping/Grocery in Angeles'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'The Shoppes'
 document.getElementById('yr-pic6').src = 'images/shoppes.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.4'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML =  'Shopping in Angeles'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Nepo Mall in Angeles'
document.getElementById('yr-pic7').src = 'images/nepo.jpg'
document.getElementById('hide7').style.color = 'orange'
document.getElementById('rating7').innerHTML = '4.5'
document.getElementById('spotsz7').innerHTML =  'Shopping'
document.getElementById('ninu7').innerHTML = 'Shopping in Angeles'

      }
      /*historical*/
      else if (localStorage.getItem('hi134') == 'Museo Angeles' ) {
        document.getElementById('title-spts').innerHTML = 'Museo Ning Angeles'
        document.getElementById('yr-pic').src = 'images/museoA.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = ' History'
        document.getElementById('ninu').innerHTML= 'Museo ning Angeles Pampanga'


        /*day2*/
     document.getElementById('title-spots2').innerHTML =  "Pamintuan House"
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.1'
     document.getElementById('spotsz2').innerHTML = 'History'
     document.getElementById('ninu2').innerHTML = 'Historical House in Angeles'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = "Mariano Lacson House"
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.0'
     document.getElementById('spotsz3').innerHTML = 'History'
     document.getElementById('ninu3').innerHTML = 'Historical House in Angeles'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Apung Mamacalulu Shrine Church'
    document.getElementById('yr-pic4').src = 'images/apo.png'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'History'
    document.getElementById('ninu4').innerHTML = 'Historical Church in Angeles'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML =  "Clark Field"
   document.getElementById('yr-pic5').src = 'images/afield.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'History'
   document.getElementById('ninu5').innerHTML = 'Historical place in Angeles'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = "Death Place Of Manuel Roxas"
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'History'
 document.getElementById('ninu6').innerHTML =  'Historical place in Angeles'
/*day7*/
document.getElementById('ttle-spts7').innerHTML =  "Holy Rosary Parish Church"
document.getElementById('yr-pic7').src = 'images/Rosario.jpg'
document.getElementById('hide7').style.color = 'orange'
document.getElementById('rating7').innerHTML = '4.5'
document.getElementById('spotsz7').innerHTML =  'History'
document.getElementById('ninu7').innerHTML = 'Historical Church in Angeles'
 

      }
      
      /*nature history*/
   else if (localStorage.getItem('hi134') == 'Death Place Of Manuel Roxas' ) {
        document.getElementById('title-spts').innerHTML = 'Death Place Of Manuel Roxas' 
        document.getElementById('yr-pic').src = 'images/roxas.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = 'History'
        document.getElementById('ninu').innerHTML= 'Death place Angeles Pampanga' 

        /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Museo Ning Angeles'
     document.getElementById('yr-pic2').src = 'images/museoA.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical place in Angeles'
 /*day3*/ 
     document.getElementById('ttle-spts3').innerHTML = 'Church Complex Of Santo Rosario'
     document.getElementById('yr-pic3').src = 'images/rosario.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical Church in Angeles'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Clark Field'
    document.getElementById('yr-pic4').src = 'images/afield.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical place in Angeles'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Pamintuan House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.1'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical House in Angeles'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Munisipyo De Angeles'
 document.getElementById('yr-pic6').src = 'images/municip.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.1'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical place in Angeles'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Holy Rosary Parish'
document.getElementById('yr-pic7').src = 'images/rosario.jpg'
document.getElementById('hide7').style.color = 'orange'
document.getElementById('rating7').innerHTML = '4.5'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical  Church in Angeles'
     

}

       /*nature shopping*/
      else if (localStorage.getItem('hi134') ==  'Marquee Mall' ) {
        document.getElementById('title-spts').innerHTML = 'Marquee Mall'
        document.getElementById('yr-pic').src = 'images/marquee.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = 'Shopping'
        document.getElementById('ninu').innerHTML= 'Mall in Angeles Pampanga' 
        /*day2*/
     document.getElementById('title-spots2').innerHTML ='Robinson'
     document.getElementById('yr-pic2').src = 'images/sons.png'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall In Angeles'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Clark City Front'
     document.getElementById('yr-pic3').src = 'images/front.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping In angeles'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'SM City Clark'
    document.getElementById('yr-pic4').src = 'images/clark.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping Mall In Angeles'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Nepo Mart'
   document.getElementById('yr-pic5').src = 'images/Nmart.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.4'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping Mart in Angeles'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'
     

}

       /*nature sports*/
      else if (localStorage.getItem('hi134') ==  'Auf Gym') {
        document.getElementById('title-spts').innerHTML = 'Auf Gymnasium'
        document.getElementById('yr-pic').src = 'images/auf.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = 'sports'
        document.getElementById('ninu').innerHTML= 'gymnasium in Angeles Pampanga' 
      }

       /*history shopping*/
      else if (localStorage.getItem('hi134') ==  'Robinsons Place balibago') {
        document.getElementById('title-spts').innerHTML = 'Robinsons Place balibago'
        document.getElementById('yr-pic').src = 'images/robin.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.7'
        document.getElementById('spotsz').innerHTML = 'Shopping'
        document.getElementById('ninu').innerHTML= 'Shopping In angeles Pampanga' 

        /*day2*/
     document.getElementById('title-spots2').innerHTML ='Sm city Clark'
     document.getElementById('yr-pic2').src = 'images/clark.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall In Angeles'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Marquee mall'
     document.getElementById('yr-pic3').src = 'images/marquee.jpg'
     document.getElementById('hide3').style.color = 'orange'
     document.getElementById('rating3').innerHTML = '4.5'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping Mall In Angeles'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Holy Rosary Parish Church'
    document.getElementById('yr-pic4').src = 'images/rosario.jpg'
    document.getElementById('hide4').style.color = 'orange'
    document.getElementById('rating4').innerHTML = '4.5'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical Church in Angeles'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Museo ning Angeles'
   document.getElementById('yr-pic5').src = 'images/museoA.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical place in Angeles'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Apung Mamacalulu Shrine Church'
 document.getElementById('yr-pic6').src = 'images/apo.jpg'
 document.getElementById('hide6').style.color = 'orange'
 document.getElementById('rating6').innerHTML = '4.5'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical Church in Angeles'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Clark Field'
document.getElementById('yr-pic7').src = 'images/afield.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical place in Angeles'
      

}

       /*history sports*/
      else if (localStorage.getItem('hi134') ==  'Church Complex of Sto Rosario' ) {
        document.getElementById('title-spts').innerHTML = 'Church Complex of Sto Rosario'
        document.getElementById('yr-pic').src = 'images/Rosario.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = 'Historic'
        document.getElementById('ninu').innerHTML= 'Historic Church of Angeles'

        /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Pamintuan House'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical House in Angeles'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML ='Mariano Lacson House'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.0'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical House in Angeles'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML ='Auf Gym angeles'
    document.getElementById('yr-pic4').src = 'images/auf.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Sports'
    document.getElementById('ninu4').innerHTML = 'Sports gym in Angeles'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML =  'Museo ning Angeles'
   document.getElementById('yr-pic5').src = 'images/museoA.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical place in Angeles'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Jose Pedro Henson Y Leon Santos Deposito'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('rating6').innerHTML = '4.3'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical House in Angeles'
/*day7*/
document.getElementById('ttle-spts7').innerHTML ='Juan Nepomuceno Camalig'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical place in Angeles'

      }

       /*shopping sports*/
      else if (localStorage.getItem('hi134') ==  'Nepo Mall'  ) {
        document.getElementById('title-spts').innerHTML = 'Nepo Mall' 
        document.getElementById('yr-pic').src = 'images/nepo.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = 'Shopping'
        document.getElementById('ninu').innerHTML= 'Shopping Mall in Angeles' 
        /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Robinsons Place Balibago'
     document.getElementById('yr-pic2').src = 'images/sons.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Shopping'
     document.getElementById('ninu2').innerHTML = 'Shopping Mall In Angeles'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Clarkcityfront'
     document.getElementById('yr-pic3').src = 'images/front.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.4'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical place in Angeles'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Sm City Clark'
    document.getElementById('yr-pic4').src = 'images/clark.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping Mall In Angeles'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Marquee Mall'
   document.getElementById('yr-pic5').src = 'images/marquee.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.3'
   document.getElementById('spotsz5').innerHTML = 'Shopping'
   document.getElementById('ninu5').innerHTML = 'Shopping Mall in Angeles'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'The Shoppes'
 document.getElementById('yr-pic6').src = 'images/shoppes.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.4'
 document.getElementById('spotsz6').innerHTML = 'Shopping'
 document.getElementById('ninu6').innerHTML =  'Shopping in Angeles'
/*day7*/
document.getElementById('ttle-spts7').innerHTML ='Auf Gym angeles'
document.getElementById('yr-pic7').src = 'images/auf.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.3'
document.getElementById('spotsz7').innerHTML =  'Sports'
document.getElementById('ninu7').innerHTML = 'Sports gym in Angeles'


      }

       /*nature history shopping*/
      else if (localStorage.getItem('hi134') ==  'Municipio de Angeles' ) {
        document.getElementById('title-spts').innerHTML = 'Municipio de Angeles'
        document.getElementById('yr-pic').src = 'images/municip.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = 'Historic'
        document.getElementById('ninu').innerHTML= 'City Hall in Angeles'


          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None' 

      }

       /*nature history sports*/
      else if (localStorage.getItem('hi134') ==  'Apong Macalulu Shrine') {
        document.getElementById('title-spts').innerHTML = 'Apong Macalulu Shrine'
        document.getElementById('yr-pic').src = 'images/apo.png'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = ' Historic'
        document.getElementById('ninu').innerHTML= 'Church in Angeles.' 
      }
       /*nature shopping sports*/
      else if (localStorage.getItem('hi134') ==  'The Shoppes' ) {
        document.getElementById('title-spts').innerHTML = "The Shoppes"
        document.getElementById('yr-pic').src = 'images/the.jpg'
        document.getElementById('hide').style.color = 'gray'
        document.getElementById('rating').innerHTML = '4.3'
        document.getElementById('spotsz').innerHTML = 'Shopping'
        document.getElementById('ninu').innerHTML= 'Shopping in Angeles' 
      }
       /*history shopping sports*/
      else if (localStorage.getItem('hi134') ==  'Nepo Mart' ) {
        document.getElementById('title-spts').innerHTML = 'Nepo Mart'
        document.getElementById('yr-pic').src = 'images/Nmart.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.7'
        document.getElementById('spotsz').innerHTML = 'Shopping'
        document.getElementById('ninu').innerHTML= 'Mart in Angeles Pampanga' 
        /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Holy Rosary Parish Church'
     document.getElementById('yr-pic2').src = 'images/rosario.jpg'
     document.getElementById('hide2').style.color = 'orange'
     document.getElementById('rating2').innerHTML = '4.5'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical Church in Angeles'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Sm City Clark'
     document.getElementById('yr-pic3').src = 'images/clark.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.3'
     document.getElementById('spotsz3').innerHTML = 'Shopping'
     document.getElementById('ninu3').innerHTML = 'Shopping Mall In Angeles'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Marquee mall '
    document.getElementById('yr-pic4').src = 'images/marquee.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Shopping'
    document.getElementById('ninu4').innerHTML = 'Shopping Mall In Angeles'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Pamintuan House'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical House in Angeles'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Museo Ning Angeles'
 document.getElementById('yr-pic6').src = 'images/museoA.jpg'
 document.getElementById('hide6').style.color = 'gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical place in Angeles'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'Municipio De Angeles '
document.getElementById('yr-pic7').src = 'images/municip.jpg'
document.getElementById('hide7').style.color = 'gray'
document.getElementById('rating7').innerHTML = '4.2'
document.getElementById('spotsz7').innerHTML =  'Historic'
document.getElementById('ninu7').innerHTML = 'Historical place in Angeles'


      }
       /*nature history shopping sports*/
      else if (localStorage.getItem('hi134') ==  'Carmelite Monastery and Church' ) {
        document.getElementById('title-spts').innerHTML = 'Carmelite Monastery and Church'
        document.getElementById('yr-pic').src = 'images/carmel.jpg'
        document.getElementById('hide').style.color = 'Orange'
        document.getElementById('rating').innerHTML = '4.7'
        document.getElementById('spotsz').innerHTML = 'History'
        document.getElementById('ninu').innerHTML= 'Historical Church in Angeles.' 

        }
      }
      
   else if (mapping == "Lubao, Pampanga") {
    document.getElementById('from').innerHTML = 'Lubao'
    mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20lubao%20pampanga%20lubao%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
    mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20lubao%20pampanga%20lubao%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
  title.innerHTML = "Trip to Lubao, Pampanga"
    tripPlace.innerHTML = "Trip to Lubao, Pampanga"
    bg.src = "images/boo.jpg"
    place.innerHTML = "Lubao, Pampanga"
    nameX.innerHTML = "Lubao, Pampanga"
    description.innerHTML ="The town's name derives from the indigenous term lubo which means low or sunken, reflective of the area's muddy and flooded characteristics. Lubao is also known by its Kapampangan language equivalent Baba."
    pictures.src = "lubao/bamboohub.jpg"
    document.getElementById('things3').innerHTML = 'Market &emsp;•'

    document.getElementById('text1').value = localStorage.getItem('hi141')
        document.getElementById('text2').value = localStorage.getItem('hi142')
        document.getElementById('text3').value = localStorage.getItem('hi143')
        document.getElementById('text4').value = localStorage.getItem('hi144')
        document.getElementById('text5').value = localStorage.getItem('hi145')
        document.getElementById('text6').value = localStorage.getItem('hi146')
        document.getElementById('text7').value = localStorage.getItem('hi147')
          /*sports */
      if (localStorage.getItem('hi141') == '1Pradera Verde' ) {
        document.getElementById('title-spts').innerHTML = 'Pradera Verde'
        document.getElementById('yr-pic').src = 'images/verde.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = 'Sports'
        document.getElementById('ninu').innerHTML= 'Sports In Lubao'

          /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'



   
   /*2*/
       
   /*shopping*/
      }
      else if  (localStorage.getItem('hi141') == 'None' ) {
        document.getElementById('title-spts').innerHTML = 'None'
        document.getElementById('yr-pic').src = 'images/usedata.jpg'
        document.getElementById('hide').style.color = 'None'
        document.getElementById('rating').innerHTML = 'None'
        document.getElementById('spotsz').innerHTML = 'None'
        document.getElementById('ninu').innerHTML= 'None'

        


      }
      /*historical*/
      else if (localStorage.getItem('hi141') == "Birth Place Of President Diosdado Macapagal P." ) {
        document.getElementById('title-spts').innerHTML = "Birth Place Of Diosdado Macapagal P."
        document.getElementById('yr-pic').src = 'images/pagal.jpg'
        document.getElementById('hide').style.color = 'gray'
        document.getElementById('rating').innerHTML = '4.4'
        document.getElementById('spotsz').innerHTML = ' History'
        document.getElementById('ninu').innerHTML= 'Historical Place in Lubao'

/*day2*/
     document.getElementById('title-spots2').innerHTML = "St. Augustine Parish Church"
     document.getElementById('yr-pic2').src = 'images/st.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.3'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical Church in Lubao'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = "Denerated Wooden Cross Of St. Cruz "
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical place in Lubao'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = "Old Lubao Town Hall"
    document.getElementById('yr-pic4').src = 'images/Ltwnhll.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical place in Lubao'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = " Aklatan ni Diosdado Macapagal"
   document.getElementById('yr-pic5').src = 'images/aklat.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical place in Lubao'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

      
      }
      /*nature*/
      else if (localStorage.getItem('hi141') ==  'Bamboo Hub' ) {
        document.getElementById('title-spts').innerHTML = 'Bamboo Hub'
        document.getElementById('yr-pic').src = 'images/boo.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = 'Nature'
        document.getElementById('ninu').innerHTML= 'Nature Park In Lubao' 

        /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

      }
      /*nature history*/
   else if (localStorage.getItem('hi141') == 'Old Lubao Town Hall' ) {
        document.getElementById('title-spts').innerHTML = 'Old Lubao Town Hall' 
        document.getElementById('yr-pic').src = 'images/Ltwnhll.jpg'
        document.getElementById('hide').style.color = 'gray'
        document.getElementById('rating').innerHTML = '4.1'
        document.getElementById('spotsz').innerHTML = 'History'
        document.getElementById('ninu').innerHTML= 'Municipal Hall In Lubao' 

        /*day2*/
     document.getElementById('title-spots2').innerHTML = 'Saint Augustine Parish Church'
     document.getElementById('yr-pic2').src = 'images/st.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.4'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical Church in Lubao'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Venerated Wooden Cross Of Santa Cruz Parish'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historic Place in Lubao'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Birth Place Of Diosdado Macapagal'
    document.getElementById('yr-pic4').src = 'images/pagal.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.3'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical place in Lubao'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Aklatan Ni Diosdado Macapagal'
   document.getElementById('yr-pic5').src = 'images/aklat.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical place in Lubao'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


      }
       /*nature shopping*/
      else if (localStorage.getItem('hi141') ==  '1Bamboo Hub' ) {
        document.getElementById('title-spts').innerHTML = 'Bamboo Hub'
        document.getElementById('yr-pic').src = 'images/boo.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = 'Nature'
        document.getElementById('ninu').innerHTML= 'Nature Park In Lubao'

      }
       /*nature sports*/
      else if (localStorage.getItem('hi141') ==  '3Bamboo Hub') {
        document.getElementById('title-spts').innerHTML = 'Bamboo Hub'
        document.getElementById('yr-pic').src = 'images/boo.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = 'Nature'
        document.getElementById('ninu').innerHTML=  'Nature Park In Lubao'

         /*day2*/
     document.getElementById('title-spots2').innerHTML = 'None'
     document.getElementById('yr-pic2').src = 'images/usedata.jpg'
     document.getElementById('hide2').style.color = 'None'
     document.getElementById('rating2').innerHTML = 'None'
     document.getElementById('spotsz2').innerHTML = 'None'
     document.getElementById('ninu2').innerHTML = 'None'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'None'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'None'
     document.getElementById('rating3').innerHTML = 'None'
     document.getElementById('spotsz3').innerHTML = 'None'
     document.getElementById('ninu3').innerHTML = 'None'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'None'
    document.getElementById('yr-pic4').src = 'images/usedata.jpg'
    document.getElementById('hide4').style.color = 'None'
    document.getElementById('rating4').innerHTML = 'None'
    document.getElementById('spotsz4').innerHTML = 'None'
    document.getElementById('ninu4').innerHTML = 'None'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'None'
   document.getElementById('yr-pic5').src = 'images/usedata.jpg'
   document.getElementById('hide5').style.color = 'None'
   document.getElementById('rating5').innerHTML = 'None'
   document.getElementById('spotsz5').innerHTML = 'None'
   document.getElementById('ninu5').innerHTML = 'None'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'None'
 document.getElementById('yr-pic6').src = 'images/usedata.jpg'
 document.getElementById('hide6').style.color = 'None'
 document.getElementById('rating6').innerHTML = 'None'
 document.getElementById('spotsz6').innerHTML = 'None'
 document.getElementById('ninu6').innerHTML =  'None'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

      }
       /*history shopping*/
      else if (localStorage.getItem('hi141') ==  'St. Augustine Parish Church') {
        document.getElementById('title-spts').innerHTML = 'St. Augustine Parish Church'
        document.getElementById('yr-pic').src = 'images/st.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.7'
        document.getElementById('spotsz').innerHTML = 'History'
        document.getElementById('ninu').innerHTML= 'Church In Lubao Pampanga' 
      }
       /*history sports*/
      else if (localStorage.getItem('hi141') ==  'Pradera Verde ') {
        document.getElementById('title-spts').innerHTML = 'Pradera Verde '
        document.getElementById('yr-pic').src = 'images/verde.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = 'Sports'
        document.getElementById('ninu').innerHTML= 'Sports In Lubao'

         /*day2*/
     document.getElementById('title-spots2').innerHTML = 'St. Augustine Parish Church'
     document.getElementById('yr-pic2').src = 'images/st.jpg'
     document.getElementById('hide2').style.color = 'Gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical Church in Lubao'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Venerated Wooden Cross of Sta Cruz Parish'
     document.getElementById('yr-pic3').src = 'images/usedata.jpg'
     document.getElementById('hide3').style.color = 'Gray'
     document.getElementById('rating3').innerHTML = '4.2'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical place in Lubao'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Old Lubao Town Hall'
    document.getElementById('yr-pic4').src = 'images/Ltwnhll.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.1'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical place in Lubao'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Aklatan ni Diosdado Macapagal'
   document.getElementById('yr-pic5').src = 'images/aklat.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical place in Lubao'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Birthplace of Diosdado P. Macapagal' 
 document.getElementById('yr-pic6').src = 'images/pagal.jpg'
 document.getElementById('hide6').style.color = 'Gray'
 document.getElementById('rating6').innerHTML = '4.2'
 document.getElementById('spotsz6').innerHTML = 'Historic'
 document.getElementById('ninu6').innerHTML =  'Historical Place in Lubao'
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'

      }
       /*shopping sports*/
      else if (localStorage.getItem('hi141') ==  '3Pradera Verde'  ) {
        document.getElementById('title-spts').innerHTML = 'Pradera Verde'
        document.getElementById('yr-pic').src = 'images/verde.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = 'Sports'
        document.getElementById('ninu').innerHTML= 'Sports In Lubao' 
      }
       /*nature history shopping*/
      else if (localStorage.getItem('hi141') ==  'Museo at Aklatan ni Pangulong Diosdado Macapagal') {
        document.getElementById('title-spts').innerHTML = 'Museo at Aklatan '
        document.getElementById('yr-pic').src = 'images/aklat.jpg'
        document.getElementById('hide').style.color = 'gray'
        document.getElementById('rating').innerHTML = '4.1'
        document.getElementById('spotsz').innerHTML = 'Historic'
        document.getElementById('ninu').innerHTML= 'Historical Place of Lubao' 
      }
       /*nature history sports*/
      else if (localStorage.getItem('hi141') == 'Venerated Wooden Cross Sta. Cruz Parish') {
        document.getElementById('title-spts').innerHTML = 'Venerated Wooden Cross Sta. Cruz'
        document.getElementById('yr-pic').src = 'images/vene.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = ' Historic'
        document.getElementById('ninu').innerHTML= 'Church in Lubao.' 

         /*day2*/
     document.getElementById('title-spots2').innerHTML = 'St. Augustine Parish Church'
     document.getElementById('yr-pic2').src = 'images/st.jpg'
     document.getElementById('hide2').style.color = 'gray'
     document.getElementById('rating2').innerHTML = '4.2'
     document.getElementById('spotsz2').innerHTML = 'Historic'
     document.getElementById('ninu2').innerHTML = 'Historical Church in Lubao'
 /*day3*/
     document.getElementById('ttle-spts3').innerHTML = 'Old Lubao Town Hall'
     document.getElementById('yr-pic3').src = 'images/Ltwnhll.jpg'
     document.getElementById('hide3').style.color = 'gray'
     document.getElementById('rating3').innerHTML = '4.1'
     document.getElementById('spotsz3').innerHTML = 'Historic'
     document.getElementById('ninu3').innerHTML = 'Historical place in Lubao'
  /*day4*/
    document.getElementById('ttle-spts4').innerHTML = 'Aklatan ni Diosdado Macapagal'
    document.getElementById('yr-pic4').src = 'images/aklat.jpg'
    document.getElementById('hide4').style.color = 'gray'
    document.getElementById('rating4').innerHTML = '4.2'
    document.getElementById('spotsz4').innerHTML = 'Historic'
    document.getElementById('ninu4').innerHTML = 'Historical place in Lubao'
 /*day5*/
   document.getElementById('ttle-spts5').innerHTML = 'Birthplace of President Diosdado Macapagal'
   document.getElementById('yr-pic5').src = 'images/pagal.jpg'
   document.getElementById('hide5').style.color = 'gray'
   document.getElementById('rating5').innerHTML = '4.2'
   document.getElementById('spotsz5').innerHTML = 'Historic'
   document.getElementById('ninu5').innerHTML = 'Historical place in Lubao'
 /*day6*/
 document.getElementById('ttle-spts6').innerHTML = 'Bamboo Hub'
 document.getElementById('yr-pic6').src = 'images/boo.jpg'
 document.getElementById('hide6').style.color = 'orange'
 document.getElementById('rating6').innerHTML = '4.5'
 document.getElementById('spotsz6').innerHTML = 'Nature'
 document.getElementById('ninu6').innerHTML =  "Nature's Park in Lubao"
/*day7*/
document.getElementById('ttle-spts7').innerHTML = 'None'
document.getElementById('yr-pic7').src = 'images/usedata.jpg'
document.getElementById('hide7').style.color = 'None'
document.getElementById('rating7').innerHTML = 'None'
document.getElementById('spotsz7').innerHTML =  'None'
document.getElementById('ninu7').innerHTML = 'None'


      }
       /*nature shopping sports*/
      else if (localStorage.getItem('hi141') ==  '4Bamboo Hub' ) {
        document.getElementById('title-spts').innerHTML = 'Bamboo Hub'
        document.getElementById('yr-pic').src = 'images/boo.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.5'
        document.getElementById('spotsz').innerHTML = 'Nature'
        document.getElementById('ninu').innerHTML= 'Nature Park in Lubao' 
      }
       /*history shopping sports*/
      else if (localStorage.getItem('hi141') =='Lubao Town Hall' ) {
        document.getElementById('title-spts').innerHTML =  'Old Lubao Town Hall'
        document.getElementById('yr-pic').src = 'images/Ltwnhll.jpg'
        document.getElementById('hide').style.color = 'orange'
        document.getElementById('rating').innerHTML = '4.1'
        document.getElementById('spotsz').innerHTML = 'Historic'
        document.getElementById('ninu').innerHTML= 'Municipal in Lubao Pampanga' 
      }
       /*nature history shopping sports*/
      else if (localStorage.getItem('hi141') ==  '3Birth place' ){
        document.getElementById('title-spts').innerHTML = 'Birth place of Diosdado P Macapagal'
        document.getElementById('yr-pic').src = 'images/pagal.jpg'
        document.getElementById('hide').style.color = 'gray'
        document.getElementById('rating').innerHTML = '4.1'
        document.getElementById('spotsz').innerHTML = 'History'
        document.getElementById('ninu').innerHTML= 'Historical Place in Lubao.' 
        }
      }
  
     const file = document.querySelector('#file');
     file.addEventListener('change', (e) => {
       // Get the selected file
       const [file] = e.target.files;
       // Get the file name and size
       const { name: fileName, size } = file;
       // Convert size in bytes to kilo bytes
       const fileSize = (size / 1000).toFixed(2);
       // Set the text content
       const fileNameAndSize =`${fileName} - ${fileSize}KB`;
       document.querySelector('.file-name').textContent = fileNameAndSize;
     });
           





    let bgContainer = document.getElementById("background-container")
    
    function change() {
      if (bgContainer.style.display == "none") {
         bgContainer.style.display = "block"
      }
    else {
      bgContainer.style.display = "none"
    }
    }
    
    function bg1() {
      bg.src = "images/bg1.jpg"
    }
    function bg2() {
      bg.src = "images/bg2.jpg"
    }
    function bg3() {
      bg.src = "images/bg3.jpg"
    }
    function bg4() {
      bg.src = "images/bg4.jpg"
    }
    function bg5() {
      bg.src = "images/bg5.jpg"
    }
    function bg6() {
      bg.src = "images/bg6.jpg"
    }
    function bg7() {
      bg.src = "images/bg7.jpg"
    }
    function bg8() {
      bg.src = "images/bg8.jpg"
    }
    function bg9() {
      bg.src = "images/bg9.jpg"
    }

    /*input*/
    let files = document.getElementById("file")
     function PreviewImage() {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("file").files[0]);

        oFReader.onload = function (oFREvent) {
            bg.src = oFREvent.target.result;
        };
    };
let stayEl = document.getElementById("to-stay")
   let today = document.getElementById("to-day")
var myVar;
function where() {
    myVar = setTimeout(showPage, 2000);
    stayEl.style.display ="block"
    document.getElementById("for-route").style.display = "none"
    function showPage() {
   document.getElementById("loader").style.display = "none";
   document.getElementById("the-con").style.display = "block";
    }
    today.style.display = 'none'
}

function route() {
    today.style.display = "none"
    stayEl.style.display ="none"
    document.getElementById("for-route").style.display = "block"
    
}
function day() {
  today.style.display = 'block'
  document.getElementById("loader").style.display = "none";
  document.getElementById("for-route").style.display = "none"
  document.getElementById("to-stay").style.display = "none"

}
   
let myInput = document.getElementById('myinput')
let myTxt = document.getElementById('myText')

function go() {
  document.getElementById('add-remove').style.display = 'none'
  document.getElementById("for-route").style.display = "block"
  document.getElementById('first-ride').innerHTML = localStorage.getItem('mytext1')
  document.getElementById('to').innerHTML = localStorage.getItem('mytext1')
  document.getElementById('from').innerHTML = mapping
  document.getElementById('start-what').innerHTML = localStorage.getItem('mytext1')
  document.getElementById('start-what1').innerHTML = localStorage.getItem('mytext')
  document.getElementById('second-ride').innerHTML = mapping
  document.getElementById('where-depart').innerHTML = localStorage.getItem('mytext1')
  document.getElementById('where-arrive').innerHTML = mapping

  
}



function deleteme() {
  document.getElementById('add-remove').style.display = 'none'
  document.getElementById("for-route").style.display = "block"
}
  
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let ending = document.getElementById('input-your-end')
function editme() {
 ending.style.display = 'block'
}
let myText1 = document.getElementById('myText1')
let myText = document.getElementById('myText')
let start1 = document.getElementById('spt-strt')
let start2 = document.getElementById('spt-end')
let flight = localStorage.getItem('mytext1')
let flight1 = localStorage.getItem('mytext')
localStorage.setItem('mytext1',  myText1.value)
localStorage.setItem('mytext',  myText.value)

function enter1(){
  localStorage.setItem('mytext1',  myText1.value)
  document.getElementById('input-your-start').style.display = 'none'
  start1.innerHTML = localStorage.getItem('mytext1')

}
function enter() {
  localStorage.setItem('mytext',  myText.value)
  start2.innerHTML = localStorage.getItem('mytext')
   ending.style.display = 'none'
 }
function editme1() {
  document.getElementById('input-your-start').style.display = 'block'
}


// dragElement(document.getElementById("mydiv1"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }
// }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }


function bgexit() {
  document.getElementById("background-container").style.display = 'none'
}