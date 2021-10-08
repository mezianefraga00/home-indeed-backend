class LocationSerializer < ActiveModel::Serializer
  attributes :id, :street, :city, :state, :zipcode, :app_nbr
end
