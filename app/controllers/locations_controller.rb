class LocationsController < ApplicationController
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
    
      def create
        location = Location.new(article_params)
    
        if location.save
            render json: location, status: :created
        else
          render :new, status: :unprocessable_entity
        end
      end
    
      def edit
        @location = Location.find(params[:id])
      end
    
      def update
        @location = Location.find(params[:id])
    
        if @location.update(article_params)
          redirect_to @location
        else
          render :edit, status: :unprocessable_entity
        end
      end
    
      def destroy
        @location = Location.find(params[:id])
        @location.destroy
    
        redirect_to root_path
      end
    
      
        def article_params
          params.require(:location).permit(:street, :city, :state, :zipcode, :app_nbr)
        end
end
