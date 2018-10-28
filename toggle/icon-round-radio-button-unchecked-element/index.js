import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRadioButtonUncheckedElement
 * @class IconRoundRadioButtonUncheckedElement
 * @extends {AoflElement}
 */
class IconRoundRadioButtonUncheckedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRadioButtonUncheckedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-radio-button-unchecked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRadioButtonUncheckedElement.is, IconRoundRadioButtonUncheckedElement);

export default IconRoundRadioButtonUncheckedElement;
