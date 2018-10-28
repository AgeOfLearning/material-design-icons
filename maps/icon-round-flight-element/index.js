import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFlightElement
 * @class IconRoundFlightElement
 * @extends {AoflElement}
 */
class IconRoundFlightElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFlightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-flight';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFlightElement.is, IconRoundFlightElement);

export default IconRoundFlightElement;
