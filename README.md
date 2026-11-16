# The Pinto Cottage — website starter

A responsive, single-page homestay website built with plain HTML, CSS and JavaScript.

## Files
- `index.html` — page content and sections
- `style.css` — colours, layout, typography and responsive styling
- `script.js` — mobile menu, phone/WhatsApp links and enquiry form

## Before publishing
1. The WhatsApp and call number is already set to +91 63610 73742 in `script.js`.
2. The website currently lists 2 cottages, ₹2,500 per night and guest parking, based on the details provided. Confirm whether ₹2,500 is per cottage or for both cottages before publishing.
3. Replace the sample/placeholder photographs with actual photographs of The Pinto Cottage. Search in `index.html` and `style.css` for `images.unsplash.com` and replace those image URLs with your own hosted images or local image paths.
5. Confirm all property claims, amenities, room details, pricing and guest review information with the owner. This starter intentionally avoids inventing them.
6. Test every link and the enquiry form on a phone.

## Add your own photos
Create an `images` folder and place photos inside it, for example:
- `images/hero.jpg`
- `images/cottage-exterior.jpg`
- `images/bedroom.jpg`
- `images/garden.jpg`

Then change the relevant CSS background-image URLs and the image URLs in `style.css`. For the hero, replace the URL in `.hero-image`. For the intro photo, replace the URL in `.intro-photo`.

## Preview locally
Open `index.html` in a browser. No build step or package installation is required.

## Free deployment with Netlify
1. Create a free account at https://www.netlify.com/
2. Put the website folder in a GitHub repository (recommended), or use Netlify's manual deploy / drag-and-drop option if available in your account.
3. In Netlify, choose **Add new site** and deploy the project.
4. For GitHub deployment, select the repository and leave the build command blank. Set the publish directory to the project root (`.`) if prompted.
5. Netlify will provide a free `*.netlify.app` address and HTTPS.
6. Open the live URL on mobile and test it.

A custom domain is optional and generally costs extra. Free hosting does not mean a custom `.com` domain is free.

## Notes
- The map is an address search embed. Verify the pin and directions before launch.
- The enquiry form opens WhatsApp; it does not store enquiries or confirm room availability.
- Google Fonts and the sample image URLs require internet access.
