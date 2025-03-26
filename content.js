if (!window.__cleverApplyLoaded) {
  window.__cleverApplyLoaded = true;

  const mockStudentData = {
    firstName: 'Ben',
    lastName: 'Smiths',
    fullName: 'Ben Smith',
    email: 'ben@example.com',
    password: 'tooFaded',
    confirmPassword: 'tooFaded',
    resumeURL: 'https://example.com/resume.pdf'
  };

  const labelToKeyMap = {
    "email": "email",
    "email address": "email",
    "your email": "email",
    "full name": "fullName",
    "name": "fullName",
    "username": "fullName",
    "password": "password",
    "confirm password": "confirmPassword",
    "resume": "resumeURL"
  };
  

  const studentDataKeys = Object.keys(labelToKeyMap);
  const fuse = new Fuse(studentDataKeys, {
    includeScore: true,
    threshold: 0.4
  });

  function scanAndFillForm() {
    const inputs = document.querySelectorAll("input, select, textarea");

    inputs.forEach(field => {
      const label = document.querySelector(`label[for="${field.id}"]`)?.innerText
        || field.getAttribute("aria-label")
        || field.placeholder
        || field.name
        || "Unknown";

      const normalizedLabel = label.trim().toLowerCase();
      const bestMatch = fuse.search(normalizedLabel)[0];
      const matchKey = labelToKeyMap[bestMatch?.item];

      if (matchKey && field.type !== "file") {
        if (matchKey === "fullName") {
          field.value = `${mockStudentData.firstName} ${mockStudentData.lastName}`;
        } else {
          field.value = mockStudentData[matchKey] || '';
        }
      }
    });

    console.log("Autofill complete!");
  }

  scanAndFillForm();
}
