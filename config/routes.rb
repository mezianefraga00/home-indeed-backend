Rails.application.routes.draw do
  resources :requests
  resources :homes, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  get "/showRent", to: "homes#showRent"
  get "/showSell", to: "homes#showSell"



  resources :owners, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  resources :locations, only: [:index, :show, :new, :create, :edit, :update, :destroy]



  resources :requests, only: [:index, :show, :new, :create, :edit, :update, :destroy]

  get "/requesclient/:owner_id", to: "requests#requesclient"

end