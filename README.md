# CleverApply Autofill Extension

This is a Chrome extension that scans web forms and autofills them using fuzzy matching and student data — even when field labels vary wildly across platforms.

### ✨ Features
- Injects into any site and finds `input`, `textarea`, `select` fields
- Grabs the associated label (via `<label for="">`, `aria-label`, placeholder, etc.)
- Uses [Fuse.js](https://fusejs.io/) for fuzzy string matching between label and known student data fields
- Autofills fields with mock student data (can be swapped for real data later)
- Includes optional popup UI to trigger autofill manually

---

### 🚀 Getting Started

1. Clone this repo
2. Download [Fuse.js](https://cdn.jsdelivr.net/npm/fuse.js) and save as `fuse.js` in the root
3. Go to `chrome://extensions`
4. Enable **Developer Mode**
5. Click **Load Unpacked** and select the folder

To test it:
- Go to a sign-up form
- Click the extension icon → “Scan & Autofill”
- Fields like email, name, and password should fill in automatically

---

### 🧠 Tech Stack

- **Plain JavaScript** for DOM parsing
- **Fuse.js** for fuzzy label matching
- Uses Chrome’s Manifest v3 + `scripting.executeScript` API

---

### 📌 Notes

This currently uses **mock student data**. In the future, it can be hooked up to real CleverApply user data via background or message passing.

---

### 🧪 Example Fields It Can Match:

| Form Label         | Fuzzy Match → Key    |
|--------------------|----------------------|
| `Email Address`    | `email`              |
| `Your Email`       | `email`              |
| `Full Name`        | `fullName`           |
| `Resume Upload`    | `resumeURL`          |
| `Confirm Password` | `confirmPassword`    |

---
