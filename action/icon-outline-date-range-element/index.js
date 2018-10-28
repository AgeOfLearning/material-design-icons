import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDateRangeElement
 * @class IconOutlineDateRangeElement
 * @extends {AoflElement}
 */
class IconOutlineDateRangeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDateRangeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-date-range';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDateRangeElement.is, IconOutlineDateRangeElement);

export default IconOutlineDateRangeElement;
