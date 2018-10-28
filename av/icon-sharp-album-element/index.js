import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAlbumElement
 * @class IconSharpAlbumElement
 * @extends {AoflElement}
 */
class IconSharpAlbumElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAlbumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-album';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAlbumElement.is, IconSharpAlbumElement);

export default IconSharpAlbumElement;
