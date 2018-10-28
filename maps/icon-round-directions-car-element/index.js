import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDirectionsCarElement
 * @class IconRoundDirectionsCarElement
 * @extends {AoflElement}
 */
class IconRoundDirectionsCarElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDirectionsCarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-directions-car';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDirectionsCarElement.is, IconRoundDirectionsCarElement);

export default IconRoundDirectionsCarElement;
