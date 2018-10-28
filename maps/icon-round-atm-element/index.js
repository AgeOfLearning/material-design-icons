import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAtmElement
 * @class IconRoundAtmElement
 * @extends {AoflElement}
 */
class IconRoundAtmElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAtmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-atm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAtmElement.is, IconRoundAtmElement);

export default IconRoundAtmElement;
