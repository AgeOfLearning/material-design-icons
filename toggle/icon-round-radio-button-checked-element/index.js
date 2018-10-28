import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRadioButtonCheckedElement
 * @class IconRoundRadioButtonCheckedElement
 * @extends {AoflElement}
 */
class IconRoundRadioButtonCheckedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRadioButtonCheckedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-radio-button-checked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRadioButtonCheckedElement.is, IconRoundRadioButtonCheckedElement);

export default IconRoundRadioButtonCheckedElement;
