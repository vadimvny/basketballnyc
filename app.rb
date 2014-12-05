require 'bundler'
Bundler.require

require './models/court'

ActiveRecord::Base.establish_connection({
  adapter: 'postgresql',
  database: 'basketball_api'
})

get '/' do 
	@courts = Court.all
	erb :index	
end

get '/api/courts' do
	content_type :json
	court = Court.all
	court.to_json
end