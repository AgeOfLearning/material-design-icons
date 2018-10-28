import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAutorenewElement
 * @class IconBaselineAutorenewElement
 * @extends {AoflElement}
 */
class IconBaselineAutorenewElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAutorenewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-autorenew';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAutorenewElement.is, IconBaselineAutorenewElement);

export default IconBaselineAutorenewElement;
