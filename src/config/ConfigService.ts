export interface ReservationConfig {
  maxDurationHours: number;
  maxAdvanceBookingDays: number;
}

export interface NotificationConfig {
  notifyOnCreate: boolean;
  notifyOnUpdate: boolean;
  notifyOnCancel: boolean;
}

interface Config {
  reservation: ReservationConfig;
  notification: NotificationConfig;
}

export class ConfigService {
  private static instance: ConfigService;

  private readonly config: Config = {
    reservation: {
      maxDurationHours: 4,
      maxAdvanceBookingDays: 30,
    },
    notification: {
      notifyOnCreate: true,
      notifyOnUpdate: true,
      notifyOnCancel: true,
    }
  };

  static getInstance(): ConfigService {
    if (!ConfigService.instance) {
      ConfigService.instance = new ConfigService();
    }
    return ConfigService.instance;
  }

  getReservationConfig(): ReservationConfig {
    return this.config.reservation;
  }

  getNotificationConfig(): NotificationConfig {
    return this.config.notification;
  }
}
