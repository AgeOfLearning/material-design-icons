import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineViewDayElement
 * @class IconBaselineViewDayElement
 * @extends {AoflElement}
 */
class IconBaselineViewDayElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineViewDayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-view-day';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineViewDayElement.is, IconBaselineViewDayElement);

export default IconBaselineViewDayElement;
