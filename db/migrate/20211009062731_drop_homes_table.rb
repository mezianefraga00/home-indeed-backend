class DropHomesTable < ActiveRecord::Migration[6.1]
  def up
    drop_table :Home
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
