module Api
  class TasksController < ApplicationController
    def index
      tasks = Tasks.all
      render json: tasks
    end

    def show
      task = Task.find(params[:id])
      render json: task
    end

  end
end