import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSimCardElement
 * @class IconRoundSimCardElement
 * @extends {AoflElement}
 */
class IconRoundSimCardElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSimCardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-sim-card';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSimCardElement.is, IconRoundSimCardElement);

export default IconRoundSimCardElement;
