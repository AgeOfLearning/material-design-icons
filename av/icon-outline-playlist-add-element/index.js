import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePlaylistAddElement
 * @class IconOutlinePlaylistAddElement
 * @extends {AoflElement}
 */
class IconOutlinePlaylistAddElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePlaylistAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-playlist-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePlaylistAddElement.is, IconOutlinePlaylistAddElement);

export default IconOutlinePlaylistAddElement;
