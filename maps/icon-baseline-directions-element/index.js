import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDirectionsElement
 * @class IconBaselineDirectionsElement
 * @extends {AoflElement}
 */
class IconBaselineDirectionsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDirectionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-directions';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDirectionsElement.is, IconBaselineDirectionsElement);

export default IconBaselineDirectionsElement;
