import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePersonPinCircleElement
 * @class IconOutlinePersonPinCircleElement
 * @extends {AoflElement}
 */
class IconOutlinePersonPinCircleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePersonPinCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-person-pin-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePersonPinCircleElement.is, IconOutlinePersonPinCircleElement);

export default IconOutlinePersonPinCircleElement;
