class RequestsController < ApplicationController
  skip_before_action :authorize

      def index
        @requests = Request.all
        render json: @requests
      end

      def requesclient
        render json: Request.joins(:home).where(homes: { id: Home.find(params[:owner_id]) })
      
      end


      def new
        @request = Request.new
      end

      def create
        @request = Request.create!(article_params)
   
        render json: @request, status: :created
      end


      def destroy
        @request = Request.find(params[:id])
        @request.destroy

        redirect_to root_path
      end

  
    def article_params
      params.permit(:name, :phone_nbr, :email, :date_request, :message, :home_id)
    end
end
