import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCloudDownloadElement
 * @class IconBaselineCloudDownloadElement
 * @extends {AoflElement}
 */
class IconBaselineCloudDownloadElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCloudDownloadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-cloud-download';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCloudDownloadElement.is, IconBaselineCloudDownloadElement);

export default IconBaselineCloudDownloadElement;
