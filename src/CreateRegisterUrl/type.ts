type EventData = {
  // イベント名
  eventName: string;
  // イベント内容
  eventDetail: string;
  // イベントの種類
  eventType: EventType[];
  // 参加方法
  howToJoin: string;
  // 参加条件
  joinCondition: string;
};

// 登録者
type OrganizeUser = {
  // イベント主催者
  organizer: string;
  // メールアドレス
  mailAddress: string;
};

type EventType =
  | 'アバター試着会'
  | '改変アバター交流会'
  | 'その他交流会'
  | 'VR飲み会'
  | '店舗系イベント'
  | '音楽系イベント'
  | '学術系イベント'
  | 'ロールプレイ'
  | '初心者向けイベント'
  | '定期イベント';

// Android対応可否
type AndroidSupport =
  | 'PCオンリー'
  | 'PC/Android両対応（Android対応）'
  | 'Android オンリー';

type EventDate = {
  // 日付
  date: Date;
  // 開始時間
  startTime: Date;
  // 終了時間
  endTime: Date;
};

export type CalendarData = {
  eventData: EventData;
  eventDate: EventDate;
  organizeUser: OrganizeUser;
  androidSupport: AndroidSupport;
  // 備考
  note: string;
  // 海外ユーザー告知の可否
  isOverseasUser: boolean;
};
