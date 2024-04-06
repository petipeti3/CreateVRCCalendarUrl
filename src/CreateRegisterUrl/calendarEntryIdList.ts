// 入力フォームの内容
export type CalendarEntryIdList = {
  // 開始時刻
  startHour: string;
  startMinute: string;
  // 終了時刻
  endHour: string;
  endMinute: string;
  // イベント開催日
  eventDateYear: string;
  eventDateMonth: string;
  eventDateDay: string;

  eventName: string;
  mailAddress: string;

  androidSupport: string;

  joinCondition: string;
  eventDetail: string;
  eventType: string;

  organizer: string;

  howToJoin: string;
  note: string;
  isOverseasUser: string;
};

// 入力フォームの内容とentryIDの対のリスト
export const calendarEntryIdList: Readonly<
  Record<keyof CalendarEntryIdList, string>
> = {
  startHour: 'entry.1010494053_hour',
  startMinute: 'entry.1010494053_minute',
  endHour: 'entry.203043324_hour',
  endMinute: 'entry.203043324_minute',

  eventDateYear: 'entry.450203369_year',
  eventDateMonth: 'entry.450203369_month',
  eventDateDay: 'entry.450203369_day',

  eventName: 'entry.426573786',
  mailAddress: 'emailAddress',

  androidSupport: 'entry.1261006949',

  joinCondition: 'entry.2064647146',
  eventType: 'entry.1606730788',
  eventDetail: 'entry.701384676',

  organizer: 'entry.1540217995',

  howToJoin: 'entry.1285455202',
  note: 'entry.586354013',
  isOverseasUser: 'entry.1607289186',
};
