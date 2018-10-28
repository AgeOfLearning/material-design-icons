import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGridOnElement
 * @class IconBaselineGridOnElement
 * @extends {AoflElement}
 */
class IconBaselineGridOnElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGridOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-grid-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGridOnElement.is, IconBaselineGridOnElement);

export default IconBaselineGridOnElement;
