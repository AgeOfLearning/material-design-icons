import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMobileOffElement
 * @class IconRoundMobileOffElement
 * @extends {AoflElement}
 */
class IconRoundMobileOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMobileOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-mobile-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMobileOffElement.is, IconRoundMobileOffElement);

export default IconRoundMobileOffElement;
