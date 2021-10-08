class CreateHomes < ActiveRecord::Migration[6.1]
  def change
    create_table :homes do |t|
      t.string :home_type               
      t.string :surface
      t.string :parking
      t.string :heating
      t.string :backyard
      t.string :laundry
      t.string :dishawasher
      t.string :cooling
      t.string :deal_type
      t.string :pets_allowed
      t.string :img_url
      t.integer :nbr_bedroom
      t.integer :nbr_bathroom
      t.integer :price
      t.string :description    

      t.references :owner, null: true, foreign_key: true
      t.references :location, null: true, foreign_key: true

      t.timestamps
    end
  end
end
