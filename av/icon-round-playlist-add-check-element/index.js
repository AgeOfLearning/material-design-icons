import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPlaylistAddCheckElement
 * @class IconRoundPlaylistAddCheckElement
 * @extends {AoflElement}
 */
class IconRoundPlaylistAddCheckElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPlaylistAddCheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-playlist-add-check';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPlaylistAddCheckElement.is, IconRoundPlaylistAddCheckElement);

export default IconRoundPlaylistAddCheckElement;
