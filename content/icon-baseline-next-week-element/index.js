import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNextWeekElement
 * @class IconBaselineNextWeekElement
 * @extends {AoflElement}
 */
class IconBaselineNextWeekElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNextWeekElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-next-week';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNextWeekElement.is, IconBaselineNextWeekElement);

export default IconBaselineNextWeekElement;
