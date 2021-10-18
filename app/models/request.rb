class Request < ApplicationRecord
  belongs_to :home
  validates :name, :phone_nbr, :email, :date_request, :message, presence: true
end
