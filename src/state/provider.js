const GoogleSpreadsheet = require('google-spreadsheet');
const creds = require('./tomm-ch-252d0b3ed643.json');

export default {
  GET: {
    Products: () => {
      const doc = new GoogleSpreadsheet('1W87tSZ3eY8lX4O5ZwAW_nJy-Nu0tS0RZwQZesYBUSP8');
      doc.useServiceAccountAuth(creds, () => {
        doc.getRows(1, 10, (err, rows) => {
          console.log(err);
        });
      });
    },
  },
};
