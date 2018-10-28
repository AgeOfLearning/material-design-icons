import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMailElement
 * @class IconSharpMailElement
 * @extends {AoflElement}
 */
class IconSharpMailElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-mail';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMailElement.is, IconSharpMailElement);

export default IconSharpMailElement;
