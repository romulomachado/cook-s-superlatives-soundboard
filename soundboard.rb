require 'sinatra'
require 'slim'
require './event'

get '/' do
  @events = Event.all
  slim :home, format: :html5
end
