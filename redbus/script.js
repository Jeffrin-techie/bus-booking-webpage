// Translations for multiple languages
const translations = {
    en: {
        bookingHeader: 'Cab Rental & Bus Hiring',
        vehicleTypeLabel: 'Select Vehicle Type:',
        busSizeLabel: 'Select Bus Size:',
        cabSizeLabel: 'Select Cab Size:',
        routeDetailsLabel: 'Route Details:',
        scheduleRouteButton: 'Schedule Route',
        reviewHeader: 'Review Bus Route',
        ratingLabel: 'Rating (1-5):',
        reviewTextLabel: 'Write your Review:',
        submitReview: 'Submit Review',
    },
    fr: {
        bookingHeader: 'Location de voiture & Location de bus',
        vehicleTypeLabel: 'Sélectionner le type de véhicule:',
        busSizeLabel: 'Sélectionner la taille du bus:',
        cabSizeLabel: 'Sélectionner la taille de la voiture:',
        routeDetailsLabel: 'Détails de l\'itinéraire:',
        scheduleRouteButton: 'Planifier l\'itinéraire',
        reviewHeader: 'Évaluation de l\'itinéraire du bus',
        ratingLabel: 'Évaluation (1-5):',
        reviewTextLabel: 'Écrivez votre avis:',
        submitReview: 'Soumettre un avis',
    },
    hi: {
        vehicleType: 'वाहन प्रकार चुनें',
        busSize: 'बस का आकार चुनें',
        cabSize: 'कैब का आकार चुनें',
        rating: 'रेटिंग',
        reviewText: 'अपनी समीक्षा लिखें',
        submitReview: 'समीक्षा जमा करें',
        bookingHeader: 'कैब किराया और बस किराए पर लेना',
        vehicleTypeLabel: 'वाहन प्रकार चुनें:',
        busSizeLabel: 'बस का आकार चुनें:',
        cabSizeLabel: 'कैब का आकार चुनें:',
        reviewTextLabel: 'अपनी समीक्षा लिखें:',
        ratingLabel: 'रेटिंग (1-5):',
    },
    ta: {
        vehicleType: 'வாகன வகையைத் தேர்ந்தெடுக்கவும்',
        busSize: 'பஸ் அளவைத் தேர்ந்தெடுக்கவும்',
        cabSize: 'கேப் அளவைத் தேர்ந்தெடுக்கவும்',
        rating: 'விலையம்சம்',
        reviewText: 'உங்கள் மதிப்புரையை எழுதவும்',
        submitReview: 'மதிப்புரையை சமர்ப்பிக்கவும்',
        bookingHeader: 'கேப் வாடகை மற்றும் பஸ் வாடகை',
        vehicleTypeLabel: 'வாகன வகையைத் தேர்ந்தெடுக்கவும்:',
        busSizeLabel: 'பஸ் அளவைத் தேர்ந்தெடுக்கவும்:',
        cabSizeLabel: 'கேப் அளவைத் தேர்ந்தெடுக்கவும்:',
        reviewTextLabel: 'உங்கள் மதிப்புரையை எழுதவும்:',
        ratingLabel: 'விலையம்சம் (1-5):',
    },
    ml: {
        vehicleType: 'വാഹനത്തിന്റെ തരം തിരഞ്ഞെടുക്കുക',
        busSize: 'ബസ് വലുപ്പം തിരഞ്ഞെടുക്കുക',
        cabSize: 'കാബിന്റെ വലുപ്പം തിരഞ്ഞെടുക്കുക',
        rating: 'റേറ്റിംഗ്',
        reviewText: 'നിങ്ങളുടെ അവലോകനം എഴുതി നൽകുക',
        submitReview: 'അവലോകനം സമർപ്പിക്കുക',
        bookingHeader: 'കാബ് വാടകയും ബസ് വാടകയും',
        vehicleTypeLabel: 'വാഹനത്തിന്റെ തരം തിരഞ്ഞെടുക്കുക:',
        busSizeLabel: 'ബസ് വലുപ്പം തിരഞ്ഞെടുക്കുക:',
        cabSizeLabel: 'കാബിന്റെ വലുപ്പം തിരഞ്ഞെടുക്കുക:',
        reviewTextLabel: 'നിങ്ങളുടെ അവലോകനം എഴുതി നൽകുക:',
        ratingLabel: 'റേറ്റിംഗ് (1-5):',
    },
    te: {
        vehicleType: 'వాహన రకం ఎంచుకోండి',
        busSize: 'బస్సు పరిమాణం ఎంచుకోండి',
        cabSize: 'క్యాబ్ పరిమాణం ఎంచుకోండి',
        rating: 'రేటింగ్',
        reviewText: 'మీ సమీక్షను రాయండి',
        submitReview: 'సమీక్ష సమర్పించండి',
        bookingHeader: 'క్యాబ్ అద్దె మరియు బస్ అద్దె',
        vehicleTypeLabel: 'వాహన రకం ఎంచుకోండి:',
        busSizeLabel: 'బస్సు పరిమాణం ఎంచుకోండి:',
        cabSizeLabel: 'క్యాబ్ పరిమాణం ఎంచుకోండి:',
        reviewTextLabel: 'మీ సమీక్షను రాయండి:',
        ratingLabel: 'రేటింగ్ (1-5):',
    },
    de: {
        vehicleType: 'Fahrzeugtyp auswählen',
        busSize: 'Busgröße auswählen',
        cabSize: 'Taxi-Größe auswählen',
        rating: 'Bewertung',
        reviewText: 'Schreiben Sie Ihre Bewertung',
        submitReview: 'Bewertung absenden',
        bookingHeader: 'Cab Mietung & Busvermietung',
        vehicleTypeLabel: 'Fahrzeugtyp auswählen:',
        busSizeLabel: 'Busgröße auswählen:',
        cabSizeLabel: 'Taxi-Größe auswählen:',
        reviewTextLabel: 'Schreiben Sie Ihre Bewertung:',
        ratingLabel: 'Bewertung (1-5):',
    },
    ja: {
        vehicleType: '車両タイプを選択',
        busSize: 'バスのサイズを選択',
        cabSize: 'タクシーのサイズを選択',
        rating: '評価',
        reviewText: 'レビューを書く',
        submitReview: 'レビューを送信',
        bookingHeader: 'タクシーとバスのレンタル',
        vehicleTypeLabel: '車両タイプを選択:',
        busSizeLabel: 'バスのサイズを選択:',
        cabSizeLabel: 'タクシーのサイズを選択:',
        reviewTextLabel: 'レビューを書く:',
        ratingLabel: '評価（1-5）:',
    },
    zh: {
        vehicleType: '选择车辆类型',
        busSize: '选择巴士大小',
        cabSize: '选择出租车大小',
        rating: '评分',
        reviewText: '写下您的评论',
        submitReview: '提交评论',
        bookingHeader: '出租车租赁与巴士租赁',
        vehicleTypeLabel: '选择车辆类型:',
        busSizeLabel: '选择巴士大小:',
        cabSizeLabel: '选择出租车大小:',
        reviewTextLabel: '写下您的评论:',
        ratingLabel: '评分（1-5）：',
    },
    tr: {
        vehicleType: 'Araç Tipi Seçin',
        busSize: 'Otobüs Boyutunu Seçin',
        cabSize: 'Taksi Boyutunu Seçin',
        rating: 'Değerlendirme',
        reviewText: 'Yorumunuzu Yazın',
        submitReview: 'Yorumu Gönder',
        bookingHeader: 'Taksi Kiralama & Otobüs Kiralama',
        vehicleTypeLabel: 'Araç Tipi Seçin:',
        busSizeLabel: 'Otobüs Boyutunu Seçin:',
        cabSizeLabel: 'Taksi Boyutunu Seçin:',
        reviewTextLabel: 'Yorumunuzu Yazın:',
        ratingLabel: 'Değerlendirme (1-5):',
    }
    // Add other languages here...
};

