class DropUnecessaryColumns < ActiveRecord::Migration
  def change
  	remove_column :courts, :user_lat, :float
  	remove_column :courts, :user_lon, :float
  	remove_column :courts, :address, :string
  	remove_column :courts, :street, :string
  	remove_column :courts, :borough, :string
  	remove_column :courts, :zipcode, :string
  	remove_column :courts, :street_number, :string
  end
end
