Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :stocks, only: [:show, :index]
    resources :portfolio_items, only: [:create, :destroy, :index]
    resources :watchlist_items, only: [:create, :destroy, :index]
  end

  root "static_pages#root"
end
