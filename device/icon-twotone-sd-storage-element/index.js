import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSdStorageElement
 * @class IconTwotoneSdStorageElement
 * @extends {AoflElement}
 */
class IconTwotoneSdStorageElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSdStorageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-sd-storage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSdStorageElement.is, IconTwotoneSdStorageElement);

export default IconTwotoneSdStorageElement;
