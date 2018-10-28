import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLibraryMusicElement
 * @class IconTwotoneLibraryMusicElement
 * @extends {AoflElement}
 */
class IconTwotoneLibraryMusicElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLibraryMusicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-library-music';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLibraryMusicElement.is, IconTwotoneLibraryMusicElement);

export default IconTwotoneLibraryMusicElement;
