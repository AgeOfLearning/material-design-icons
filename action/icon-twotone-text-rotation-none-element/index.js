import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTextRotationNoneElement
 * @class IconTwotoneTextRotationNoneElement
 * @extends {AoflElement}
 */
class IconTwotoneTextRotationNoneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTextRotationNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-text-rotation-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTextRotationNoneElement.is, IconTwotoneTextRotationNoneElement);

export default IconTwotoneTextRotationNoneElement;
