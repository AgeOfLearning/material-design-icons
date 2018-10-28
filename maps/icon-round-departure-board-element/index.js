import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDepartureBoardElement
 * @class IconRoundDepartureBoardElement
 * @extends {AoflElement}
 */
class IconRoundDepartureBoardElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDepartureBoardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-departure-board';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDepartureBoardElement.is, IconRoundDepartureBoardElement);

export default IconRoundDepartureBoardElement;
