import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSdStorageElement
 * @class IconSharpSdStorageElement
 * @extends {AoflElement}
 */
class IconSharpSdStorageElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSdStorageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-sd-storage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSdStorageElement.is, IconSharpSdStorageElement);

export default IconSharpSdStorageElement;
