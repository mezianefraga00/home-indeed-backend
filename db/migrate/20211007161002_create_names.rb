class CreateNames < ActiveRecord::Migration[6.1]
  def change
    create_table :names do |t|
      t.string :phone_nbr
      t.string :email
      t.string :date_request
      t.text :message
      t.references :home, null: false, foreign_key: true

      t.timestamps
    end
  end
end
