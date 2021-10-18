class Location < ApplicationRecord
    has_one :home
    validates :adress, presence: true, uniqueness: true
end
