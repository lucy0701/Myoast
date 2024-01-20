export const contentArr = (text: string) => text.split('<br>').filter((item) => item.trim() !== '');
