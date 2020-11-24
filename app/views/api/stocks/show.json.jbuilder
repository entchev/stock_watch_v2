json.stock do
  json.extract! @stock, :id, :name, :stock_desc, :symbol
  begin
    json.image_url asset_path("#{@stock.image_url}")
  rescue
    json.image_url @stock.image_url
  end
end
