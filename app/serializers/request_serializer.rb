class RequestSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone_nbr, :email, :date_request, :message
  has_one :home
end
