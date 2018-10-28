import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPlaylistPlayElement
 * @class IconRoundPlaylistPlayElement
 * @extends {AoflElement}
 */
class IconRoundPlaylistPlayElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPlaylistPlayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-playlist-play';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPlaylistPlayElement.is, IconRoundPlaylistPlayElement);

export default IconRoundPlaylistPlayElement;
