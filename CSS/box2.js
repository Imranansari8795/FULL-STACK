document.addEventListener("DOMContentLoaded", function() {
  const enlargeImage = document.getElementById("enlargeImage");

  enlargeImage.addEventListener("mouseenter", function() {
    enlargeImage.style.transform = "scale(1.5)"; // Enlarge by 20%
  });

  enlargeImage.addEventListener("mouseleave", function() {
    enlargeImage.style.transform = "scale(1)"; // Revert to original size
  });
});