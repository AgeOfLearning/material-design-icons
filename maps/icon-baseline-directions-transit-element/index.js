import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDirectionsTransitElement
 * @class IconBaselineDirectionsTransitElement
 * @extends {AoflElement}
 */
class IconBaselineDirectionsTransitElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDirectionsTransitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-directions-transit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDirectionsTransitElement.is, IconBaselineDirectionsTransitElement);

export default IconBaselineDirectionsTransitElement;
