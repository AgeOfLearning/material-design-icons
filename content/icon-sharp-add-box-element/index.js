import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAddBoxElement
 * @class IconSharpAddBoxElement
 * @extends {AoflElement}
 */
class IconSharpAddBoxElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAddBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-add-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAddBoxElement.is, IconSharpAddBoxElement);

export default IconSharpAddBoxElement;
