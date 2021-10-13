Rails.application.routes.draw do
  resources :requests
  resources :homes, only: [:index, :new, :create, :edit, :update, :destroy]
  get "/myhomes/:owner_id", to: "homes#showhome"

  get "/showRent", to: "homes#showRent"
  get "/showSell", to: "homes#showSell"



  resources :owners, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  get "/mhomes/:owner_id", to: "owners#showhome"



  resources :locations, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  
  get "/search/:adress", to: "locations#findlocation"


  





  resources :requests, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  get "/requesclient/:owner_id", to: "requests#requesclient"

end