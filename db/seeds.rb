owner1 = Owner.create(name: "Daniel", phone_nbr: "432 3217832", login:"dani", password_digest: "abcd", email: "dani@gmail.com" )
owner2 = Owner.create(name: "Grover", phone_nbr: "432 3217832", login:"gro", password_digest: "abcd", email: "gro@gmail.com" )
owner3 = Owner.create(name: "Nancy", phone_nbr: "132 3217832", login:"nan", password_digest: "abcd", email: "nan@gmail.com" )
owner4 = Owner.create(name: "Asiyah", phone_nbr: "322 3217832", login:"asi", password_digest: "abcd", email: "asi@gmail.com" )
owner5 = Owner.create(name: "Dane", phone_nbr: "132 3217832", login:"dan", password_digest: "abcd", email: "dan@gmail.com" )
owner6 = Owner.create(name: "Madeleine", phone_nbr: "932 3217832", login:"mad", password_digest: "abcd", email: "mad@gmail.com" )
owner7 = Owner.create(name: "Shyla", phone_nbr: "672 3217832", login:"shy", password_digest: "abcd", email: "shy@gmail.com" )
owner8 = Owner.create(name: "Persephone", phone_nbr: "432 3217832", login:"per", password_digest: "abcd", email: "per@gmail.com" )
owner9 = Owner.create(name: "Katrina", phone_nbr: "232 3217832", login:"kat", password_digest: "abcd", email: "kat@gmail.com" )

location1 = Location.create(adress:"718, Prospect, Street,Altoona, PA, 16601")
location2 = Location.create(adress:"805 Manchester Ave.Upper Darby, PA, 19082")
location3 = Location.create(adress:"8818 Edgewood St.Ave.Upper Darby, PA, 19082")
   
location4 = Location.create(adress:"9861 Garden Street Lakewood, NJ 08701")
location5 = Location.create(adress:"7804 Wall Street Sacramento, CA 95820")
location6 = Location.create(adress:"5 Sherman Rd.Lilburn, GA 30047")
   
location7 = Location.create(adress:"8574 Smoky Hollow Drive")
    
location8 = Location.create(adress:"Philadelphia, Pennsylvania, United States")
location9 = Location.create(adress:"45 North St.Newnan, GA 30263")



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
      