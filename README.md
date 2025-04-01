# SOAR APP

The app should contain the following features:

- A navigation Menu(currently active, Dashboard and Settings)
- Dashboard page shows analytics data and data from user experiences
- Settings page has a form with personal details which can be updated
- Header(Currently with dummy buttons, heading and Profile Picture)
- A responsive design that supports Mobile, Tablet and Desktop(Chrome, Firefox, Safari, Edge)

# DIRECTORY STRUCTURE

- It contains both client and server folder with their respective README.md files inside them that guides one with the local setup.

# Vercel Link

https://soar-dun-chi.vercel.app/overview

# Assumptions

- Icons for details from API must be fetched from CDN
- Profile pic in setting form updates directly on uploading and other data separately from save button. A separate API call for saving img is beneficial. Files are usually blobs and involve various services to process and save on servers and update on CDN.
- Updating profile pic in setting form => updates it in header
- On Mobile, click on hamburger to open/close the menu
- Password encryption (e.g., using bcrypt) before saving at BE
- "See All" adds a scroll to card container to allow scrolling through more cards

# Suggestions

- Analytics data should have a refresh button. It is expensive to call for fresh data on each API call.
- Credit card numbers ideally to be masked at the BE
- Performance improvement through virtualization of loading more cards and transactions on scroll
- Playwright and Unit tests
