import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRadioButtonCheckedElement
 * @class IconBaselineRadioButtonCheckedElement
 * @extends {AoflElement}
 */
class IconBaselineRadioButtonCheckedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRadioButtonCheckedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-radio-button-checked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRadioButtonCheckedElement.is, IconBaselineRadioButtonCheckedElement);

export default IconBaselineRadioButtonCheckedElement;
