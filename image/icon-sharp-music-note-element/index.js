import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMusicNoteElement
 * @class IconSharpMusicNoteElement
 * @extends {AoflElement}
 */
class IconSharpMusicNoteElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMusicNoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-music-note';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMusicNoteElement.is, IconSharpMusicNoteElement);

export default IconSharpMusicNoteElement;
