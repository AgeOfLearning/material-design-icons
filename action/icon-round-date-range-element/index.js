import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDateRangeElement
 * @class IconRoundDateRangeElement
 * @extends {AoflElement}
 */
class IconRoundDateRangeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDateRangeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-date-range';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDateRangeElement.is, IconRoundDateRangeElement);

export default IconRoundDateRangeElement;
