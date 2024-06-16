export class AppStore {
  appName: string;
  language = $state<string>();
  constructor(appName: string, language = "en") {
    this.appName = appName;
    this.language = language;
  }
}