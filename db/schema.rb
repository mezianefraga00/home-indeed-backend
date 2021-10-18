# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_09_025543) do

<<<<<<< HEAD
  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.integer "record_id", null: false
    t.integer "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.integer "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
=======
  create_table "homes", force: :cascade do |t|
    t.string "home_type"
    t.string "surface"
    t.string "parking"
    t.string "heating"
    t.string "backyard"
    t.string "laundry"
    t.string "dishawasher"
    t.string "cooling"
    t.string "deal_type"
    t.string "pets_allowed"
    t.string "img_url"
    t.integer "nbr_bedroom"
    t.integer "nbr_bathroom"
    t.integer "price"
    t.string "description"
    t.integer "owner_id"
    t.integer "location_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_homes_on_location_id"
    t.index ["owner_id"], name: "index_homes_on_owner_id"
>>>>>>> 984a89dc2c9b08caad1e6b1072e6a4dc73ad5051
  end

  create_table "locations", force: :cascade do |t|
    t.string "adress"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "names", force: :cascade do |t|
    t.string "phone_nbr"
    t.string "email"
    t.string "date_request"
    t.text "message"
    t.integer "home_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["home_id"], name: "index_names_on_home_id"
  end

  create_table "owners", force: :cascade do |t|
    t.string "name"
    t.string "phone_nbr"
    t.string "login"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "requests", force: :cascade do |t|
    t.string "name"
    t.string "phone_nbr"
    t.string "email"
    t.string "date_request"
    t.text "message"
    t.integer "home_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["home_id"], name: "index_requests_on_home_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "names", "homes"
  add_foreign_key "requests", "homes"
end
