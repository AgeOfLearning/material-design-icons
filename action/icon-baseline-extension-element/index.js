import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineExtensionElement
 * @class IconBaselineExtensionElement
 * @extends {AoflElement}
 */
class IconBaselineExtensionElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineExtensionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-extension';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineExtensionElement.is, IconBaselineExtensionElement);

export default IconBaselineExtensionElement;
