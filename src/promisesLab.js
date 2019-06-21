function fetchCsv(emulateError = false) {
  let data = `id,first_name,last_name,email,ssn,ip_address
  1,Jenica,Puttnam,jputtnam0@plalala.or.jp,194-72-6556,212.168.146.225
  2,Sianna,Langley,,213-53-9892,243.66.247.77
  3,Deanne,McCart,dmccart2@squidodo.com,571-82-1484,147.41.223.68
  4,Cally,Pallesen,cpallesen3@microsort.com,747-62-7228,16.127.32.227
  5,Carolann,Snarr,csnarr4@hc361.com,143-72-8861,229.229.154.242
  6,Annelise,Prendeguest,aprendeguest5@oraclu.com,621-41-2280,4.14.224.53
  7,Zonnya,Tibalt,,675-25-0389,97.197.4.86
  8,Kordula,Longshaw,klongshaw7@slashdog.org,720-23-7708,0.59.12.67
  9,Gene,Bourget,gbourget8@yalee.edu,528-63-1499,97.97.235.187
  10,Geno,Ludovico,gludovico9@geocitie.jp,773-42-6110,153.251.244.141`;
  return new Promise((resolve, reject) => {
    if (emulateError) {
      setTimeout(() => reject("Error: fetchCsv failed to retrieve data"), 1000);
    }
    setTimeout(() => resolve(data), 1000);
  });
}

function csvToArray(csv) {
  let [header, ...lines] = csv.split(/\n/g);
  let headingNames = header.split(",");
  return lines.map(line => {
    let lineArr = line.trim().split(/,/);
    return headingNames.reduce(
      (acc, curr, idx) => ({ ...acc, [curr]: lineArr[idx] }),
      {}
    );
  });
}

function filterClientsWithEmail(clients) {
  return clients.filter(client => client.email !== "");
}

async function getPeople() {
  try {
    let csv = await fetchCsv(true);
    let people = await csvToArray(csv);
    let filteredPeople = await filterClientsWithEmail(people);
    console.log(filteredPeople);
  } catch (err) {
    console.error(`A problem occurred: ${err}`);
  }
}

getPeople();
