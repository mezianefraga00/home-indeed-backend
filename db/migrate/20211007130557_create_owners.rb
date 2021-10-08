class CreateOwners < ActiveRecord::Migration[6.1]
  def change
    create_table :owners do |t|
      t.string :name
      t.string :phone_nbr
      t.string :login
      t.string :password_digest
      t.string :email

      t.timestamps
    end
  end
end
