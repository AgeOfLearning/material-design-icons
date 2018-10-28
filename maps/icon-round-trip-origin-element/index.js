import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTripOriginElement
 * @class IconRoundTripOriginElement
 * @extends {AoflElement}
 */
class IconRoundTripOriginElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTripOriginElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-trip-origin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTripOriginElement.is, IconRoundTripOriginElement);

export default IconRoundTripOriginElement;
