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
	array = response['basketball']['facility'][0..550]

		array.each do |e|
			# address = HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=#{e['lat']},#{e['lon']}&key=AIzaSyA_6_UXTQXBtwjETYMU-v-7BpHgUT-PRKQ")
			hash = {}
			hash[:name] = e['Name']
			hash[:location] = e['Location']
			hash[:num_of_courts] = e['Num_of_Courts']
			hash[:lat] = e['lat'] 		
			hash[:lon] = e['lon']
			# hash[:street_number] = address['results'][0]['address_components'][0]['long_name'] 
			# hash[:street] = address['results'][0]['address_components'][1]['long_name']
			# hash[:zipcode] = address['results'][0]['address_components'][7]['long_name']
			# hash[:borough] = address['results'][0]['address_components'][3]['long_name']

			court = Court.create(hash)
		end 
	
	end

	
	desc "Add street_n_borough"	
	task :add_street_n_borough do
	courts  = Court.all
	address = courts.each {|x| x.address}
	street  = address[0..318].map {|x| x.address}
	split   = street[0..318].map {|x| x.split(',')}

		address.each do |e|
			hash = {}
			hash[:street]  = e['0']
			hash[:borough] = e['1']
			hash[:zipcode] = e['2']

			court = Court.create(hash)
		end
	end
end