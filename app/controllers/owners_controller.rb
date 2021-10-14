class OwnersController < ApplicationController
    skip_before_action :authorize, only: :create,:show
  
    def create
      owner = Owner.create!(user_params)
      session[:owner_id] = owner.id
      render json: owner, status: :created
    end
  
    def show
      render json: @current_user
    end
  
    private
  
    def user_params
      params.permit(:name, :phone_nbr, :login, :password, :password_confirmation, :email)
    end
  
  end