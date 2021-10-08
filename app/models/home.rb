class Home < ApplicationRecord
  belongs_to :owner , optional: true
  belongs_to :location, optional: true
end
