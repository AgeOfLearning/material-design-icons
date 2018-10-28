import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDonutSmallElement
 * @class IconBaselineDonutSmallElement
 * @extends {AoflElement}
 */
class IconBaselineDonutSmallElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDonutSmallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-donut-small';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDonutSmallElement.is, IconBaselineDonutSmallElement);

export default IconBaselineDonutSmallElement;
