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

    def create
      task = Task.new(task_params)
      if task.save 
        render json: task
      else
        render json: task.errors, status: 422
      end
    end

    def update
      task = Task.find(params[:id])
      if task.update(task_params)
        render json: task
      else
        render json: task.errors, status: 422
      end
    end

    

    private

    def task_params
      params[:task].permit(:title, :text)
    end
  end
end