const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

const appendToSheet = async (leadData) => {

  const values = [[
    leadData.fullName,
    leadData.contact,
    leadData.eventDate,
    leadData.eventDays,
    leadData.location,
    leadData.budget,
    leadData.eventType,
    new Date().toLocaleString(),
  ]];

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:H",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values,
    },
  });
};

module.exports = appendToSheet;