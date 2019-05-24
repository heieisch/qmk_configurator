import ansi from './ansi';
import iso_jis from './iso-jis';
import din from './din';
import quantum from './quantum';
import settings from './kb-settings';
import media from './app-media-mouse';
@@ -26,14 +27,22 @@ const mutations = {
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
    state.keycodes = [...ansi, ...iso_jis, ...quantum, ...settings, ...media];
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
