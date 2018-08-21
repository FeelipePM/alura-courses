function createSprite(selector) {
  var $elemento = $(selector);

  var frames = [
    'frame1', 'frame2', 'frame3', 'frame4', 'frame5', 
    'frame6', 'frame7', 'frame8', 'frame9', 
  ];

  var current = 0;

  var last = frames.length -1;

  $elemento.addClass(frames[current]);

  function moveFrame(from, to) {
    $elemento.removeClass(from)
             .addClass(to);
  }

  function nextFrame() {
    moveFrame(frames[current], frames[++current]);
  }
    return {
      nextFrame: nextFrame
    };
}