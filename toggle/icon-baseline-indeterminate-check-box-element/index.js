import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineIndeterminateCheckBoxElement
 * @class IconBaselineIndeterminateCheckBoxElement
 * @extends {AoflElement}
 */
class IconBaselineIndeterminateCheckBoxElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineIndeterminateCheckBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-indeterminate-check-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineIndeterminateCheckBoxElement.is, IconBaselineIndeterminateCheckBoxElement);

export default IconBaselineIndeterminateCheckBoxElement;
