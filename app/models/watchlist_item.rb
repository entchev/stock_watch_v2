class WatchlistItem < ApplicationRecord
  validates :name, :symbol, presence: true

  belongs_to :user
  belongs_to :stock
end
