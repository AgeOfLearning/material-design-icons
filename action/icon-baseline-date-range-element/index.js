import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDateRangeElement
 * @class IconBaselineDateRangeElement
 * @extends {AoflElement}
 */
class IconBaselineDateRangeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDateRangeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-date-range';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDateRangeElement.is, IconBaselineDateRangeElement);

export default IconBaselineDateRangeElement;
