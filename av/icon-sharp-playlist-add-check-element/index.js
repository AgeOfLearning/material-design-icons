import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPlaylistAddCheckElement
 * @class IconSharpPlaylistAddCheckElement
 * @extends {AoflElement}
 */
class IconSharpPlaylistAddCheckElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPlaylistAddCheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-playlist-add-check';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPlaylistAddCheckElement.is, IconSharpPlaylistAddCheckElement);

export default IconSharpPlaylistAddCheckElement;
