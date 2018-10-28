import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMusicNoteElement
 * @class IconRoundMusicNoteElement
 * @extends {AoflElement}
 */
class IconRoundMusicNoteElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMusicNoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-music-note';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMusicNoteElement.is, IconRoundMusicNoteElement);

export default IconRoundMusicNoteElement;
