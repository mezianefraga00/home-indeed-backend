class HomeSerializer < ActiveModel::Serializer
  attributes :id, :home_type, :featured_image, :surface, :parking, :heating, :backyard, :laundry, :dishawasher, :cooling, :deal_type, :pets_allowed, :nbr_bedroom, :nbr_bathroom, :price, :description
  has_one :owner
  has_one :location
  include Rails.application.routes.url_helpers
  def featured_image
    if object.featured_image.attached?
      {
        url: rails_blob_url(object.featured_image)
      }
    end
  end
end

