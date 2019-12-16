var Airtable = require('airtable');
var base = new Airtable({apiKey: 'YOUR_API_KEY'}).base('appYM5pzaLxQYUxF8');

base('Event Form (Master)').create([
  {
    "fields": {
      "Event Name": "League of Legends: All-Star Las Vegas 2018",
      // C1 is where the Event Name goes
      // A1 is where the Event Name becomes Title (caption)
      "Event Location": "LAS VEGAS, NV",
      // C2A & C3A is where you will see the Event Location in all caps
      "Description (alt)": "Esports caster talking to pro players onstage at League of Legends All-Star Event on December 8, 2018 in Las Vegas, Nevada.",
      // C4 is the description
      // A2 is where it will reside on and within the Cloudinary Media Library view
      "Tags": [
        "esports",
        "lcs"
        // A3 see the Cloudinary Media Library view
      ],
      "Format Required": "JPG",
      // A4 see the Cloudinary Media Library view
      "File Size": "9.66 MB",
      // A5 see the Cloudinary Media Library view
      "Image Size": "6662 x 4441 px (22.21 x 14.80 in) - 300 dpi",
      // A6 see the Cloudinary Media Library view
      "Credit Name": "TALENT POOL",
      // C5 is the photo credit
      "Usage Templates": "Rights managed",
      // B1 resides on front-end of ESPAT platform (possible custom key value in Cloudinary)
      "Event Start Date": "2019-12-12",
      // C3A & C3B is the Start Date
      "Event End Date": "2019-12-20",
      // End date will only be use to change status within Airtable "Active" or "Complete"
      "Transloadit": "www.uniqueurl.com",
      // This will be generated when the event register form is complete and the URL will populate the Airtable. 
      "Talent Pool": "Ed Brooks",
      // We will have a Talent Pool table that is linked in order to assign talent
      "File Naming Convention": "1_P2_Talent_Name.JPG"
      // B2 Formatter will generate the file name: [Editorial #] & [P2 = 2019 P3 = 2020] & [Photo Credit] & [.Format]
    }
  },
  {
    "fields": {
      "Event Name": "League of Legends: All-Star Las Vegas 2018",
      "Event Location": "LAS VEGAS, NV",
      "Description (alt)": "Esports caster talking to pro players onstage at League of Legends All-Star Event on December 8, 2018 in Las Vegas, Nevada.",
      "Tags": [
        "esports",
        "lcs"
      ],
      "Format Required": "JPG",
      "File Size": "9.66 MB",
      "Image Size": "6662 x 4441 px (22.21 x 14.80 in) - 300 dpi",
      "Credit Name": "TALENT POOL",
      "Usage Templates": "Rights managed",
      "Event Start Date": "2019-12-12",
      "Event End Date": "2019-12-20",
      "Transloadit": "www.uniqueurl.com",
      "Talent Pool": "Ed Brooks",
      "File Naming Convention": "1_P2_Talent_Name.JPG"
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});
OUTPUT
rec01sf3lM2v86uhw
rec01sf3lM2v86uhw