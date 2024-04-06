import {CalendarData} from './type';
import {calendarEntryIdList, CalendarEntryIdList,} from './calendarEntryIdList';
import {urlEncode} from './urlEncoder';

export const createCalendarRegistUrl = (
  calendarData: CalendarData
) => {
  const baseUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSevo0ax6ALIzllRCT7up-3KZkohD3VfG28rcOy8XMqDwRWevQ/viewform?usp=pp_url&';
  const encodeData = encodeCalendarData(calendarData);
  return baseUrl + createCalendarEncodedRegisterUrl(encodeData);
};

const encodeCalendarData = (
  calendarData: CalendarData
): CalendarEntryIdList => {
  const {
    organizeUser,
    androidSupport,
    eventData,
    eventDate,
    note,
    isOverseasUser,
  } = calendarData;

  const {organizer, mailAddress} = organizeUser;
  const {joinCondition, howToJoin, eventType, eventDetail, eventName} =
    eventData;
  const {endTime, startTime, date} = eventDate;

  const eventTypeUrlList = eventType.map(type => urlEncode(type)).join(',');
  const eventDetailUrl = urlEncode(eventDetail);
  const eventNameUrl = urlEncode(eventName);

  const eventDate_year = date.getFullYear().toString();
  const eventDate_month = (date.getMonth() + 1).toString();
  const eventDate_day = date.getDate().toString();

  const startHour = startTime.getHours().toString();
  const startMinute = startTime.getMinutes().toString();
  const endHour = endTime.getHours().toString();
  const endMinute = endTime.getMinutes().toString();

  const eventDate_yearUrl = urlEncode(eventDate_year);
  const eventDate_monthUrl = urlEncode(eventDate_month);
  const eventDate_dayUrl = urlEncode(eventDate_day);

  const startHourUrl = urlEncode(startHour);
  const startMinuteUrl = urlEncode(startMinute);
  const endHourUrl = urlEncode(endHour);
  const endMinuteUrl = urlEncode(endMinute);

  const organizerUrl = urlEncode(organizer);
  const mailAddressUrl = urlEncode(mailAddress);
  const joinConditionUrl = urlEncode(joinCondition);
  const howToJoinUrl = urlEncode(howToJoin);

  const androidSupportUrl = urlEncode(androidSupport);
  const noteUrl = note ? urlEncode(note) : '';
  const isOverseasUserUrl = isOverseasUser ? urlEncode('希望する') : '';

  return {
    eventDateYear: eventDate_yearUrl,
    eventDateMonth: eventDate_monthUrl,
    eventDateDay: eventDate_dayUrl,

    startHour: startHourUrl,
    startMinute: startMinuteUrl,
    endHour: endHourUrl,
    endMinute: endMinuteUrl,

    eventName: eventNameUrl,
    mailAddress: mailAddressUrl,

    androidSupport: androidSupportUrl,

    joinCondition: joinConditionUrl,
    eventDetail: eventDetailUrl,
    eventType: eventTypeUrlList,

    organizer: organizerUrl,

    howToJoin: howToJoinUrl,
    note: noteUrl,
    isOverseasUser: isOverseasUserUrl,
  };
};

const createCalendarEncodedRegisterUrl = (encodeData: CalendarEntryIdList) => {
  return Object.entries(encodeData)
    .map(([key, value]) => {
      if (key === 'eventType') {
        const eventTypeList = value.split(',');
        return eventTypeList
          .map(eventType => `${calendarEntryIdList.eventType}=${eventType}`)
          .join('&');
      } else {
        const entryId = calendarEntryIdList[key as keyof CalendarEntryIdList];
        return `${entryId}=${value}`;
      }
    })
    .join('&');
};
