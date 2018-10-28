import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpChildCareElement
 * @class IconSharpChildCareElement
 * @extends {AoflElement}
 */
class IconSharpChildCareElement extends AoflElement {
  /**
   * Creates an instance of IconSharpChildCareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-child-care';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpChildCareElement.is, IconSharpChildCareElement);

export default IconSharpChildCareElement;
