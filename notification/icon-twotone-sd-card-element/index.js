import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSdCardElement
 * @class IconTwotoneSdCardElement
 * @extends {AoflElement}
 */
class IconTwotoneSdCardElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSdCardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-sd-card';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSdCardElement.is, IconTwotoneSdCardElement);

export default IconTwotoneSdCardElement;
