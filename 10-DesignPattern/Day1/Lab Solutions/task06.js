// 6-Make demo dependency injection

/* --- --- --- --- Dependency Injection Pattern --- --- --- --- */

class EmailService {
  sendEmail(_to, _message) {
    console.log(`Sending email to ${_to}: ${_message}`);
  }
}

class NotificationManager {
  constructor(_emailService) {
    this.emailService = _emailService;
  }

  sendUserNotification(_to, message) {
    this.emailService.sendEmail(_to, message);
    console.log("Email sent to ", _to);
  }
}

const emailService = new EmailService();
const notification = new NotificationManager(emailService);

const user = { name: "Ali", email: "ali@example.com" };
notification.sendUserNotification(user.email, "Welcome to our system!");
