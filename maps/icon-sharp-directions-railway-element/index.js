import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDirectionsRailwayElement
 * @class IconSharpDirectionsRailwayElement
 * @extends {AoflElement}
 */
class IconSharpDirectionsRailwayElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDirectionsRailwayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-directions-railway';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDirectionsRailwayElement.is, IconSharpDirectionsRailwayElement);

export default IconSharpDirectionsRailwayElement;
