import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFontDownloadElement
 * @class IconRoundFontDownloadElement
 * @extends {AoflElement}
 */
class IconRoundFontDownloadElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFontDownloadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-font-download';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFontDownloadElement.is, IconRoundFontDownloadElement);

export default IconRoundFontDownloadElement;
