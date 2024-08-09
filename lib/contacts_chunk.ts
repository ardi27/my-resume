import JSZip from "jszip";

// Function to write phone numbers to a VCF file
async function writeVcfFile(
  phoneNumbers: string[],
  maxNumbersPerFile: number,
  index: number,
  contactName: string
): Promise<string> {
  const counter = (index - 1) * maxNumbersPerFile;
  const vcfContent = phoneNumbers
    .map(
      (number, j) =>
        `BEGIN:VCARD\nVERSION:3.0\nFN:${contactName} ${counter + j + 1}\nTEL:${number}\nEND:VCARD\n`
    )
    .join("");
  console.log(vcfContent);
  return vcfContent;
}

// Function to split phone numbers into chunks
function splitPhoneNumbers(
  phoneNumbers: string[],
  maxPerFile: number
): string[][] {
  const chunks: string[][] = [];
  for (let i = 0; i < phoneNumbers.length; i += maxPerFile) {
    chunks.push(phoneNumbers.slice(i, i + maxPerFile));
  }
  return chunks;
}

// Main function
export default async function handleChunks(
  value: string,
  contactsName: string,
  contactsCount: number,
  contactsFileName: string
): Promise<Blob | undefined> {
  // const txtFilePath = 'phone_numbers.txt'; // Name of your input .txt file
  const phoneNumbers = value
    .split("\n")
    .map((line) => line.replace(/\D/g, ""))
    .filter((line) => line);

  if (phoneNumbers.length === 0) {
    console.log("No phone numbers found.");
    return;
  }
  const zip = new JSZip();

  const chunks = splitPhoneNumbers(phoneNumbers, contactsCount);

  for (let i = 0; i < chunks.length; i++) {
    const txts = await writeVcfFile(
      chunks[i],
      contactsCount,
      i + 1,
      contactsName
    );
    zip.file(`${contactsFileName}_${i + 1}.vcf`, txts);
  }
  const zipData = await zip.generateAsync({
    type: "blob",
    streamFiles: true,
  });
  return zipData;
}
