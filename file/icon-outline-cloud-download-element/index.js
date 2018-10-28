import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCloudDownloadElement
 * @class IconOutlineCloudDownloadElement
 * @extends {AoflElement}
 */
class IconOutlineCloudDownloadElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCloudDownloadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-cloud-download';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCloudDownloadElement.is, IconOutlineCloudDownloadElement);

export default IconOutlineCloudDownloadElement;
