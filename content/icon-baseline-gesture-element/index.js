import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGestureElement
 * @class IconBaselineGestureElement
 * @extends {AoflElement}
 */
class IconBaselineGestureElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGestureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-gesture';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGestureElement.is, IconBaselineGestureElement);

export default IconBaselineGestureElement;
