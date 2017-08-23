var now = new Date();
var years = now.getFullYear() - 1989;
if (now.getMonth() == 0 || (now.getMonth() == 1 && now.getDate() < 26)) {
  years--;
}
document.getElementById('age').innerHTML = years + ' years';

const HIGH = 'HIGH';
const MED = 'MED';
const TASTE = 'TASTE';

function makeTech (level, name, info) {
  return {
    level: level,
    name: name,
    info: info,
  };
};
var m = makeTech;

var techs = [
  m(HIGH, 'HTML, CSS, Javascript', 'I have worked with these fundamental technologies since I started coding as a twelve year old.'),
  m(HIGH, 'jQuery, Ajax, XML, JSON, Websockets', 'Integral parts of modern web development.'),
  m(HIGH, 'MySQL, Appache, PHP', 'This was my stack for many years - PHP may be a practically obsolete technology, but is still widely used.'),
  m(HIGH, 'Java, jUnit, Eclipse', 'As a part of my university education I have worked extensively with Java (8).'),
  m(HIGH, 'Node, Express, React, MongoDB, Typescript, Mocha', 'My current stack starts these technologies.'),
  m(MED, 'Angular, Bootstrap, Redux, Immutable', 'These are just some of the large number of Node packages I have used over the past years.'),
  m(MED, 'Coq Proof Assistant', 'Computer proof software used for verifiable software and mathematics.'),
  m(TASTE, 'Unity, C#, Python, Lua, Actionscript, Ruby', '...and various other languages I have probably forgotten.'),
  m(TASTE, 'Canvas, SVG', 'Rendering graphics on the web.')
];

function renderTech (tech) {
  var element = $('<li class="tech">' + tech.name + '</li>');
  var info = $('<div class="extra-info hidden">' + tech.info + '</div>');
  info.mouseleave(function () {
    $(this).addClass('hidden');
  });
  element.append(info);
  element.click(function () {
    $(this).find('.extra-info').removeClass('hidden');
  });
  return element;
}

$(function () {
  $('section').click(function () {
    if ($(this).hasClass('active')) {
      return true;
    }
    else {
      $('section').removeClass('active');
      $(this).addClass('active');
    }
  });

  $('#toggle-course-list-math').click(function (event) {
    $('#course-list-cs').addClass('hidden');
    $('#course-list-math').toggleClass('hidden');
    return false;
  });

  $('#toggle-course-list-cs').click(function (event) {
    $('#course-list-math').addClass('hidden');
    $('#course-list-cs').toggleClass('hidden');
    return false;
  });

  for(var i in techs) {
    var tech = techs[i];
    var target;
    switch(tech.level) {
      case HIGH:
        target = $('#high');
        break;
      case MED:
        target = $('#solid');
        break;
      case TASTE:
        target = $('#taste');
        break;
    }
    target.append(renderTech(tech));
  }
});