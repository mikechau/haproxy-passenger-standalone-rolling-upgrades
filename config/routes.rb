Rails.application.routes.draw do
  root 'static_pages#index'

  get '/fast', to: 'sieges#fast'
  get '/slow', to: 'sieges#slow'
  get '/color', to: 'sieges#color'
end
