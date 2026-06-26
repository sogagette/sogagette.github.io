document.querySelectorAll('.pastGamesArticle').forEach(article => {
  const container = article.querySelector('.mediaContainer');
  const prevButton = article.querySelector('.mediaLeftButton');
  const nextButton = article.querySelector('.mediaRightButton');

  if (!container || !prevButton || !nextButton) return;

  const media = JSON.parse(article.dataset.media);
  let currentIndex = 0;

function getDriveEmbedUrl(url) {
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://drive.google.com/file/d/${match[1]}/preview`;
  return url; // fallback: return as-is if it doesn't match
}

function updateMedia() {
  if (currentIndex < 0) currentIndex = media.length - 1;
  else if (currentIndex > media.length - 1) currentIndex = 0;

  container.innerHTML = '';
  const src = media[currentIndex].path;
  const isDriveLink = src.includes('drive.google.com');
  const isVideo = src.match(/\.(mp4|webm|ogg)$/i);

  if (isDriveLink) {
    const iframe = document.createElement('iframe');
    iframe.src = getDriveEmbedUrl(src);
    iframe.classList.add('media');
    iframe.allowFullscreen = true;
    iframe.allow = 'autoplay';
    // No frameborder (use CSS instead)
    iframe.style.border = 'none';
    container.appendChild(iframe);
  } else if (isVideo) {
    const video = document.createElement('video');
    video.src = src;
    video.controls = true;
    video.loop = true;
    video.classList.add('media');
    container.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('media');
    container.appendChild(img);
  }
}

  prevButton.addEventListener('click', () => { currentIndex--; updateMedia(); });
  nextButton.addEventListener('click', () => { currentIndex++; updateMedia(); });

  updateMedia(); // render the first item immediately
});