 // 1. Parca isimleri büyük harflere cevrilecektir.

 const autoSparePartsList = ["Radyatör23", "Sanziman34", "Filtre3", "Direksiyon5", "Kaporta2", "ayna09"]

 const uppercased = autoSparePartsList.map(name => name.toUpperCase());

 console.log(uppercased);


 // 2. Parca isimlerinden sayilar cikartilacaktir.
 const autoSparePartsList = ["23Radyatör", "34Sanziman", "03Filtre", "05Direksiyon", "02Kaporta", "09ayna"]

 const noNumber = autoSparePartsList.map(name => name.substring(2));
 console.log(noNumber)



 // 3. Parca isimleri tersine cevrilecektir.

 const autoSparePartsList = ["Radyatör23", "Sanziman34", "Filtre3", "Direksiyon5", "Kaporta2", "ayna09"]

 const reversed = autoSparePartsList.reverse();
 console.log('reversed:', reversed);

 // 4. Her parcanin basina KEREMAG_ eklenecektir.


 let autoSparePartsList = ["Radyatör23", "Sanziman34", "Filtre3", "Direksiyon5", "Kaporta2", "ayna09"]

 autoSparePartsList = autoSparePartsList.map(i => 'KEREMAG_' + i);

 console.log(autoSparePartsList);

 // 5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)


 let autoSparePartsList = ["Radyatör23", "Sanziman34", "Filtre3", "Direksiyon5", "Kaporta2", "ayna09"]

 var dates = new Array();
 var currentDate = new Date();
 for (var i = 0; i < autoSparePartsList.length; i++) {
     currentDate.setDate(currentDate.getDate());
     dates.push(currentDate + autoSparePartsList);
 }
 console.log(dates);