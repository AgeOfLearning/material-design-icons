import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePlaylistPlayElement
 * @class IconOutlinePlaylistPlayElement
 * @extends {AoflElement}
 */
class IconOutlinePlaylistPlayElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePlaylistPlayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-playlist-play';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePlaylistPlayElement.is, IconOutlinePlaylistPlayElement);

export default IconOutlinePlaylistPlayElement;
