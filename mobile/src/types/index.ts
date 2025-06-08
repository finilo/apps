// Subscription types
export interface Subscription {
  id: string;
  name: string;
  amount: number;
  currency: string;
  nextPaymentDate: Date;
  frequency: 'monthly' | 'yearly' | 'weekly' | 'daily';
  category: string;
  isActive: boolean;
  reminderEnabled: boolean;
  description?: string;
  logoUrl?: string;
}

// User types
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  preferences: UserPreferences;
}

export interface UserPreferences {
  emailNotifications: boolean;
  pushNotifications: boolean;
  reminderDaysBefore: number;
  currency: string;
  timezone: string;
  theme: 'light' | 'dark' | 'system';
}

// Navigation types
export type RootStackParamList = {
  Home: undefined;
  Subscriptions: undefined;
  AddSubscription: undefined;
  EditSubscription: { subscriptionId: string };
  Settings: undefined;
  Profile: undefined;
  Notifications: undefined;
};

// API types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  success: false;
  error: string;
  statusCode: number;
}

// Notification types
export interface NotificationSettings {
  enabled: boolean;
  daysBefore: number;
  timeOfDay: string; // HH:MM format
  types: NotificationType[];
}

export type NotificationType = 'email' | 'push' | 'sms';

// Theme types
export type ThemeMode = 'light' | 'dark';

export interface Theme {
  mode: ThemeMode;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
    success: string;
    warning: string;
  };
}

