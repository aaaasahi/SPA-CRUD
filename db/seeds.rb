10.times do |n|
  Task.create!(
    title: "タイトル#{n + 1}",
    text: "テキスト#{n + 1}"
  )
end