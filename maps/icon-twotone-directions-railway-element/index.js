import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDirectionsRailwayElement
 * @class IconTwotoneDirectionsRailwayElement
 * @extends {AoflElement}
 */
class IconTwotoneDirectionsRailwayElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDirectionsRailwayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-directions-railway';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDirectionsRailwayElement.is, IconTwotoneDirectionsRailwayElement);

export default IconTwotoneDirectionsRailwayElement;
