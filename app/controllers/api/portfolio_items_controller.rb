class Api::PortfolioItemsController < ApplicationController
  before_action :require_logged_in

  def index
    sleep 0.5
    @items = current_user.portfolio_items.all
  end

  def show
    sleep 0.5
  end

  def new
    @portfolio_item = PortfolioItem.new
    render :new
  end

  def create
    @portfolio_item = PortfolioItem.create!(item_params)
    render :show
  end


  def destroy
    @portfolio_item = PortfolioItem.find(params[:id])
    @portfolio_item.destroy
  end

  private

  def item_params
    params.require(:portfolio_item).permit(:stock_id, :user_id, :name, :symbol, :purchase_price, :amount_owned)
  end

end
