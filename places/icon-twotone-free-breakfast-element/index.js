import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFreeBreakfastElement
 * @class IconTwotoneFreeBreakfastElement
 * @extends {AoflElement}
 */
class IconTwotoneFreeBreakfastElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFreeBreakfastElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-free-breakfast';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFreeBreakfastElement.is, IconTwotoneFreeBreakfastElement);

export default IconTwotoneFreeBreakfastElement;
