import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePlaylistPlayElement
 * @class IconBaselinePlaylistPlayElement
 * @extends {AoflElement}
 */
class IconBaselinePlaylistPlayElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePlaylistPlayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-playlist-play';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePlaylistPlayElement.is, IconBaselinePlaylistPlayElement);

export default IconBaselinePlaylistPlayElement;
