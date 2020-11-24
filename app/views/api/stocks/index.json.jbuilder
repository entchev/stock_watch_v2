@stock.each do |ele|
  json.set! ele.id do
    json.extract! ele, :id, :name, :symbol
    begin
      json.image_url asset_path("#{ele.image_url}")
    rescue
      json.image_url ele.image_url
    end
  end
end
