class Home < ApplicationRecord
  belongs_to :owner  
  belongs_to :location
  has_many :requests , dependent: :destroy
end
