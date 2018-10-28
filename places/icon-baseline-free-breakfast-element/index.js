import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFreeBreakfastElement
 * @class IconBaselineFreeBreakfastElement
 * @extends {AoflElement}
 */
class IconBaselineFreeBreakfastElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFreeBreakfastElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-free-breakfast';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFreeBreakfastElement.is, IconBaselineFreeBreakfastElement);

export default IconBaselineFreeBreakfastElement;
