require 'sinatra'
require 'slim'
require './superlatives'

get '/' do
  @superlatives = Superlative.all
  slim :home, format: :html5
end
