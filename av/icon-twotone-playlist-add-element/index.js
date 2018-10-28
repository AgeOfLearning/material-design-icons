import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePlaylistAddElement
 * @class IconTwotonePlaylistAddElement
 * @extends {AoflElement}
 */
class IconTwotonePlaylistAddElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePlaylistAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-playlist-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePlaylistAddElement.is, IconTwotonePlaylistAddElement);

export default IconTwotonePlaylistAddElement;
