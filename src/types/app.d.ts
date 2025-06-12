export type AppFile = {
  name: string,
  data: string,
};
export type AppTheme = 'light' | 'dark';
export type AppBarBackgroundImage = {
    timestamp: number,
    data: {
        date: string,
        explanation: string,
        hdurl: string,
        media_type: string,
        service_version: string,
        title: string,
        url: string,
    }
} | null;
