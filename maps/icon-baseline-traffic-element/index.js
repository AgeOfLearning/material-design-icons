import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTrafficElement
 * @class IconBaselineTrafficElement
 * @extends {AoflElement}
 */
class IconBaselineTrafficElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTrafficElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-traffic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTrafficElement.is, IconBaselineTrafficElement);

export default IconBaselineTrafficElement;
