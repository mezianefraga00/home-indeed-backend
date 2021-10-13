class RequestsController < ApplicationController
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

  def edit
    @request = Request.find(params[:id])
  end

  def update
    @request = Request.find(params[:id])

    if @request.update(article_params)
      redirect_to @request
    else
      render :edit, status: :unprocessable_entity
    end
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
