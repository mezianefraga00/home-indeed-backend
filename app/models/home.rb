class Home < ApplicationRecord
  belongs_to :owner , optional: true
  belongs_to :location, optional: true
  has_one_attached :featured_image, optional: true

end
