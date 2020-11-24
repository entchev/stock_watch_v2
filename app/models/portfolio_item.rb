class PortfolioItem < ApplicationRecord
  validates :name, :symbol, :purchase_price, :amount_owned, presence: true

  belongs_to :user
  belongs_to :stock
end
