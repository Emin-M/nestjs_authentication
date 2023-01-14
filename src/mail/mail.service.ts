import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  //! sending welcoming emails
  async sendWelcomeMail(email: string, name: string) {
    await this.mailerService.sendMail({
      to: email,
      // from: 'Nestjs Authentication <nestjs_authentication@gmail.com>',
      subject: 'Welcome to Nice App!',
      template: './welcome_template',
      context: {
        name: name,
      },
    });
  }

  //! sending confirmation emails
  async sendUserConfirmation(email: string, token: string) {
    const url = `example.com/api/v1/auth/resetPassword/${token}`;

    await this.mailerService.sendMail({
      to: email,
      // from: ""
      subject: 'Email Confirmation',
      template: './confirmation_template',
      context: {
        url,
      },
    });
  }
}
