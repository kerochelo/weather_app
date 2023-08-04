Rails.application.routes.draw do
  root 'weather#index'
  get '/forecast', to: 'weather#forecast'
end
