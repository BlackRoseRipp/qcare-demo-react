const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-show");
    } else {
      entry.target.classList.remove("fade-in-show");
    }
  });
});

export default observer;