let currentLanguage = 'en'; // Default language

// Change background and text based on selected language
function changeLanguage() {
    currentLanguage = document.getElementById('language').value;
    updateText();
    changeBackgroundColor();
}

// Update page text based on selected language
function updateText() {
    const translation = translations[currentLanguage];
    document.getElementById('bookingTitle').innerText = translation.bookingHeader;
    document.getElementById('vehicleTypeLabel').innerText = translation.vehicleTypeLabel;
    document.getElementById('busSizeLabel').innerText = translation.busSizeLabel;
    document.getElementById('cabSizeLabel').innerText = translation.cabSizeLabel;
    document.getElementById('routeDetailsLabel').innerText = translation.routeDetailsLabel;
    document.getElementById('scheduleRouteButton').innerText = translation.scheduleRouteButton;
    document.getElementById('reviewHeader').innerText = translation.reviewHeader;
    document.getElementById('ratingLabel').innerText = translation.ratingLabel;
    document.getElementById('reviewTextLabel').innerText = translation.reviewTextLabel;
    document.getElementById('reviewSection').querySelector('button').innerText = translation.submitReview;
}

// Change background color on language selection
function changeBackgroundColor() {
    const languageColors = {
        en: '#f0f8ff', // Sky blue
        fr: '#ffebcd', // Blanched almond
        // Add other language color codes if needed
    };

    document.body.style.backgroundColor = languageColors[currentLanguage] || '#f0f8ff';
}

// Reviews array to store reviews
let reviews = [];

// Submit a review
function submitReview() {
    const rating = document.getElementById('rating').value;
    const reviewText = document.getElementById('reviewText').value;

    if (rating && reviewText) {
        // Check for inappropriate words
        const vulgarWords = ['badword1', 'badword2', 'badword3'];
        const foundVulgarWord = vulgarWords.some(word => reviewText.toLowerCase().includes(word));

        if (foundVulgarWord) {
            alert('Your review contains inappropriate language. Please remove it and try again.');
            return;
        }

        // Add the review
        reviews.push({
            rating: parseInt(rating),
            text: reviewText
        });
        displayReviews();
    } else {
        alert('Please provide both a rating and a review.');
    }
}

// Display reviews
function displayReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    reviewsContainer.innerHTML = ''; // Clear existing reviews

    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `<p>Rating: &#9733; ${'&#9733;'.repeat(review.rating)}</p><p>${review.text}</p>`;
        reviewsContainer.appendChild(reviewElement);
    });

    // Display reviews section if there are reviews
    reviewsContainer.style.display = reviews.length > 0 ? 'block' : 'none';
}

// Initialize with default language (English)
updateText();
