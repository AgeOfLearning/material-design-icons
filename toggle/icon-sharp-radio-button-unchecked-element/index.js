import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRadioButtonUncheckedElement
 * @class IconSharpRadioButtonUncheckedElement
 * @extends {AoflElement}
 */
class IconSharpRadioButtonUncheckedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRadioButtonUncheckedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-radio-button-unchecked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRadioButtonUncheckedElement.is, IconSharpRadioButtonUncheckedElement);

export default IconSharpRadioButtonUncheckedElement;
