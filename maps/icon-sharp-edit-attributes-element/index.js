import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpEditAttributesElement
 * @class IconSharpEditAttributesElement
 * @extends {AoflElement}
 */
class IconSharpEditAttributesElement extends AoflElement {
  /**
   * Creates an instance of IconSharpEditAttributesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-edit-attributes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpEditAttributesElement.is, IconSharpEditAttributesElement);

export default IconSharpEditAttributesElement;
