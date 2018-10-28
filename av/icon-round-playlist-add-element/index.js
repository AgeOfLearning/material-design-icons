import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPlaylistAddElement
 * @class IconRoundPlaylistAddElement
 * @extends {AoflElement}
 */
class IconRoundPlaylistAddElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPlaylistAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-playlist-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPlaylistAddElement.is, IconRoundPlaylistAddElement);

export default IconRoundPlaylistAddElement;
