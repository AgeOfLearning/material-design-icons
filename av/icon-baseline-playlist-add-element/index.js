import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePlaylistAddElement
 * @class IconBaselinePlaylistAddElement
 * @extends {AoflElement}
 */
class IconBaselinePlaylistAddElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePlaylistAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-playlist-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePlaylistAddElement.is, IconBaselinePlaylistAddElement);

export default IconBaselinePlaylistAddElement;
