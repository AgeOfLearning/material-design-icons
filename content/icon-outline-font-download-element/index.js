import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFontDownloadElement
 * @class IconOutlineFontDownloadElement
 * @extends {AoflElement}
 */
class IconOutlineFontDownloadElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFontDownloadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-font-download';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFontDownloadElement.is, IconOutlineFontDownloadElement);

export default IconOutlineFontDownloadElement;
