import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFontDownloadElement
 * @class IconBaselineFontDownloadElement
 * @extends {AoflElement}
 */
class IconBaselineFontDownloadElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFontDownloadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-font-download';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFontDownloadElement.is, IconBaselineFontDownloadElement);

export default IconBaselineFontDownloadElement;
