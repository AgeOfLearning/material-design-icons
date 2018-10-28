import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePersonPinCircleElement
 * @class IconBaselinePersonPinCircleElement
 * @extends {AoflElement}
 */
class IconBaselinePersonPinCircleElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePersonPinCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-person-pin-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePersonPinCircleElement.is, IconBaselinePersonPinCircleElement);

export default IconBaselinePersonPinCircleElement;
