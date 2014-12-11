class CreateCourtsTable < ActiveRecord::Migration
  def change
  	create_table :courts do |t|
  		t.string :name
  		t.string :location
  		t.integer :num_of_courts
  		t.float :lat
  		t.float :lon
  		t.float :user_lat
  		t.float :user_lon
  		t.string :address
  	end
  end
end
