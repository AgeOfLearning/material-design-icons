import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCheckBoxElement
 * @class IconBaselineCheckBoxElement
 * @extends {AoflElement}
 */
class IconBaselineCheckBoxElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCheckBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-check-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCheckBoxElement.is, IconBaselineCheckBoxElement);

export default IconBaselineCheckBoxElement;
