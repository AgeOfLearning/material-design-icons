import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDirectionsRailwayElement
 * @class IconBaselineDirectionsRailwayElement
 * @extends {AoflElement}
 */
class IconBaselineDirectionsRailwayElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDirectionsRailwayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-directions-railway';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDirectionsRailwayElement.is, IconBaselineDirectionsRailwayElement);

export default IconBaselineDirectionsRailwayElement;
