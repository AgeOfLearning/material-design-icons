import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRadioButtonUncheckedElement
 * @class IconBaselineRadioButtonUncheckedElement
 * @extends {AoflElement}
 */
class IconBaselineRadioButtonUncheckedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRadioButtonUncheckedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-radio-button-unchecked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRadioButtonUncheckedElement.is, IconBaselineRadioButtonUncheckedElement);

export default IconBaselineRadioButtonUncheckedElement;
