var now = new Date();
var years = now.getFullYear() - 1989;
if (now.getMonth() == 0 || (now.getMonth() == 1 && now.getDate() < 26)) {
  years--;
}
document.getElementById('age').innerHTML = years + ' years';

const HIGH = 'HIGH';
const MED = 'MED';
const TASTE = 'TASTE';

var makeTech = (level, name, info) => {
  return {
    level: level,
    name: name,
    info: info,
  };
};
var m = makeTech;

var high = [
  m(HIGH, 'HTML, CSS, Javascript', 'I have worked with these fundamental technologies since I started coding as a twelve year old.'),
  m(HIGH, 'jQuery, Ajax, XML, JSON, Websockets', 'Integral parts of modern web development.'),
  m(HIGH, 'MySQL, Appache, PHP', 'The server software of my choice for many years has unfortunately not aged all that well, but my experience using this software remains.'),
  m(HIGH, 'Java, jUnit, Eclipse', 'As a part of my university education I have worked extensively with Java (8).'),
  m(HIGH, 'Node, Express, React, MongoDB, Typescript, Mocha', 'My current stack starts these technologies.'),
  m(MED, 'Angular, Bootstrap, Redux, Immutable', 'These are just some of the large number of Node packages I have used over the past years.'),
  m(MED, 'Coq Proof Assistant', 'Computer proof software used for verifiable software and mathematics.'),
  m(TASTE, 'Unity, C#, Python, Lua, Actionscript, Ruby', '...and various other languages I have probably forgotten.')
];