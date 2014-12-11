class Court < ActiveRecord::Base

	def split_address	
		courts  = Court.all
		address = courts.each {|x| x.address}
		address = address[0..100].map {|x| x.split(',')}
		
	end
end