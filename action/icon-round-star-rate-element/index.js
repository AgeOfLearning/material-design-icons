import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStarRateElement
 * @class IconRoundStarRateElement
 * @extends {AoflElement}
 */
class IconRoundStarRateElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStarRateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-star-rate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStarRateElement.is, IconRoundStarRateElement);

export default IconRoundStarRateElement;
