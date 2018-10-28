import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFreeBreakfastElement
 * @class IconOutlineFreeBreakfastElement
 * @extends {AoflElement}
 */
class IconOutlineFreeBreakfastElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFreeBreakfastElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-free-breakfast';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFreeBreakfastElement.is, IconOutlineFreeBreakfastElement);

export default IconOutlineFreeBreakfastElement;
