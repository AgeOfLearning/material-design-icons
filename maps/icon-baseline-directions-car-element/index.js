import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDirectionsCarElement
 * @class IconBaselineDirectionsCarElement
 * @extends {AoflElement}
 */
class IconBaselineDirectionsCarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDirectionsCarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-directions-car';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDirectionsCarElement.is, IconBaselineDirectionsCarElement);

export default IconBaselineDirectionsCarElement;
