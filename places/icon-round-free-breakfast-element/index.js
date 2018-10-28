import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFreeBreakfastElement
 * @class IconRoundFreeBreakfastElement
 * @extends {AoflElement}
 */
class IconRoundFreeBreakfastElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFreeBreakfastElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-free-breakfast';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFreeBreakfastElement.is, IconRoundFreeBreakfastElement);

export default IconRoundFreeBreakfastElement;
