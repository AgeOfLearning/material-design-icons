import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLibraryMusicElement
 * @class IconOutlineLibraryMusicElement
 * @extends {AoflElement}
 */
class IconOutlineLibraryMusicElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLibraryMusicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-library-music';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLibraryMusicElement.is, IconOutlineLibraryMusicElement);

export default IconOutlineLibraryMusicElement;
