import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpContactsElement
 * @class IconSharpContactsElement
 * @extends {AoflElement}
 */
class IconSharpContactsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpContactsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-contacts';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpContactsElement.is, IconSharpContactsElement);

export default IconSharpContactsElement;
