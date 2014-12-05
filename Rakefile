require 'bundler'
Bundler.require 

require 'sinatra/activerecord/rake'
require './models/court'

ActiveRecord::Base.establish_connection({
  adapter: 'postgresql',
  database: 'basketball_api'
})
 namespace :db do
	
	desc "Create basketball_api database"
	task :create_db do
		conn = PG::Connection.open()
		conn.exec('CREATE DATABASE basketball_api')
		conn.close
	end
	desc "Drop basketball_api database"
	task :drop_db do
		conn = PG::Connection.open()
		conn.exec('DROP DATABASE basketball_api')
		conn.close	
	end
	
	desc "Add Basketball API"
	task :add_basketball_api do
	response = HTTParty.get('http://www.nycgovparks.org/bigapps/DPR_Basketball_001.xml')
	array = response['basketball']['facility'][0..360]

		array.each do |e|
			hash = {}
			hash[:name] = e['Name']
			hash[:location] = e['Location']
			hash[:num_of_courts] = e['Num_of_Courts']
			hash[:lat] = e['lat']
			hash[:lon] = e['lon']
	
			court = Court.create(hash)
		end
	end
end