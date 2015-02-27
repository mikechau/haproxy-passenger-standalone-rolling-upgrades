# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

Rails.application.config.assets.precompile += %w( main.js nprogress-xhr.js )

# Reject assets.
Rails.configuration.assets.paths.reject! do |path|
  ['rails-assets-bootstrap', 'rails-assets-jquery'].any? do |asset|
    path.include? asset
  end
end

FRONTEND = Rails.configuration.x.react.frontend
