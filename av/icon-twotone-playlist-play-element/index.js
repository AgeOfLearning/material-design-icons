import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePlaylistPlayElement
 * @class IconTwotonePlaylistPlayElement
 * @extends {AoflElement}
 */
class IconTwotonePlaylistPlayElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePlaylistPlayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-playlist-play';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePlaylistPlayElement.is, IconTwotonePlaylistPlayElement);

export default IconTwotonePlaylistPlayElement;
