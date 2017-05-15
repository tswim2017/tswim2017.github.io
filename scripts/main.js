$(document).ready(function(){
  $.ajaxSetup ({
      // Disable caching of AJAX responses
      cache: false
  });
  $("ul a").click(function() {
    //$(this).parent().children("ul a").removeClass("active");
    $("ul a").removeClass("active");
    $(this).addClass("active");
  });

  /** General Information **/
  $("#menu-index").on("click", function (e) {
    document.title = "Home"
    $("#detail").load("contents/index_content.html");
  });

  $("#menu-conference-committee").on("click", function (e) {
    document.title = "Conference Committee"
    $("#detail").load("contents/conference_committee_content.html");
  });

  $("#menu-keynote-speakers").on("click", function (e) {
    document.title = "Keynote Speakers"
    $("#detail").load("contents/keynote_speakers_content.html");
  });

  $("#menu-workshop-language").on("click", function (e) {
    document.title = "Workshop Language"
    $("#detail").load("contents/workshop_language_content.html");
  });

  $("#menu-journal-publication-opportunity").on("click", function (e) {
    document.title = "Journal Publication Opportunity"
    $("#detail").load("contents/journal_publication_opportunity_content.html");
  });

  $("#menu-hosts-sponsors").on("click", function (e) {
    document.title = "Hosts & Sponsors"
    $("#detail").load( "contents/hosts_sponsors_content.html" );
  });

  /** Paper Submission **/
  $("#menu-important-dates").on("click", function (e) {
    document.title = "Important Dates"
    $("#detail").load("contents/important_dates_content.html");
  });

  $("#menu-initial-submission-guidelines").on("click", function (e) {
    document.title = "Initial Submission Guidelines"
    $("#detail").load("contents/initial_submission_guidelines_content.html");
  });

  $("#menu-final-submission-guidelines").on("click", function (e) {
    document.title = "Final Submission Guidelines"
    $("#detail").load("contents/final_submission_guidelines_content.html");
  });

  /** Registration and Program **/
  $("#menu-registration").on("click", function (e) {
    document.title = "Registration"
    $("#detail").load("contents/registration_content.html");
  });

  $("#menu-program").on("click", function (e) {
    document.title = "Program"
    $("#detail").load("contents/program_content.html");
  });

  $("#menu-guidelines-for-presenters").on("click", function (e) {
    document.title = "Guidelines for Presenters"
    $("#detail").load("contents/guidelines_for_presenters_content.html");
  });

  $("#menu-guidelines-for-session-chairs").on("click", function (e) {
    document.title = "Guidelines for Session Chairs"
    $("#detail").load("contents/guidelines_for_session_chairs_content.html");
  });

  /** Travel Information **/
  $("#menu-hotel-accommodation").on("click", function (e) {
    document.title = "Hotel Accommodation"
    $("#detail").load("contents/hotel_accommodation_content.html");
  });

  $("#menu-transportation").on("click", function (e) {
    document.title = "Hotel Accommodation"
    $("#detail").load("contents/transportation_content.html");
  });

  if($(location).attr("hash")) {
    var hash = $(location).attr("hash");
    if (hash == "#nogo"){
      $("#menu-index").click();
    } else {
      $(hash).click();
    }
  } else {
    $("#menu-index").click();
  }

});
