import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFreeBreakfastElement
 * @class IconSharpFreeBreakfastElement
 * @extends {AoflElement}
 */
class IconSharpFreeBreakfastElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFreeBreakfastElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-free-breakfast';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFreeBreakfastElement.is, IconSharpFreeBreakfastElement);

export default IconSharpFreeBreakfastElement;
