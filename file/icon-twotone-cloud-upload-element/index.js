import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCloudUploadElement
 * @class IconTwotoneCloudUploadElement
 * @extends {AoflElement}
 */
class IconTwotoneCloudUploadElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCloudUploadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-cloud-upload';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCloudUploadElement.is, IconTwotoneCloudUploadElement);

export default IconTwotoneCloudUploadElement;
