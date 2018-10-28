import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCloudDownloadElement
 * @class IconSharpCloudDownloadElement
 * @extends {AoflElement}
 */
class IconSharpCloudDownloadElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCloudDownloadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-cloud-download';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCloudDownloadElement.is, IconSharpCloudDownloadElement);

export default IconSharpCloudDownloadElement;
