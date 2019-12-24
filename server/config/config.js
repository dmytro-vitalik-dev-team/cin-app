module.exports = {
    'databaseConnectionString': 'mongodb://localhost:27017/cinema',
    'port': '4200',
    'email' : process.env.MAILER_EMAIL_ID || 'zolochivdima2@gmail.com',
    'pass': process.env.MAILER_PASSWORD || 'dimamitinrock123',
    'jwtKey': 'securejwtPmtKey'
}