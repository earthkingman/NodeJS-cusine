$(document).ready(() => {
    // Listen for a click event on the modal button
    $("#modal-button").click(() => {
        // Clear the modal from any previous content
        $(".modal-body").html('');
        // Request data from '/api/courses' on asynchronously
        let apiToken =  $("#apiToken").data("token");
        console.log(apiToken);
        $.get(`/api/courses?apiToken=${apiToken}`, (results = {}) => {
            console.log("Courses Data:");
            console.log(results);
            let data = results.data;
            if (!data || !data.courses) {
                return;
            }

            data.courses.forEach((course) => {
                $(".modal-body").append(
                    `<div>
                        <span class="course-title">
                            ${course.title}
                        </span>
                        <button class='${course.joined ? "joined-button" : "join-button"}' data-id="${course._id}">
                            ${course.joined ? "Joined" : "Join"}
                        </button>
                        <div class="course-description">
                            ${course.description}
                        </div>
                    </div>`
                );
            });
        }).then(() => {
            addJoinButtonListener();
        });
    });
});

let addJoinButtonListener = () => {
    $(".join-button").click((event) => {
        let $button = $(event.target);
        let courseId = $button.data("id");
        let apiToken =  $("#apiToken").data("token");
        $.get(`/api/courses/${courseId}/join?apiToken=${apiToken}`, (results = {}) => {
            console.log("Join Courses Data:");
            console.log(results);
            let data = results.data;
            if (data && data.success) {
                $button.text("Joined")
                    .addClass("joined-button")
                    .removeClass("join-button");
            } else {
                $button.text("Try again");
            }
        });
    });
};