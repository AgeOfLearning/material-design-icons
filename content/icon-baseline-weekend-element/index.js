import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWeekendElement
 * @class IconBaselineWeekendElement
 * @extends {AoflElement}
 */
class IconBaselineWeekendElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWeekendElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-weekend';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWeekendElement.is, IconBaselineWeekendElement);

export default IconBaselineWeekendElement;
