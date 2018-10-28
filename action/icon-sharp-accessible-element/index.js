import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAccessibleElement
 * @class IconSharpAccessibleElement
 * @extends {AoflElement}
 */
class IconSharpAccessibleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAccessibleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-accessible';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAccessibleElement.is, IconSharpAccessibleElement);

export default IconSharpAccessibleElement;
