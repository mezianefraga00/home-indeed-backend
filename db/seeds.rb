
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
    "Rent",nbr_bedroom: 4,nbr_bathroom: 1,pets_allowed: "No",
    description:"Beautiful location", price: 2300,  owner_id: 1, location_id: 1)

home2 = Home.create(home_type: "TownHome",surface: "1200",parking: "Yes",
     heating: "Yes",backyard: "no",laundry: "Yes",dishawasher: "yes",
     cooling: "Yes",deal_type:
    "Rent",nbr_bedroom: 4,nbr_bathroom: 1,pets_allowed: "No",
    description:"Beautiful location",  price: 2300,   owner_id: 2, location_id: 2)

home3 = Home.create(home_type: "TownHome",surface: "1200",parking: "Yes",
    heating: "Yes",backyard: "yes",laundry: "Yes",dishawasher: "yes",
    cooling: "Yes",deal_type:
    "Buy",nbr_bedroom: 4,nbr_bathroom: 1,pets_allowed: "No",
    description:"Beautiful location", price: 420000,  owner_id: 3, location_id: 3)

home4 = Home.create(home_type: "TownHome", surface: "1200",parking: "Yes",
    heating: "Yes",backyard: "yes",laundry: "Yes",dishawasher: "yes",
    cooling: "Yes",deal_type:
    "Rent",nbr_bedroom: 1,nbr_bathroom: 1,pets_allowed: "No",
    description:"Beautiful location", price: 2300,   owner_id: 4, location_id: 4)

home5 = Home.create(home_type: "TownHome",surface: "1200",parking: "Yes",
    heating: "Yes",backyard: "yes",laundry: "Yes",dishawasher: "yes",
    cooling: "Yes",deal_type:
    "Rent",nbr_bedroom: 4,nbr_bathroom: 1,pets_allowed: "No",
    description:"Beautiful location",  price: 2300,   owner_id: 5, location_id: 5)

home6 = Home.create(home_type: "TownHome",surface: "1200",parking: "Yes",
    heating: "Yes",backyard: "yes",laundry: "Yes",dishawasher: "yes",
    cooling: "Yes",deal_type:
    "Buy",nbr_bedroom: "2",nbr_bathroom: 1,pets_allowed: "No",
    description:"Beautiful location", price: 530500,  owner_id: 6, location_id: 6)

home7 = Home.create(home_type: "TownHome",surface: "1200",parking: "Yes",
    heating: "Yes",backyard: "yes",laundry: "Yes",dishawasher: "yes",
    cooling: "Yes",deal_type:
    "Rent",nbr_bedroom: 4,nbr_bathroom: 1,pets_allowed: "No",
    description:"Beautiful location", price: 2300,   owner_id: 7, location_id: 7)

home8 = Home.create(home_type: "TownHome",surface: "1200",parking: "Yes",
    heating: "Yes",backyard: "yes",laundry: "Yes",dishawasher: "yes",
    cooling: "Yes",deal_type:
    "Rent",nbr_bedroom: 4,nbr_bathroom: 1,pets_allowed: "No",
    description:"Beautiful location", price: 2300,   owner_id: 8, location_id: 8)

home9 = Home.create(home_type: "TownHome",surface: "1200",parking: "Yes",
    heating: "Yes",backyard: "yes",laundry: "Yes",dishawasher: "yes",
    cooling: "Yes",deal_type:
    "Rent",nbr_bedroom: 4,nbr_bathroom: 1,pets_allowed: "No",
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
      