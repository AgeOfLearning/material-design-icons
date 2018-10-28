import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineRadioElement
 * @class IconBaselineRadioElement
 * @extends {AoflElement}
 */
class IconBaselineRadioElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineRadioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-radio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineRadioElement.is, IconBaselineRadioElement);

export default IconBaselineRadioElement;
