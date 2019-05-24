import ansi from './ansi';
import iso_jis from './iso-jis';
import din from './din';
import quantum from './quantum';
import settings from './kb-settings';
import media from './app-media-mouse';
const mutations = {
    state.keycodes = [
      ...ansi,
      ...iso_jis,
      ...din,
      ...quantum,
      ...settings,
      ...media,
      ...steno
    ];
  },
  disableSteno(state) {

    state.keycodes = [
      ...ansi,
      ...iso_jis,
      ...din,
      ...quantum,
      ...settings,
      ...media
    ];
  }
};
