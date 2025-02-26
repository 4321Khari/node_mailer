const mailAccounts = [
  { email: "example1@gmail.com", password: "app_password_1" },
  { email: "example2@gmail.com", password: "app_password_2" },
  { email: "example3@gmail.com", password: "app_password_3" },
];

const emailSettings = {
  service: "gmail",
  subject: "Automated Email",
  fromName: "Your Name",
};

module.exports = { mailAccounts, emailSettings };
