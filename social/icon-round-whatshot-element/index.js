import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWhatshotElement
 * @class IconRoundWhatshotElement
 * @extends {AoflElement}
 */
class IconRoundWhatshotElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWhatshotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-whatshot';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWhatshotElement.is, IconRoundWhatshotElement);

export default IconRoundWhatshotElement;
