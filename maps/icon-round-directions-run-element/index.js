import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDirectionsRunElement
 * @class IconRoundDirectionsRunElement
 * @extends {AoflElement}
 */
class IconRoundDirectionsRunElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDirectionsRunElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-directions-run';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDirectionsRunElement.is, IconRoundDirectionsRunElement);

export default IconRoundDirectionsRunElement;
