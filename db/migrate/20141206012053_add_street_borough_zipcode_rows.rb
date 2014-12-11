class AddStreetBoroughZipcodeRows < ActiveRecord::Migration
  def change
  	add_column :courts, :street, :string
  	add_column :courts, :borough, :string
  	add_column :courts, :zipcode, :string
 	add_column :courts, :street_number, :string
  end
end
