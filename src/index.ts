import {createCalendarRegistUrl} from "./CreateRegisterUrl/createCalendarEncodedRegisterUrl";
import {testData} from "./CreateRegisterUrl/testData";

const main = (): void => {
  const url = createCalendarRegistUrl(testData);
  console.log(url);
};

main();