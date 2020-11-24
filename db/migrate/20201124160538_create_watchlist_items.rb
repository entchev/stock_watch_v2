class CreateWatchlistItems < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlist_items do |t|
      t.integer :stock_id, null: false
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :symbol, null: false

      t.timestamps
    end
  end
end
