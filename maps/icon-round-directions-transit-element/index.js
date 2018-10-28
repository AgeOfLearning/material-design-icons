import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDirectionsTransitElement
 * @class IconRoundDirectionsTransitElement
 * @extends {AoflElement}
 */
class IconRoundDirectionsTransitElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDirectionsTransitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-directions-transit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDirectionsTransitElement.is, IconRoundDirectionsTransitElement);

export default IconRoundDirectionsTransitElement;
