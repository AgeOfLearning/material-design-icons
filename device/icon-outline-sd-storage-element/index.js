import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSdStorageElement
 * @class IconOutlineSdStorageElement
 * @extends {AoflElement}
 */
class IconOutlineSdStorageElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSdStorageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-sd-storage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSdStorageElement.is, IconOutlineSdStorageElement);

export default IconOutlineSdStorageElement;
