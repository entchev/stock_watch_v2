class Api::WatchlistItemsController < ApplicationController
  before_action :require_logged_in

  def index
    sleep 0.5
    @items = current_user.watchlist_items.all
  end

  def show
    sleep 0.5
  end

  def new
    @watchlist_item = WatchlistItem.new
    render :new
  end

  def create
    @watchlist_item = WatchlistItem.create!(item_params)
    render :show
  end


  def destroy
    @watchlist_item = WatchlistItem.find(params[:id])
    @watchlist_item.destroy
  end
  private

  def item_params
    params.require(:watchlist_item).permit(:stock_id, :user_id, :name, :symbol)
  end

end
