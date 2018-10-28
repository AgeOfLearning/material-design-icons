import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCloudUploadElement
 * @class IconOutlineCloudUploadElement
 * @extends {AoflElement}
 */
class IconOutlineCloudUploadElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCloudUploadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-cloud-upload';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCloudUploadElement.is, IconOutlineCloudUploadElement);

export default IconOutlineCloudUploadElement;
