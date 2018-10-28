import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCloudUploadElement
 * @class IconBaselineCloudUploadElement
 * @extends {AoflElement}
 */
class IconBaselineCloudUploadElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCloudUploadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-cloud-upload';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCloudUploadElement.is, IconBaselineCloudUploadElement);

export default IconBaselineCloudUploadElement;
