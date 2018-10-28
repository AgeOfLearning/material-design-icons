import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAlbumElement
 * @class IconRoundAlbumElement
 * @extends {AoflElement}
 */
class IconRoundAlbumElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAlbumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-album';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAlbumElement.is, IconRoundAlbumElement);

export default IconRoundAlbumElement;
