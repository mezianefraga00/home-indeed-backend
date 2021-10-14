class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone_nbr, :login, :email
end
