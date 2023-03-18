
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('task dialog box')
  modal.find('.modal-body input').val()
})

// add a data into todo array 

$("#sbmt").click(function (event) {

  var databack = $("#exampleModal #task-title").val().trim();
  console.log(databack)
  var desc = $("#exampleModal #task-desc").val().trim();
  console.log(desc);
  todos.push({
    name: databack,
    description: desc
  })
  $("#todo-task").append("<li data-name=" + databack + ">" + databack + "</li>");

  $("#task-title").val("");
  $("#task-desc").val("");
});

