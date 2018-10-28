import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpContactMailElement
 * @class IconSharpContactMailElement
 * @extends {AoflElement}
 */
class IconSharpContactMailElement extends AoflElement {
  /**
   * Creates an instance of IconSharpContactMailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-contact-mail';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpContactMailElement.is, IconSharpContactMailElement);

export default IconSharpContactMailElement;
