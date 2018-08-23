const createSprite = (selector) => {

const  hasNext = () => current + 1 <= last;

const moveFrame = (from, to) => {
  $elemento.removeClass(from)
            .addClass(to);
};

const nextFrame = () => {
  if (hasNext()) {
    moveFrame (frames[current], frames[++current]);
  };
}; 

const reset = () => {
  moveFrame(frames[current], frames[0]);
  current = 0;
};

const isFinished = () => !hasNext();

const $elemento = $(selector);

const frames = [
  'frame1', 'frame2', 'frame3', 'frame4', 'frame5', 
  'frame6', 'frame7', 'frame8', 'frame9', 
];

let current = 0;

const last = frames.length -1;

$elemento.addClass(frames[current]);

  return { nextFrame,
           reset,
           isFinished };
};
