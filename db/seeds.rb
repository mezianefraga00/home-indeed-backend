owner1 = Owner.create(name: "Daniel", phone_nbr: "432 3217832", login:"dani", password_digest: "abcd", email: "dani@gmail.com" )
owner2 = Owner.create(name: "Grover", phone_nbr: "432 3217832", login:"gro", password_digest: "abcd", email: "gro@gmail.com" )
owner3 = Owner.create(name: "Nancy", phone_nbr: "132 3217832", login:"nan", password_digest: "abcd", email: "nan@gmail.com" )
owner4 = Owner.create(name: "Asiyah", phone_nbr: "322 3217832", login:"asi", password_digest: "abcd", email: "asi@gmail.com" )
owner5 = Owner.create(name: "Dane", phone_nbr: "132 3217832", login:"dan", password_digest: "abcd", email: "dan@gmail.com" )
owner6 = Owner.create(name: "Madeleine", phone_nbr: "932 3217832", login:"mad", password_digest: "abcd", email: "mad@gmail.com" )
owner7 = Owner.create(name: "Shyla", phone_nbr: "672 3217832", login:"shy", password_digest: "abcd", email: "shy@gmail.com" )
owner8 = Owner.create(name: "Persephone", phone_nbr: "432 3217832", login:"per", password_digest: "abcd", email: "per@gmail.com" )
owner9 = Owner.create(name: "Katrina", phone_nbr: "232 3217832", login:"kat", password_digest: "abcd", email: "kat@gmail.com" )

location1 = Location.create(street: "Weldon", city: "Staten Island", state: "NY", zipcode: "10432", app_nbr: "3")
location2 = Location.create(street: "Preston", city: "Brooklyn", state: "NY", zipcode: "10456", app_nbr: "89")
location3 = Location.create(street: "Seymour", city: "Batavia", state: "NY", zipcode: "10754", app_nbr: "12")
location4 = Location.create(street: "Dey", city: "Buffalo", state: "NY", zipcode: "10294", app_nbr: "93")
location5 = Location.create(street: "Prospect", city: "Canandaigua", state: "NY", zipcode: "10543", app_nbr: "113")
location6 = Location.create(street: "Pelham", city: "Corning", state: "NY", zipcode: "10355", app_nbr: "56")
location7 = Location.create(street: "Ovignton", city: "Cortland", state: "NY", zipcode: "10654", app_nbr: "32")
location8 = Location.create(street: "Woodling", city: "Dunkirk", state: "NY", zipcode: "10345", app_nbr: "23")
location9 = Location.create(street: "Brida", city: "Elmira", state: "NY", zipcode: "10674", app_nbr: "56")



home1 = Home.create(home_type: "TownHome",surface: "1200",parking: "Yes",
    heating: "Yes",backyard: "yes",laundry: "Yes",dishawasher: "yes",
    cooling: "Yes",deal_type:
    "Rent",nbr_bedroom: 4,nbr_bathroom: 1,pets_allowed: "No",img_url: "image1",
    description:"Beautiful location", price: 2300,  owner_id: 1, location_id: 1)

home2 = Home.create(home_type: "TownHome",surface: "1200",parking: "Yes",
     heating: "Yes",backyard: "no",laundry: "Yes",dishawasher: "yes",
     cooling: "Yes",deal_type:
    "Rent",nbr_bedroom: 4,nbr_bathroom: 1,pets_allowed: "No",img_url: "image2",
    description:"Beautiful location",  price: 2300,   owner_id: 2, location_id: 2)

home3 = Home.create(home_type: "TownHome",surface: "1200",parking: "Yes",
    heating: "Yes",backyard: "yes",laundry: "Yes",dishawasher: "yes",
    cooling: "Yes",deal_type:
    "Buy",nbr_bedroom: 4,nbr_bathroom: 1,pets_allowed: "No",img_url: "image3",
    description:"Beautiful location", price: 420000,  owner_id: 3, location_id: 3)

