import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRemoveElement
 * @class IconSharpRemoveElement
 * @extends {AoflElement}
 */
class IconSharpRemoveElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRemoveElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-remove';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRemoveElement.is, IconSharpRemoveElement);

export default IconSharpRemoveElement;
