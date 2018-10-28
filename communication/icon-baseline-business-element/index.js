import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBusinessElement
 * @class IconBaselineBusinessElement
 * @extends {AoflElement}
 */
class IconBaselineBusinessElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBusinessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-business';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBusinessElement.is, IconBaselineBusinessElement);

export default IconBaselineBusinessElement;
