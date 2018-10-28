import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpEditElement
 * @class IconSharpEditElement
 * @extends {AoflElement}
 */
class IconSharpEditElement extends AoflElement {
  /**
   * Creates an instance of IconSharpEditElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-edit';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpEditElement.is, IconSharpEditElement);

export default IconSharpEditElement;
