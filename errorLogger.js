const {createLogger, format, transports} = require('winston');
const fs = require('fs');
const path = require('path');

const logDirectory = 'log';

if(!fs.existsSync(logDirectory))
    fs.mkdirSync(logDirectory);

const fileName = path.join(logDirectory, 'error-logfile.log');

const errorLogger = createLogger({
    level: 'error',
    format: format.combine(
        format.json(),
        format.timestamp()
    ),
    transports: [
        new transports.Console({
            level: 'info',
            format: format.combine(
                format.colorize(),
            )
        }),
        new transports.File({filename: fileName})
    ]
});

module.exports = errorLogger;
