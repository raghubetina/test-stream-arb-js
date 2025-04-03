class CreateTasks < ActiveRecord::Migration[8.0]
  def change
    create_table :tasks do |t|
      t.string :content
      t.boolean :done

      t.timestamps
    end
  end
end
