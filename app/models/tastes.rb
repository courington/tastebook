class Tastes < ActiveRecord::Base
	attr_accessible :taste_photo, :user_avatar, :user_name

	validates :taste_photo,		:presence => true
	validates :user_avatar, 	:presence => true
	validates :user_name, 		:presence => true,
								:length => { :minimum => 5 }
end
