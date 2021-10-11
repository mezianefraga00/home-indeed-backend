class HomeSerializer < ActiveModel::Serializer
  attributes :id, :home_type, :surface, :parking, :heating, :backyard, :laundry, :dishawasher, :cooling, :deal_type, :pets_allowed, :img_url, :nbr_bedroom, :nbr_bathroom, :price, :description
  has_one :owner
  has_one :location 
end

