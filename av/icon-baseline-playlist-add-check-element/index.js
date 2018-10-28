import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePlaylistAddCheckElement
 * @class IconBaselinePlaylistAddCheckElement
 * @extends {AoflElement}
 */
class IconBaselinePlaylistAddCheckElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePlaylistAddCheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-playlist-add-check';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePlaylistAddCheckElement.is, IconBaselinePlaylistAddCheckElement);

export default IconBaselinePlaylistAddCheckElement;
