class Api::StocksController < ApplicationController
  def index
    sleep 0.5
    @stock = Stock.all
  end

  def show
    sleep 0.5
    @stock = Stock.find(params[:id])
  end

  private

  def stock_params
    params.require(:stock).permit(:name, :symbol, :stock_desc, :image_url)
  end
end
