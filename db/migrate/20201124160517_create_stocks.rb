class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :name, null: false
      t.string :symbol, null: false
      t.string :stock_desc, null: false
      t.string :image_url, null: false 

      t.timestamps
    end
  end
end
