class OwnersController < ApplicationController
    
    def index
        @owners = Owner.all
        render json: @owners
        end
    
      def show
    @owners = Owner.find(params[:id])
      render json: @owners
      end
    
      def new
        @owner = Owner.new
      end
    
      def create
        owner = Owner.new(article_params)
    
        if owner.save
            render json: owner, status: :created
        else
          render :new, status: :unprocessable_entity
        end
      end
    
      def edit
        @owner = Owner.find(params[:id])
      end
    
      def update
        @owner = Owner.find(params[:id])
    
        if @owner.update(article_params)
          redirect_to @owner
        else
          render :edit, status: :unprocessable_entity
        end
      end
    
      def destroy
        @owner = Owner.find(params[:id])
        @owner.destroy
    
        redirect_to root_path
      end
    
      
        def article_params
          params.require(:owner).permit(:name, :phone_nbr, :login, :password_digest, :email)
        end
end
