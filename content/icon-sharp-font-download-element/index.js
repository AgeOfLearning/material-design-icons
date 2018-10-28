import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFontDownloadElement
 * @class IconSharpFontDownloadElement
 * @extends {AoflElement}
 */
class IconSharpFontDownloadElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFontDownloadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-font-download';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFontDownloadElement.is, IconSharpFontDownloadElement);

export default IconSharpFontDownloadElement;
