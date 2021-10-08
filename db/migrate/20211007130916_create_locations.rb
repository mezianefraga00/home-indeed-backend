class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :street
      t.string :city
      t.string :state
      t.integer :zipcode
      t.integer :app_nbr

      t.timestamps
    end
  end
end
