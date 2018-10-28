import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCloudUploadElement
 * @class IconSharpCloudUploadElement
 * @extends {AoflElement}
 */
class IconSharpCloudUploadElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCloudUploadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-cloud-upload';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCloudUploadElement.is, IconSharpCloudUploadElement);

export default IconSharpCloudUploadElement;
