class WeatherController < ApplicationController
  DEFAULT_CITY = "Tokyo"

  def index; end

  def forecast
    if params[:city]
      city = params[:city]
    else
      city = DEFAULT_CITY
    end
    weather_data = get_weather_data(city)
    render json: weather_data
  end

  private

  # service classとかに切り出してね
  def get_weather_data(city)
    api_key = ENV['OPEN_WEATHER_API_KEY']
    url = "http://api.openweathermap.org/data/2.5/weather?q=#{city}&appid=#{api_key}&units=metric"
    response = RestClient.get(url)
    JSON.parse(response.body)
  end
end
