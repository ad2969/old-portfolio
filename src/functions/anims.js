export function circleClick(event) {
  event.currentTarget.classList.remove('circleclick--click');
  void event.currentTarget.offsetWidth;
  event.currentTarget.classList.add('circleclick--click');
}
