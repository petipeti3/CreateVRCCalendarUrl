import {CalendarData} from "./type";

export const testData: CalendarData = {
  eventData: {
    eventName: 'testEventName',
    eventType: ['アバター試着会', '改変アバター交流会', 'その他交流会'],
    eventDetail: 'testEventDetail',
    howToJoin: 'testHowToJoin',
    joinCondition: 'testJoinCondition',
  },
  eventDate: {
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
  },
  organizeUser: {
    organizer: 'testOrganizer',
    mailAddress: 'testMailAddress@example.com',
  },
  androidSupport: 'PCオンリー',
  note: 'testNote',
  isOverseasUser: false,
};
