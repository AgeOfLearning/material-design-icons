import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMusicOffElement
 * @class IconSharpMusicOffElement
 * @extends {AoflElement}
 */
class IconSharpMusicOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMusicOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-music-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMusicOffElement.is, IconSharpMusicOffElement);

export default IconSharpMusicOffElement;
