import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalPostOfficeElement
 * @class IconSharpLocalPostOfficeElement
 * @extends {AoflElement}
 */
class IconSharpLocalPostOfficeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalPostOfficeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-post-office';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalPostOfficeElement.is, IconSharpLocalPostOfficeElement);

export default IconSharpLocalPostOfficeElement;
