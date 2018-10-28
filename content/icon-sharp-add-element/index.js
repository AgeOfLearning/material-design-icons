import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAddElement
 * @class IconSharpAddElement
 * @extends {AoflElement}
 */
class IconSharpAddElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAddElement.is, IconSharpAddElement);

export default IconSharpAddElement;
