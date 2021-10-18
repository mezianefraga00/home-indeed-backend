class Home < ApplicationRecord
<<<<<<< HEAD
  belongs_to :owner , optional: true
  belongs_to :location, optional: true
  has_one_attached :featured_image, optional: true

=======
  belongs_to :owner  
  belongs_to :location
  has_many :requests , dependent: :destroy
  validates   :home_type, :surface, :parking, :heating, :backyard, :laundry,
              :dishawasher, :cooling, :deal_type, :pets_allowed, :nbr_bedroom,
              :nbr_bathroom, :price, :description, presence: true
>>>>>>> 984a89dc2c9b08caad1e6b1072e6a4dc73ad5051
end
