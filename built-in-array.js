var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

/*TUGAS1*/
 function dataHandling2(){
 	input.splice(1, 1, "Roman Alamsyah Elsharawy")
 	input.splice(2, 1, "Provinsi Bandar Lampung")
 	input.splice(4, 1, "Pria", "SMA Internasional Metro")
 	console.log(input)
 }


/*TUGAS2*/
var ttl = input[3].split('/', 3)
var bulan = ttl[1];

	switch(bulan) {
		case "01": { console.log("Januari"); break; }
		case "02": { console.log("Februari"); break; }
  		case "03": { console.log("Maret"); break; }
  		case "04": { console.log("April"); break; }
  		case "05": { console.log("Mei"); break; }
  		case "06": { console.log("Juni"); break; }  
  		case "07": { console.log("Juli"); break; }
  		case "08": { console.log("Agustus"); break; }
  		case "09": { console.log("September"); break; }
  		case "10": { console.log("Oktober"); break; }
  		case "11": { console.log("November"); break; }
  		case "12": { console.log("Desember"); break; }
  		default : { console.log("")}
	}

 

/*TUGAS3*/
var tahun = input[3].split('/', 3)
tahun.sort(function(a, b){return b-a})
console.log(tahun)

/*TUGAS4*/
var tanggal = input[3].split('/', 3).join('-')
console.log(tanggal)

/*TUGAS5*/
var nama= input[1].slice(0,14)
console.log(nama)