import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDirectionsBoatElement
 * @class IconBaselineDirectionsBoatElement
 * @extends {AoflElement}
 */
class IconBaselineDirectionsBoatElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDirectionsBoatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-directions-boat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDirectionsBoatElement.is, IconBaselineDirectionsBoatElement);

export default IconBaselineDirectionsBoatElement;
