import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundContactSupportElement
 * @class IconRoundContactSupportElement
 * @extends {AoflElement}
 */
class IconRoundContactSupportElement extends AoflElement {
  /**
   * Creates an instance of IconRoundContactSupportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-contact-support';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundContactSupportElement.is, IconRoundContactSupportElement);

export default IconRoundContactSupportElement;
