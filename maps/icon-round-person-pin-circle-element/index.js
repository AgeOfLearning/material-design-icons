import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPersonPinCircleElement
 * @class IconRoundPersonPinCircleElement
 * @extends {AoflElement}
 */
class IconRoundPersonPinCircleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPersonPinCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-person-pin-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPersonPinCircleElement.is, IconRoundPersonPinCircleElement);

export default IconRoundPersonPinCircleElement;
