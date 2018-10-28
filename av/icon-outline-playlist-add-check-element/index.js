import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePlaylistAddCheckElement
 * @class IconOutlinePlaylistAddCheckElement
 * @extends {AoflElement}
 */
class IconOutlinePlaylistAddCheckElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePlaylistAddCheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-playlist-add-check';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePlaylistAddCheckElement.is, IconOutlinePlaylistAddCheckElement);

export default IconOutlinePlaylistAddCheckElement;
