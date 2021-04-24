$(document).ready(() => {
  $("#modal-button").click(() => {
    $(".modal-body").html("");
    $.get("/api/courses", (response) => {
      let courses = response.data.courses;
      //Return and dont do nothing if we have NO courses
      if (!courses) {
        return;
      }
      courses.forEach((course) => {
        $(".modal-body").append(
          `<div class="row px-1 py-2">
                <span class="course-title col-sm-6">
                    Title: ${course.title}
                </span>
                <span class="cost col-sm-3">
                    Cost: $${course.cost}
                </span>
                <button class="${
                  course.joined ? "joined-button" : "join-button"
                } btn btn-info btn-sm" data-id="${course._id}"
                 col-sm-3>
                    ${course.joined ? "Joined" : "Join"}
                </button>
            </div>
            <div class="row px-1 py-2">
                <div class="course-description col-sm-12">
                    Description: ${course.description}
                </div>
            </div>
            `
        );
      });
    }).then(() => {
      addJoinButtonListener();
    });
  });
});

let addJoinButtonListener = () => {
  console.log("JOse 5");
  $(".join-button").click((event) => {
    let $button = $(event.target);
    let courseId = $button.data("id");

    console.log(`/api/courses/${courseId}/join`);
    $.get(`/api/courses/${courseId}/join`, (response = {}) => {
      let data = response.data;
      if (data && data.success) {
        $button
          .text("Joined")
          .addClass("joined-button")
          .removeClass("join-button");
      } else {
        $button.text("Try Again");
      }
    });
  });
};
