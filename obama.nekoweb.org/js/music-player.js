 // AuclairPlayer.js
// by Cereza "CerryTsuki" A.

const songfileslocation = "/assets/audio/";  //location of the .mp3s
const songlistlocation = "/assets/audio/songlist.json" //location of the tracklist

let audio = $("#ap-current")[0];
let duration = audio.duration;
let totalMin = Math.floor(duration / 60);
let totalSec = Math.floor(duration % 60);
let songlist = [];
let currentTrack = 0;
let dragging = false;

function apPlay() {
    audio.play();
    $("#ap-play").removeClass("play"); $("#ap-play").addClass("pause");
}
function apPause() {
    audio.pause();
    $("#ap-play").removeClass("pause"); $("#ap-play").addClass("play");
}
//loads a song
function loadSong(selected) {
    let filedir = songfileslocation + songlist[selected][0];
    $("#ap-source").attr("src", filedir);
    audio.load();
    apPlay();
}

function nextSong() {
    currentTrack++;
    if (currentTrack > (songlist.length - 1)) currentTrack = 0; //if the current track list is at the start, set it to the last song in the list
    loadSong(currentTrack);
    updateTitle(currentTrack);
}

function prevSong() {
    currentTrack--;
    if (currentTrack < 0) currentTrack = (songlist.length - 1); //if the current track list is at the start, set it to the last song in the list
    loadSong(currentTrack);
    updateTitle(currentTrack);
}

function updateTitle(selected) {
    //$("#ap-current-title").text("Currently Playing : " + songlist[selected][1][0] + " - " + songlist[selected][1][1]);
    $("#ap-current-title").text(songlist[selected][1][0] + " - " + songlist[selected][1][1]);

    $("#ap-time-max:contains(NaN)").text("0:00"); //chrome fucking sucks and displays NaN:NaN by default
}

function updateVolume() {
    audio.volume = $("#ap-vol").slider("value");
}

function updateTime() {

    let currentTime = audio.currentTime;
    let duration = audio.duration;
    let width = parseInt($("#ap-bar").width());

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    let totalMin = Math.floor(duration / 60);
    let totalSec = Math.floor(duration % 60);

    $("#ap-time-current").text(`${currentMin}:${currentSec < 10 ? '0' : ''}${currentSec}`);
    $("#ap-time-max").text(`${totalMin}:${totalSec < 10 ? '0' : ''}${totalSec}`);
    $("#ap-time-max:contains(NaN)").text("0:00"); //chromium and co. sucks and displays NaN:NaN by default when you initiate the player, this is a sloppy workaround but 
    $("#ap-bar-full").css("width", (currentTime / duration) * width);
    if (!dragging) $("#ap-scroller").css("left", (currentTime / duration) * width);
}

$(document).ready(function () {

    // - INIT PROCESS -
    //get that file
    $.getJSON(songlistlocation, function (data) {
        $.each(data, function (i, e) {
            songlist.push([i, e]);

        });
        updateTitle(0);
        updateTime();
    });

    //next button
    $("#ap-fwd").on("mouseup", function () {
        nextSong();
    });
    //prev button
    $("#ap-bwd").on("mouseup", function () {
        prevSong()
    });

    // play button
    $("#ap-play").on("mouseup", function () {
        if (audio.paused) apPlay();
        else apPause();
    });

    //stop button
    $("#ap-stop").on("mouseup", function () {
        if (!audio.paused) {
            apPause();
            audio.currentTime = 0;
        }
    });

    //vol slider
    $("#ap-vol").slider({
        orientation: "horizontal",
        range: "min",
        max: 1.0,
        step: 0.1,
        value: 0.8,
        min: 0.0,
        slide: updateVolume,
        change: updateVolume
    });

    $("#ap-current").on("timeupdate", function () {
        updateTime()
    });
    $("#ap-current").on("ended", function () {
        nextSong();
    })
});

//makes the scroller draggable draggable
$(function () {
    $("#ap-scroller").draggable({
        containment: "#ap-bar", handle: "#ap-scrollerdrag", scroll: false, axis: "x", start: function () { dragging = true }, stop: function () {
            let currentscrollerpos = parseInt($("#ap-scroller").css("left"));
            $("#ap-current")[0].currentTime = parseFloat((currentscrollerpos / ($("#ap-bar").width() - $("#ap-scroller").width())) * $("#ap-current")[0].duration);
            dragging = false;
            // apPlay(); // automatically plays audio once the handle is dragged
        }
    });
});