import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineViewWeekElement
 * @class IconBaselineViewWeekElement
 * @extends {AoflElement}
 */
class IconBaselineViewWeekElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineViewWeekElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-view-week';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineViewWeekElement.is, IconBaselineViewWeekElement);

export default IconBaselineViewWeekElement;
