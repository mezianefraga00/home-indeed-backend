class HomesController < ApplicationController
    
  def index
    @homes = Home.all
    render json: @homes
  end

  def showRent
  render json: Home.where(deal_type: "Rent")
  end
  def showSell
    render json: Home.where(deal_type: "Buy")
    end

def new
@home = Home.new
end
def create
    home = Home.create!(article_params)
   
    render json: home, status: :created
  end

def edit
@home = Home.find(params[:id])
end

def update
@home = Home.find(params[:id])

if @home.update(article_params)
  redirect_to @home
else
  render :edit, status: :unprocessable_entity
end
end

def destroy
@home = Home.find(params[:id])
@home.destroy

redirect_to root_path
end


def article_params
  params.permit(:home_type, :surface, :parking, :heating, :backyard, :laundry, :dishawasher, :featured_image,
     :cooling, :deal_type, :pets_allowed,  :nbr_bedroom, :nbr_bathroom, :price, :description, :owner_id, :location_id)
end

end
