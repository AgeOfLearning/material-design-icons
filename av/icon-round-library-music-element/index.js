import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLibraryMusicElement
 * @class IconRoundLibraryMusicElement
 * @extends {AoflElement}
 */
class IconRoundLibraryMusicElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLibraryMusicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-library-music';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLibraryMusicElement.is, IconRoundLibraryMusicElement);

export default IconRoundLibraryMusicElement;
