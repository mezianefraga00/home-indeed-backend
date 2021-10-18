class OwnersController < ApplicationController
  skip_before_action :authorize, only: :create

  def create
    user = Owner.create!(user_params)
    session[:owner_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  private

  def user_params
    params.permit(:name, :login, :password, :password_confirmation, :phone_nbr, :email)
  end
end
