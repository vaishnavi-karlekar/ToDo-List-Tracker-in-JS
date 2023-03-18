$(function(){
    var items;
    $("#todo-task, #progress-task").sortable({
        connectWith: ".bucket"
    }).disableSelection();

    $( "#todo-task, #progress-task" ).droppable({
        drop: function( event, ui ) {
            items = [ui.draggable];
         console.log("item dropped", ui.draggable.attr('data-name'));
         
         
        }
      });
    
});
