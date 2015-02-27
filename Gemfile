source 'https://rubygems.org'

# APPLICATION
gem 'rails', '~> 4.2.0'

# ASSETS
gem 'bootstrap-sass'
gem 'coffee-rails', '~> 4.1.0'
gem 'font-awesome-rails'
gem 'jquery-rails'
gem 'nprogress-rails'
gem 'rails_script', '~> 0.6.1'
gem 'sass-rails', '~> 5.0'
gem 'turbolinks'
gem 'uglifier', '>= 1.3.0'

# AUTHENTICATION
# gem 'devise'
# gem 'devise_ldap_authenticatable', :git => 'git://github.com/cschiewek/devise_ldap_authenticatable.git'

# AUTHORIZATION
gem 'pundit'
# gem 'rolify'

# BREADCRUMBS
gem 'breadcrumbs_on_rails'

# CONFIG
gem 'figaro'

# DATABASE ADAPTERS
gem 'mysql2'
gem 'redis'

# FORMS
gem 'simple_form'

# PAGINATION
gem 'kaminari'
gem 'bootstrap-kaminari-views'

# RACK CORS
gem 'rack-cors'

# STATE MANAGEMENT
gem 'aasm'

# SESSION STORES
gem 'redis-session-store'

# UTILITIES
gem 'foreman', require: false
gem 'gorgeous', require: false

# VIEWS
gem 'jbuilder', '~> 2.0'

# WORKERS
gem 'delayed_job_active_record'
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
