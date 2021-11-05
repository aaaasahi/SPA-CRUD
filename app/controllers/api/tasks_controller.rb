module Api
  class TasksController < ApplicationController
    def index
      todos = Tasks.all
      render json: todos
    end

  end
end