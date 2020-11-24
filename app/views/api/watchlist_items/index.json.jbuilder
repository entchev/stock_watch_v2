@items.each do |item|
  json.set! item.id do
    json.extract! item, :id, :stock_id, :user_id, :name, :symbol
  end
end