home4 = Home.create(home_type: "TownHome", surface: "1200",parking: "Yes",
    heating: "Yes",backyard: "yes",laundry: "Yes",dishawasher: "yes",
    cooling: "Yes",deal_type:
    "Rent",nbr_bedroom: 1,nbr_bathroom: 1,pets_allowed: "No",img_url: "image4",
    description:"Beautiful location", price: 2300,   owner_id: 4, location_id: 4)

home5 = Home.create(home_type: "TownHome",surface: "1200",parking: "Yes",
    heating: "Yes",backyard: "yes",laundry: "Yes",dishawasher: "yes",
    cooling: "Yes",deal_type:
    "Rent",nbr_bedroom: 4,nbr_bathroom: 1,pets_allowed: "No",img_url: "image5",
    description:"Beautiful location",  price: 2300,   owner_id: 5, location_id: 5)

home6 = Home.create(home_type: "TownHome",surface: "1200",parking: "Yes",
    heating: "Yes",backyard: "yes",laundry: "Yes",dishawasher: "yes",
    cooling: "Yes",deal_type:
    "Buy",nbr_bedroom: "2",nbr_bathroom: 1,pets_allowed: "No",img_url: "image6",
    description:"Beautiful location", price: 530500,  owner_id: 6, location_id: 6)

home7 = Home.create(home_type: "TownHome",surface: "1200",parking: "Yes",
    heating: "Yes",backyard: "yes",laundry: "Yes",dishawasher: "yes",
    cooling: "Yes",deal_type:
    "Rent",nbr_bedroom: 4,nbr_bathroom: 1,pets_allowed: "No",img_url: "image7",
    description:"Beautiful location", price: 2300,   owner_id: 7, location_id: 7)

home8 = Home.create(home_type: "TownHome",surface: "1200",parking: "Yes",
    heating: "Yes",backyard: "yes",laundry: "Yes",dishawasher: "yes",
    cooling: "Yes",deal_type:
    "Rent",nbr_bedroom: 4,nbr_bathroom: 1,pets_allowed: "No",img_url: "image8",
    description:"Beautiful location", price: 2300,   owner_id: 8, location_id: 8)

home9 = Home.create(home_type: "TownHome",surface: "1200",parking: "Yes",
    heating: "Yes",backyard: "yes",laundry: "Yes",dishawasher: "yes",
    cooling: "Yes",deal_type:
    "Rent",nbr_bedroom: 4,nbr_bathroom: 1,pets_allowed: "No",img_url: "image9",
    description:"Beautiful location", price: 2300,   owner_id: 1, location_id: 9)



    request1 = Request.create(name: "Gareth",phone_nbr: "2134325654",email:"Gare@gmail.com", date_request: "10/1/2021", message: "Can I have more info", home_id: 1)
    request2 = Request.create(name: "Kaycee",phone_nbr: "2134325654",email:"Kayc@gmail.com", date_request: "10/1/2021", message: "Can I have more info", home_id: 2)
    request3 = Request.create(name: "Eamonn",phone_nbr: "2134325654",email:"Eamo@gmail.com", date_request: "10/1/2021", message: "Can I have more info", home_id: 3)
    request4 = Request.create(name: "Maksim",phone_nbr: "2134325654",email:"Maks@gmail.com", date_request: "10/1/2021", message: "Can I have more info", home_id: 4)
    request5 = Request.create(name: "Sinead",phone_nbr: "2134325654",email:"Sine@gmail.com", date_request: "10/1/2021", message: "Can I have more info", home_id: 5)
    request6 = Request.create(name: "Shabaz",phone_nbr: "2134325654",email:"Shab@gmail.com", date_request: "10/1/2021", message: "Can I have more info", home_id: 6)
    request7 = Request.create(name: "Reggie",phone_nbr: "2134325654",email:"Regg@gmail.com", date_request: "10/1/2021", message: "Can I have more info", home_id: 7)
    request8 = Request.create(name: "Amal",phone_nbr: "2134325654"  ,email:"Amal@gmail.com", date_request: "10/1/2021", message: "Can I have more info", home_id: 8)
    request9 = Request.create(name: "Aiyla",phone_nbr: "2134325654" ,email:"Aiyl@gmail.com", date_request: "10/1/2021", message: "Can I have more info", home_id: 1)
      