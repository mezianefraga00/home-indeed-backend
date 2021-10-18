class Owner < ApplicationRecord
    has_many :homes
    has_secure_password

    validates :login, presence: true, uniqueness: true
end
