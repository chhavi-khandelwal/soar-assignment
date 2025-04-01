# SOAR REACT-VITE APP

The app should contain the following features:

- A navigation Menu(currently active, Dashboard and Settings)
- Dashboard page shows analytics data and data from user experiences
- Settings page has a form with personal details which can be updated
- Header(Currently with dummy buttons, heading and Profile Picture)
- A responsive design that supports Mobile, Tablet and Desktop(Chrome, Firefox, Safari, Edge)

# DIRECTORY STRUCTURE

```- src
	- api
	- assets
		- icons
		- svgIcons
	- components
		- Button, Loader, CardSection, IconButton, etc. (shared and smaller components)
	- containers
		- Form
		- SideBar
		- Header
		- InfoContainer
		- Layout
	- context
	- hooks
	- services
		- NotificationService
```

# Setup

```bash
npm install
npm run dev
```

- create an .env.local file

```
VITE_LOCALHOST='http://localhost:5001'
```

# tests - unit tests

```bash
npm run test
```

# Assumptions

- Icons for details from API must be fetched from CDN
- Profile pic in setting form updates directly on uploading and other data separately from save button. A separate API call for saving img is beneficial. Files are usually blobs and involve various services to process and save on servers and update on CDN.
- Updating profile pic in setting form => updates it in header
- For Click on hamburger to close the menu
- Password encryption (e.g., using bcrypt) before saving at BE

# Suggestions

- Analytics data should have a refresh button. It is expensive to call for fresh data on each API call.
- Credit card numbers ideally to be masked at the BE
