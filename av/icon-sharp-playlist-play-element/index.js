import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPlaylistPlayElement
 * @class IconSharpPlaylistPlayElement
 * @extends {AoflElement}
 */
class IconSharpPlaylistPlayElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPlaylistPlayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-playlist-play';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPlaylistPlayElement.is, IconSharpPlaylistPlayElement);

export default IconSharpPlaylistPlayElement;
