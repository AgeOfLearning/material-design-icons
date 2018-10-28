import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRadioButtonCheckedElement
 * @class IconSharpRadioButtonCheckedElement
 * @extends {AoflElement}
 */
class IconSharpRadioButtonCheckedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRadioButtonCheckedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-radio-button-checked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRadioButtonCheckedElement.is, IconSharpRadioButtonCheckedElement);

export default IconSharpRadioButtonCheckedElement;
