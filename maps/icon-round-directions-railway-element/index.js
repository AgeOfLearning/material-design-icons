import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDirectionsRailwayElement
 * @class IconRoundDirectionsRailwayElement
 * @extends {AoflElement}
 */
class IconRoundDirectionsRailwayElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDirectionsRailwayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-directions-railway';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDirectionsRailwayElement.is, IconRoundDirectionsRailwayElement);

export default IconRoundDirectionsRailwayElement;
