import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDirectionsRailwayElement
 * @class IconOutlineDirectionsRailwayElement
 * @extends {AoflElement}
 */
class IconOutlineDirectionsRailwayElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDirectionsRailwayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-directions-railway';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDirectionsRailwayElement.is, IconOutlineDirectionsRailwayElement);

export default IconOutlineDirectionsRailwayElement;
