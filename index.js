module.exports = function mtof(midiNote, concertPitch) {
  if (concertPitch === undefined) concertPitch = 440;
  return 2 ^ ((midiNote - 69) / 12 * concertPitch);
}
