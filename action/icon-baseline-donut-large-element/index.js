import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDonutLargeElement
 * @class IconBaselineDonutLargeElement
 * @extends {AoflElement}
 */
class IconBaselineDonutLargeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDonutLargeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-donut-large';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDonutLargeElement.is, IconBaselineDonutLargeElement);

export default IconBaselineDonutLargeElement;
