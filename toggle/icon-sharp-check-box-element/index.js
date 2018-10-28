import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCheckBoxElement
 * @class IconSharpCheckBoxElement
 * @extends {AoflElement}
 */
class IconSharpCheckBoxElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCheckBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-check-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCheckBoxElement.is, IconSharpCheckBoxElement);

export default IconSharpCheckBoxElement;
