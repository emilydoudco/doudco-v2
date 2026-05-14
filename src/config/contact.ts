const email = 'layer8support@gmail.com';

const body = [
  'Type of inquiry: IT or Creative',
  '',
  'What I am looking for in detail:',
  '',
  'Timeline:',
  '',
  'Best way to reach you (Email / Text / Call):',
  '',
  'Best number to call/text:',
].join('%0A');

export const CONTACT_URL =
  `https://mail.google.com/mail/?view=cm&to=${email}&su=Inquiry&body=${body}`;
