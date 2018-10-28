import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalAtmElement
 * @class IconRoundLocalAtmElement
 * @extends {AoflElement}
 */
class IconRoundLocalAtmElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalAtmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-atm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalAtmElement.is, IconRoundLocalAtmElement);

export default IconRoundLocalAtmElement;
