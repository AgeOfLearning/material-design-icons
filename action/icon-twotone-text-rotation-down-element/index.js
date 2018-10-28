import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTextRotationDownElement
 * @class IconTwotoneTextRotationDownElement
 * @extends {AoflElement}
 */
class IconTwotoneTextRotationDownElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTextRotationDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-text-rotation-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTextRotationDownElement.is, IconTwotoneTextRotationDownElement);

export default IconTwotoneTextRotationDownElement;
