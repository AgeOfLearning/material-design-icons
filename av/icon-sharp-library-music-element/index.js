import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLibraryMusicElement
 * @class IconSharpLibraryMusicElement
 * @extends {AoflElement}
 */
class IconSharpLibraryMusicElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLibraryMusicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-library-music';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLibraryMusicElement.is, IconSharpLibraryMusicElement);

export default IconSharpLibraryMusicElement;
