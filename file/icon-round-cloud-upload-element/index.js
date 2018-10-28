import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCloudUploadElement
 * @class IconRoundCloudUploadElement
 * @extends {AoflElement}
 */
class IconRoundCloudUploadElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCloudUploadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-cloud-upload';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCloudUploadElement.is, IconRoundCloudUploadElement);

export default IconRoundCloudUploadElement;
