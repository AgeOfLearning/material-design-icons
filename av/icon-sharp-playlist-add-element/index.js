import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPlaylistAddElement
 * @class IconSharpPlaylistAddElement
 * @extends {AoflElement}
 */
class IconSharpPlaylistAddElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPlaylistAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-playlist-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPlaylistAddElement.is, IconSharpPlaylistAddElement);

export default IconSharpPlaylistAddElement;
