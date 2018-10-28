import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCloudDownloadElement
 * @class IconTwotoneCloudDownloadElement
 * @extends {AoflElement}
 */
class IconTwotoneCloudDownloadElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCloudDownloadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-cloud-download';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCloudDownloadElement.is, IconTwotoneCloudDownloadElement);

export default IconTwotoneCloudDownloadElement;
