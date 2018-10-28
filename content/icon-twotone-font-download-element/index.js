import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFontDownloadElement
 * @class IconTwotoneFontDownloadElement
 * @extends {AoflElement}
 */
class IconTwotoneFontDownloadElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFontDownloadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-font-download';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFontDownloadElement.is, IconTwotoneFontDownloadElement);

export default IconTwotoneFontDownloadElement;
