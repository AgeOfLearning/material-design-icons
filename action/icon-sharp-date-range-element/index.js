import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDateRangeElement
 * @class IconSharpDateRangeElement
 * @extends {AoflElement}
 */
class IconSharpDateRangeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDateRangeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-date-range';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDateRangeElement.is, IconSharpDateRangeElement);

export default IconSharpDateRangeElement;
