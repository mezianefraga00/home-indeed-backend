class Home < ApplicationRecord
  belongs_to :owner  
  belongs_to :location
  has_many :requests , dependent: :destroy
  validates   :home_type, :surface, :parking, :heating, :backyard, :laundry,
              :dishawasher, :cooling, :deal_type, :pets_allowed, :nbr_bedroom,
              :nbr_bathroom, :price, :description, presence: true
end
