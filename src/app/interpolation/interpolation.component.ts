import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  name="Swaroop";
  age=20;
  product={
    name:'pen',
    price:20,
  }
  phones=[9676,900];
  users=[
    {
      name:"Swaroop",
      age:23,
    },
    {
      name:"Shashank",
      age:23,
    },
    {
      name:"Naveen",
      age:23,
    } 
  ]
  employees=
    [
      {
        "id": 1001,
        "imageUrl": "https://hub.dummyapis.com/Image?text=CL&height=120&width=120",
        "firstName": "Christina",
        "lastName": "Lueilwitz",
        "email": "Christina.Lueilwitz@dummyapis.com",
        "contactNumber": "4429692211",
        "age": 88,
        "dob": "19/12/1934",
        "salary": 1.0,
        "address": "Address1"
      },
      {
        "id": 1002,
        "imageUrl": "https://hub.dummyapis.com/Image?text=LB&height=120&width=120",
        "firstName": "Leanna",
        "lastName": "Blick",
        "email": "Leanna.Blick@dummyapis.com",
        "contactNumber": "4452692249",
        "age": 29,
        "dob": "16/03/1993",
        "salary": 2.0,
        "address": "Address2"
      },
      {
        "id": 1003,
        "imageUrl": "https://hub.dummyapis.com/Image?text=JS&height=120&width=120",
        "firstName": "Josie",
        "lastName": "Shanahan",
        "email": "Josie.Shanahan@dummyapis.com",
        "contactNumber": "4062696451",
        "age": 47,
        "dob": "10/08/1975",
        "salary": 3.0,
        "address": "Address3"
      },
      {
        "id": 1004,
        "imageUrl": "https://hub.dummyapis.com/Image?text=TP&height=120&width=120",
        "firstName": "Tina",
        "lastName": "Pouros",
        "email": "Tina.Pouros@dummyapis.com",
        "contactNumber": "4448791898",
        "age": 44,
        "dob": "28/02/1978",
        "salary": 4.0,
        "address": "Address4"
      },
      {
        "id": 1005,
        "imageUrl": "https://hub.dummyapis.com/Image?text=JC&height=120&width=120",
        "firstName": "Jolie",
        "lastName": "Corkery",
        "email": "Jolie.Corkery@dummyapis.com",
        "contactNumber": "4035697958",
        "age": 23,
        "dob": "17/05/1999",
        "salary": 5.0,
        "address": "Address5"
      },
      {
        "id": 1006,
        "imageUrl": "https://hub.dummyapis.com/Image?text=AN&height=120&width=120",
        "firstName": "Amelia",
        "lastName": "Nitzsche",
        "email": "Amelia.Nitzsche@dummyapis.com",
        "contactNumber": "4623799104",
        "age": 59,
        "dob": "01/12/1963",
        "salary": 6.0,
        "address": "Address6"
      },
      {
        "id": 1007,
        "imageUrl": "https://hub.dummyapis.com/Image?text=DB&height=120&width=120",
        "firstName": "Darrel",
        "lastName": "Bahringer",
        "email": "Darrel.Bahringer@dummyapis.com",
        "contactNumber": "4136790875",
        "age": 73,
        "dob": "21/08/1949",
        "salary": 7.0,
        "address": "Address7"
      },
      {
        "id": 1008,
        "imageUrl": "https://hub.dummyapis.com/Image?text=NJ&height=120&width=120",
        "firstName": "Nola",
        "lastName": "Jacobi",
        "email": "Nola.Jacobi@dummyapis.com",
        "contactNumber": "4838397033",
        "age": 78,
        "dob": "24/07/1944",
        "salary": 8.0,
        "address": "Address8"
      },
      {
        "id": 1009,
        "imageUrl": "https://hub.dummyapis.com/Image?text=CM&height=120&width=120",
        "firstName": "Camron",
        "lastName": "McCullough",
        "email": "Camron.McCullough@dummyapis.com",
        "contactNumber": "4949193450",
        "age": 69,
        "dob": "23/06/1953",
        "salary": 9.0,
        "address": "Address9"
      },
      {
        "id": 1010,
        "imageUrl": "https://hub.dummyapis.com/Image?text=LR&height=120&width=120",
        "firstName": "Loretta",
        "lastName": "Raynor",
        "email": "Loretta.Raynor@dummyapis.com",
        "contactNumber": "4910792744",
        "age": 26,
        "dob": "23/01/1996",
        "salary": 10.0,
        "address": "Address10"
      }
    ]
    Vehicles=
    [{"Vehicle":"Mini Corvette","manufacturer":"Ferrari","model":"Roadster","type":"Coupe","fuel":"Electric","color":"silver","id":"49"},{"Vehicle":"Jeep Roadster","manufacturer":"Polestar","model":"Spyder","type":"Minivan","fuel":"Electric","color":"violet","id":"50"},{"Vehicle":"Chevrolet Model 3","manufacturer":"Mercedes Benz","model":"F-150","type":"Extended Cab Pickup","fuel":"Gasoline","color":"grey","id":"51"},{"Vehicle":"Mini CX-9","manufacturer":"Bentley","model":"Mercielago","type":"Sedan","fuel":"Hybrid","color":"white","id":"52"},{"Vehicle":"Rolls Royce Expedition","manufacturer":"Audi","model":"Model T","type":"Extended Cab Pickup","fuel":"Gasoline","color":"cyan","id":"53"},{"Vehicle":"Polestar Element","manufacturer":"Jaguar","model":"Land Cruiser","type":"Extended Cab Pickup","fuel":"Hybrid","color":"lime","id":"55"},{"Vehicle":"Land Rover Cruze","manufacturer":"Chevrolet","model":"Grand Cherokee","type":"Extended Cab Pickup","fuel":"Hybrid","color":"olive","id":"56"},{"Vehicle":"Jaguar Wrangler","manufacturer":"Bugatti","model":"Taurus","type":"Convertible","fuel":"Electric","color":"silver","id":"57"},{"Vehicle":"Maserati Explorer","manufacturer":"Bugatti","model":"A4","type":"Hatchback","fuel":"Electric","color":"turquoise","id":"58"},{"Vehicle":"Kia CX-9","manufacturer":"Ford","model":"Focus","type":"Hatchback","fuel":"Hybrid","color":"red","id":"59"},{"Vehicle":"Volvo 1","manufacturer":"Cadillac","model":"Sentra","type":"Crew Cab Pickup","fuel":"Gasoline","color":"lavender","id":"60"},{"Vehicle":"Jeep LeBaron","manufacturer":"Toyota","model":"911","type":"Extended Cab Pickup","fuel":"Electric","color":"gold","id":"61"},{"Vehicle":"BMW Expedition","manufacturer":"Dodge","model":"Fiesta","type":"Extended Cab Pickup","fuel":"Gasoline","color":"tan","id":"62"},{"Vehicle":"Dodge A4","manufacturer":"Mercedes Benz","model":"2","type":"Crew Cab Pickup","fuel":"Diesel","color":"mint green","id":"63"},{"Vehicle":"Tesla Civic","manufacturer":"Jaguar","model":"Escalade","type":"Passenger Van","fuel":"Hybrid","color":"grey","id":"64"},{"Vehicle":"Mini Mustang","manufacturer":"Mini","model":"XTS","type":"Passenger Van","fuel":"Diesel","color":"grey","id":"65"},{"Vehicle":"Rolls Royce Wrangler","manufacturer":"BMW","model":"Model S","type":"Crew Cab Pickup","fuel":"Diesel","color":"lavender","id":"66"},{"Vehicle":"BMW Prius","manufacturer":"Porsche","model":"Malibu","type":"Passenger Van","fuel":"Diesel","color":"orchid","id":"67"},{"Vehicle":"Volkswagen 1","manufacturer":"Fiat","model":"Fiesta","type":"Coupe","fuel":"Electric","color":"azure","id":"68"},{"Vehicle":"Jeep Mustang","manufacturer":"Ford","model":"Civic","type":"Wagon","fuel":"Gasoline","color":"maroon","id":"69"},{"Vehicle":"Bugatti PT Cruiser","manufacturer":"Honda","model":"Golf","type":"Coupe","fuel":"Hybrid","color":"lavender","id":"70"},{"Vehicle":"Chevrolet 2","manufacturer":"Jeep","model":"Model 3","type":"Cargo Van","fuel":"Hybrid","color":"fuchsia","id":"71"},{"Vehicle":"Porsche A4","manufacturer":"Cadillac","model":"Focus","type":"Coupe","fuel":"Gasoline","color":"maroon","id":"72"},{"Vehicle":"Dodge Golf","manufacturer":"Mazda","model":"Malibu","type":"Sedan","fuel":"Gasoline","color":"ivory","id":"73"},{"Vehicle":"Jaguar Mercielago","manufacturer":"Tesla","model":"Fiesta","type":"Cargo Van","fuel":"Diesel","color":"lavender","id":"74"},{"Vehicle":"Jaguar Volt","manufacturer":"Dodge","model":"Accord","type":"Minivan","fuel":"Gasoline","color":"grey","id":"75"},{"Vehicle":"Ford Wrangler","manufacturer":"Chevrolet","model":"Aventador","type":"Convertible","fuel":"Hybrid","color":"cyan","id":"76"},{"Vehicle":"Ford Altima","manufacturer":"Aston Martin","model":"Camaro","type":"Passenger Van","fuel":"Electric","color":"lime","id":"77"},{"Vehicle":"Nissan Countach","manufacturer":"Volkswagen","model":"Silverado","type":"Convertible","fuel":"Diesel","color":"gold","id":"78"},{"Vehicle":"Tesla Civic","manufacturer":"Mercedes Benz","model":"F-150","type":"Cargo Van","fuel":"Electric","color":"magenta","id":"79"},{"Vehicle":"Bugatti CX-9","manufacturer":"Ford","model":"Colorado","type":"Convertible","fuel":"Gasoline","color":"red","id":"80"},{"Vehicle":"Jeep Model 3","manufacturer":"Smart","model":"Silverado","type":"Extended Cab Pickup","fuel":"Electric","color":"maroon","id":"81"},{"Vehicle":"Bentley Land Cruiser","manufacturer":"s","model":"d","type":"f","fuel":"v","color":"v","id":"82","vechicle":"a"},{"Vehicle":"dgfs","manufacturer":"jsj","model":"j","type":-1,"fuel":"hhj","color":null,"id":"83"},{"Vehicle":"honda","manufacturer":"honda","model":"234e2","type":null,"fuel":"ghs","color":"red","id":"84"},{"Vehicle":"Audi Durango","manufacturer":"b","model":"c","type":"d","fuel":"e","color":"green","id":"85","vechicle":"a"},{"Vehicle":"Mini Ranchero","manufacturer":"bdf","model":"gbb","type":"rty","fuel":"bkk","color":"black","id":"86","vechicle":"avfdg"},{"Vehicle":"Dodge Volt","manufacturer":"hng","model":"hg","type":"dfd","fuel":"fgfg","color":"gbv","id":"87","vechicle":"gbt"},{"Vehicle":"Smart Sentra","manufacturer":"dsfs","model":"gbcv","type":"sawq","fuel":"fdfdf","color":"cvdfv","id":"88","Vechicle":"fsf"},{"Vehicle":"Maserati LeBaron","manufacturer":"dszc","model":" cxc","type":"saa","fuel":"jkkhj","color":"zxcsd","id":"89","Vechicle":"sd"},{"Vehicle":"kiran","manufacturer":"kiran adavelli","model":"2xs2w","type":null,"fuel":"petrol","color":"green","id":"90"},{"Vehicle":"r","manufacturer":"Maserati","model":"g","type":null,"fuel":"g","color":"#149f69","id":"91","manufacture":null},{"Vehicle":"r","manufacturer":"Smart","model":"g","type":null,"fuel":"g","color":"#149f69","id":"92","manufacture":null},{"Vehicle":"Toyota Grand Caravan","manufacturer":"fvv","model":"fdvd","type":"fcvf","fuel":"sds","color":"dfs","id":"93","Vechicle":null},{"Vehicle":"ajkbk","manufacturer":"nlkhkl","model":"nkjlkn.","type":null,"fuel":"nlkhlk","color":"nlkn;l","id":"94"},{"Vehicle":null,"manufacturer":"manisha","model":"manisha","type":"manisha","fuel":"manisha","color":"manisha","id":"95"},{"Vehicle":"mansian","manufacturer":"asdadn","model":"JDJS","type":"DKSF","fuel":"MDJS","color":"SMDFMF","id":"96"},{"Vehicle":"car","manufacturer":"Volkswagen","model":"cw","type":null,"fuel":"saa","color":"#c74343","id":"97","manufacture":null},{"Vehicle":"van","manufacturer":"Volvo","model":"wg","type":"gg","fuel":"saa","color":"green","id":"98","manufacture":null},{"Vehicle":"van","manufacturer":"Bentley","model":"wg","type":"gg","fuel":"saa","color":"green","id":"99","manufacture":null},{"Vehicle":"ki","manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"id":"100"},{"Vehicle":"Audi Explorer","manufacturer":"Dodge","model":"911","type":"Cargo Van","fuel":"Electric","color":"mint green","id":"101"},{"Vehicle":"Jeep PT Cruiser","manufacturer":"Honda","model":"Silverado","type":"Convertible","fuel":"Electric","color":"cyan","id":"102"},{"Vehicle":"pulsar","manufacturer":"bajaj","model":"220","type":null,"fuel":"petrol","color":"black","id":"103"},{"Vehicle":"pulsar","manufacturer":"bajaj","model":"230","type":null,"fuel":"petrol","color":"red","id":"104"},{"Vehicle":null,"manufacturer":"Kia","model":null,"type":null,"fuel":null,"color":null,"id":"105","manufacture":null},{"Vehicle":"car","manufacturer":"Dodge","model":"cw","type":"tw","fuel":"ut","color":"red","id":"107","manufacture":null},{"Vehicle":null,"manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"id":"108"},{"Vehicle":"Lamborghini Focus","manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"id":"109","vehicle":null},{"Vehicle":"Porsche Model 3","manufacturer":"Chevrolet","model":"Golf","type":"Hatchback","fuel":"Electric","color":"orange","id":"110","name":"anusha","phone":["456789","12345"],"city":["hyderabad","hyderabad"]},{"Vehicle":"Nissan Grand Cherokee","manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"id":"111","vehicle":null},{"Vehicle":"Jeep Roadster","manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"id":"112","vehicle":null},{"Vehicle":"Rolls Royce Jetta","manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"id":"113","vehicle":null},{"Vehicle":"Tesla Jetta","manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"id":"114","vehicle":null},{"Vehicle":"Nissan LeBaron","manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"id":"115","vehicle":null},{"Vehicle":"Mini Sentra","manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"id":"116","vehicle":null},{"Vehicle":"Chevrolet LeBaron","manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"id":"117","vehicle":null},{"Vehicle":null,"manufacturer":"Rolls Royce","model":null,"type":null,"fuel":null,"color":null,"id":"118","manufacture":null},{"Vehicle":"Aston Martin Golf","manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"id":"119","vehicle":null},{"Vehicle":"Jaguar Camry","manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"id":"120","vehicle":null},{"Vehicle":"Ford Land Cruiser","manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"id":"122","vehicle":null},{"Vehicle":null,"manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"id":"123"},{"Vehicle":"gothami","manufacturer":"gouthami","model":"a12","type":"def","fuel":"petrol","color":"blue","id":"124"},{"Vehicle":"Toyota El Camino","manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"id":"125","vehicle":null},{"Vehicle":"Tesla Wrangler","manufacturer":null,"model":null,"type":null,"fuel":null,"color":null,"id":"126","vehicle":null},{"Vehicle":"pulsar","manufacturer":"bajaj","model":"2020","type":"bike","fuel":"petrol","color":"black","id":"127"},{"Vehicle":"abc","manufacturer":"gouthami","model":"a12","type":"def","fuel":"petrol","color":"red","id":"128"},{"Vehicle":"Smart Golf","manufacturer":null,"model":null,"type":null,"fuel":null,"color":"lime","id":"130","vehicle":null,"ID":null},{"Vehicle":"Bentley 1","manufacturer":null,"model":null,"type":null,"fuel":null,"color":"violet","id":"131","vehicle":null,"ID":null},{"Vehicle":"sss","manufacturer":"aaa","model":"cccc","type":"eeee","fuel":"ddd","color":"www","id":"132"},{"Vehicle":"gothami","manufacturer":"aaa","model":"cccc","type":"def","fuel":"petrol","color":"red","id":"133"},{"Vehicle":"Tesla Jetta","manufacturer":"Dodge","model":"Cruze","type":"Coupe","fuel":"Hybrid","color":"purple","id":"134"},{"Vehicle":"Mazda Fortwo","manufacturer":"Dodge","model":"Cruze","type":"Coupe","fuel":"Hybrid","color":"plum","id":"135","vehicle":null},{"Vehicle":"Toyota ATS","manufacturer":"Cadillac","model":"Charger","type":"SUV","fuel":"Petrol","color":"salmon","id":"136"},{"Vehicle":"Nissan 911","manufacturer":"Volkswagen","model":"2","type":"Wagon","fuel":"Gasoline","color":"maroon","id":"138"},{"Vehicle":"Toyota ATS","manufacturer":"Volkswagen","model":"Charger","type":"SUV","fuel":"Diesel","color":"salmon","id":"139","manufacture":null},{"Vehicle":"Cadillac Jetta","manufacturer":"Bugatti","model":"Grand Caravan","type":"SUV","fuel":"Hybrid","color":"blue","id":"140"},{"Vehicle":"Manisha","manufacturer":"Cadillac","model":"Charger","type":"SUV","fuel":"Diesel","color":"salmon","id":"141"},{"Vehicle":"Honda CTS","manufacturer":"Bentley","model":"Altima","type":"Convertible","fuel":"Electric","color":"violet","id":"142"},{"Vehicle":"BMW Escalade","manufacturer":"Jeep","model":"Cruze","type":"Extended Cab Pickup","fuel":"Electric","color":"yellow","id":"143"},{"Vehicle":"BMW Escalade","manufacturer":"Jeep","model":"Cruze","type":"Extended Cab Pickup","fuel":"Electric","color":"yellow","id":"144"},{"Vehicle":"BMW Escalade","manufacturer":"Jeep","model":"Cruze","type":"Extended Cab Pickup","fuel":"Electric","color":"yellow","id":"145"},{"Vehicle":null,"manufacturer":"a","model":"a","type":"a","fuel":"a","color":"a","id":"146"},{"Vehicle":"a","manufacturer":"b","model":"h","type":"b","fuel":"g","color":"h","id":"147"},{"Vehicle":"car","manufacturer":"d","model":"c","type":"SUV","fuel":"Diesel","color":"green","id":"148"},{"Vehicle":"BMW Mercielago","manufacturer":"Fiat","model":"Corvette","type":"Sedan","fuel":"disel","color":"lime","id":"149"},{"Vehicle":"Mercedes Benz Fortwo","manufacturer":null,"model":null,"type":null,"fuel":null,"color":"green","id":"150","vehicle":null,"ID":null}]
    contactNumber=9000772346;

  constructor() { }

  ngOnInit(): void {
  }

}
