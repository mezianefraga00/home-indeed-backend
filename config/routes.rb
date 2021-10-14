Rails.application.routes.draw do
  resources :requests
  resources :homes, only: [:index, :new, :create, :edit, :update, :destroy]
  get "/myhomes/:owner_id", to: "homes#showhome"

  get "/showRent", to: "homes#showRent"
  get "/showSell", to: "homes#showSell"
  


  get "/mhomes/:owner_id", to: "owners#showhome"
  post "/signup", to: "owners#create"
  get "/me", to: "owners#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"



  resources :locations, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  
  get "/search/:adress", to: "locations#findlocation"


  





  resources :requests, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  get "/requesclient/:owner_id", to: "requests#requesclient"

end