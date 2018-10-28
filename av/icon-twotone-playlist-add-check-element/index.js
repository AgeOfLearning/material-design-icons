import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePlaylistAddCheckElement
 * @class IconTwotonePlaylistAddCheckElement
 * @extends {AoflElement}
 */
class IconTwotonePlaylistAddCheckElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePlaylistAddCheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-playlist-add-check';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePlaylistAddCheckElement.is, IconTwotonePlaylistAddCheckElement);

export default IconTwotonePlaylistAddCheckElement;
