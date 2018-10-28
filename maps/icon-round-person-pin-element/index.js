import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPersonPinElement
 * @class IconRoundPersonPinElement
 * @extends {AoflElement}
 */
class IconRoundPersonPinElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPersonPinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-person-pin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPersonPinElement.is, IconRoundPersonPinElement);

export default IconRoundPersonPinElement;
