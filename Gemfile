source 'https://rubygems.org'

gem 'bundler', '>= 1.7.0'

# APPLICATION
gem 'rails', '~> 4.2.0'

# ASSETS
gem 'bootstrap-sass', '~> 3.2.0.2'
gem 'coffee-rails', '~> 4.1.0'
gem 'font-awesome-rails'
gem 'jquery-rails'
gem 'nprogress-rails'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

source 'https://rails-assets.org' do
  gem 'rails-assets-bootswatch'
end

# CONFIG
gem 'figaro'

# DATABASE ADAPTERS
gem 'mysql2'

# RACK CORS
gem 'rack-cors'

# UTILITIES
gem 'foreman', require: false
gem 'gorgeous', require: false

# VIEWS
gem 'jbuilder', '~> 2.0'

# WORKERS
gem 'sucker_punch'

group :production, :vagrant_production do
  # SERVER
  gem 'passenger'
end

group :test, :vagrant_test do
  # TESTING
  gem 'database_cleaner'
end

group :test, :development, :vagrant_test, :vagrant_development do
  # DEBUGGING
  gem 'did_you_mean'
  gem 'jazz_hands', github: 'nixme/jazz_hands', branch: 'bring-your-own-debugger'
  gem 'pry-byebug'

  # TESTING
  gem 'factory_girl_rails'
  gem 'rspec-rails', '~> 3.0'

  # SERVER
  gem 'thin'

  # UTILITIES
  gem 'railroady'
end

group :development, :vagrant_development do
  # APPLICATION PRELOADER
  gem 'spring', github: 'guard/spring',  branch: 'listen2'
  gem 'spring-commands-rspec'

  # DEVELOPMENT
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'quiet_assets'
  gem 'rack-livereload'

  # CONTINUOUS TESTING
  gem 'guard', require: false
  gem 'guard-livereload', require: false
  gem 'guard-rspec', require: false
  gem 'guard-rubocop', require: false

  # STYLE GUIDE REVIEW
  gem 'rubocop', require: false
  gem 'rubocop-rspec', require: false

  # UTILITIES
  gem 'annotate'
  gem 'bullet'
  gem 'lol_dba', require: false
  gem 'gem_bench', require: false
end

group :doc do
  gem 'sdoc', '~> 0.4.0'
end
