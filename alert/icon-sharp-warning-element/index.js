import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWarningElement
 * @class IconSharpWarningElement
 * @extends {AoflElement}
 */
class IconSharpWarningElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWarningElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-warning';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWarningElement.is, IconSharpWarningElement);

export default IconSharpWarningElement;
