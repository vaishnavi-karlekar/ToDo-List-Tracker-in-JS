
var todos = [
    {
        name: "learning time",
        description: "learn a new things"
    },
    {
        name: "cook a new dish",
        description: "explore the new food items"
    },

]
console.log(todos);

var inProgress = [
    {
        name: "revision time",
        description: "learn a new things"
    },
    {
        name: " plan a travel",
        description: "explore the new places"
    }
]
console.log(inProgress);

var complete = [
    {
        name: "movie time",
        description: "new movie for me time"
    },
    {
        name: "grocery list",
        description: "list for a grocery items"
    },

]
console.log(complete);

$.each(todos, function (index, value) {
    $(".todo").append("<li data-name=" + value.name + ">" + value.name + "</li>");

})

$.each(inProgress, function (index, value) {
    $(".inProgress").append("<li data-name=" + value.name + ">" + value.name + "</li>");
    // $("li").attr("id", "progress-list");
})
// $(function(){
//     $("#progress-list").draggable();
// })

$.each(complete, function (index, value) {
    $(".complete").append("<li data-name=" + value.name + ">" + value.name + "</li>");

})

$("li").each(function () {
    var span = $("<span>").addClass("close").text("\u00D7");
    $(this).append(span);
});

$(".close").click(function () {
    $(this).parent().remove();
});



// $(function(){
//     $("li").draggable();
//     $(".inProgress").droppable({
//         accept: "li",
//         drop: function(){
//             console.log("item dropped");
//         }
//     });


// });