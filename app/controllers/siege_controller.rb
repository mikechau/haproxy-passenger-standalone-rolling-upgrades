class SiegesController < ApplicationController
  def fast
    pause(rand(0..5))

    render json: { status: 'OK', time: Time.current }
  end

  def slow
    pause(rand(10..30))

    render json: { status: 'OK', time: Time.current }
  end

  def color
    render json: { status: 'OK', color: COLOR, time: Time.current }
  end

  private
    def pause(timer)
      sleep(rand * timer)
    end
end
