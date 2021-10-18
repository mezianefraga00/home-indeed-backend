class LocationsController < ApplicationController
  skip_before_action :authorize, except: :create

       def index
        @locations = Location.all
        render json: @locations
        end
    
      def show
      @locations = Location.find(params[:id])
      render json: @locations
      end
    
      def new
        @location = Location.new
      end
    

      def findlocation 
        search= Home.joins(:location).where("adress LIKE '%#{params[:adress].downcase}%'" )
        render json: search
      end

      def create
        location = Location.create!(article_params)
       
        render json: location, status: :created
      end
    
      def edit
        @location = Location.find(params[:id])
      end
    
      def update
        @location = @current_user.locations.find(params[:id])
    
        if @location.update(article_params)
          redirect_to @location
        else
          render :edit, status: :unprocessable_entity
        end
      end
    
      def destroy
        @location = @current_user.locations.find(params[:id])
        @location.destroy
    
        redirect_to root_path
      end
    
      
        def article_params
<<<<<<< HEAD
          params.permit(:street, :city, :state, :zipcode, :app_nbr)
=======
          params.permit(:adress)
>>>>>>> 984a89dc2c9b08caad1e6b1072e6a4dc73ad5051
        end
end
