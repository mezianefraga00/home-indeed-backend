class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone_nbr, :login, :password_digest, :email
end
