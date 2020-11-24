class CreatePortfolioItems < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolio_items do |t|
      t.integer :stock_id, null: false
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :symbol, null: false
      t.decimal :purchase_price, precision: 10, scale: 2, null: false
      t.decimal :amount_owned, precision: 10, scale: 2, null: false

      t.timestamps
    end

    add_index :portfolio_items, :stock_id
    add_index :portfolio_items, :user_id
  end
end
