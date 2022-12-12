// API route to retrieve patient data
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Patient>
) {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).end("Method not allowed");
  }
  setTimeout(() => {
    res.status(200).json(examplePatientRecord);
  }, 1000);
}

export type Patient = typeof examplePatientRecord;

const examplePatientRecord = {
  resourceType: "Patient",
  id: "f201",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Roel(OFFICIAL)</b> male, DoB: 1960-03-13 ( BSN: 123456789 (OFFICIAL))</p></div>',
  },
  identifier: [
    {
      use: "official",
      type: {
        text: "BSN",
      },
      system: "urn:oid:2.16.840.1.113883.2.4.6.3",
      value: "123456789",
    },
    {
      use: "official",
      type: {
        text: "BSN",
      },
      system: "urn:oid:2.16.840.1.113883.2.4.6.3",
      value: "123456789",
    },
  ],
  active: true,
  name: [
    {
      use: "official",
      text: "Roel",
      family: "Bor",
      given: ["Roelof Olaf"],
      prefix: ["Drs."],
      suffix: ["PDEng."],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "+31612345678",
      use: "mobile",
    },
    {
      system: "phone",
      value: "+31201234567",
      use: "home",
    },
  ],
  gender: "male",
  birthDate: "1960-03-13",
  deceasedBoolean: false,
  address: [
    {
      use: "home",
      line: ["Bos en Lommerplein 280"],
      city: "Amsterdam",
      postalCode: "1055RW",
      country: "NLD",
    },
  ],
  maritalStatus: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "36629006",
        display: "Legally married",
      },
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
        code: "M",
      },
    ],
  },
  multipleBirthBoolean: false,
  photo: [
    {
      contentType: "image/jpeg",
      url: "Binary/f006",
    },
  ],
  contact: [
    {
      relationship: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "127850001",
              display: "Wife",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0131",
              code: "N",
            },
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
              code: "WIFE",
            },
          ],
        },
      ],
      name: {
        use: "usual",
        text: "Ariadne Bor-Jansma",
      },
      telecom: [
        {
          system: "phone",
          value: "+31201234567",
          use: "home",
        },
      ],
    },
  ],
  communication: [
    {
      language: {
        coding: [
          {
            system: "urn:ietf:bcp:47",
            code: "nl-NL",
            display: "Dutch",
          },
        ],
      },
      preferred: true,
    },
  ],
  managingOrganization: {
    reference: "Organization/f201",
    display: "AUMC",
  },
};
