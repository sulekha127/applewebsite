// Fetch product data from mock API
const fetchProductData = async () => {
    const response = await fetch('https://mockapi.io/api/v1/products/1');
    const data = await response.json();
    return data;
  };
  
  // Display product data on the page
  const displayProductData = (data) => {
    const heroImage = document.querySelector('.hero-image img');
    heroImage.src = data.image;
  
    const heroTitle = document.querySelector('.hero-content h1');
    heroTitle.textContent = data.name;
  
    const heroDescription = document.querySelector('.hero-content p');
    heroDescription.textContent = data.description;
  
    const featureList = document.querySelector('.features');
    data.features.forEach((feature) => {
      const featureItem = document.createElement('div');
      featureItem.classList.add('feature');
  
      const featureImage = document.createElement('img');
      featureImage.src = feature.image;
  
      const featureTitle = document.createElement('h3');
      featureTitle.textContent = feature.title;
  
      const featureDescription = document.createElement('p');
      featureDescription.textContent = feature.description;
  
      featureItem.appendChild(featureImage);
      featureItem.appendChild(featureTitle);
      featureItem.appendChild(featureDescription);
  
      featureList.appendChild(featureItem);
    });
  
    const specsList = document.querySelector('.specs ul');
    data.specs.forEach((spec) => {
      const specItem = document.createElement('li');
  
      const specName = document.createElement('strong');
      specName.textContent = spec.name;
  
      const specValue = document.createElement('span');
      specValue.textContent = spec.value;
  
      specItem.appendChild(specName);
      specItem.appendChild(specValue);
  
      specsList.appendChild(specItem);
    });
  
    const reviewList = document.querySelector('.reviews');
    data.reviews.forEach((review) => {
      const reviewItem = document.createElement('div');
      reviewItem.classList.add('review');
  
      const reviewerImage = document.createElement('img');
      reviewerImage.src = review.author.image;
  
      const reviewerName = document.createElement('h4');
      reviewerName.textContent = review.author.name;
  
      const reviewerOccupation = document.createElement('p');
      reviewerOccupation.textContent = review.author.occupation;
  
      const reviewContent = document.createElement('p');
      reviewContent.textContent = review.content;
  
      const reviewRating = document.createElement('div');
      reviewRating.classList.add('review-rating');
  
      for (let i = 0; i < review.rating; i++) {
        const star = document.createElement('span');
        star.classList.add('fa', 'fa-star');
        reviewRating.appendChild(star);
      }
  
      const reviewerInfo = document.createElement('div');
      reviewerInfo.classList.add('review-author');
      reviewerInfo.appendChild(reviewerImage);
      reviewerInfo.appendChild(reviewerName);
      reviewerInfo.appendChild(reviewerOccupation);
  
      const reviewDetails = document.createElement('div');
      reviewDetails.classList.add('review-content');
      reviewDetails.appendChild(reviewContent);
      reviewDetails.appendChild(reviewRating);
  
      reviewItem.appendChild(reviewerInfo);
      reviewItem.appendChild(reviewDetails);
  
      reviewList.appendChild(reviewItem);
    });
  };
  
  // Initialize the page
  window.addEventListener('DOMContentLoaded', async () => {
    const data = await fetchProductData();
    displayProductData(data);
  });