import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePersonPinCircleElement
 * @class IconTwotonePersonPinCircleElement
 * @extends {AoflElement}
 */
class IconTwotonePersonPinCircleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePersonPinCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-person-pin-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePersonPinCircleElement.is, IconTwotonePersonPinCircleElement);

export default IconTwotonePersonPinCircleElement;
