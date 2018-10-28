import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTextFieldsElement
 * @class IconBaselineTextFieldsElement
 * @extends {AoflElement}
 */
class IconBaselineTextFieldsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTextFieldsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-text-fields';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTextFieldsElement.is, IconBaselineTextFieldsElement);

export default IconBaselineTextFieldsElement;
